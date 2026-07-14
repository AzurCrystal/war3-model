use jpeg_decoder::{ColorTransform, Decoder, PixelFormat};
use std::cell::RefCell;
use std::io::Cursor;

const MAX_DECODE_BUFFER_BYTES: usize = 128 * 1024 * 1024;

struct DecodeResult {
    pixels: Box<[u8]>,
    width: u32,
    height: u32,
}

thread_local! {
    static LAST_RESULT: RefCell<Option<DecodeResult>> = const { RefCell::new(None) };
}

#[no_mangle]
pub extern "C" fn allocate(length: usize) -> *mut u8 {
    if length == 0 || length > MAX_DECODE_BUFFER_BYTES {
        return std::ptr::null_mut();
    }
    let mut bytes = Vec::new();
    if bytes.try_reserve_exact(length).is_err() {
        return std::ptr::null_mut();
    }
    bytes.resize(length, 0);
    let mut bytes = bytes.into_boxed_slice();
    let pointer = bytes.as_mut_ptr();
    std::mem::forget(bytes);
    pointer
}

#[no_mangle]
pub unsafe extern "C" fn deallocate(pointer: *mut u8, length: usize) {
    if pointer.is_null() || length == 0 || length > MAX_DECODE_BUFFER_BYTES {
        return;
    }
    drop(Box::from_raw(std::ptr::slice_from_raw_parts_mut(
        pointer, length,
    )));
}

#[no_mangle]
pub unsafe extern "C" fn decode_jpeg(pointer: *const u8, length: usize, force_opaque: u32) -> i32 {
    clear_result();
    if pointer.is_null() || length == 0 || length > MAX_DECODE_BUFFER_BYTES {
        return 1;
    }

    let input = std::slice::from_raw_parts(pointer, length);
    let mut decoder = Decoder::new(Cursor::new(input));
    decoder.set_color_transform(ColorTransform::None);
    decoder.set_max_decoding_buffer_size(MAX_DECODE_BUFFER_BYTES);
    let decoded = match decoder.decode() {
        Ok(decoded) => decoded,
        Err(_) => return 2,
    };
    let info = match decoder.info() {
        Some(info) => info,
        None => return 3,
    };
    let width = u32::from(info.width);
    let height = u32::from(info.height);
    let pixel_count = match (width as usize).checked_mul(height as usize) {
        Some(pixel_count) => pixel_count,
        None => return 3,
    };
    let pixels = match to_blp_rgba(
        decoded,
        info.pixel_format,
        pixel_count,
        width as usize,
        force_opaque != 0,
    ) {
        Some(pixels) => pixels,
        None => return 4,
    };

    LAST_RESULT.with(|result| {
        *result.borrow_mut() = Some(DecodeResult {
            pixels: pixels.into_boxed_slice(),
            width,
            height,
        });
    });
    0
}

#[no_mangle]
pub extern "C" fn result_pointer() -> *const u8 {
    LAST_RESULT.with(|result| {
        result
            .borrow()
            .as_ref()
            .map_or(std::ptr::null(), |decoded| decoded.pixels.as_ptr())
    })
}

#[no_mangle]
pub extern "C" fn result_length() -> usize {
    LAST_RESULT.with(|result| {
        result
            .borrow()
            .as_ref()
            .map_or(0, |decoded| decoded.pixels.len())
    })
}

#[no_mangle]
pub extern "C" fn result_width() -> u32 {
    LAST_RESULT.with(|result| result.borrow().as_ref().map_or(0, |decoded| decoded.width))
}

#[no_mangle]
pub extern "C" fn result_height() -> u32 {
    LAST_RESULT.with(|result| result.borrow().as_ref().map_or(0, |decoded| decoded.height))
}

#[no_mangle]
pub extern "C" fn clear_result() {
    LAST_RESULT.with(|result| result.borrow_mut().take());
}

fn to_blp_rgba(
    decoded: Vec<u8>,
    format: PixelFormat,
    pixel_count: usize,
    width: usize,
    force_opaque: bool,
) -> Option<Vec<u8>> {
    if width == 0 || pixel_count == 0 || pixel_count % width != 0 {
        return None;
    }
    let row_count = pixel_count.checked_div(width)?;
    let output_length = pixel_count.checked_mul(4)?;
    if output_length > MAX_DECODE_BUFFER_BYTES {
        return None;
    }
    let output_row_length = width.checked_mul(4)?;
    if row_count.checked_mul(output_row_length)? != output_length {
        return None;
    }

    match format {
        PixelFormat::CMYK32 => {
            if decoded.len() != output_length {
                return None;
            }
            let mut rgba = decoded;
            let mut converted_row = vec![0_u8; output_row_length];
            for source_row in rgba.chunks_exact_mut(output_row_length) {
                {
                    let (blue, source) = source_row.split_at(width);
                    let (green, source) = source.split_at(width);
                    let (red, alpha) = source.split_at(width);
                    for ((((pixel, blue), green), red), alpha) in converted_row
                        .chunks_exact_mut(4)
                        .zip(blue)
                        .zip(green)
                        .zip(red)
                        .zip(alpha)
                    {
                        pixel[0] = *red;
                        pixel[1] = *green;
                        pixel[2] = *blue;
                        pixel[3] = if force_opaque { 255 } else { *alpha };
                    }
                }
                source_row.copy_from_slice(&converted_row);
            }
            Some(rgba)
        }
        PixelFormat::RGB24 => {
            let input_length = pixel_count.checked_mul(3)?;
            let input_row_length = width.checked_mul(3)?;
            if decoded.len() != input_length
                || row_count.checked_mul(input_row_length)? != input_length
            {
                return None;
            }
            let mut rgba = vec![0_u8; output_length];
            for (source, target) in decoded
                .chunks_exact(input_row_length)
                .zip(rgba.chunks_exact_mut(output_row_length))
            {
                let (blue, source) = source.split_at(width);
                let (green, red) = source.split_at(width);
                for (((pixel, blue), green), red) in
                    target.chunks_exact_mut(4).zip(blue).zip(green).zip(red)
                {
                    pixel[0] = *red;
                    pixel[1] = *green;
                    pixel[2] = *blue;
                    pixel[3] = 255;
                }
            }
            Some(rgba)
        }
        PixelFormat::L8 => {
            if decoded.len() != pixel_count {
                return None;
            }
            let mut rgba = vec![0_u8; output_length];
            for (value, target) in decoded.into_iter().zip(rgba.chunks_exact_mut(4)) {
                target[0] = value;
                target[1] = value;
                target[2] = value;
                target[3] = 255;
            }
            Some(rgba)
        }
        PixelFormat::L16 => {
            if decoded.len() != pixel_count.checked_mul(2)? {
                return None;
            }
            let mut rgba = vec![0_u8; output_length];
            for (source, target) in decoded.chunks_exact(2).zip(rgba.chunks_exact_mut(4)) {
                let value = (u16::from_be_bytes([source[0], source[1]]) / 257) as u8;
                target[0] = value;
                target[1] = value;
                target[2] = value;
                target[3] = 255;
            }
            Some(rgba)
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn converts_four_component_rows_from_bgra_planes_to_rgba() {
        // jpeg-decoder returns ColorTransform::None data as one plane per
        // component within each row: B row, G row, R row, then A row.
        let decoded = vec![
            1, 2, 10, 20, 100, 110, 200, 210, // row 0
            3, 4, 30, 40, 120, 130, 220, 230, // row 1
        ];

        assert_eq!(
            to_blp_rgba(decoded, PixelFormat::CMYK32, 4, 2, false),
            Some(vec![
                100, 10, 1, 200, 110, 20, 2, 210, // row 0
                120, 30, 3, 220, 130, 40, 4, 230, // row 1
            ])
        );
    }

    #[test]
    fn forces_four_component_alpha_to_opaque_for_blp_without_alpha() {
        let decoded = vec![1, 2, 10, 20, 100, 110, 7, 9];

        assert_eq!(
            to_blp_rgba(decoded, PixelFormat::CMYK32, 2, 2, true),
            Some(vec![100, 10, 1, 255, 110, 20, 2, 255])
        );
    }

    #[test]
    fn converts_three_component_rows_from_bgr_planes_to_rgba() {
        let decoded = vec![
            1, 2, 10, 20, 100, 110, // row 0
            3, 4, 30, 40, 120, 130, // row 1
        ];

        assert_eq!(
            to_blp_rgba(decoded, PixelFormat::RGB24, 4, 2, false),
            Some(vec![
                100, 10, 1, 255, 110, 20, 2, 255, // row 0
                120, 30, 3, 255, 130, 40, 4, 255, // row 1
            ])
        );
    }

    #[test]
    fn expands_l8_to_opaque_rgba() {
        assert_eq!(
            to_blp_rgba(vec![0, 127, 255], PixelFormat::L8, 3, 3, false),
            Some(vec![0, 0, 0, 255, 127, 127, 127, 255, 255, 255, 255, 255,])
        );
    }

    #[test]
    fn expands_big_endian_l16_to_opaque_rgba() {
        assert_eq!(
            to_blp_rgba(
                vec![0x00, 0x00, 0x80, 0x80, 0xff, 0xff],
                PixelFormat::L16,
                3,
                3,
                false,
            ),
            Some(vec![0, 0, 0, 255, 128, 128, 128, 255, 255, 255, 255, 255,])
        );
    }

    #[test]
    fn rejects_zero_width_instead_of_panicking() {
        assert_eq!(
            to_blp_rgba(Vec::new(), PixelFormat::CMYK32, 0, 0, false),
            None
        );
    }

    #[test]
    fn rejects_dimensions_that_do_not_form_complete_rows() {
        assert_eq!(
            to_blp_rgba(vec![0; 12], PixelFormat::RGB24, 4, 3, false),
            None
        );
    }

    #[test]
    fn rejects_invalid_component_lengths() {
        assert_eq!(
            to_blp_rgba(vec![0; 7], PixelFormat::CMYK32, 2, 2, false),
            None
        );
        assert_eq!(
            to_blp_rgba(vec![0; 5], PixelFormat::RGB24, 2, 2, false),
            None
        );
        assert_eq!(to_blp_rgba(vec![0; 1], PixelFormat::L8, 2, 2, false), None);
        assert_eq!(to_blp_rgba(vec![0; 3], PixelFormat::L16, 2, 2, false), None);
    }

    #[test]
    fn rejects_output_length_overflow_without_allocating() {
        assert_eq!(
            to_blp_rgba(Vec::new(), PixelFormat::L8, usize::MAX, 1, false),
            None
        );
    }

    #[test]
    fn allocation_and_decode_reject_invalid_input_lengths() {
        assert!(allocate(0).is_null());
        assert!(allocate(MAX_DECODE_BUFFER_BYTES + 1).is_null());

        let dangling = std::ptr::NonNull::<u8>::dangling().as_ptr();
        assert_eq!(unsafe { decode_jpeg(dangling, 0, 0) }, 1);
        assert_eq!(
            unsafe { decode_jpeg(dangling, MAX_DECODE_BUFFER_BYTES + 1, 0) },
            1
        );
    }

    #[test]
    fn clear_result_is_idempotent() {
        LAST_RESULT.with(|result| {
            *result.borrow_mut() = Some(DecodeResult {
                pixels: vec![1, 2, 3, 4].into_boxed_slice(),
                width: 1,
                height: 1,
            });
        });

        clear_result();
        clear_result();

        assert!(result_pointer().is_null());
        assert_eq!(result_length(), 0);
        assert_eq!(result_width(), 0);
        assert_eq!(result_height(), 0);
    }

    #[test]
    fn failed_decode_releases_the_previous_result() {
        LAST_RESULT.with(|result| {
            *result.borrow_mut() = Some(DecodeResult {
                pixels: vec![1, 2, 3, 4].into_boxed_slice(),
                width: 1,
                height: 1,
            });
        });

        assert_eq!(unsafe { decode_jpeg(std::ptr::null(), 1, 0) }, 1);
        assert!(result_pointer().is_null());
        assert_eq!(result_length(), 0);
    }
}
