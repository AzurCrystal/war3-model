Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region model.ts
var model_exports = /* @__PURE__ */ __exportAll({
	CollisionShapeType: () => CollisionShapeType,
	FilterMode: () => FilterMode,
	GeosetAnimFlags: () => GeosetAnimFlags,
	LayerShading: () => LayerShading,
	LightType: () => LightType,
	LineType: () => LineType,
	MaterialRenderMode: () => MaterialRenderMode,
	NodeFlags: () => NodeFlags,
	NodeType: () => NodeType,
	ParticleEmitter2FilterMode: () => ParticleEmitter2FilterMode,
	ParticleEmitter2Flags: () => ParticleEmitter2Flags,
	ParticleEmitter2FramesFlags: () => ParticleEmitter2FramesFlags,
	ParticleEmitterFlags: () => ParticleEmitterFlags,
	ParticleEmitterPopcornFlags: () => ParticleEmitterPopcornFlags,
	TextureFlags: () => TextureFlags
});
var TextureFlags = /* @__PURE__ */ function(TextureFlags) {
	TextureFlags[TextureFlags["WrapWidth"] = 1] = "WrapWidth";
	TextureFlags[TextureFlags["WrapHeight"] = 2] = "WrapHeight";
	return TextureFlags;
}({});
var FilterMode = /* @__PURE__ */ function(FilterMode) {
	FilterMode[FilterMode["None"] = 0] = "None";
	FilterMode[FilterMode["Transparent"] = 1] = "Transparent";
	FilterMode[FilterMode["Blend"] = 2] = "Blend";
	FilterMode[FilterMode["Additive"] = 3] = "Additive";
	FilterMode[FilterMode["AddAlpha"] = 4] = "AddAlpha";
	FilterMode[FilterMode["Modulate"] = 5] = "Modulate";
	FilterMode[FilterMode["Modulate2x"] = 6] = "Modulate2x";
	return FilterMode;
}({});
var LineType = /* @__PURE__ */ function(LineType) {
	LineType[LineType["DontInterp"] = 0] = "DontInterp";
	LineType[LineType["Linear"] = 1] = "Linear";
	LineType[LineType["Hermite"] = 2] = "Hermite";
	LineType[LineType["Bezier"] = 3] = "Bezier";
	return LineType;
}({});
var LayerShading = /* @__PURE__ */ function(LayerShading) {
	LayerShading[LayerShading["Unshaded"] = 1] = "Unshaded";
	LayerShading[LayerShading["SphereEnvMap"] = 2] = "SphereEnvMap";
	LayerShading[LayerShading["TwoSided"] = 16] = "TwoSided";
	LayerShading[LayerShading["Unfogged"] = 32] = "Unfogged";
	LayerShading[LayerShading["NoDepthTest"] = 64] = "NoDepthTest";
	LayerShading[LayerShading["NoDepthSet"] = 128] = "NoDepthSet";
	return LayerShading;
}({});
var MaterialRenderMode = /* @__PURE__ */ function(MaterialRenderMode) {
	MaterialRenderMode[MaterialRenderMode["ConstantColor"] = 1] = "ConstantColor";
	MaterialRenderMode[MaterialRenderMode["SortPrimsFarZ"] = 16] = "SortPrimsFarZ";
	MaterialRenderMode[MaterialRenderMode["FullResolution"] = 32] = "FullResolution";
	return MaterialRenderMode;
}({});
var GeosetAnimFlags = /* @__PURE__ */ function(GeosetAnimFlags) {
	GeosetAnimFlags[GeosetAnimFlags["DropShadow"] = 1] = "DropShadow";
	GeosetAnimFlags[GeosetAnimFlags["Color"] = 2] = "Color";
	return GeosetAnimFlags;
}({});
var NodeFlags = /* @__PURE__ */ function(NodeFlags) {
	NodeFlags[NodeFlags["DontInheritTranslation"] = 1] = "DontInheritTranslation";
	NodeFlags[NodeFlags["DontInheritRotation"] = 2] = "DontInheritRotation";
	NodeFlags[NodeFlags["DontInheritScaling"] = 4] = "DontInheritScaling";
	NodeFlags[NodeFlags["Billboarded"] = 8] = "Billboarded";
	NodeFlags[NodeFlags["BillboardedLockX"] = 16] = "BillboardedLockX";
	NodeFlags[NodeFlags["BillboardedLockY"] = 32] = "BillboardedLockY";
	NodeFlags[NodeFlags["BillboardedLockZ"] = 64] = "BillboardedLockZ";
	NodeFlags[NodeFlags["CameraAnchored"] = 128] = "CameraAnchored";
	return NodeFlags;
}({});
var NodeType = /* @__PURE__ */ function(NodeType) {
	NodeType[NodeType["Helper"] = 0] = "Helper";
	NodeType[NodeType["Bone"] = 256] = "Bone";
	NodeType[NodeType["Light"] = 512] = "Light";
	NodeType[NodeType["EventObject"] = 1024] = "EventObject";
	NodeType[NodeType["Attachment"] = 2048] = "Attachment";
	NodeType[NodeType["ParticleEmitter"] = 4096] = "ParticleEmitter";
	NodeType[NodeType["CollisionShape"] = 8192] = "CollisionShape";
	NodeType[NodeType["RibbonEmitter"] = 16384] = "RibbonEmitter";
	return NodeType;
}({});
var CollisionShapeType = /* @__PURE__ */ function(CollisionShapeType) {
	CollisionShapeType[CollisionShapeType["Box"] = 0] = "Box";
	CollisionShapeType[CollisionShapeType["Sphere"] = 2] = "Sphere";
	return CollisionShapeType;
}({});
var ParticleEmitterFlags = /* @__PURE__ */ function(ParticleEmitterFlags) {
	ParticleEmitterFlags[ParticleEmitterFlags["EmitterUsesMDL"] = 32768] = "EmitterUsesMDL";
	ParticleEmitterFlags[ParticleEmitterFlags["EmitterUsesTGA"] = 65536] = "EmitterUsesTGA";
	return ParticleEmitterFlags;
}({});
var ParticleEmitter2Flags = /* @__PURE__ */ function(ParticleEmitter2Flags) {
	ParticleEmitter2Flags[ParticleEmitter2Flags["Unshaded"] = 32768] = "Unshaded";
	ParticleEmitter2Flags[ParticleEmitter2Flags["SortPrimsFarZ"] = 65536] = "SortPrimsFarZ";
	ParticleEmitter2Flags[ParticleEmitter2Flags["LineEmitter"] = 131072] = "LineEmitter";
	ParticleEmitter2Flags[ParticleEmitter2Flags["Unfogged"] = 262144] = "Unfogged";
	ParticleEmitter2Flags[ParticleEmitter2Flags["ModelSpace"] = 524288] = "ModelSpace";
	ParticleEmitter2Flags[ParticleEmitter2Flags["XYQuad"] = 1048576] = "XYQuad";
	return ParticleEmitter2Flags;
}({});
var ParticleEmitter2FilterMode = /* @__PURE__ */ function(ParticleEmitter2FilterMode) {
	ParticleEmitter2FilterMode[ParticleEmitter2FilterMode["Blend"] = 0] = "Blend";
	ParticleEmitter2FilterMode[ParticleEmitter2FilterMode["Additive"] = 1] = "Additive";
	ParticleEmitter2FilterMode[ParticleEmitter2FilterMode["Modulate"] = 2] = "Modulate";
	ParticleEmitter2FilterMode[ParticleEmitter2FilterMode["Modulate2x"] = 3] = "Modulate2x";
	ParticleEmitter2FilterMode[ParticleEmitter2FilterMode["AlphaKey"] = 4] = "AlphaKey";
	return ParticleEmitter2FilterMode;
}({});
var ParticleEmitter2FramesFlags = /* @__PURE__ */ function(ParticleEmitter2FramesFlags) {
	ParticleEmitter2FramesFlags[ParticleEmitter2FramesFlags["Head"] = 1] = "Head";
	ParticleEmitter2FramesFlags[ParticleEmitter2FramesFlags["Tail"] = 2] = "Tail";
	return ParticleEmitter2FramesFlags;
}({});
var LightType = /* @__PURE__ */ function(LightType) {
	LightType[LightType["Omnidirectional"] = 0] = "Omnidirectional";
	LightType[LightType["Directional"] = 1] = "Directional";
	LightType[LightType["Ambient"] = 2] = "Ambient";
	return LightType;
}({});
var ParticleEmitterPopcornFlags = /* @__PURE__ */ function(ParticleEmitterPopcornFlags) {
	ParticleEmitterPopcornFlags[ParticleEmitterPopcornFlags["Unshaded"] = 32768] = "Unshaded";
	ParticleEmitterPopcornFlags[ParticleEmitterPopcornFlags["SortPrimsFarZ"] = 65536] = "SortPrimsFarZ";
	ParticleEmitterPopcornFlags[ParticleEmitterPopcornFlags["Unfogged"] = 262144] = "Unfogged";
	return ParticleEmitterPopcornFlags;
}({});
//#endregion
//#region renderer/util.ts
function mat4fromRotationOrigin(out, rotation, origin) {
	const x = rotation[0], y = rotation[1], z = rotation[2], w = rotation[3], x2 = x + x, y2 = y + y, z2 = z + z, xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2, ox = origin[0], oy = origin[1], oz = origin[2];
	out[0] = 1 - (yy + zz);
	out[1] = xy + wz;
	out[2] = xz - wy;
	out[3] = 0;
	out[4] = xy - wz;
	out[5] = 1 - (xx + zz);
	out[6] = yz + wx;
	out[7] = 0;
	out[8] = xz + wy;
	out[9] = yz - wx;
	out[10] = 1 - (xx + yy);
	out[11] = 0;
	out[12] = ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	out[13] = oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	out[14] = oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	out[15] = 1;
	return out;
}
function rand(from, to) {
	return from + Math.random() * (to - from);
}
function degToRad(angle) {
	return angle * Math.PI / 180;
}
function getShader(gl, source, type) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(gl.getShaderInfoLog(shader));
		return null;
	}
	return shader;
}
function isWebGL2(gl) {
	return gl instanceof WebGL2RenderingContext;
}
var LAYER_TEXTURE_NAME_MAP = {
	"TextureID": 0,
	"NormalTextureID": 1,
	"ORMTextureID": 2,
	"EmissiveTextureID": 3,
	"TeamColorTextureID": 4,
	"ReflectionsTextureID": 5
};
var LAYER_TEXTURE_ID_MAP = [
	"TextureID",
	"NormalTextureID",
	"ORMTextureID",
	"EmissiveTextureID",
	"TeamColorTextureID",
	"ReflectionsTextureID"
];
//#endregion
//#region mdl/parse.ts
var State$1 = class {
	constructor(str) {
		this.str = str;
		this.pos = 0;
	}
	char() {
		if (this.pos >= this.str.length) throwError(this, "incorrect model data");
		return this.str[this.pos];
	}
};
function throwError(state, str = "") {
	throw new Error(`SyntaxError, near ${state.pos}` + (str ? ", " + str : ""));
}
function parseComment(state) {
	if (state.char() === "/" && state.str[state.pos + 1] === "/") {
		state.pos += 2;
		while (state.pos < state.str.length && state.str[++state.pos] !== "\n");
		++state.pos;
		return true;
	}
	return false;
}
var spaceRE = /\s/i;
function parseSpace(state) {
	while (state.pos < state.str.length && spaceRE.test(state.char())) ++state.pos;
}
var keywordFirstCharRE = /[a-z]/i;
var keywordOtherCharRE = /[a-z0-9]/i;
function parseKeyword(state) {
	if (!keywordFirstCharRE.test(state.char())) return null;
	let keyword = state.char();
	++state.pos;
	while (keywordOtherCharRE.test(state.char())) keyword += state.str[state.pos++];
	parseSpace(state);
	return keyword;
}
function parseSymbol(state, symbol) {
	if (state.char() === symbol) {
		++state.pos;
		parseSpace(state);
	}
}
function strictParseSymbol(state, symbol) {
	if (state.char() !== symbol) throwError(state, `extected ${symbol}`);
	++state.pos;
	parseSpace(state);
}
function parseString(state) {
	if (state.char() === "\"") {
		const start = ++state.pos;
		while (state.char() !== "\"") ++state.pos;
		++state.pos;
		const res = state.str.substring(start, state.pos - 1);
		parseSpace(state);
		return res;
	}
	return null;
}
var numberFirstCharRE = /[-0-9]/;
var numberOtherCharRE = /[-+.0-9e]/i;
function parseNumber(state) {
	if (numberFirstCharRE.test(state.char())) {
		const start = state.pos;
		++state.pos;
		while (numberOtherCharRE.test(state.char())) ++state.pos;
		const res = parseFloat(state.str.substring(start, state.pos));
		parseSpace(state);
		return res;
	}
	return null;
}
function parseArray(state, arr, pos) {
	if (state.char() !== "{") return null;
	if (!arr) {
		arr = [];
		pos = 0;
	}
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const num = parseNumber(state);
		if (num === null) throwError(state, "expected number");
		arr[pos++] = num;
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	return arr;
}
function parseArrayCounted(state, arr, pos) {
	if (state.char() !== "{") return 0;
	const start = pos;
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const num = parseNumber(state);
		if (num === null) throwError(state, "expected number");
		arr[pos++] = num;
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	return pos - start;
}
function parseArrayOrSingleItem(state, arr) {
	if (state.char() !== "{") {
		arr[0] = parseNumber(state);
		return arr;
	}
	let pos = 0;
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const num = parseNumber(state);
		if (num === null) throwError(state, "expected number");
		arr[pos++] = num;
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	return arr;
}
function parseObject(state) {
	let prefix = null;
	const obj = {};
	if (state.char() !== "{") {
		prefix = parseString(state);
		if (prefix === null) prefix = parseNumber(state);
		if (prefix === null) throwError(state, "expected string or number");
	}
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "Interval") obj[keyword] = parseArray(state, new Uint32Array(2), 0);
		else if (keyword === "MinimumExtent" || keyword === "MaximumExtent") obj[keyword] = parseArray(state, new Float32Array(3), 0);
		else {
			obj[keyword] = parseArray(state) || parseString(state);
			if (obj[keyword] === null) obj[keyword] = parseNumber(state);
		}
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	return [prefix, obj];
}
function parseVersion$1(state, model) {
	const [_unused, obj] = parseObject(state);
	if (obj.FormatVersion) model.Version = obj.FormatVersion;
}
function parseModelInfo$1(state, model) {
	const [name, obj] = parseObject(state);
	model.Info = obj;
	model.Info.Name = name;
}
function parseSequences$1(state, model) {
	parseNumber(state);
	strictParseSymbol(state, "{");
	const res = [];
	while (state.char() !== "}") {
		parseKeyword(state);
		const [name, obj] = parseObject(state);
		obj.Name = name;
		obj.NonLooping = "NonLooping" in obj;
		obj.MoveSpeed = obj.MoveSpeed || 0;
		obj.Rarity = obj.Rarity || 0;
		res.push(obj);
	}
	strictParseSymbol(state, "}");
	model.Sequences = res;
}
function parseTextures$1(state, model) {
	const res = [];
	parseNumber(state);
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		parseKeyword(state);
		const [_unused, obj] = parseObject(state);
		obj.Flags = 0;
		if ("WrapWidth" in obj) {
			obj.Flags += TextureFlags.WrapWidth;
			delete obj.WrapWidth;
		}
		if ("WrapHeight" in obj) {
			obj.Flags += TextureFlags.WrapHeight;
			delete obj.WrapHeight;
		}
		res.push(obj);
	}
	strictParseSymbol(state, "}");
	model.Textures = res;
}
var AnimVectorType$2 = /* @__PURE__ */ function(AnimVectorType) {
	AnimVectorType[AnimVectorType["INT1"] = 0] = "INT1";
	AnimVectorType[AnimVectorType["FLOAT1"] = 1] = "FLOAT1";
	AnimVectorType[AnimVectorType["FLOAT3"] = 2] = "FLOAT3";
	AnimVectorType[AnimVectorType["FLOAT4"] = 3] = "FLOAT4";
	return AnimVectorType;
}(AnimVectorType$2 || {});
var animVectorSize$2 = {
	[AnimVectorType$2.INT1]: 1,
	[AnimVectorType$2.FLOAT1]: 1,
	[AnimVectorType$2.FLOAT3]: 3,
	[AnimVectorType$2.FLOAT4]: 4
};
function parseAnimKeyframe(state, frame, type, lineType) {
	const res = {
		Frame: frame,
		Vector: null
	};
	const Vector = type === AnimVectorType$2.INT1 ? Int32Array : Float32Array;
	const itemCount = animVectorSize$2[type];
	res.Vector = parseArrayOrSingleItem(state, new Vector(itemCount));
	strictParseSymbol(state, ",");
	if (lineType === LineType.Hermite || lineType === LineType.Bezier) {
		parseKeyword(state);
		res.InTan = parseArrayOrSingleItem(state, new Vector(itemCount));
		strictParseSymbol(state, ",");
		parseKeyword(state);
		res.OutTan = parseArrayOrSingleItem(state, new Vector(itemCount));
		strictParseSymbol(state, ",");
	}
	return res;
}
function parseAnimVector(state, type) {
	const animVector = {
		LineType: LineType.DontInterp,
		GlobalSeqId: null,
		Keys: []
	};
	parseNumber(state);
	strictParseSymbol(state, "{");
	const lineType = parseKeyword(state);
	if (lineType === "DontInterp" || lineType === "Linear" || lineType === "Hermite" || lineType === "Bezier") animVector.LineType = LineType[lineType];
	strictParseSymbol(state, ",");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (keyword === "GlobalSeqId") {
			animVector[keyword] = parseNumber(state);
			strictParseSymbol(state, ",");
		} else {
			const frame = parseNumber(state);
			if (frame === null) throwError(state, "expected frame number or GlobalSeqId");
			strictParseSymbol(state, ":");
			animVector.Keys.push(parseAnimKeyframe(state, frame, type, animVector.LineType));
		}
	}
	strictParseSymbol(state, "}");
	return animVector;
}
function parseLayer(state, model) {
	const res = {
		Alpha: null,
		TVertexAnimId: null,
		Shading: 0,
		CoordId: 0
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (!isStatic && (keyword === "TextureID" || model.Version >= 1100 && keyword in LAYER_TEXTURE_NAME_MAP)) res[keyword] = parseAnimVector(state, AnimVectorType$2.INT1);
		else if (!isStatic && keyword === "Alpha") res[keyword] = parseAnimVector(state, AnimVectorType$2.FLOAT1);
		else if (keyword === "Unshaded" || keyword === "SphereEnvMap" || keyword === "TwoSided" || keyword === "Unfogged" || keyword === "NoDepthTest" || keyword === "NoDepthSet") res.Shading |= LayerShading[keyword];
		else if (keyword === "FilterMode") {
			const val = parseKeyword(state);
			if (val === "None" || val === "Transparent" || val === "Blend" || val === "Additive" || val === "AddAlpha" || val === "Modulate" || val === "Modulate2x") res.FilterMode = FilterMode[val];
		} else if (keyword === "TVertexAnimId") res.TVertexAnimId = parseNumber(state);
		else if (model.Version >= 900 && keyword === "EmissiveGain") if (isStatic) res[keyword] = parseNumber(state);
		else res[keyword] = parseAnimVector(state, AnimVectorType$2.FLOAT1);
		else if (model.Version >= 1e3 && keyword === "FresnelColor") if (isStatic) res[keyword] = parseArray(state, new Float32Array(3), 0);
		else res[keyword] = parseAnimVector(state, AnimVectorType$2.FLOAT3);
		else if (model.Version >= 1e3 && (keyword === "FresnelOpacity" || keyword === "FresnelTeamColor")) if (isStatic) res[keyword] = parseNumber(state);
		else res[keyword] = parseAnimVector(state, AnimVectorType$2.FLOAT1);
		else {
			let val = parseNumber(state);
			if (val === null) val = parseKeyword(state);
			res[keyword] = val;
		}
		parseSymbol(state, ",");
		parseComment(state);
		parseSpace(state);
	}
	strictParseSymbol(state, "}");
	return res;
}
function parseMaterials$1(state, model) {
	const res = [];
	parseNumber(state);
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const obj = {
			RenderMode: 0,
			Layers: []
		};
		parseKeyword(state);
		strictParseSymbol(state, "{");
		while (state.char() !== "}") {
			const keyword = parseKeyword(state);
			if (!keyword) throwError(state);
			if (keyword === "Layer") obj.Layers.push(parseLayer(state, model));
			else if (keyword === "PriorityPlane" || keyword === "RenderMode") obj[keyword] = parseNumber(state);
			else if (keyword === "ConstantColor" || keyword === "SortPrimsFarZ" || keyword === "FullResolution") obj.RenderMode |= MaterialRenderMode[keyword];
			else if (model.Version >= 900 && model.Version <= 1100 && keyword === "Shader") obj[keyword] = parseString(state);
			else throw new Error("Unknown material property " + keyword);
			parseSymbol(state, ",");
		}
		strictParseSymbol(state, "}");
		res.push(obj);
	}
	strictParseSymbol(state, "}");
	model.Materials = res;
}
var GeosetPartType = /* @__PURE__ */ function(GeosetPartType) {
	GeosetPartType[GeosetPartType["INT"] = 0] = "INT";
	GeosetPartType[GeosetPartType["FLOAT"] = 1] = "FLOAT";
	return GeosetPartType;
}(GeosetPartType || {});
function parseGeosetPart(state, countPerObj, type) {
	const count = parseNumber(state);
	const arr = new (type === GeosetPartType.FLOAT ? Float32Array : Uint8Array)(count * countPerObj);
	strictParseSymbol(state, "{");
	for (let index = 0; index < count; ++index) {
		parseArray(state, arr, index * countPerObj);
		strictParseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	return arr;
}
function parseGeoset(state, model) {
	const res = {
		Vertices: null,
		Normals: null,
		TVertices: [],
		VertexGroup: new Uint8Array(0),
		Faces: null,
		Groups: null,
		TotalGroupsCount: null,
		MinimumExtent: null,
		MaximumExtent: null,
		BoundsRadius: 0,
		Anims: [],
		MaterialID: null,
		SelectionGroup: null,
		Unselectable: false
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "Vertices" || keyword === "Normals" || keyword === "TVertices") {
			let countPerObj = 3;
			if (keyword === "TVertices") countPerObj = 2;
			const arr = parseGeosetPart(state, countPerObj, GeosetPartType.FLOAT);
			if (keyword === "TVertices") res.TVertices.push(arr);
			else res[keyword] = arr;
		} else if (keyword === "VertexGroup") {
			res[keyword] = new Uint8Array(res.Vertices.length / 3);
			parseArray(state, res[keyword], 0);
		} else if (keyword === "Faces") {
			const groupCount = parseNumber(state);
			const indexCount = parseNumber(state);
			let pos = 0;
			res.Faces = new Uint16Array(indexCount);
			strictParseSymbol(state, "{");
			if (parseKeyword(state) !== "Triangles") throwError(state, "unexpected faces type");
			strictParseSymbol(state, "{");
			for (let g = 0; g < groupCount; ++g) {
				const count = parseArrayCounted(state, res.Faces, pos);
				if (!count) throwError(state, "expected array");
				pos += count;
				parseSymbol(state, ",");
			}
			if (pos !== indexCount || indexCount % 3 !== 0) throwError(state, "mismatched faces array");
			strictParseSymbol(state, "}");
			strictParseSymbol(state, "}");
		} else if (keyword === "Groups") {
			const groups = [];
			parseNumber(state);
			res.TotalGroupsCount = parseNumber(state);
			strictParseSymbol(state, "{");
			while (state.char() !== "}") {
				parseKeyword(state);
				groups.push(parseArray(state));
				parseSymbol(state, ",");
			}
			strictParseSymbol(state, "}");
			res.Groups = groups;
		} else if (keyword === "MinimumExtent" || keyword === "MaximumExtent") {
			res[keyword] = parseArray(state, new Float32Array(3), 0);
			strictParseSymbol(state, ",");
		} else if (keyword === "BoundsRadius" || keyword === "MaterialID" || keyword === "SelectionGroup") {
			res[keyword] = parseNumber(state);
			strictParseSymbol(state, ",");
		} else if (keyword === "Anim") {
			const [_unused, obj] = parseObject(state);
			if (obj.Alpha === void 0) obj.Alpha = 1;
			res.Anims.push(obj);
		} else if (keyword === "Unselectable") {
			res.Unselectable = true;
			strictParseSymbol(state, ",");
		} else if (model.Version >= 900) {
			if (keyword === "LevelOfDetail") {
				res.LevelOfDetail = parseNumber(state);
				strictParseSymbol(state, ",");
			} else if (keyword === "Name") {
				res.Name = parseString(state);
				strictParseSymbol(state, ",");
			} else if (keyword === "Tangents") res.Tangents = parseGeosetPart(state, 4, GeosetPartType.FLOAT);
			else if (keyword === "SkinWeights") res.SkinWeights = parseGeosetPart(state, 8, GeosetPartType.INT);
		}
	}
	strictParseSymbol(state, "}");
	model.Geosets.push(res);
}
function parseGeosetAnim(state, model) {
	const res = {
		GeosetId: -1,
		Alpha: 1,
		Color: null,
		Flags: 0
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (keyword === "Alpha") if (isStatic) res.Alpha = parseNumber(state);
		else res.Alpha = parseAnimVector(state, AnimVectorType$2.FLOAT1);
		else if (keyword === "Color") if (isStatic) {
			res.Color = parseArray(state, new Float32Array(3), 0);
			res.Color.reverse();
		} else {
			res.Color = parseAnimVector(state, AnimVectorType$2.FLOAT3);
			for (const key of res.Color.Keys) {
				key.Vector.reverse();
				if (key.InTan) {
					key.InTan.reverse();
					key.OutTan.reverse();
				}
			}
		}
		else if (keyword === "DropShadow") res.Flags |= GeosetAnimFlags[keyword];
		else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.GeosetAnims.push(res);
}
function parseNode$1(state, type, model) {
	const node = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		Flags: NodeType[type]
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling" || keyword === "Visibility") {
			let vectorType = AnimVectorType$2.FLOAT3;
			if (keyword === "Rotation") vectorType = AnimVectorType$2.FLOAT4;
			else if (keyword === "Visibility") vectorType = AnimVectorType$2.FLOAT1;
			node[keyword] = parseAnimVector(state, vectorType);
		} else if (keyword === "BillboardedLockZ" || keyword === "BillboardedLockY" || keyword === "BillboardedLockX" || keyword === "Billboarded" || keyword === "CameraAnchored") node.Flags |= NodeFlags[keyword];
		else if (keyword === "DontInherit") {
			strictParseSymbol(state, "{");
			const val = parseKeyword(state);
			if (val === "Translation") node.Flags |= NodeFlags.DontInheritTranslation;
			else if (val === "Rotation") node.Flags |= NodeFlags.DontInheritRotation;
			else if (val === "Scaling") node.Flags |= NodeFlags.DontInheritScaling;
			strictParseSymbol(state, "}");
		} else if (keyword === "Path") node[keyword] = parseString(state);
		else {
			let val = parseKeyword(state) || parseNumber(state);
			if (keyword === "GeosetId" && val === "Multiple" || keyword === "GeosetAnimId" && val === "None") val = null;
			node[keyword] = val;
		}
		parseSymbol(state, ",");
		parseComment(state);
		parseSpace(state);
	}
	strictParseSymbol(state, "}");
	model.Nodes[node.ObjectId] = node;
	return node;
}
function parseBone(state, model) {
	const node = parseNode$1(state, "Bone", model);
	model.Bones.push(node);
}
function parseHelper(state, model) {
	const node = parseNode$1(state, "Helper", model);
	model.Helpers.push(node);
}
function parseAttachment(state, model) {
	const node = parseNode$1(state, "Attachment", model);
	model.Attachments.push(node);
}
function parsePivotPoints$1(state, model) {
	const count = parseNumber(state);
	const res = [];
	strictParseSymbol(state, "{");
	for (let i = 0; i < count; ++i) {
		res.push(parseArray(state, new Float32Array(3), 0));
		strictParseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.PivotPoints = res;
}
function parseEventObject(state, model) {
	const res = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		EventTrack: null,
		Flags: NodeType.EventObject
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "EventTrack") {
			const count = parseNumber(state);
			res.EventTrack = parseArray(state, new Uint32Array(count), 0);
		} else if (keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling") res[keyword] = parseAnimVector(state, keyword === "Rotation" ? AnimVectorType$2.FLOAT4 : AnimVectorType$2.FLOAT3);
		else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.EventObjects.push(res);
	model.Nodes[res.ObjectId] = res;
}
function parseCollisionShape(state, model) {
	const res = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		Shape: CollisionShapeType.Box,
		Vertices: null,
		Flags: NodeType.CollisionShape
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "Sphere") res.Shape = CollisionShapeType.Sphere;
		else if (keyword === "Box") res.Shape = CollisionShapeType.Box;
		else if (keyword === "Vertices") {
			const count = parseNumber(state);
			const vertices = new Float32Array(count * 3);
			strictParseSymbol(state, "{");
			for (let i = 0; i < count; ++i) {
				parseArray(state, vertices, i * 3);
				strictParseSymbol(state, ",");
			}
			strictParseSymbol(state, "}");
			res.Vertices = vertices;
		} else if (keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling") res[keyword] = parseAnimVector(state, keyword === "Rotation" ? AnimVectorType$2.FLOAT4 : AnimVectorType$2.FLOAT3);
		else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.CollisionShapes.push(res);
	model.Nodes[res.ObjectId] = res;
}
function parseGlobalSequences$1(state, model) {
	const res = [];
	const count = parseNumber(state);
	strictParseSymbol(state, "{");
	for (let i = 0; i < count; ++i) {
		if (parseKeyword(state) === "Duration") res.push(parseNumber(state));
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.GlobalSequences = res;
}
function parseUnknownBlock(state) {
	let opened;
	while (state.char() !== void 0 && state.char() !== "{") ++state.pos;
	opened = 1;
	++state.pos;
	while (state.char() !== void 0 && opened > 0) {
		if (state.char() === "{") ++opened;
		else if (state.char() === "}") --opened;
		++state.pos;
	}
	parseSpace(state);
}
function parseParticleEmitter(state, model) {
	const res = {
		ObjectId: null,
		Parent: null,
		Name: null,
		Flags: 0
	};
	res.Name = parseString(state);
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (keyword === "ObjectId" || keyword === "Parent") res[keyword] = parseNumber(state);
		else if (keyword === "EmitterUsesMDL" || keyword === "EmitterUsesTGA") res.Flags |= ParticleEmitterFlags[keyword];
		else if (!isStatic && (keyword === "Visibility" || keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling" || keyword === "EmissionRate" || keyword === "Gravity" || keyword === "Longitude" || keyword === "Latitude")) {
			let type = AnimVectorType$2.FLOAT3;
			if (keyword === "Visibility" || keyword === "EmissionRate" || keyword === "Gravity" || keyword === "Longitude" || keyword === "Latitude") type = AnimVectorType$2.FLOAT1;
			else if (keyword === "Rotation") type = AnimVectorType$2.FLOAT4;
			res[keyword] = parseAnimVector(state, type);
		} else if (keyword === "Particle") {
			strictParseSymbol(state, "{");
			while (state.char() !== "}") {
				let keyword2 = parseKeyword(state);
				let isStatic2 = false;
				if (keyword2 === "static") {
					isStatic2 = true;
					keyword2 = parseKeyword(state);
				}
				if (!isStatic2 && (keyword2 === "LifeSpan" || keyword2 === "InitVelocity")) res[keyword2] = parseAnimVector(state, AnimVectorType$2.FLOAT1);
				else if (keyword2 === "LifeSpan" || keyword2 === "InitVelocity") res[keyword2] = parseNumber(state);
				else if (keyword2 === "Path") res.Path = parseString(state);
				parseSymbol(state, ",");
			}
			strictParseSymbol(state, "}");
		} else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.ParticleEmitters.push(res);
}
function parseParticleEmitter2(state, model) {
	const res = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		Flags: NodeType.ParticleEmitter,
		FrameFlags: 0
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (!isStatic && (keyword === "Speed" || keyword === "Latitude" || keyword === "Visibility" || keyword === "EmissionRate" || keyword === "Width" || keyword === "Length" || keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling" || keyword === "Gravity" || keyword === "Variation")) {
			let type = AnimVectorType$2.FLOAT3;
			switch (keyword) {
				case "Rotation":
					type = AnimVectorType$2.FLOAT4;
					break;
				case "Speed":
				case "Latitude":
				case "Visibility":
				case "EmissionRate":
				case "Width":
				case "Length":
				case "Gravity":
				case "Variation":
					type = AnimVectorType$2.FLOAT1;
					break;
			}
			res[keyword] = parseAnimVector(state, type);
		} else if (keyword === "Variation" || keyword === "Gravity" || keyword === "ReplaceableId" || keyword === "PriorityPlane") res[keyword] = parseNumber(state);
		else if (keyword === "SortPrimsFarZ" || keyword === "Unshaded" || keyword === "LineEmitter" || keyword === "Unfogged" || keyword === "ModelSpace" || keyword === "XYQuad") res.Flags |= ParticleEmitter2Flags[keyword];
		else if (keyword === "Both") res.FrameFlags |= ParticleEmitter2FramesFlags.Head | ParticleEmitter2FramesFlags.Tail;
		else if (keyword === "Head" || keyword === "Tail") res.FrameFlags |= ParticleEmitter2FramesFlags[keyword];
		else if (keyword === "Squirt") res[keyword] = true;
		else if (keyword === "DontInherit") {
			strictParseSymbol(state, "{");
			const val = parseKeyword(state);
			if (val === "Translation") res.Flags |= NodeFlags.DontInheritTranslation;
			else if (val === "Rotation") res.Flags |= NodeFlags.DontInheritRotation;
			else if (val === "Scaling") res.Flags |= NodeFlags.DontInheritScaling;
			strictParseSymbol(state, "}");
		} else if (keyword === "SegmentColor") {
			const colors = [];
			strictParseSymbol(state, "{");
			while (state.char() !== "}") {
				parseKeyword(state);
				const colorArr = new Float32Array(3);
				parseArray(state, colorArr, 0);
				const temp = colorArr[0];
				colorArr[0] = colorArr[2];
				colorArr[2] = temp;
				colors.push(colorArr);
				parseSymbol(state, ",");
			}
			strictParseSymbol(state, "}");
			res.SegmentColor = colors;
		} else if (keyword === "Alpha") {
			res.Alpha = new Uint8Array(3);
			parseArray(state, res.Alpha, 0);
		} else if (keyword === "ParticleScaling") {
			res[keyword] = new Float32Array(3);
			parseArray(state, res[keyword], 0);
		} else if (keyword === "LifeSpanUVAnim" || keyword === "DecayUVAnim" || keyword === "TailUVAnim" || keyword === "TailDecayUVAnim") {
			res[keyword] = new Uint32Array(3);
			parseArray(state, res[keyword], 0);
		} else if (keyword === "Transparent" || keyword === "Blend" || keyword === "Additive" || keyword === "AlphaKey" || keyword === "Modulate" || keyword === "Modulate2x") res.FilterMode = ParticleEmitter2FilterMode[keyword];
		else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.ParticleEmitters2.push(res);
	model.Nodes[res.ObjectId] = res;
}
function parseCamera(state, model) {
	const res = {
		Name: null,
		Position: null,
		FieldOfView: 0,
		NearClip: 0,
		FarClip: 0,
		TargetPosition: null
	};
	res.Name = parseString(state);
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "Position") {
			res.Position = new Float32Array(3);
			parseArray(state, res.Position, 0);
		} else if (keyword === "FieldOfView" || keyword === "NearClip" || keyword === "FarClip") res[keyword] = parseNumber(state);
		else if (keyword === "Target") {
			strictParseSymbol(state, "{");
			while (state.char() !== "}") {
				const keyword2 = parseKeyword(state);
				if (keyword2 === "Position") {
					res.TargetPosition = new Float32Array(3);
					parseArray(state, res.TargetPosition, 0);
				} else if (keyword2 === "Translation") res.TargetTranslation = parseAnimVector(state, AnimVectorType$2.FLOAT3);
				parseSymbol(state, ",");
			}
			strictParseSymbol(state, "}");
		} else if (keyword === "Translation" || keyword === "Rotation") res[keyword] = parseAnimVector(state, keyword === "Rotation" ? AnimVectorType$2.FLOAT1 : AnimVectorType$2.FLOAT3);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.Cameras.push(res);
}
function parseLight(state, model) {
	const res = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		Flags: NodeType.Light,
		LightType: 0
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (!isStatic && (keyword === "Visibility" || keyword === "Color" || keyword === "Intensity" || keyword === "AmbIntensity" || keyword === "AmbColor" || keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling" || keyword === "AttenuationStart" || keyword === "AttenuationEnd")) {
			let type = AnimVectorType$2.FLOAT3;
			switch (keyword) {
				case "Rotation":
					type = AnimVectorType$2.FLOAT4;
					break;
				case "Visibility":
				case "Intensity":
				case "AmbIntensity":
				case "AttenuationStart":
				case "AttenuationEnd":
					type = AnimVectorType$2.FLOAT1;
					break;
			}
			res[keyword] = parseAnimVector(state, type);
			if (keyword === "Color" || keyword === "AmbColor") for (const key of res[keyword].Keys) {
				key.Vector.reverse();
				if (key.InTan) {
					key.InTan.reverse();
					key.OutTan.reverse();
				}
			}
		} else if (keyword === "Omnidirectional" || keyword === "Directional" || keyword === "Ambient") res.LightType = LightType[keyword];
		else if (keyword === "Color" || keyword === "AmbColor") {
			const color = new Float32Array(3);
			parseArray(state, color, 0);
			const temp = color[0];
			color[0] = color[2];
			color[2] = temp;
			res[keyword] = color;
		} else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.Lights.push(res);
	model.Nodes[res.ObjectId] = res;
}
function parseTextureAnims$1(state, model) {
	const res = [];
	parseNumber(state);
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const obj = {};
		parseKeyword(state);
		strictParseSymbol(state, "{");
		while (state.char() !== "}") {
			const keyword = parseKeyword(state);
			if (!keyword) throwError(state);
			if (keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling") obj[keyword] = parseAnimVector(state, keyword === "Rotation" ? AnimVectorType$2.FLOAT4 : AnimVectorType$2.FLOAT3);
			else throw new Error("Unknown texture anim property " + keyword);
			parseSymbol(state, ",");
		}
		strictParseSymbol(state, "}");
		res.push(obj);
	}
	strictParseSymbol(state, "}");
	model.TextureAnims = res;
}
function parseRibbonEmitter(state, model) {
	const res = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		Flags: NodeType.RibbonEmitter,
		HeightAbove: null,
		HeightBelow: null,
		Alpha: null,
		Color: null,
		LifeSpan: null,
		TextureSlot: null,
		EmissionRate: null,
		Rows: null,
		Columns: null,
		MaterialID: 0,
		Gravity: null,
		Visibility: null
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (!isStatic && (keyword === "Visibility" || keyword === "HeightAbove" || keyword === "HeightBelow" || keyword === "Translation" || keyword === "Rotation" || keyword === "Scaling" || keyword === "Alpha" || keyword === "TextureSlot")) {
			let type = AnimVectorType$2.FLOAT3;
			switch (keyword) {
				case "Rotation":
					type = AnimVectorType$2.FLOAT4;
					break;
				case "Visibility":
				case "HeightAbove":
				case "HeightBelow":
				case "Alpha":
					type = AnimVectorType$2.FLOAT1;
					break;
				case "TextureSlot":
					type = AnimVectorType$2.INT1;
					break;
			}
			res[keyword] = parseAnimVector(state, type);
		} else if (keyword === "Color") {
			const color = new Float32Array(3);
			parseArray(state, color, 0);
			const temp = color[0];
			color[0] = color[2];
			color[2] = temp;
			res[keyword] = color;
		} else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.RibbonEmitters.push(res);
	model.Nodes[res.ObjectId] = res;
}
function parseFaceFX$1(state, model) {
	if (model.Version < 900) throwError(state, "Unexpected model chunk FaceFX");
	const res = {
		Name: parseString(state),
		Path: ""
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		const keyword = parseKeyword(state);
		if (!keyword) throwError(state);
		if (keyword === "Path") res.Path = parseString(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.FaceFX = model.FaceFX || [];
	model.FaceFX.push(res);
}
function parseBindPose$1(state, model) {
	if (model.Version < 900) throwError(state, "Unexpected model chunk BindPose");
	const res = { Matrices: [] };
	strictParseSymbol(state, "{");
	parseKeyword(state);
	const count = parseNumber(state);
	strictParseSymbol(state, "{");
	for (let i = 0; i < count; ++i) {
		const matrix = new Float32Array(12);
		parseArray(state, matrix, 0);
		parseSymbol(state, ",");
		res.Matrices.push(matrix);
	}
	strictParseSymbol(state, "}");
	strictParseSymbol(state, "}");
	model.BindPoses = model.BindPoses || [];
	model.BindPoses.push(res);
}
function parseParticleEmitterPopcorn$1(state, model) {
	if (model.Version < 900) throwError(state, "Unexpected model chunk ParticleEmitterPopcorn");
	const res = {
		Name: parseString(state),
		ObjectId: null,
		Parent: null,
		PivotPoint: null,
		Flags: NodeType.ParticleEmitter
	};
	strictParseSymbol(state, "{");
	while (state.char() !== "}") {
		let keyword = parseKeyword(state);
		let isStatic = false;
		if (!keyword) throwError(state);
		if (keyword === "static") {
			isStatic = true;
			keyword = parseKeyword(state);
		}
		if (!isStatic && (keyword === "LifeSpan" || keyword === "EmissionRate" || keyword === "Speed" || keyword === "Color" || keyword === "Alpha" || keyword === "Visibility" || keyword === "Rotation" || keyword === "Scaling" || keyword === "Translation")) {
			let type = AnimVectorType$2.FLOAT3;
			switch (keyword) {
				case "LifeSpan":
				case "EmissionRate":
				case "Speed":
				case "Alpha":
				case "Visibility":
					type = AnimVectorType$2.FLOAT1;
					break;
			}
			res[keyword] = parseAnimVector(state, type);
		} else if (keyword === "LifeSpan" || keyword === "EmissionRate" || keyword === "Speed" || keyword === "Alpha") res[keyword] = parseNumber(state);
		else if (keyword === "Color") res[keyword] = parseArray(state, new Float32Array(3), 0);
		else if (keyword === "ReplaceableId") res[keyword] = parseNumber(state);
		else if (keyword === "Path" || keyword === "AnimVisibilityGuide") res[keyword] = parseString(state);
		else if (keyword === "Unshaded" || keyword === "SortPrimsFarZ" || keyword === "Unfogged") {
			if (keyword === "Unshaded") res.Flags |= ParticleEmitterPopcornFlags.Unshaded;
			else if (keyword === "Unfogged") res.Flags |= ParticleEmitterPopcornFlags.Unfogged;
			else if (keyword === "SortPrimsFarZ") res.Flags |= ParticleEmitterPopcornFlags.SortPrimsFarZ;
		} else res[keyword] = parseNumber(state);
		parseSymbol(state, ",");
	}
	strictParseSymbol(state, "}");
	model.ParticleEmitterPopcorns = model.ParticleEmitterPopcorns || [];
	model.ParticleEmitterPopcorns.push(res);
	model.Nodes[res.ObjectId] = res;
}
var parsers$1 = {
	Version: parseVersion$1,
	Model: parseModelInfo$1,
	Sequences: parseSequences$1,
	Textures: parseTextures$1,
	Materials: parseMaterials$1,
	Geoset: parseGeoset,
	GeosetAnim: parseGeosetAnim,
	Bone: parseBone,
	Helper: parseHelper,
	Attachment: parseAttachment,
	PivotPoints: parsePivotPoints$1,
	EventObject: parseEventObject,
	CollisionShape: parseCollisionShape,
	GlobalSequences: parseGlobalSequences$1,
	ParticleEmitter: parseParticleEmitter,
	ParticleEmitter2: parseParticleEmitter2,
	Camera: parseCamera,
	Light: parseLight,
	TextureAnims: parseTextureAnims$1,
	RibbonEmitter: parseRibbonEmitter,
	FaceFX: parseFaceFX$1,
	BindPose: parseBindPose$1,
	ParticleEmitterPopcorn: parseParticleEmitterPopcorn$1
};
function parse(str) {
	const state = new State$1(str);
	const model = {
		Version: 800,
		Info: {
			Name: "",
			MinimumExtent: null,
			MaximumExtent: null,
			BoundsRadius: 0,
			BlendTime: 150
		},
		Sequences: [],
		GlobalSequences: [],
		Textures: [],
		Materials: [],
		TextureAnims: [],
		Geosets: [],
		GeosetAnims: [],
		Bones: [],
		Helpers: [],
		Attachments: [],
		EventObjects: [],
		ParticleEmitters: [],
		ParticleEmitters2: [],
		Cameras: [],
		Lights: [],
		RibbonEmitters: [],
		CollisionShapes: [],
		PivotPoints: [],
		Nodes: []
	};
	while (state.pos < state.str.length) {
		while (parseComment(state));
		const keyword = parseKeyword(state);
		if (keyword) if (keyword in parsers$1) parsers$1[keyword](state, model);
		else parseUnknownBlock(state);
		else break;
	}
	for (let i = 0; i < model.Nodes.length; ++i) if (model.PivotPoints[i]) model.Nodes[i].PivotPoint = model.PivotPoints[i];
	return model;
}
//#endregion
//#region mdx/parse.ts
var BIG_ENDIAN$1 = true;
var NONE$1 = -1;
var AnimVectorType$1 = /* @__PURE__ */ function(AnimVectorType) {
	AnimVectorType[AnimVectorType["INT1"] = 0] = "INT1";
	AnimVectorType[AnimVectorType["FLOAT1"] = 1] = "FLOAT1";
	AnimVectorType[AnimVectorType["FLOAT3"] = 2] = "FLOAT3";
	AnimVectorType[AnimVectorType["FLOAT4"] = 3] = "FLOAT4";
	return AnimVectorType;
}(AnimVectorType$1 || {});
var animVectorSize$1 = {
	[AnimVectorType$1.INT1]: 1,
	[AnimVectorType$1.FLOAT1]: 1,
	[AnimVectorType$1.FLOAT3]: 3,
	[AnimVectorType$1.FLOAT4]: 4
};
var State = class {
	constructor(arrayBuffer) {
		this.ab = arrayBuffer;
		this.pos = 0;
		this.length = arrayBuffer.byteLength;
		this.view = new DataView(this.ab);
		this.uint = new Uint8Array(this.ab);
	}
	keyword() {
		const res = String.fromCharCode(this.uint[this.pos], this.uint[this.pos + 1], this.uint[this.pos + 2], this.uint[this.pos + 3]);
		this.pos += 4;
		return res;
	}
	expectKeyword(keyword, errorText) {
		if (this.keyword() !== keyword) throw new Error(errorText);
	}
	uint8() {
		return this.view.getUint8(this.pos++);
	}
	uint16() {
		const res = this.view.getUint16(this.pos, BIG_ENDIAN$1);
		this.pos += 2;
		return res;
	}
	int32() {
		const res = this.view.getInt32(this.pos, BIG_ENDIAN$1);
		this.pos += 4;
		return res;
	}
	float32() {
		const res = this.view.getFloat32(this.pos, BIG_ENDIAN$1);
		this.pos += 4;
		return res;
	}
	float32Array(len) {
		const res = new Float32Array(len);
		for (let i = 0; i < len; ++i) res[i] = this.float32();
		return res;
	}
	uint8Array(len) {
		const res = new Uint8Array(len);
		for (let i = 0; i < len; ++i) res[i] = this.uint8();
		return res;
	}
	str(length) {
		let stringLength = length;
		while (this.uint[this.pos + stringLength - 1] === 0 && stringLength > 0) --stringLength;
		const res = String.fromCharCode.apply(String, this.uint.slice(this.pos, this.pos + stringLength));
		this.pos += length;
		return res;
	}
	animVector(type) {
		const res = { Keys: [] };
		const isInt = type === AnimVectorType$1.INT1;
		const vectorSize = animVectorSize$1[type];
		const keysCount = this.int32();
		res.LineType = this.int32();
		res.GlobalSeqId = this.int32();
		if (res.GlobalSeqId === NONE$1) res.GlobalSeqId = null;
		for (let i = 0; i < keysCount; ++i) {
			const animKeyFrame = {};
			animKeyFrame.Frame = this.int32();
			if (isInt) animKeyFrame.Vector = new Int32Array(vectorSize);
			else animKeyFrame.Vector = new Float32Array(vectorSize);
			for (let j = 0; j < vectorSize; ++j) if (isInt) animKeyFrame.Vector[j] = this.int32();
			else animKeyFrame.Vector[j] = this.float32();
			if (res.LineType === LineType.Hermite || res.LineType === LineType.Bezier) for (const part of ["InTan", "OutTan"]) {
				animKeyFrame[part] = new Float32Array(vectorSize);
				for (let j = 0; j < vectorSize; ++j) if (isInt) animKeyFrame[part][j] = this.int32();
				else animKeyFrame[part][j] = this.float32();
			}
			res.Keys.push(animKeyFrame);
		}
		return res;
	}
};
function parseExtent(obj, state) {
	obj.BoundsRadius = state.float32();
	for (const key of ["MinimumExtent", "MaximumExtent"]) {
		obj[key] = new Float32Array(3);
		for (let i = 0; i < 3; ++i) obj[key][i] = state.float32();
	}
}
function parseVersion(model, state) {
	model.Version = state.int32();
}
var MODEL_NAME_LENGTH$1 = 336;
function parseModelInfo(model, state) {
	model.Info.Name = state.str(MODEL_NAME_LENGTH$1);
	state.int32();
	parseExtent(model.Info, state);
	model.Info.BlendTime = state.int32();
}
var MODEL_SEQUENCE_NAME_LENGTH$1 = 80;
function parseSequences(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const name = state.str(MODEL_SEQUENCE_NAME_LENGTH$1);
		const sequence = {};
		sequence.Name = name;
		const interval = new Uint32Array(2);
		interval[0] = state.int32();
		interval[1] = state.int32();
		sequence.Interval = interval;
		sequence.MoveSpeed = state.float32();
		sequence.NonLooping = state.int32() > 0;
		sequence.Rarity = state.float32();
		state.int32();
		parseExtent(sequence, state);
		model.Sequences.push(sequence);
	}
}
function parseMaterials(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		state.int32();
		const material = { Layers: [] };
		material.PriorityPlane = state.int32();
		material.RenderMode = state.int32();
		if (model.Version >= 900 && model.Version < 1100) material.Shader = state.str(80);
		state.expectKeyword("LAYS", "Incorrect materials format");
		const layersCount = state.int32();
		for (let i = 0; i < layersCount; ++i) {
			const startPos2 = state.pos;
			const size2 = state.int32();
			const layer = {};
			layer.FilterMode = state.int32();
			layer.Shading = state.int32();
			layer.TextureID = state.int32();
			layer.TVertexAnimId = state.int32();
			if (layer.TVertexAnimId === NONE$1) layer.TVertexAnimId = null;
			layer.CoordId = state.int32();
			layer.Alpha = state.float32();
			if (model.Version >= 900) {
				layer.EmissiveGain = state.float32();
				if (model.Version >= 1e3) {
					layer.FresnelColor = state.float32Array(3);
					layer.FresnelOpacity = state.float32();
					layer.FresnelTeamColor = state.float32();
				}
			}
			if (model.Version >= 1100) {
				layer.ShaderTypeId = state.int32();
				const textureCount = state.int32();
				for (let j = 0; j < textureCount; ++j) {
					const textureId = state.int32();
					state.int32();
					const textureType = j;
					if (state.keyword() === "KMTF") layer[LAYER_TEXTURE_ID_MAP[textureType]] = state.animVector(AnimVectorType$1.INT1);
					else {
						layer[LAYER_TEXTURE_ID_MAP[textureType]] = textureId;
						state.pos -= 4;
					}
				}
			}
			while (state.pos < startPos2 + size2) {
				const keyword = state.keyword();
				if (keyword === "KMTA") layer.Alpha = state.animVector(AnimVectorType$1.FLOAT1);
				else if (keyword === "KMTF") layer.TextureID = state.animVector(AnimVectorType$1.INT1);
				else if (keyword === "KMTE" && model.Version >= 900) layer.EmissiveGain = state.animVector(AnimVectorType$1.FLOAT1);
				else if (keyword === "KFC3" && model.Version >= 1e3) layer.FresnelColor = state.animVector(AnimVectorType$1.FLOAT3);
				else if (keyword === "KFCA" && model.Version >= 1e3) layer.FresnelOpacity = state.animVector(AnimVectorType$1.FLOAT1);
				else if (keyword === "KFTC" && model.Version >= 1e3) layer.FresnelTeamColor = state.animVector(AnimVectorType$1.FLOAT1);
				else throw new Error("Unknown layer chunk data " + keyword);
			}
			material.Layers.push(layer);
		}
		model.Materials.push(material);
	}
}
var MODEL_TEXTURE_PATH_LENGTH$1 = 256;
function parseTextures(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const texture = {};
		texture.ReplaceableId = state.int32();
		texture.Image = state.str(MODEL_TEXTURE_PATH_LENGTH$1);
		state.int32();
		texture.Flags = state.int32();
		model.Textures.push(texture);
	}
}
function parseGeosets(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const geoset = {};
		state.int32();
		state.expectKeyword("VRTX", "Incorrect geosets format");
		const verticesCount = state.int32();
		geoset.Vertices = new Float32Array(verticesCount * 3);
		for (let i = 0; i < verticesCount * 3; ++i) geoset.Vertices[i] = state.float32();
		state.expectKeyword("NRMS", "Incorrect geosets format");
		const normalsCount = state.int32();
		geoset.Normals = new Float32Array(normalsCount * 3);
		for (let i = 0; i < normalsCount * 3; ++i) geoset.Normals[i] = state.float32();
		state.expectKeyword("PTYP", "Incorrect geosets format");
		const primitiveCount = state.int32();
		for (let i = 0; i < primitiveCount; ++i) if (state.int32() !== 4) throw new Error("Incorrect geosets format");
		state.expectKeyword("PCNT", "Incorrect geosets format");
		const faceGroupCount = state.int32();
		for (let i = 0; i < faceGroupCount; ++i) state.int32();
		state.expectKeyword("PVTX", "Incorrect geosets format");
		const indicesCount = state.int32();
		geoset.Faces = new Uint16Array(indicesCount);
		for (let i = 0; i < indicesCount; ++i) geoset.Faces[i] = state.uint16();
		state.expectKeyword("GNDX", "Incorrect geosets format");
		const verticesGroupCount = state.int32();
		geoset.VertexGroup = new Uint8Array(verticesGroupCount);
		for (let i = 0; i < verticesGroupCount; ++i) geoset.VertexGroup[i] = state.uint8();
		state.expectKeyword("MTGC", "Incorrect geosets format");
		const groupsCount = state.int32();
		geoset.Groups = [];
		for (let i = 0; i < groupsCount; ++i) geoset.Groups[i] = new Array(state.int32());
		state.expectKeyword("MATS", "Incorrect geosets format");
		geoset.TotalGroupsCount = state.int32();
		let groupIndex = 0;
		let groupCounter = 0;
		for (let i = 0; i < geoset.TotalGroupsCount; ++i) {
			if (groupIndex >= geoset.Groups[groupCounter].length) {
				groupIndex = 0;
				groupCounter++;
			}
			geoset.Groups[groupCounter][groupIndex++] = state.int32();
		}
		geoset.MaterialID = state.int32();
		geoset.SelectionGroup = state.int32();
		geoset.Unselectable = state.int32() > 0;
		if (model.Version >= 900) {
			geoset.LevelOfDetail = state.int32();
			geoset.Name = state.str(80);
		}
		parseExtent(geoset, state);
		const geosetAnimCount = state.int32();
		geoset.Anims = [];
		for (let i = 0; i < geosetAnimCount; ++i) {
			const geosetAnim = {};
			parseExtent(geosetAnim, state);
			geoset.Anims.push(geosetAnim);
		}
		let keyword = state.keyword();
		if (model.Version >= 900) while (1) {
			if (state.pos >= state.length) throw new Error("Unexpected EOF");
			if (keyword === "TANG") {
				if (geoset.Tangents) throw new Error("Incorrect geoset, multiple Tangents");
				const len = state.int32();
				geoset.Tangents = state.float32Array(len * 4);
			} else if (keyword === "SKIN") {
				if (geoset.SkinWeights) throw new Error("Incorrect geoset, multiple SkinWeights");
				const len = state.int32();
				geoset.SkinWeights = state.uint8Array(len);
			} else if (keyword === "UVAS") break;
			keyword = state.keyword();
		}
		else if (keyword !== "UVAS") throw new Error("Incorrect geosets format");
		const textureChunkCount = state.int32();
		geoset.TVertices = [];
		for (let i = 0; i < textureChunkCount; ++i) {
			state.expectKeyword("UVBS", "Incorrect geosets format");
			const textureCoordsCount = state.int32();
			const tvertices = new Float32Array(textureCoordsCount * 2);
			for (let j = 0; j < textureCoordsCount * 2; ++j) tvertices[j] = state.float32();
			geoset.TVertices.push(tvertices);
		}
		model.Geosets.push(geoset);
	}
}
function parseGeosetAnims(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const animStartPos = state.pos;
		const animSize = state.int32();
		const geosetAnim = {};
		geosetAnim.Alpha = state.float32();
		geosetAnim.Flags = state.int32();
		geosetAnim.Color = new Float32Array(3);
		for (let i = 0; i < 3; ++i) geosetAnim.Color[i] = state.float32();
		geosetAnim.GeosetId = state.int32();
		if (geosetAnim.GeosetId === NONE$1) geosetAnim.GeosetId = null;
		while (state.pos < animStartPos + animSize) {
			const keyword = state.keyword();
			if (keyword === "KGAO") geosetAnim.Alpha = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KGAC") geosetAnim.Color = state.animVector(AnimVectorType$1.FLOAT3);
			else throw new Error("Incorrect GeosetAnim chunk data " + keyword);
		}
		model.GeosetAnims.push(geosetAnim);
	}
}
var MODEL_NODE_NAME_LENGTH$1 = 80;
function parseNode(model, node, state) {
	const startPos = state.pos;
	const size = state.int32();
	node.Name = state.str(MODEL_NODE_NAME_LENGTH$1);
	node.ObjectId = state.int32();
	if (node.ObjectId === NONE$1) node.ObjectId = null;
	node.Parent = state.int32();
	if (node.Parent === NONE$1) node.Parent = null;
	node.Flags = state.int32();
	while (state.pos < startPos + size) {
		const keyword = state.keyword();
		if (keyword === "KGTR") node.Translation = state.animVector(AnimVectorType$1.FLOAT3);
		else if (keyword === "KGRT") node.Rotation = state.animVector(AnimVectorType$1.FLOAT4);
		else if (keyword === "KGSC") node.Scaling = state.animVector(AnimVectorType$1.FLOAT3);
		else throw new Error("Incorrect node chunk data " + keyword);
	}
	model.Nodes[node.ObjectId] = node;
}
function parseBones(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const bone = {};
		parseNode(model, bone, state);
		bone.GeosetId = state.int32();
		if (bone.GeosetId === NONE$1) bone.GeosetId = null;
		bone.GeosetAnimId = state.int32();
		if (bone.GeosetAnimId === NONE$1) bone.GeosetAnimId = null;
		model.Bones.push(bone);
	}
}
function parseHelpers(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const helper = {};
		parseNode(model, helper, state);
		model.Helpers.push(helper);
	}
}
var MODEL_ATTACHMENT_PATH_LENGTH$1 = 256;
function parseAttachments(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const attachmentStart = state.pos;
		const attachmentSize = state.int32();
		const attachment = {};
		parseNode(model, attachment, state);
		attachment.Path = state.str(MODEL_ATTACHMENT_PATH_LENGTH$1);
		state.int32();
		attachment.AttachmentID = state.int32();
		if (state.pos < attachmentStart + attachmentSize) {
			state.expectKeyword("KATV", "Incorrect attachment chunk data");
			attachment.Visibility = state.animVector(AnimVectorType$1.FLOAT1);
		}
		model.Attachments.push(attachment);
	}
}
function parsePivotPoints(model, state, size) {
	const pointsCount = size / 12;
	for (let i = 0; i < pointsCount; ++i) {
		model.PivotPoints[i] = new Float32Array(3);
		model.PivotPoints[i][0] = state.float32();
		model.PivotPoints[i][1] = state.float32();
		model.PivotPoints[i][2] = state.float32();
	}
}
function parseEventObjects(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const eventObject = {};
		parseNode(model, eventObject, state);
		state.expectKeyword("KEVT", "Incorrect EventObject chunk data");
		const eventTrackCount = state.int32();
		eventObject.EventTrack = new Uint32Array(eventTrackCount);
		state.int32();
		for (let i = 0; i < eventTrackCount; ++i) eventObject.EventTrack[i] = state.int32();
		model.EventObjects.push(eventObject);
	}
}
function parseCollisionShapes(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const collisionShape = {};
		parseNode(model, collisionShape, state);
		collisionShape.Shape = state.int32();
		if (collisionShape.Shape === CollisionShapeType.Box) collisionShape.Vertices = new Float32Array(6);
		else collisionShape.Vertices = new Float32Array(3);
		for (let i = 0; i < collisionShape.Vertices.length; ++i) collisionShape.Vertices[i] = state.float32();
		if (collisionShape.Shape === CollisionShapeType.Sphere) collisionShape.BoundsRadius = state.float32();
		model.CollisionShapes.push(collisionShape);
	}
}
function parseGlobalSequences(model, state, size) {
	const startPos = state.pos;
	model.GlobalSequences = [];
	while (state.pos < startPos + size) model.GlobalSequences.push(state.int32());
}
var MODEL_PARTICLE_EMITTER_PATH_LENGTH$1 = 256;
function parseParticleEmitters(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const emitterStart = state.pos;
		const emitterSize = state.int32();
		const emitter = {};
		parseNode(model, emitter, state);
		emitter.EmissionRate = state.float32();
		emitter.Gravity = state.float32();
		emitter.Longitude = state.float32();
		emitter.Latitude = state.float32();
		emitter.Path = state.str(MODEL_PARTICLE_EMITTER_PATH_LENGTH$1);
		state.int32();
		emitter.LifeSpan = state.float32();
		emitter.InitVelocity = state.float32();
		while (state.pos < emitterStart + emitterSize) {
			const keyword = state.keyword();
			if (keyword === "KPEV") emitter.Visibility = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPEE") emitter.EmissionRate = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPEG") emitter.Gravity = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPLN") emitter.Longitude = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPLT") emitter.Latitude = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPEL") emitter.LifeSpan = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPES") emitter.InitVelocity = state.animVector(AnimVectorType$1.FLOAT1);
			else throw new Error("Incorrect particle emitter chunk data " + keyword);
		}
		model.ParticleEmitters.push(emitter);
	}
}
function parseParticleEmitters2(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const emitterStart = state.pos;
		const emitterSize = state.int32();
		const emitter = {};
		parseNode(model, emitter, state);
		emitter.Speed = state.float32();
		emitter.Variation = state.float32();
		emitter.Latitude = state.float32();
		emitter.Gravity = state.float32();
		emitter.LifeSpan = state.float32();
		emitter.EmissionRate = state.float32();
		emitter.Width = state.float32();
		emitter.Length = state.float32();
		emitter.FilterMode = state.int32();
		emitter.Rows = state.int32();
		emitter.Columns = state.int32();
		const frameFlags = state.int32();
		emitter.FrameFlags = 0;
		if (frameFlags === 0 || frameFlags === 2) emitter.FrameFlags |= ParticleEmitter2FramesFlags.Head;
		if (frameFlags === 1 || frameFlags === 2) emitter.FrameFlags |= ParticleEmitter2FramesFlags.Tail;
		emitter.TailLength = state.float32();
		emitter.Time = state.float32();
		emitter.SegmentColor = [];
		for (let i = 0; i < 3; ++i) {
			emitter.SegmentColor[i] = new Float32Array(3);
			for (let j = 0; j < 3; ++j) emitter.SegmentColor[i][j] = state.float32();
		}
		emitter.Alpha = new Uint8Array(3);
		for (let i = 0; i < 3; ++i) emitter.Alpha[i] = state.uint8();
		emitter.ParticleScaling = new Float32Array(3);
		for (let i = 0; i < 3; ++i) emitter.ParticleScaling[i] = state.float32();
		for (const part of [
			"LifeSpanUVAnim",
			"DecayUVAnim",
			"TailUVAnim",
			"TailDecayUVAnim"
		]) {
			emitter[part] = new Uint32Array(3);
			for (let i = 0; i < 3; ++i) emitter[part][i] = state.int32();
		}
		emitter.TextureID = state.int32();
		if (emitter.TextureID === NONE$1) emitter.TextureID = null;
		emitter.Squirt = state.int32() > 0;
		emitter.PriorityPlane = state.int32();
		emitter.ReplaceableId = state.int32();
		while (state.pos < emitterStart + emitterSize) {
			const keyword = state.keyword();
			if (keyword === "KP2V") emitter.Visibility = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2E") emitter.EmissionRate = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2W") emitter.Width = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2N") emitter.Length = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2S") emitter.Speed = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2L") emitter.Latitude = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2G") emitter.Gravity = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KP2R") emitter.Variation = state.animVector(AnimVectorType$1.FLOAT1);
			else throw new Error("Incorrect particle emitter2 chunk data " + keyword);
		}
		model.ParticleEmitters2.push(emitter);
	}
}
var MODEL_CAMERA_NAME_LENGTH$1 = 80;
function parseCameras(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const cameraStart = state.pos;
		const cameraSize = state.int32();
		const camera = {};
		camera.Name = state.str(MODEL_CAMERA_NAME_LENGTH$1);
		camera.Position = new Float32Array(3);
		camera.Position[0] = state.float32();
		camera.Position[1] = state.float32();
		camera.Position[2] = state.float32();
		camera.FieldOfView = state.float32();
		camera.FarClip = state.float32();
		camera.NearClip = state.float32();
		camera.TargetPosition = new Float32Array(3);
		camera.TargetPosition[0] = state.float32();
		camera.TargetPosition[1] = state.float32();
		camera.TargetPosition[2] = state.float32();
		while (state.pos < cameraStart + cameraSize) {
			const keyword = state.keyword();
			if (keyword === "KCTR") camera.Translation = state.animVector(AnimVectorType$1.FLOAT3);
			else if (keyword === "KTTR") camera.TargetTranslation = state.animVector(AnimVectorType$1.FLOAT3);
			else if (keyword === "KCRL") camera.Rotation = state.animVector(AnimVectorType$1.FLOAT1);
			else throw new Error("Incorrect camera chunk data " + keyword);
		}
		model.Cameras.push(camera);
	}
}
function parseLights(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const lightStart = state.pos;
		const lightSize = state.int32();
		const light = {};
		parseNode(model, light, state);
		light.LightType = state.int32();
		light.AttenuationStart = state.float32();
		light.AttenuationEnd = state.float32();
		light.Color = new Float32Array(3);
		for (let j = 0; j < 3; ++j) light.Color[j] = state.float32();
		light.Intensity = state.float32();
		light.AmbColor = new Float32Array(3);
		for (let j = 0; j < 3; ++j) light.AmbColor[j] = state.float32();
		light.AmbIntensity = state.float32();
		while (state.pos < lightStart + lightSize) {
			const keyword = state.keyword();
			if (keyword === "KLAV") light.Visibility = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KLAC") light.Color = state.animVector(AnimVectorType$1.FLOAT3);
			else if (keyword === "KLAI") light.Intensity = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KLBC") light.AmbColor = state.animVector(AnimVectorType$1.FLOAT3);
			else if (keyword === "KLBI") light.AmbIntensity = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KLAS") light.AttenuationStart = state.animVector(AnimVectorType$1.INT1);
			else if (keyword === "KLAE") light.AttenuationEnd = state.animVector(AnimVectorType$1.INT1);
			else throw new Error("Incorrect light chunk data " + keyword);
		}
		model.Lights.push(light);
	}
}
function parseTextureAnims(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const animStart = state.pos;
		const animSize = state.int32();
		const anim = {};
		while (state.pos < animStart + animSize) {
			const keyword = state.keyword();
			if (keyword === "KTAT") anim.Translation = state.animVector(AnimVectorType$1.FLOAT3);
			else if (keyword === "KTAR") anim.Rotation = state.animVector(AnimVectorType$1.FLOAT4);
			else if (keyword === "KTAS") anim.Scaling = state.animVector(AnimVectorType$1.FLOAT3);
			else throw new Error("Incorrect light chunk data " + keyword);
		}
		model.TextureAnims.push(anim);
	}
}
function parseRibbonEmitters(model, state, size) {
	const startPos = state.pos;
	while (state.pos < startPos + size) {
		const emitterStart = state.pos;
		const emitterSize = state.int32();
		const emitter = {};
		parseNode(model, emitter, state);
		emitter.HeightAbove = state.float32();
		emitter.HeightBelow = state.float32();
		emitter.Alpha = state.float32();
		emitter.Color = new Float32Array(3);
		for (let j = 0; j < 3; ++j) emitter.Color[j] = state.float32();
		emitter.LifeSpan = state.float32();
		emitter.TextureSlot = state.int32();
		emitter.EmissionRate = state.int32();
		emitter.Rows = state.int32();
		emitter.Columns = state.int32();
		emitter.MaterialID = state.int32();
		emitter.Gravity = state.float32();
		while (state.pos < emitterStart + emitterSize) {
			const keyword = state.keyword();
			if (keyword === "KRVS") emitter.Visibility = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KRHA") emitter.HeightAbove = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KRHB") emitter.HeightBelow = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KRAL") emitter.Alpha = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KRTX") emitter.TextureSlot = state.animVector(AnimVectorType$1.INT1);
			else throw new Error("Incorrect ribbon emitter chunk data " + keyword);
		}
		model.RibbonEmitters.push(emitter);
	}
}
function parseFaceFX(model, state, size) {
	if (model.Version < 900) throw new Error("Mismatched version chunk");
	const startPos = state.pos;
	model.FaceFX = model.FaceFX || [];
	while (state.pos < startPos + size) {
		const faceFX = {
			Name: "",
			Path: ""
		};
		faceFX.Name = state.str(80);
		faceFX.Path = state.str(260);
		model.FaceFX.push(faceFX);
	}
}
function parseBindPose(model, state, size) {
	if (model.Version < 900) throw new Error("Mismatched version chunk");
	const startPos = state.pos;
	model.BindPoses = model.BindPoses || [];
	const len = state.int32();
	const bindPose = { Matrices: [] };
	for (let i = 0; i < len; ++i) {
		const matrix = state.float32Array(12);
		bindPose.Matrices.push(matrix);
	}
	model.BindPoses.push(bindPose);
	if (state.pos !== startPos + size) throw new Error("Mismatched BindPose data");
}
function parseParticleEmitterPopcorn(model, state, size) {
	if (model.Version < 900) throw new Error("Mismatched version chunk");
	const startPos = state.pos;
	model.ParticleEmitterPopcorns = model.ParticleEmitterPopcorns || [];
	while (state.pos < startPos + size) {
		const emitterStart = state.pos;
		const emitterSize = state.int32();
		const emitter = {};
		parseNode(model, emitter, state);
		emitter.LifeSpan = state.float32();
		emitter.EmissionRate = state.float32();
		emitter.Speed = state.float32();
		emitter.Color = state.float32Array(3);
		emitter.Alpha = state.float32();
		emitter.ReplaceableId = state.int32();
		emitter.Path = state.str(260);
		emitter.AnimVisibilityGuide = state.str(260);
		while (state.pos < emitterStart + emitterSize) {
			const keyword = state.keyword();
			if (keyword === "KPPA") emitter.Alpha = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPPC") emitter.Color = state.animVector(AnimVectorType$1.FLOAT3);
			else if (keyword === "KPPE") emitter.EmissionRate = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPPL") emitter.LifeSpan = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPPS") emitter.Speed = state.animVector(AnimVectorType$1.FLOAT1);
			else if (keyword === "KPPV") emitter.Visibility = state.animVector(AnimVectorType$1.FLOAT1);
			else throw new Error("Incorrect particle emitter popcorn chunk data " + keyword);
		}
		model.ParticleEmitterPopcorns.push(emitter);
	}
}
var parsers = {
	VERS: parseVersion,
	MODL: parseModelInfo,
	SEQS: parseSequences,
	MTLS: parseMaterials,
	TEXS: parseTextures,
	GEOS: parseGeosets,
	GEOA: parseGeosetAnims,
	BONE: parseBones,
	HELP: parseHelpers,
	ATCH: parseAttachments,
	PIVT: parsePivotPoints,
	EVTS: parseEventObjects,
	CLID: parseCollisionShapes,
	GLBS: parseGlobalSequences,
	PREM: parseParticleEmitters,
	PRE2: parseParticleEmitters2,
	CAMS: parseCameras,
	LITE: parseLights,
	TXAN: parseTextureAnims,
	RIBB: parseRibbonEmitters,
	FAFX: parseFaceFX,
	BPOS: parseBindPose,
	CORN: parseParticleEmitterPopcorn
};
function parse$1(arrayBuffer) {
	const state = new State(arrayBuffer);
	if (state.keyword() !== "MDLX") throw new Error("Not a mdx model");
	const model = {
		Version: 800,
		Info: {
			Name: "",
			MinimumExtent: null,
			MaximumExtent: null,
			BoundsRadius: 0,
			BlendTime: 150
		},
		Sequences: [],
		GlobalSequences: [],
		Textures: [],
		Materials: [],
		TextureAnims: [],
		Geosets: [],
		GeosetAnims: [],
		Bones: [],
		Helpers: [],
		Attachments: [],
		EventObjects: [],
		ParticleEmitters: [],
		ParticleEmitters2: [],
		Cameras: [],
		Lights: [],
		RibbonEmitters: [],
		CollisionShapes: [],
		PivotPoints: [],
		Nodes: []
	};
	while (state.pos < state.length) {
		const keyword = state.keyword();
		const size = state.int32();
		if (keyword in parsers) parsers[keyword](model, state, size);
		else state.pos += size;
	}
	for (let i = 0; i < model.Nodes.length; ++i) if (model.Nodes[i] && model.PivotPoints[i]) model.Nodes[i].PivotPoint = model.PivotPoints[i];
	model.Info.NumGeosets = model.Geosets.length;
	model.Info.NumGeosetAnims = model.GeosetAnims.length;
	model.Info.NumBones = model.Bones.length;
	model.Info.NumLights = model.Lights.length;
	model.Info.NumAttachments = model.Attachments.length;
	model.Info.NumEvents = model.EventObjects.length;
	model.Info.NumParticleEmitters = model.ParticleEmitters.length;
	model.Info.NumParticleEmitters2 = model.ParticleEmitters2.length;
	model.Info.NumRibbonEmitters = model.RibbonEmitters.length;
	return model;
}
//#endregion
//#region mdl/generate.ts
var FLOAT_PRESICION = 6;
var EPSILON$1 = 1e-6;
function isNotEmptyVec3(vec, val = 0) {
	return Math.abs(vec[0] - val) > EPSILON$1 || Math.abs(vec[1] - val) > EPSILON$1 || Math.abs(vec[2] - val) > EPSILON$1;
}
function generateTab(tabSize = 1) {
	if (tabSize === 0) return "";
	let res = "	";
	for (let i = 1; i < tabSize; ++i) res += "	";
	return res;
}
function generateWrappedString(val) {
	return `"${val}"`;
}
function generateWrappedStringOrNumber(val) {
	if (typeof val === "number") return String(val);
	return generateWrappedString(val);
}
function generateBlockStart(blockName, subInfo = null, tabSize = 0) {
	return generateTab(tabSize) + blockName + " " + (subInfo !== null ? generateWrappedStringOrNumber(subInfo) + " " : "") + "{\n";
}
function generateBlockEnd(tabSize = 0) {
	return generateTab(tabSize) + "}\n";
}
var trailingZeroRegExp = /(\..+?)0+$/;
var trailingZeroRegExp2 = /\.0+$/;
var negativeZeroRegExp = /^-0$/;
function generateNumber(val) {
	return val.toFixed(FLOAT_PRESICION).replace(trailingZeroRegExp, "$1").replace(trailingZeroRegExp2, "").replace(negativeZeroRegExp, "0");
}
function generateArray(arr, reverse = false) {
	let middle = "";
	if (reverse) for (let i = arr.length - 1; i >= 0; --i) {
		if (i < arr.length - 1) middle += ", ";
		middle += generateNumber(arr[i]);
	}
	else for (let i = 0; i < arr.length; ++i) {
		if (i > 0) middle += ", ";
		middle += generateNumber(arr[i]);
	}
	return "{ " + middle + " }";
}
function generateUIntArray(arr) {
	let middle = "";
	for (let i = 0; i < arr.length; ++i) {
		if (i > 0) middle += ", ";
		middle += String(arr[i]);
	}
	return "{ " + middle + " }";
}
function generateStatic(isStatic) {
	return isStatic ? "static " : "";
}
function generateProp(name, val, isStatic, tabSize = 1) {
	return `${generateTab(tabSize) + generateStatic(isStatic) + name} ${val},\n`;
}
function generateIntProp(name, val, isStatic = null, tabSize = 1) {
	return generateProp(name, String(val), isStatic, tabSize);
}
function generateFloatProp(name, val, isStatic = null, tabSize = 1) {
	return generateProp(name, generateNumber(val), isStatic, tabSize);
}
function generateStringProp(name, val, isStatic = null, tabSize = 1) {
	return generateProp(name, val, isStatic, tabSize);
}
function generateWrappedStringProp(name, val, isStatic = null, tabSize = 1) {
	return generateProp(name, generateWrappedString(val), isStatic, tabSize);
}
function generateFloatArrayProp(name, val, isStatic = null, tabSize = 1) {
	return generateProp(name, generateArray(val), isStatic, tabSize);
}
function generateUIntArrayProp(name, val, isStatic = null, tabSize = 1) {
	return generateProp(name, generateUIntArray(val), isStatic, tabSize);
}
function generateBooleanProp(name, tabSize = 1) {
	return generateTab(tabSize) + name + ",\n";
}
function generateIntPropIfNotEmpty(name, val, defaultVal = 0, isStatic = null, tabSize = 1) {
	if (val !== defaultVal && val !== null && val !== void 0) return generateIntProp(name, val, isStatic, tabSize);
	return "";
}
function generateFloatPropIfNotEmpty(name, val, defaultVal = 0, isStatic = null, tabSize = 1) {
	if (Math.abs(val - defaultVal) > EPSILON$1) return generateFloatProp(name, val, isStatic, tabSize);
	return "";
}
function generateLineType(lineType) {
	switch (lineType) {
		case LineType.DontInterp: return "DontInterp";
		case LineType.Linear: return "Linear";
		case LineType.Bezier: return "Bezier";
		case LineType.Hermite: return "Hermite";
	}
	return "";
}
function generateAnimKeyFrame(key, tabSize = 2, reverse = false) {
	let res = generateTab(tabSize) + key.Frame + ": " + (key.Vector.length === 1 ? generateNumber(key.Vector[0]) : generateArray(key.Vector, reverse)) + ",\n";
	if (key.InTan) {
		res += generateTab(tabSize + 1) + "InTan " + (key.InTan.length === 1 ? generateNumber(key.InTan[0]) : generateArray(key.InTan, reverse)) + ",\n";
		res += generateTab(tabSize + 1) + "OutTan " + (key.OutTan.length === 1 ? generateNumber(key.OutTan[0]) : generateArray(key.OutTan, reverse)) + ",\n";
	}
	return res;
}
function generateAnimVectorProp(name, val, defaultVal = 0, tabSize = 1, reverse = false) {
	if (val === null || val === void 0) return "";
	if (typeof val === "number") if (typeof defaultVal === "number" && Math.abs(val - defaultVal) < EPSILON$1) return "";
	else return generateFloatProp(name, val, true, tabSize);
	else return generateBlockStart(name, val.Keys.length, tabSize) + generateBooleanProp(generateLineType(val.LineType), tabSize + 1) + (val.GlobalSeqId !== null ? generateIntProp("GlobalSeqId", val.GlobalSeqId, null, tabSize + 1) : "") + val.Keys.map((key) => generateAnimKeyFrame(key, tabSize + 1, reverse)).join("") + generateBlockEnd(tabSize);
}
function generateVersion$1(model) {
	return generateBlockStart("Version") + generateIntProp("FormatVersion", model.Version) + generateBlockEnd();
}
function generateModel(model) {
	return generateBlockStart("Model", model.Info.Name) + generateIntPropIfNotEmpty("NumGeosets", model.Geosets.length) + generateIntPropIfNotEmpty("NumGeosetAnims", model.GeosetAnims.length) + generateIntPropIfNotEmpty("NumHelpers", model.Helpers.length) + generateIntPropIfNotEmpty("NumBones", model.Bones.length) + (model.Lights.length ? generateIntPropIfNotEmpty("NumLights", model.Lights.length) : "") + generateIntPropIfNotEmpty("NumAttachments", model.Attachments.length) + generateIntPropIfNotEmpty("NumEvents", model.EventObjects.length) + generateIntPropIfNotEmpty("NumParticleEmitters", model.ParticleEmitters.length) + (model.ParticleEmitters2.length ? generateIntPropIfNotEmpty("NumParticleEmitters2", model.ParticleEmitters2.length) : "") + (model.RibbonEmitters.length ? generateIntPropIfNotEmpty("NumRibbonEmitters", model.RibbonEmitters.length) : "") + generateIntProp("BlendTime", model.Info.BlendTime) + generateFloatArrayProp("MinimumExtent", model.Info.MinimumExtent) + generateFloatArrayProp("MaximumExtent", model.Info.MaximumExtent) + generateFloatPropIfNotEmpty("BoundsRadius", model.Info.BoundsRadius) + generateBlockEnd();
}
function generateSequences$1(model) {
	return generateBlockStart("Sequences", model.Sequences.length) + model.Sequences.map(generateSequenceChunk).join("") + generateBlockEnd();
}
function generateSequenceChunk(sequence) {
	return generateBlockStart("Anim", sequence.Name, 1) + generateUIntArrayProp("Interval", sequence.Interval, null, 2) + generateFloatPropIfNotEmpty("Rarity", sequence.Rarity, 0, null, 2) + generateFloatPropIfNotEmpty("MoveSpeed", sequence.MoveSpeed, 0, null, 2) + (sequence.NonLooping ? generateBooleanProp("NonLooping", 2) : "") + generateFloatArrayProp("MinimumExtent", sequence.MinimumExtent, null, 2) + generateFloatArrayProp("MaximumExtent", sequence.MaximumExtent, null, 2) + generateFloatPropIfNotEmpty("BoundsRadius", sequence.BoundsRadius, 0, null, 2) + generateBlockEnd(1);
}
function generateGlobalSequences$1(model) {
	if (!model.GlobalSequences || !model.GlobalSequences.length) return "";
	return generateBlockStart("GlobalSequences", model.GlobalSequences.length) + model.GlobalSequences.map((duration) => generateIntProp("Duration", duration)).join("") + generateBlockEnd();
}
function generateTextures$1(model) {
	if (!model.Textures.length) return "";
	return generateBlockStart("Textures", model.Textures.length) + model.Textures.map(generateTextureChunk).join("") + generateBlockEnd();
}
function generateTextureChunk(texture) {
	return generateBlockStart("Bitmap", null, 1) + generateWrappedStringProp("Image", texture.Image, null, 2) + generateIntPropIfNotEmpty("ReplaceableId", texture.ReplaceableId, 0, null, 2) + (texture.Flags & TextureFlags.WrapWidth ? generateBooleanProp("WrapWidth", 2) : "") + (texture.Flags & TextureFlags.WrapHeight ? generateBooleanProp("WrapHeight", 2) : "") + generateBlockEnd(1);
}
function generateMaterials$1(model) {
	if (!model.Materials.length) return "";
	return generateBlockStart("Materials", model.Materials.length) + model.Materials.map((it) => generateMaterialChunk(model, it)).join("") + generateBlockEnd();
}
function generateMaterialChunk(model, material) {
	let shader = "";
	if (model.Version >= 900 && model.Version < 1100 && material.Shader) shader = generateWrappedStringProp("Shader", material.Shader, false, 2);
	return generateBlockStart("Material", null, 1) + (material.RenderMode & MaterialRenderMode.ConstantColor ? generateBooleanProp("ConstantColor", 2) : "") + (material.RenderMode & MaterialRenderMode.SortPrimsFarZ ? generateBooleanProp("SortPrimsFarZ", 2) : "") + (material.RenderMode & MaterialRenderMode.FullResolution ? generateBooleanProp("FullResolution", 2) : "") + generateIntPropIfNotEmpty("PriorityPlane", material.PriorityPlane, 0, null, 2) + generateIntPropIfNotEmpty("RenderMode", material.RenderMode, 0, null, 2) + shader + material.Layers.map((it) => generateLayerChunk(model, it)).join("") + generateBlockEnd(1);
}
function generateFilterMode(filterMode) {
	switch (filterMode) {
		case FilterMode.None: return "None";
		case FilterMode.Transparent: return "Transparent";
		case FilterMode.Blend: return "Blend";
		case FilterMode.Additive: return "Additive";
		case FilterMode.AddAlpha: return "AddAlpha";
		case FilterMode.Modulate: return "Modulate";
		case FilterMode.Modulate2x: return "Modulate2x";
	}
	return "";
}
function generateLayerChunk(model, layer) {
	let middle = "";
	if (model.Version >= 900) {
		middle += layer.EmissiveGain !== void 0 ? generateAnimVectorProp("EmissiveGain", layer.EmissiveGain, 1, 3) : "";
		if (model.Version >= 1e3) {
			middle += layer.FresnelColor !== void 0 ? generateColorProp("FresnelColor", layer.FresnelColor, true, 3) : "";
			middle += layer.FresnelOpacity !== void 0 ? generateAnimVectorProp("FresnelOpacity", layer.FresnelOpacity, 0, 3) : "";
			middle += layer.FresnelTeamColor !== void 0 ? generateAnimVectorProp("FresnelTeamColor", layer.FresnelTeamColor, 0, 3) : "";
		}
	}
	if (model.Version >= 1100) {
		middle += generateIntProp("ShaderTypeId", layer.ShaderTypeId || 0, null, 3);
		LAYER_TEXTURE_ID_MAP.slice(1).forEach((name) => {
			const val = layer[name];
			if (val !== void 0) middle += generateAnimVectorProp(name, val, null, 3);
		});
	}
	return generateBlockStart("Layer", null, 2) + generateStringProp("FilterMode", generateFilterMode(layer.FilterMode), null, 3) + (layer.Alpha !== void 0 ? generateAnimVectorProp("Alpha", layer.Alpha, 1, 3) : "") + (layer.TextureID !== void 0 ? generateAnimVectorProp("TextureID", layer.TextureID, null, 3) : "") + (layer.Shading & LayerShading.TwoSided ? generateBooleanProp("TwoSided", 3) : "") + (layer.Shading & LayerShading.Unshaded ? generateBooleanProp("Unshaded", 3) : "") + (layer.Shading & LayerShading.Unfogged ? generateBooleanProp("Unfogged", 3) : "") + (layer.Shading & LayerShading.SphereEnvMap ? generateBooleanProp("SphereEnvMap", 3) : "") + (layer.Shading & LayerShading.NoDepthTest ? generateBooleanProp("NoDepthTest", 3) : "") + (layer.Shading & LayerShading.NoDepthSet ? generateBooleanProp("NoDepthSet", 3) : "") + generateIntPropIfNotEmpty("CoordId", layer.CoordId, 0, null, 3) + generateIntPropIfNotEmpty("TVertexAnimId", layer.TVertexAnimId, null, null, 3) + middle + generateBlockEnd(2);
}
function generateTextureAnims$1(model) {
	if (!model.TextureAnims.length) return "";
	return generateBlockStart("TextureAnims", model.TextureAnims.length) + model.TextureAnims.map(generateTextureAnimChunk).join("") + generateBlockEnd();
}
function generateTextureAnimChunk(textureAnim) {
	return generateBlockStart("TVertexAnim", null, 1) + (textureAnim.Translation ? generateAnimVectorProp("Translation", textureAnim.Translation, null, 2) : "") + (textureAnim.Rotation ? generateAnimVectorProp("Rotation", textureAnim.Rotation, null, 2) : "") + (textureAnim.Scaling ? generateAnimVectorProp("Scaling", textureAnim.Scaling, null, 2) : "") + generateBlockEnd(1);
}
function generateGeosets$1(model) {
	if (!model.Geosets.length) return "";
	return model.Geosets.map((it) => generateGeosetChunk(model, it)).join("");
}
function generateGeosetChunk(model, geoset) {
	let middle = "";
	if (model.Version >= 900) middle += (geoset.LevelOfDetail !== void 0 ? generateIntProp("LevelOfDetail", geoset.LevelOfDetail) : "") + (geoset.Name ? generateWrappedStringProp("Name", geoset.Name) : "") + (geoset.Tangents ? generateGeosetArray("Tangents", geoset.Tangents, 4) : "") + (geoset.SkinWeights ? generateGeosetArray("SkinWeights", geoset.SkinWeights, 8) : "");
	return generateBlockStart("Geoset") + generateGeosetArray("Vertices", geoset.Vertices, 3) + generateGeosetArray("Normals", geoset.Normals, 3) + generateGeosetArray("TVertices", geoset.TVertices[0], 2) + generateGeosetVertexGroup(geoset.VertexGroup) + generateGeosetFaces(geoset.Faces) + generateGeosetGroups(geoset.Groups) + generateFloatArrayProp("MinimumExtent", geoset.MinimumExtent) + generateFloatArrayProp("MaximumExtent", geoset.MaximumExtent) + generateFloatPropIfNotEmpty("BoundsRadius", geoset.BoundsRadius) + generateGeosetAnimInfos(geoset.Anims) + generateIntProp("MaterialID", geoset.MaterialID) + generateIntProp("SelectionGroup", geoset.SelectionGroup) + (geoset.Unselectable ? generateBooleanProp("Unselectable") : "") + middle + generateBlockEnd();
}
function generateGeosetArray(name, arr, elemLength) {
	let middle = "";
	const elemCount = arr.length / elemLength;
	for (let i = 0; i < elemCount; ++i) middle += generateTab(2) + generateArray(arr.slice(i * elemLength, (i + 1) * elemLength)) + ",\n";
	return generateBlockStart(name, elemCount, 1) + middle + generateBlockEnd(1);
}
function generateGeosetVertexGroup(arr) {
	if (!arr.length) return "";
	let middle = "";
	for (let i = 0; i < arr.length; ++i) middle += generateTab(2) + arr[i] + ",\n";
	return generateBlockStart("VertexGroup", null, 1) + middle + generateBlockEnd(1);
}
function generateGeosetFaces(arr) {
	return generateBlockStart(`Faces 1 ${arr.length}`, null, 1) + generateBlockStart("Triangles", null, 2) + generateTab(3) + generateUIntArray(arr) + ",\n" + generateBlockEnd(2) + generateBlockEnd(1);
}
function generateGeosetGroups(groups) {
	let totalMatrices = 0;
	let middle = "";
	for (const group of groups) {
		totalMatrices += group.length;
		middle += generateTab(2) + "Matrices " + generateUIntArray(group) + ",\n";
	}
	return generateBlockStart(`Groups ${groups.length} ${totalMatrices}`, null, 1) + middle + generateBlockEnd(1);
}
function generateGeosetAnimInfos(anims) {
	if (!anims) return "";
	return anims.map(generateGeosetAnimInfoChunk).join("");
}
function generateGeosetAnimInfoChunk(anim) {
	return generateBlockStart("Anim", null, 1) + generateFloatArrayProp("MinimumExtent", anim.MinimumExtent, null, 2) + generateFloatArrayProp("MaximumExtent", anim.MaximumExtent, null, 2) + generateFloatPropIfNotEmpty("BoundsRadius", anim.BoundsRadius, 0, null, 2) + generateBlockEnd(1);
}
function generateGeosetAnims$1(model) {
	if (!model.GeosetAnims.length) return "";
	return model.GeosetAnims.map(generateGeosetAnimChunk).join("");
}
function generateColorProp(name, color, isStatic, tabSize = 1) {
	if (color) if (color instanceof Float32Array) {
		if (!isStatic || isNotEmptyVec3(color, 1)) {
			let middle = "";
			for (let i = 2; i >= 0; --i) {
				if (i < 2) middle += ", ";
				middle += generateNumber(color[i]);
			}
			return `${generateTab(tabSize)}${isStatic ? "static " : ""}${name} { ${middle} },\n`;
		}
	} else return generateAnimVectorProp(name, color, null, tabSize, true);
	return "";
}
function generateGeosetAnimChunk(geosetAnim) {
	return generateBlockStart("GeosetAnim") + generateIntProp("GeosetId", geosetAnim.GeosetId) + generateAnimVectorProp("Alpha", geosetAnim.Alpha, 1) + generateColorProp("Color", geosetAnim.Color, true) + (geosetAnim.Flags & GeosetAnimFlags.DropShadow ? generateBooleanProp("DropShadow") : "") + generateBlockEnd();
}
function generateNodeProps(node) {
	return generateIntProp("ObjectId", node.ObjectId) + generateIntPropIfNotEmpty("Parent", node.Parent, null) + generateNodeDontInherit(node.Flags) + (node.Flags & NodeFlags.Billboarded ? generateBooleanProp("Billboarded") : "") + (node.Flags & NodeFlags.BillboardedLockX ? generateBooleanProp("BillboardedLockX") : "") + (node.Flags & NodeFlags.BillboardedLockY ? generateBooleanProp("BillboardedLockY") : "") + (node.Flags & NodeFlags.BillboardedLockZ ? generateBooleanProp("BillboardedLockZ") : "") + (node.Flags & NodeFlags.CameraAnchored ? generateBooleanProp("CameraAnchored") : "") + (node.Translation !== void 0 ? generateAnimVectorProp("Translation", node.Translation) : "") + (node.Rotation !== void 0 ? generateAnimVectorProp("Rotation", node.Rotation) : "") + (node.Scaling !== void 0 ? generateAnimVectorProp("Scaling", node.Scaling) : "");
}
function generateNodeDontInherit(flags) {
	const flagsStrs = [];
	if (flags & NodeFlags.DontInheritTranslation) flagsStrs.push("Translation");
	if (flags & NodeFlags.DontInheritRotation) flagsStrs.push("Rotation");
	if (flags & NodeFlags.DontInheritScaling) flagsStrs.push("Scaling");
	if (!flagsStrs.length) return "";
	return generateTab(1) + "DontInherit { " + flagsStrs.join(", ") + " },\n";
}
function generateBones$1(model) {
	if (!model.Bones.length) return "";
	return model.Bones.map(generateBoneChunk).join("");
}
function generateBoneChunk(bone) {
	return generateBlockStart("Bone", bone.Name) + generateNodeProps(bone) + (bone.GeosetId !== null ? generateIntProp("GeosetId", bone.GeosetId) : generateStringProp("GeosetId", "Multiple")) + (bone.GeosetAnimId !== null ? generateIntProp("GeosetAnimId", bone.GeosetAnimId) : generateStringProp("GeosetAnimId", "None")) + generateBlockEnd();
}
function generateLights$1(model) {
	if (!model.Lights.length) return "";
	return model.Lights.map(generateLightChunk).join("");
}
function generateLightChunk(light) {
	return generateBlockStart("Light", light.Name) + generateNodeProps(light) + generateBooleanProp(generateLightType(light.LightType)) + generateAnimVectorProp("AttenuationStart", light.AttenuationStart) + generateAnimVectorProp("AttenuationEnd", light.AttenuationEnd) + generateColorProp("Color", light.Color, true) + generateAnimVectorProp("Intensity", light.Intensity, null) + generateColorProp("AmbColor", light.AmbColor, true) + generateAnimVectorProp("AmbIntensity", light.AmbIntensity, null) + generateAnimVectorProp("Visibility", light.Visibility, 1) + generateBlockEnd();
}
function generateLightType(lightType) {
	switch (lightType) {
		case LightType.Omnidirectional: return "Omnidirectional";
		case LightType.Directional: return "Directional";
		case LightType.Ambient: return "Ambient";
	}
	return "";
}
function generateHelpers$1(model) {
	return model.Helpers.map(generateHelperChunk).join("");
}
function generateHelperChunk(helper) {
	return generateBlockStart("Helper", helper.Name) + generateNodeProps(helper) + generateBlockEnd();
}
function generateAttachments$1(model) {
	return model.Attachments.map(generateAttachmentChunk).join("");
}
function generateAttachmentChunk(attachment) {
	return generateBlockStart("Attachment", attachment.Name) + generateNodeProps(attachment) + generateIntProp("AttachmentID", attachment.AttachmentID) + (attachment.Path ? generateWrappedStringProp("Path", attachment.Path) : "") + generateAnimVectorProp("Visibility", attachment.Visibility, 1) + generateBlockEnd();
}
function generatePivotPoints$1(model) {
	return generateBlockStart("PivotPoints", model.PivotPoints.length) + model.PivotPoints.map((point) => `${generateTab()}${generateArray(point)},\n`).join("") + generateBlockEnd();
}
function generateParticleEmitters$1(model) {
	return model.ParticleEmitters.map(generateParticleEmitterChunk).join("");
}
function generateParticleEmitterChunk(emitter) {
	return generateBlockStart("ParticleEmitter", emitter.Name) + generateNodeProps(emitter) + (emitter.Flags & ParticleEmitterFlags.EmitterUsesMDL ? generateBooleanProp("EmitterUsesMDL") : "") + (emitter.Flags & ParticleEmitterFlags.EmitterUsesTGA ? generateBooleanProp("EmitterUsesTGA") : "") + generateAnimVectorProp("EmissionRate", emitter.EmissionRate) + generateAnimVectorProp("Gravity", emitter.Gravity) + generateAnimVectorProp("Longitude", emitter.Longitude) + generateAnimVectorProp("Latitude", emitter.Latitude) + generateAnimVectorProp("Visibility", emitter.Visibility) + generateBlockStart("Particle", null, 1) + generateAnimVectorProp("LifeSpan", emitter.LifeSpan, null, 2) + generateAnimVectorProp("InitVelocity", emitter.InitVelocity, null, 2) + generateWrappedStringProp("Path", emitter.Path, false, 2) + generateBlockEnd(1) + generateBlockEnd();
}
function generateParticleEmitters2$1(model) {
	return model.ParticleEmitters2.map(generateParticleEmitter2Chunk).join("");
}
function generateParticleEmitters2FilterMode(filterMode) {
	switch (filterMode) {
		case ParticleEmitter2FilterMode.Blend: return "Blend";
		case ParticleEmitter2FilterMode.Additive: return "Additive";
		case ParticleEmitter2FilterMode.Modulate: return "Modulate";
		case ParticleEmitter2FilterMode.Modulate2x: return "Modulate2x";
		case ParticleEmitter2FilterMode.AlphaKey: return "AlphaKey";
	}
	return "";
}
function generateSegmentColor(colors) {
	return generateBlockStart("SegmentColor", null, 1) + colors.map((color) => generateColorProp("Color", color, false, 2)).join("") + generateTab() + "},\n";
}
function generateParticleEmitter2FrameFlags(frameFlags) {
	if (frameFlags & ParticleEmitter2FramesFlags.Head && frameFlags & ParticleEmitter2FramesFlags.Tail) return "Both";
	else if (frameFlags & ParticleEmitter2FramesFlags.Head) return "Head";
	else if (frameFlags & ParticleEmitter2FramesFlags.Tail) return "Tail";
	return "";
}
function generateParticleEmitter2Chunk(particleEmitter2) {
	return generateBlockStart("ParticleEmitter2", particleEmitter2.Name) + generateNodeProps(particleEmitter2) + generateBooleanProp(generateParticleEmitters2FilterMode(particleEmitter2.FilterMode)) + generateAnimVectorProp("Speed", particleEmitter2.Speed, null) + generateAnimVectorProp("Variation", particleEmitter2.Variation, null) + generateAnimVectorProp("Latitude", particleEmitter2.Latitude, null) + generateAnimVectorProp("Gravity", particleEmitter2.Gravity, null) + generateAnimVectorProp("EmissionRate", particleEmitter2.EmissionRate, null) + generateAnimVectorProp("Width", particleEmitter2.Width, null) + generateAnimVectorProp("Length", particleEmitter2.Length, null) + generateAnimVectorProp("Visibility", particleEmitter2.Visibility, 1) + generateSegmentColor(particleEmitter2.SegmentColor) + generateUIntArrayProp("Alpha", particleEmitter2.Alpha) + generateFloatArrayProp("ParticleScaling", particleEmitter2.ParticleScaling) + generateFloatArrayProp("LifeSpanUVAnim", particleEmitter2.LifeSpanUVAnim) + generateFloatArrayProp("DecayUVAnim", particleEmitter2.DecayUVAnim) + generateFloatArrayProp("TailUVAnim", particleEmitter2.TailUVAnim) + generateFloatArrayProp("TailDecayUVAnim", particleEmitter2.TailDecayUVAnim) + generateIntPropIfNotEmpty("Rows", particleEmitter2.Rows, 0) + generateIntPropIfNotEmpty("Columns", particleEmitter2.Columns, 0) + generateIntProp("TextureID", particleEmitter2.TextureID) + generateIntPropIfNotEmpty("Time", particleEmitter2.Time, 0) + generateIntPropIfNotEmpty("LifeSpan", particleEmitter2.LifeSpan, 0) + generateIntPropIfNotEmpty("TailLength", particleEmitter2.TailLength, 0) + generateIntPropIfNotEmpty("PriorityPlane", particleEmitter2.PriorityPlane, 0) + generateIntPropIfNotEmpty("ReplaceableId", particleEmitter2.ReplaceableId, null) + (particleEmitter2.Flags & ParticleEmitter2Flags.SortPrimsFarZ ? generateBooleanProp("SortPrimsFarZ") : "") + (particleEmitter2.Flags & ParticleEmitter2Flags.LineEmitter ? generateBooleanProp("LineEmitter") : "") + (particleEmitter2.Flags & ParticleEmitter2Flags.ModelSpace ? generateBooleanProp("ModelSpace") : "") + (particleEmitter2.Flags & ParticleEmitter2Flags.Unshaded ? generateBooleanProp("Unshaded") : "") + (particleEmitter2.Flags & ParticleEmitter2Flags.Unfogged ? generateBooleanProp("Unfogged") : "") + (particleEmitter2.Flags & ParticleEmitter2Flags.XYQuad ? generateBooleanProp("XYQuad") : "") + (particleEmitter2.Squirt ? generateBooleanProp("Squirt") : "") + generateBooleanProp(generateParticleEmitter2FrameFlags(particleEmitter2.FrameFlags)) + generateBlockEnd();
}
function generateRibbonEmitters$1(model) {
	return model.RibbonEmitters.map(generateRibbonEmitterChunk).join("");
}
function generateRibbonEmitterChunk(ribbonEmitter) {
	return generateBlockStart("RibbonEmitter", ribbonEmitter.Name) + generateNodeProps(ribbonEmitter) + generateAnimVectorProp("HeightAbove", ribbonEmitter.HeightAbove, null) + generateAnimVectorProp("HeightBelow", ribbonEmitter.HeightBelow, null) + generateAnimVectorProp("Alpha", ribbonEmitter.Alpha, null) + generateColorProp("Color", ribbonEmitter.Color, true) + generateAnimVectorProp("TextureSlot", ribbonEmitter.TextureSlot, null) + generateAnimVectorProp("Visibility", ribbonEmitter.Visibility, 1) + generateIntProp("EmissionRate", ribbonEmitter.EmissionRate) + generateIntProp("LifeSpan", ribbonEmitter.LifeSpan) + generateIntPropIfNotEmpty("Gravity", ribbonEmitter.Gravity, 0) + generateIntProp("Rows", ribbonEmitter.Rows) + generateIntProp("Columns", ribbonEmitter.Columns) + generateIntProp("MaterialID", ribbonEmitter.MaterialID) + generateBlockEnd();
}
function generateEventObjects$1(model) {
	return model.EventObjects.map(generateEventObjectChunk).join("");
}
function generateEventTrack(eventTrack) {
	let middle = "";
	for (let i = 0; i < eventTrack.length; ++i) middle += generateTab(2) + eventTrack[i] + ",\n";
	return generateBlockStart("EventTrack", eventTrack.length, 1) + middle + generateBlockEnd(1);
}
function generateEventObjectChunk(eventObject) {
	return generateBlockStart("EventObject", eventObject.Name) + generateNodeProps(eventObject) + generateEventTrack(eventObject.EventTrack) + generateBlockEnd();
}
function generateCameras$1(model) {
	return model.Cameras.map(generateCameraChunk).join("");
}
function generateCameraChunk(camera) {
	return generateBlockStart("Camera", camera.Name) + generateFloatProp("FieldOfView", camera.FieldOfView) + generateFloatProp("FarClip", camera.FarClip) + generateFloatProp("NearClip", camera.NearClip) + generateFloatArrayProp("Position", camera.Position) + generateAnimVectorProp("Translation", camera.Translation) + generateAnimVectorProp("Rotation", camera.Rotation) + generateBlockStart("Target", null, 1) + generateFloatArrayProp("Position", camera.TargetPosition, null, 2) + generateAnimVectorProp("Translation", camera.TargetTranslation, null, 2) + generateBlockEnd(1) + generateBlockEnd();
}
function generateCollisionShapes$1(model) {
	return model.CollisionShapes.map(generateCollisionShapeChunk).join("");
}
function generateCollisionShapeChunk(collisionShape) {
	let middle;
	if (collisionShape.Shape === CollisionShapeType.Box) {
		middle = generateBooleanProp("Box");
		middle += generateBlockStart("Vertices", 2, 1) + generateTab(2) + generateArray(collisionShape.Vertices.slice(0, 3)) + ",\n" + generateTab(2) + generateArray(collisionShape.Vertices.slice(3, 6)) + ",\n" + generateBlockEnd(1);
	} else {
		middle = generateBooleanProp("Sphere");
		middle += generateBlockStart("Vertices", 1, 1) + generateTab(2) + generateArray(collisionShape.Vertices) + ",\n" + generateBlockEnd(1) + generateFloatProp("BoundsRadius", collisionShape.BoundsRadius);
	}
	return generateBlockStart("CollisionShape", collisionShape.Name) + generateNodeProps(collisionShape) + middle + generateBlockEnd();
}
function generateFaceFX$1(model) {
	if (model.Version < 900 || !model.FaceFX) return "";
	return model.FaceFX.map(generateFaceFXChunk).join("");
}
function generateFaceFXChunk(faceFX) {
	return generateBlockStart("FaceFX", faceFX.Name) + generateWrappedStringProp("Path", faceFX.Path) + generateBlockEnd();
}
function generateBindPose(model) {
	if (model.Version < 900 || !model.BindPoses) return "";
	return model.BindPoses.map(generateBindPoseChunk).join("");
}
function generateBindPoseChunk(bindPose) {
	const middle = generateBlockStart("Matrices", bindPose.Matrices.length, 1) + bindPose.Matrices.map((item) => {
		return generateTab(2) + generateArray(item) + ",";
	}).join("\n") + "\n" + generateBlockEnd(1);
	return generateBlockStart("BindPose") + middle + generateBlockEnd();
}
function generateParticleEmitterPopcorn(model) {
	if (model.Version < 900 || !model.ParticleEmitterPopcorns) return "";
	return model.ParticleEmitterPopcorns.map(generateParticleEmitterPopcornChunk).join("");
}
function generateParticleEmitterPopcornChunk(emitter) {
	return generateBlockStart("ParticleEmitterPopcorn", emitter.Name) + generateNodeProps(emitter) + (emitter.Flags & ParticleEmitterPopcornFlags.Unshaded ? generateBooleanProp("Unshaded") : "") + (emitter.Flags & ParticleEmitterPopcornFlags.SortPrimsFarZ ? generateBooleanProp("SortPrimsFarZ") : "") + (emitter.Flags & ParticleEmitterPopcornFlags.Unfogged ? generateBooleanProp("Unfogged") : "") + generateAnimVectorProp("LifeSpan", emitter.LifeSpan, null) + generateAnimVectorProp("EmissionRate", emitter.EmissionRate, 0) + generateAnimVectorProp("Speed", emitter.Speed, 0) + generateColorProp("Color", emitter.Color, true) + generateAnimVectorProp("Alpha", emitter.Alpha, 1) + generateIntPropIfNotEmpty("ReplaceableId", emitter.ReplaceableId, 0, null) + generateWrappedStringProp("Path", emitter.Path, false) + generateWrappedStringProp("AnimVisibilityGuide", emitter.AnimVisibilityGuide, false) + generateAnimVectorProp("Visibility", emitter.Visibility) + generateBlockEnd();
}
var generators$1 = [
	generateVersion$1,
	generateModel,
	generateSequences$1,
	generateGlobalSequences$1,
	generateTextures$1,
	generateMaterials$1,
	generateTextureAnims$1,
	generateGeosets$1,
	generateGeosetAnims$1,
	generateBones$1,
	generateLights$1,
	generateHelpers$1,
	generateAttachments$1,
	generatePivotPoints$1,
	generateParticleEmitters$1,
	generateParticleEmitters2$1,
	generateRibbonEmitters$1,
	generateEventObjects$1,
	generateCameras$1,
	generateCollisionShapes$1,
	generateFaceFX$1,
	generateBindPose,
	generateParticleEmitterPopcorn
];
function generate(model) {
	let res = "";
	for (const generator of generators$1) res += generator(model);
	return res;
}
//#endregion
//#region mdx/generate.ts
var BIG_ENDIAN = true;
var NONE = -1;
var Stream = class {
	constructor(arrayBuffer) {
		this.ab = arrayBuffer;
		this.uint = new Uint8Array(this.ab);
		this.view = new DataView(this.ab);
		this.pos = 0;
	}
	keyword(keyword) {
		this.uint[this.pos] = keyword.charCodeAt(0);
		this.uint[this.pos + 1] = keyword.charCodeAt(1);
		this.uint[this.pos + 2] = keyword.charCodeAt(2);
		this.uint[this.pos + 3] = keyword.charCodeAt(3);
		this.pos += 4;
	}
	uint8(num) {
		this.view.setUint8(this.pos, num);
		this.pos += 1;
	}
	uint16(num) {
		this.view.setUint16(this.pos, num, BIG_ENDIAN);
		this.pos += 2;
	}
	int32(num) {
		this.view.setInt32(this.pos, num, BIG_ENDIAN);
		this.pos += 4;
	}
	uint32(num) {
		this.view.setUint32(this.pos, num, BIG_ENDIAN);
		this.pos += 4;
	}
	float32(num) {
		this.view.setFloat32(this.pos, num, BIG_ENDIAN);
		this.pos += 4;
	}
	float32Array(arr) {
		for (let i = 0; i < arr.length; ++i) this.float32(arr[i]);
	}
	uint8Array(arr) {
		for (let i = 0; i < arr.length; ++i) this.uint8(arr[i]);
	}
	uint16Array(arr) {
		for (let i = 0; i < arr.length; ++i) this.uint16(arr[i]);
	}
	int32Array(arr) {
		for (let i = 0; i < arr.length; ++i) this.int32(arr[i]);
	}
	uint32Array(arr) {
		for (let i = 0; i < arr.length; ++i) this.uint32(arr[i]);
	}
	str(str, len) {
		for (let i = 0; i < len; ++i, ++this.pos) this.uint[this.pos] = i < str.length ? str.charCodeAt(i) : 0;
	}
	animVector(animVector, type) {
		const isInt = type === AnimVectorType.INT1;
		this.int32(animVector.Keys.length);
		this.int32(animVector.LineType);
		this.int32(animVector.GlobalSeqId !== null ? animVector.GlobalSeqId : NONE);
		for (const keyFrame of animVector.Keys) {
			this.int32(keyFrame.Frame);
			if (isInt) this.int32Array(keyFrame.Vector);
			else this.float32Array(keyFrame.Vector);
			if (animVector.LineType === LineType.Hermite || animVector.LineType === LineType.Bezier) if (isInt) {
				this.int32Array(keyFrame.InTan);
				this.int32Array(keyFrame.OutTan);
			} else {
				this.float32Array(keyFrame.InTan);
				this.float32Array(keyFrame.OutTan);
			}
		}
	}
};
function generateExtent(obj, stream) {
	stream.float32(obj.BoundsRadius || 0);
	for (const key of ["MinimumExtent", "MaximumExtent"]) stream.float32Array(obj[key]);
}
var AnimVectorType = /* @__PURE__ */ function(AnimVectorType) {
	AnimVectorType[AnimVectorType["INT1"] = 0] = "INT1";
	AnimVectorType[AnimVectorType["FLOAT1"] = 1] = "FLOAT1";
	AnimVectorType[AnimVectorType["FLOAT3"] = 2] = "FLOAT3";
	AnimVectorType[AnimVectorType["FLOAT4"] = 3] = "FLOAT4";
	return AnimVectorType;
}(AnimVectorType || {});
var animVectorSize = {
	[AnimVectorType.INT1]: 1,
	[AnimVectorType.FLOAT1]: 1,
	[AnimVectorType.FLOAT3]: 3,
	[AnimVectorType.FLOAT4]: 4
};
function byteLengthAnimVector(animVector, type) {
	return 12 + animVector.Keys.length * (4 + 4 * animVectorSize[type] * (animVector.LineType === LineType.Hermite || animVector.LineType === LineType.Bezier ? 3 : 1));
}
function sum(arr) {
	return arr.reduce((a, b) => {
		return a + b;
	}, 0);
}
function byteLengthVersion() {
	return 12;
}
function generateVersion(model, stream) {
	stream.keyword("VERS");
	stream.int32(4);
	stream.int32(model.Version);
}
var MODEL_NAME_LENGTH = 336;
function byteLengthModelInfo() {
	return 8 + MODEL_NAME_LENGTH + 4 + 28 + 4;
}
function generateModelInfo(model, stream) {
	stream.keyword("MODL");
	stream.int32(byteLengthModelInfo() - 8);
	stream.str(model.Info.Name, MODEL_NAME_LENGTH);
	stream.int32(0);
	generateExtent(model.Info, stream);
	stream.int32(model.Info.BlendTime);
}
var MODEL_SEQUENCE_NAME_LENGTH = 80;
function byteLengthSequence() {
	return MODEL_SEQUENCE_NAME_LENGTH + 8 + 4 + 4 + 4 + 4 + 28;
}
function byteLengthSequences(model) {
	if (!model.Sequences.length) return 0;
	return 8 + sum(model.Sequences.map(byteLengthSequence));
}
function generateSequences(model, stream) {
	if (!model.Sequences.length) return;
	stream.keyword("SEQS");
	stream.int32(byteLengthSequences(model) - 8);
	for (const sequence of model.Sequences) {
		stream.str(sequence.Name, MODEL_SEQUENCE_NAME_LENGTH);
		stream.int32(sequence.Interval[0]);
		stream.int32(sequence.Interval[1]);
		stream.float32(sequence.MoveSpeed);
		stream.int32(sequence.NonLooping ? 1 : 0);
		stream.float32(sequence.Rarity);
		stream.int32(0);
		generateExtent(sequence, stream);
	}
}
function byteLengthGlobalSequences(model) {
	if (!model.GlobalSequences || !model.GlobalSequences.length) return 0;
	return 8 + 4 * model.GlobalSequences.length;
}
function generateGlobalSequences(model, stream) {
	if (!model.GlobalSequences || !model.GlobalSequences.length) return;
	stream.keyword("GLBS");
	stream.int32(model.GlobalSequences.length * 4);
	for (const duration of model.GlobalSequences) stream.int32(duration);
}
function byteLengthLayer(model, layer) {
	return 28 + (model.Version >= 900 ? 4 : 0) + (model.Version >= 1e3 ? 20 : 0) + (model.Version >= 1100 ? 8 + LAYER_TEXTURE_ID_MAP.reduce((acc, name) => {
		return acc + (typeof layer[name] !== "undefined" ? 8 + (typeof layer[name] === "object" ? 4 + byteLengthAnimVector(layer[name], AnimVectorType.INT1) : 0) : 0);
	}, 0) : 0) + (layer.Alpha !== null && typeof layer.Alpha !== "number" ? 4 + byteLengthAnimVector(layer.Alpha, AnimVectorType.FLOAT1) : 0) + (model.Version < 1100 && layer.TextureID !== null && typeof layer.TextureID !== "number" ? 4 + byteLengthAnimVector(layer.TextureID, AnimVectorType.INT1) : 0) + (model.Version >= 900 && layer.EmissiveGain !== void 0 && layer.EmissiveGain !== null && typeof layer.EmissiveGain !== "number" ? 4 + byteLengthAnimVector(layer.EmissiveGain, AnimVectorType.FLOAT1) : 0) + (model.Version >= 1e3 && layer.FresnelColor !== void 0 && layer.FresnelColor !== null && !(layer.FresnelColor instanceof Float32Array) ? 4 + byteLengthAnimVector(layer.FresnelColor, AnimVectorType.FLOAT3) : 0) + (model.Version >= 1e3 && layer.FresnelOpacity !== void 0 && layer.FresnelOpacity !== null && typeof layer.FresnelOpacity !== "number" ? 4 + byteLengthAnimVector(layer.FresnelOpacity, AnimVectorType.FLOAT1) : 0) + (model.Version >= 1e3 && layer.FresnelTeamColor !== void 0 && layer.FresnelTeamColor !== null && typeof layer.FresnelTeamColor !== "number" ? 4 + byteLengthAnimVector(layer.FresnelTeamColor, AnimVectorType.FLOAT1) : 0);
}
function byteLengthMaterial(model, material) {
	return 20 + (model.Version >= 900 && model.Version < 1100 ? 80 : 0) + sum(material.Layers.map((layer) => byteLengthLayer(model, layer)));
}
function byteLengthMaterials(model) {
	if (!model.Materials.length) return 0;
	return 8 + sum(model.Materials.map((material) => byteLengthMaterial(model, material)));
}
function generateMaterials(model, stream) {
	if (!model.Materials.length) return;
	stream.keyword("MTLS");
	stream.int32(byteLengthMaterials(model) - 8);
	for (const material of model.Materials) {
		stream.int32(byteLengthMaterial(model, material));
		stream.int32(material.PriorityPlane);
		stream.int32(material.RenderMode);
		if (model.Version >= 900 && model.Version < 1100) stream.str(material.Shader || "", 80);
		stream.keyword("LAYS");
		stream.int32(material.Layers.length);
		for (const layer of material.Layers) {
			stream.int32(byteLengthLayer(model, layer));
			stream.int32(layer.FilterMode);
			stream.int32(layer.Shading);
			stream.int32(model.Version < 1100 && typeof layer.TextureID === "number" ? layer.TextureID : 0);
			stream.int32(layer.TVertexAnimId !== null ? layer.TVertexAnimId : NONE);
			stream.int32(layer.CoordId);
			stream.float32(typeof layer.Alpha === "number" ? layer.Alpha : 1);
			if (model.Version >= 900) {
				stream.float32(typeof layer.EmissiveGain === "number" ? layer.EmissiveGain : 1);
				if (model.Version >= 1e3) {
					stream.float32Array(layer.FresnelColor instanceof Float32Array ? layer.FresnelColor : new Float32Array([
						1,
						1,
						1
					]));
					stream.float32(typeof layer.FresnelOpacity === "number" ? layer.FresnelOpacity : 0);
					stream.float32(typeof layer.FresnelTeamColor === "number" ? layer.FresnelTeamColor : 0);
				}
			}
			if (model.Version >= 1100) {
				stream.int32(layer.ShaderTypeId || 0);
				const textures = LAYER_TEXTURE_ID_MAP.filter((name) => layer[name] !== void 0).length;
				stream.int32(textures);
				for (let i = 0; i < LAYER_TEXTURE_ID_MAP.length; ++i) {
					const id = layer[LAYER_TEXTURE_ID_MAP[i]];
					if (id === void 0) continue;
					stream.int32(typeof id === "number" ? id : 0);
					stream.int32(typeof id === "number" ? i : 0);
					if (typeof id === "object") {
						stream.keyword("KMTF");
						stream.animVector(id, AnimVectorType.INT1);
					}
				}
			}
			if (layer.Alpha && typeof layer.Alpha !== "number") {
				stream.keyword("KMTA");
				stream.animVector(layer.Alpha, AnimVectorType.FLOAT1);
			}
			if (model.Version < 1100 && layer.TextureID && typeof layer.TextureID !== "number") {
				stream.keyword("KMTF");
				stream.animVector(layer.TextureID, AnimVectorType.INT1);
			}
			if (model.Version >= 900 && layer.EmissiveGain && typeof layer.EmissiveGain !== "number") {
				stream.keyword("KMTE");
				stream.animVector(layer.EmissiveGain, AnimVectorType.FLOAT1);
			}
			if (model.Version >= 1e3 && layer.FresnelColor && !(layer.FresnelColor instanceof Float32Array)) {
				stream.keyword("KFC3");
				stream.animVector(layer.FresnelColor, AnimVectorType.FLOAT3);
			}
			if (model.Version >= 1e3 && layer.FresnelOpacity && typeof layer.FresnelOpacity !== "number") {
				stream.keyword("KFCA");
				stream.animVector(layer.FresnelOpacity, AnimVectorType.FLOAT1);
			}
			if (model.Version >= 1e3 && layer.FresnelTeamColor && typeof layer.FresnelTeamColor !== "number") {
				stream.keyword("KFTC");
				stream.animVector(layer.FresnelTeamColor, AnimVectorType.FLOAT1);
			}
		}
	}
}
var MODEL_TEXTURE_PATH_LENGTH = 256;
function byteLengthTexture() {
	return 4 + MODEL_TEXTURE_PATH_LENGTH + 4 + 4;
}
function byteLengthTextures(model) {
	if (!model.Textures.length) return 0;
	return 8 + sum(model.Textures.map((_texture) => byteLengthTexture()));
}
function generateTextures(model, stream) {
	if (!model.Textures.length) return;
	stream.keyword("TEXS");
	stream.int32(byteLengthTextures(model) - 8);
	for (const texture of model.Textures) {
		stream.int32(texture.ReplaceableId);
		stream.str(texture.Image, MODEL_TEXTURE_PATH_LENGTH);
		stream.int32(0);
		stream.int32(texture.Flags);
	}
}
function byteLengthTextureAnim(anim) {
	return 4 + (anim.Translation ? 4 + byteLengthAnimVector(anim.Translation, AnimVectorType.FLOAT3) : 0) + (anim.Rotation ? 4 + byteLengthAnimVector(anim.Rotation, AnimVectorType.FLOAT4) : 0) + (anim.Scaling ? 4 + byteLengthAnimVector(anim.Scaling, AnimVectorType.FLOAT3) : 0);
}
function byteLengthTextureAnims(model) {
	if (!model.TextureAnims || !model.TextureAnims.length) return 0;
	return 8 + sum(model.TextureAnims.map((anim) => byteLengthTextureAnim(anim)));
}
function generateTextureAnims(model, stream) {
	if (!model.TextureAnims || !model.TextureAnims.length) return;
	stream.keyword("TXAN");
	stream.int32(byteLengthTextureAnims(model) - 8);
	for (const anim of model.TextureAnims) {
		stream.int32(byteLengthTextureAnim(anim));
		if (anim.Translation) {
			stream.keyword("KTAT");
			stream.animVector(anim.Translation, AnimVectorType.FLOAT3);
		}
		if (anim.Rotation) {
			stream.keyword("KTAR");
			stream.animVector(anim.Rotation, AnimVectorType.FLOAT4);
		}
		if (anim.Scaling) {
			stream.keyword("KTAS");
			stream.animVector(anim.Scaling, AnimVectorType.FLOAT3);
		}
	}
}
function byteLengthGeoset(model, geoset) {
	return 12 + 4 * geoset.Vertices.length + 4 + 4 + 4 * geoset.Normals.length + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 2 * geoset.Faces.length + 4 + 4 + geoset.VertexGroup.length + 4 + 4 + 4 * geoset.Groups.length + 4 + 4 + 4 * geoset.TotalGroupsCount + 4 + 4 + 4 + (model.Version >= 900 ? 84 : 0) + (model.Version >= 900 && geoset.Tangents?.length ? 8 + 4 * geoset.Tangents.length : 0) + (model.Version >= 900 && geoset.SkinWeights?.length ? 8 + geoset.SkinWeights.length : 0) + 28 + 4 + 28 * geoset.Anims.length + 4 + 4 + sum(geoset.TVertices.map((tvertices) => 8 + 4 * tvertices.length));
}
function byteLengthGeosets(model) {
	if (!model.Geosets.length) return 0;
	return 8 + sum(model.Geosets.map((geoset) => byteLengthGeoset(model, geoset)));
}
function generateGeosets(model, stream) {
	if (!model.Geosets.length) return;
	stream.keyword("GEOS");
	stream.int32(byteLengthGeosets(model) - 8);
	for (const geoset of model.Geosets) {
		stream.int32(byteLengthGeoset(model, geoset));
		stream.keyword("VRTX");
		stream.int32(geoset.Vertices.length / 3);
		stream.float32Array(geoset.Vertices);
		stream.keyword("NRMS");
		stream.int32(geoset.Normals.length / 3);
		stream.float32Array(geoset.Normals);
		stream.keyword("PTYP");
		stream.int32(1);
		stream.int32(4);
		stream.keyword("PCNT");
		stream.int32(1);
		stream.int32(geoset.Faces.length);
		stream.keyword("PVTX");
		stream.int32(geoset.Faces.length);
		stream.uint16Array(geoset.Faces);
		stream.keyword("GNDX");
		stream.int32(geoset.VertexGroup.length);
		stream.uint8Array(geoset.VertexGroup);
		stream.keyword("MTGC");
		stream.int32(geoset.Groups.length);
		for (let i = 0; i < geoset.Groups.length; ++i) stream.int32(geoset.Groups[i].length);
		stream.keyword("MATS");
		stream.int32(geoset.TotalGroupsCount);
		for (const group of geoset.Groups) for (const index of group) stream.int32(index);
		stream.int32(geoset.MaterialID);
		stream.int32(geoset.SelectionGroup);
		stream.int32(geoset.Unselectable ? 4 : 0);
		if (model.Version >= 900) {
			stream.int32(typeof geoset.LevelOfDetail === "number" ? geoset.LevelOfDetail : -1);
			stream.str(geoset.Name || "", 80);
		}
		generateExtent(geoset, stream);
		stream.int32(geoset.Anims.length);
		for (const anim of geoset.Anims) generateExtent(anim, stream);
		if (model.Version >= 900) {
			if (geoset.Tangents && geoset.Tangents.length) {
				stream.keyword("TANG");
				stream.int32(geoset.Tangents.length / 4);
				stream.float32Array(geoset.Tangents);
			}
			if (geoset.SkinWeights && geoset.SkinWeights.length) {
				stream.keyword("SKIN");
				stream.int32(geoset.SkinWeights.length);
				stream.uint8Array(geoset.SkinWeights);
			}
		}
		stream.keyword("UVAS");
		stream.int32(geoset.TVertices.length);
		for (const tvertices of geoset.TVertices) {
			stream.keyword("UVBS");
			stream.int32(tvertices.length / 2);
			stream.float32Array(tvertices);
		}
	}
}
function byteLengthGeosetAnim(anim) {
	return 28 + (typeof anim.Alpha !== "number" ? 4 + byteLengthAnimVector(anim.Alpha, AnimVectorType.FLOAT1) : 0) + (anim.Color && !(anim.Color instanceof Float32Array) ? 4 + byteLengthAnimVector(anim.Color, AnimVectorType.FLOAT3) : 0);
}
function byteLengthGeosetAnims(model) {
	if (!model.GeosetAnims.length) return 0;
	return 8 + sum(model.GeosetAnims.map((anim) => byteLengthGeosetAnim(anim)));
}
function generateGeosetAnims(model, stream) {
	if (!model.GeosetAnims.length) return;
	stream.keyword("GEOA");
	stream.int32(byteLengthGeosetAnims(model) - 8);
	for (const anim of model.GeosetAnims) {
		stream.int32(byteLengthGeosetAnim(anim));
		stream.float32(typeof anim.Alpha === "number" ? anim.Alpha : 1);
		stream.int32(anim.Flags);
		if (anim.Color && anim.Color instanceof Float32Array) {
			stream.float32(anim.Color[0]);
			stream.float32(anim.Color[1]);
			stream.float32(anim.Color[2]);
		} else {
			stream.float32(1);
			stream.float32(1);
			stream.float32(1);
		}
		stream.int32(anim.GeosetId !== null ? anim.GeosetId : NONE);
		if (anim.Alpha !== null && typeof anim.Alpha !== "number") {
			stream.keyword("KGAO");
			stream.animVector(anim.Alpha, AnimVectorType.FLOAT1);
		}
		if (anim.Color && !(anim.Color instanceof Float32Array)) {
			stream.keyword("KGAC");
			stream.animVector(anim.Color, AnimVectorType.FLOAT3);
		}
	}
}
var MODEL_NODE_NAME_LENGTH = 80;
function byteLengthNode(node) {
	return 4 + MODEL_NODE_NAME_LENGTH + 4 + 4 + 4 + (node.Translation ? 4 + byteLengthAnimVector(node.Translation, AnimVectorType.FLOAT3) : 0) + (node.Rotation ? 4 + byteLengthAnimVector(node.Rotation, AnimVectorType.FLOAT4) : 0) + (node.Scaling ? 4 + byteLengthAnimVector(node.Scaling, AnimVectorType.FLOAT3) : 0);
}
function byteLengthBone(bone) {
	return byteLengthNode(bone) + 4 + 4;
}
function byteLengthBones(model) {
	if (!model.Bones.length) return 0;
	return 8 + sum(model.Bones.map(byteLengthBone));
}
function generateNode(node, stream) {
	stream.int32(byteLengthNode(node));
	stream.str(node.Name, MODEL_NODE_NAME_LENGTH);
	stream.int32(node.ObjectId !== null ? node.ObjectId : NONE);
	stream.int32(node.Parent !== null ? node.Parent : NONE);
	stream.int32(node.Flags);
	if (node.Translation) {
		stream.keyword("KGTR");
		stream.animVector(node.Translation, AnimVectorType.FLOAT3);
	}
	if (node.Rotation) {
		stream.keyword("KGRT");
		stream.animVector(node.Rotation, AnimVectorType.FLOAT4);
	}
	if (node.Scaling) {
		stream.keyword("KGSC");
		stream.animVector(node.Scaling, AnimVectorType.FLOAT3);
	}
}
function generateBones(model, stream) {
	if (!model.Bones.length) return;
	stream.keyword("BONE");
	stream.int32(byteLengthBones(model) - 8);
	for (const bone of model.Bones) {
		generateNode(bone, stream);
		stream.int32(bone.GeosetId !== null ? bone.GeosetId : NONE);
		stream.int32(bone.GeosetAnimId !== null ? bone.GeosetAnimId : NONE);
	}
}
function byteLengthLight(light) {
	return 4 + byteLengthNode(light) + 4 + 4 + 4 + 12 + 4 + 12 + 4 + (light.Visibility ? 4 + byteLengthAnimVector(light.Visibility, AnimVectorType.FLOAT1) : 0) + (light.Color && !(light.Color instanceof Float32Array) ? 4 + byteLengthAnimVector(light.Color, AnimVectorType.FLOAT3) : 0) + (light.Intensity && typeof light.Intensity !== "number" ? 4 + byteLengthAnimVector(light.Intensity, AnimVectorType.FLOAT1) : 0) + (light.AttenuationStart && typeof light.AttenuationStart !== "number" ? 4 + byteLengthAnimVector(light.AttenuationStart, AnimVectorType.FLOAT1) : 0) + (light.AttenuationEnd && typeof light.AttenuationEnd !== "number" ? 4 + byteLengthAnimVector(light.AttenuationEnd, AnimVectorType.FLOAT1) : 0) + (light.AmbColor && !(light.AmbColor instanceof Float32Array) ? 4 + byteLengthAnimVector(light.AmbColor, AnimVectorType.FLOAT3) : 0) + (light.AmbIntensity && typeof light.AmbIntensity !== "number" ? 4 + byteLengthAnimVector(light.AmbIntensity, AnimVectorType.FLOAT1) : 0);
}
function byteLengthLights(model) {
	if (!model.Lights.length) return 0;
	return 8 + sum(model.Lights.map(byteLengthLight));
}
function generateLights(model, stream) {
	if (!model.Lights.length) return;
	stream.keyword("LITE");
	stream.int32(byteLengthLights(model) - 8);
	for (const light of model.Lights) {
		stream.int32(byteLengthLight(light));
		generateNode(light, stream);
		stream.int32(light.LightType);
		stream.float32(typeof light.AttenuationStart === "number" ? light.AttenuationStart : 0);
		stream.float32(typeof light.AttenuationEnd === "number" ? light.AttenuationEnd : 0);
		if (light.Color instanceof Float32Array) {
			stream.float32(light.Color[0]);
			stream.float32(light.Color[1]);
			stream.float32(light.Color[2]);
		} else {
			stream.float32(1);
			stream.float32(1);
			stream.float32(1);
		}
		stream.float32(typeof light.Intensity === "number" ? light.Intensity : 0);
		if (light.AmbColor instanceof Float32Array) {
			stream.float32(light.AmbColor[0]);
			stream.float32(light.AmbColor[1]);
			stream.float32(light.AmbColor[2]);
		} else {
			stream.float32(1);
			stream.float32(1);
			stream.float32(1);
		}
		stream.float32(typeof light.AmbIntensity === "number" ? light.AmbIntensity : 0);
		if (light.Intensity && typeof light.Intensity !== "number") {
			stream.keyword("KLAI");
			stream.animVector(light.Intensity, AnimVectorType.FLOAT1);
		}
		if (light.Visibility) {
			stream.keyword("KLAV");
			stream.animVector(light.Visibility, AnimVectorType.FLOAT1);
		}
		if (light.Color && !(light.Color instanceof Float32Array)) {
			stream.keyword("KLAC");
			stream.animVector(light.Color, AnimVectorType.FLOAT3);
		}
		if (light.AmbColor && !(light.AmbColor instanceof Float32Array)) {
			stream.keyword("KLBC");
			stream.animVector(light.AmbColor, AnimVectorType.FLOAT3);
		}
		if (light.AmbIntensity && typeof light.AmbIntensity !== "number") {
			stream.keyword("KLBI");
			stream.animVector(light.AmbIntensity, AnimVectorType.FLOAT1);
		}
		if (light.AttenuationStart && typeof light.AttenuationStart !== "number") {
			stream.keyword("KLAS");
			stream.animVector(light.AttenuationStart, AnimVectorType.INT1);
		}
		if (light.AttenuationEnd && typeof light.AttenuationEnd !== "number") {
			stream.keyword("KLAE");
			stream.animVector(light.AttenuationEnd, AnimVectorType.INT1);
		}
	}
}
function byteLengthHelpers(model) {
	if (model.Helpers.length === 0) return 0;
	return 8 + sum(model.Helpers.map(byteLengthNode));
}
function generateHelpers(model, stream) {
	if (model.Helpers.length === 0) return;
	stream.keyword("HELP");
	stream.int32(byteLengthHelpers(model) - 8);
	for (const helper of model.Helpers) generateNode(helper, stream);
}
var MODEL_ATTACHMENT_PATH_LENGTH = 256;
function byteLengthAttachment(attachment) {
	return 4 + byteLengthNode(attachment) + MODEL_ATTACHMENT_PATH_LENGTH + 4 + 4 + (attachment.Visibility ? 4 + byteLengthAnimVector(attachment.Visibility, AnimVectorType.FLOAT1) : 0);
}
function byteLengthAttachments(model) {
	if (model.Attachments.length === 0) return 0;
	return 8 + sum(model.Attachments.map(byteLengthAttachment));
}
function generateAttachments(model, stream) {
	if (model.Attachments.length === 0) return;
	stream.keyword("ATCH");
	stream.int32(byteLengthAttachments(model) - 8);
	for (const attachment of model.Attachments) {
		stream.int32(byteLengthAttachment(attachment));
		generateNode(attachment, stream);
		stream.str(attachment.Path || "", MODEL_ATTACHMENT_PATH_LENGTH);
		stream.int32(0);
		stream.int32(attachment.AttachmentID);
		if (attachment.Visibility) {
			stream.keyword("KATV");
			stream.animVector(attachment.Visibility, AnimVectorType.FLOAT1);
		}
	}
}
function byteLengthPivotPoints(model) {
	if (!model.PivotPoints.length) return 0;
	return 8 + 12 * model.PivotPoints.length;
}
function generatePivotPoints(model, stream) {
	if (!model.PivotPoints.length) return;
	stream.keyword("PIVT");
	stream.int32(model.PivotPoints.length * 4 * 3);
	for (const point of model.PivotPoints) stream.float32Array(point);
}
var MODEL_PARTICLE_EMITTER_PATH_LENGTH = 256;
function byteLengthParticleEmitter(emitter) {
	return 4 + byteLengthNode(emitter) + 4 + 4 + 4 + 4 + MODEL_PARTICLE_EMITTER_PATH_LENGTH + 4 + 4 + 4 + (emitter.Visibility && typeof emitter.Visibility !== "number" ? 4 + byteLengthAnimVector(emitter.Visibility, AnimVectorType.FLOAT1) : 0) + (emitter.EmissionRate && typeof emitter.EmissionRate !== "number" ? 4 + byteLengthAnimVector(emitter.EmissionRate, AnimVectorType.FLOAT1) : 0) + (emitter.Gravity && typeof emitter.Gravity !== "number" ? 4 + byteLengthAnimVector(emitter.Gravity, AnimVectorType.FLOAT1) : 0) + (emitter.Longitude && typeof emitter.Longitude !== "number" ? 4 + byteLengthAnimVector(emitter.Longitude, AnimVectorType.FLOAT1) : 0) + (emitter.Latitude && typeof emitter.Latitude !== "number" ? 4 + byteLengthAnimVector(emitter.Latitude, AnimVectorType.FLOAT1) : 0) + (emitter.LifeSpan && typeof emitter.LifeSpan !== "number" ? 4 + byteLengthAnimVector(emitter.LifeSpan, AnimVectorType.FLOAT1) : 0) + (emitter.InitVelocity && typeof emitter.InitVelocity !== "number" ? 4 + byteLengthAnimVector(emitter.InitVelocity, AnimVectorType.FLOAT1) : 0);
}
function byteLengthParticleEmitters(model) {
	if (!model.ParticleEmitters.length) return 0;
	return 8 + sum(model.ParticleEmitters.map(byteLengthParticleEmitter));
}
function generateParticleEmitters(model, stream) {
	if (!model.ParticleEmitters.length) return;
	stream.keyword("PREM");
	stream.int32(byteLengthParticleEmitters(model) - 8);
	for (const emitter of model.ParticleEmitters) {
		stream.int32(byteLengthParticleEmitter(emitter));
		generateNode(emitter, stream);
		stream.float32(typeof emitter.EmissionRate === "number" ? emitter.EmissionRate : 0);
		stream.float32(typeof emitter.Gravity === "number" ? emitter.Gravity : 0);
		stream.float32(typeof emitter.Longitude === "number" ? emitter.Longitude : 0);
		stream.float32(typeof emitter.Latitude === "number" ? emitter.Latitude : 0);
		stream.str(emitter.Path, MODEL_PARTICLE_EMITTER_PATH_LENGTH);
		stream.int32(0);
		stream.float32(typeof emitter.LifeSpan === "number" ? emitter.LifeSpan : 0);
		stream.float32(typeof emitter.InitVelocity === "number" ? emitter.InitVelocity : 0);
		if (emitter.Visibility && typeof emitter.Visibility !== "number") {
			stream.keyword("KPEV");
			stream.animVector(emitter.Visibility, AnimVectorType.FLOAT1);
		}
		if (emitter.EmissionRate && typeof emitter.EmissionRate !== "number") {
			stream.keyword("KPEE");
			stream.animVector(emitter.EmissionRate, AnimVectorType.FLOAT1);
		}
		if (emitter.Gravity && typeof emitter.Gravity !== "number") {
			stream.keyword("KPEG");
			stream.animVector(emitter.Gravity, AnimVectorType.FLOAT1);
		}
		if (emitter.Longitude && typeof emitter.Longitude !== "number") {
			stream.keyword("KPLN");
			stream.animVector(emitter.Longitude, AnimVectorType.FLOAT1);
		}
		if (emitter.Latitude && typeof emitter.Latitude !== "number") {
			stream.keyword("KPLT");
			stream.animVector(emitter.Latitude, AnimVectorType.FLOAT1);
		}
		if (emitter.LifeSpan && typeof emitter.LifeSpan !== "number") {
			stream.keyword("KPEL");
			stream.animVector(emitter.LifeSpan, AnimVectorType.FLOAT1);
		}
		if (emitter.InitVelocity && typeof emitter.InitVelocity !== "number") {
			stream.keyword("KPES");
			stream.animVector(emitter.InitVelocity, AnimVectorType.FLOAT1);
		}
	}
}
function byteLengthParticleEmitter2(emitter) {
	return 4 + byteLengthNode(emitter) + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + 36 + 3 + 12 + 12 + 12 + 12 + 12 + 4 + 4 + 4 + 4 + (emitter.Visibility && typeof emitter.Visibility !== "number" ? 4 + byteLengthAnimVector(emitter.Visibility, AnimVectorType.FLOAT1) : 0) + (emitter.EmissionRate && typeof emitter.EmissionRate !== "number" ? 4 + byteLengthAnimVector(emitter.EmissionRate, AnimVectorType.FLOAT1) : 0) + (emitter.Width && typeof emitter.Width !== "number" ? 4 + byteLengthAnimVector(emitter.Width, AnimVectorType.FLOAT1) : 0) + (emitter.Length && typeof emitter.Length !== "number" ? 4 + byteLengthAnimVector(emitter.Length, AnimVectorType.FLOAT1) : 0) + (emitter.Speed && typeof emitter.Speed !== "number" ? 4 + byteLengthAnimVector(emitter.Speed, AnimVectorType.FLOAT1) : 0) + (emitter.Latitude && typeof emitter.Latitude !== "number" ? 4 + byteLengthAnimVector(emitter.Latitude, AnimVectorType.FLOAT1) : 0) + (emitter.Gravity && typeof emitter.Gravity !== "number" ? 4 + byteLengthAnimVector(emitter.Gravity, AnimVectorType.FLOAT1) : 0) + (emitter.Variation && typeof emitter.Variation !== "number" ? 4 + byteLengthAnimVector(emitter.Variation, AnimVectorType.FLOAT1) : 0);
}
function byteLengthParticleEmitters2(model) {
	if (!model.ParticleEmitters2.length) return 0;
	return 8 + sum(model.ParticleEmitters2.map(byteLengthParticleEmitter2));
}
function generateParticleEmitters2(model, stream) {
	if (!model.ParticleEmitters2.length) return;
	stream.keyword("PRE2");
	stream.int32(byteLengthParticleEmitters2(model) - 8);
	for (const emitter of model.ParticleEmitters2) {
		stream.int32(byteLengthParticleEmitter2(emitter));
		generateNode(emitter, stream);
		stream.float32(typeof emitter.Speed === "number" ? emitter.Speed : 0);
		stream.float32(typeof emitter.Variation === "number" ? emitter.Variation : 0);
		stream.float32(typeof emitter.Latitude === "number" ? emitter.Latitude : 0);
		stream.float32(typeof emitter.Gravity === "number" ? emitter.Gravity : 0);
		stream.float32(emitter.LifeSpan);
		stream.float32(typeof emitter.EmissionRate === "number" ? emitter.EmissionRate : 0);
		stream.float32(typeof emitter.Width === "number" ? emitter.Width : 0);
		stream.float32(typeof emitter.Length === "number" ? emitter.Length : 0);
		stream.int32(emitter.FilterMode);
		stream.int32(emitter.Rows);
		stream.int32(emitter.Columns);
		if (emitter.FrameFlags & ParticleEmitter2FramesFlags.Head && emitter.FrameFlags & ParticleEmitter2FramesFlags.Tail) stream.int32(2);
		else if (emitter.FrameFlags & ParticleEmitter2FramesFlags.Tail) stream.int32(1);
		else if (emitter.FrameFlags & ParticleEmitter2FramesFlags.Head) stream.int32(0);
		stream.float32(emitter.TailLength);
		stream.float32(emitter.Time);
		for (let i = 0; i < 3; ++i) for (let j = 0; j < 3; ++j) stream.float32(emitter.SegmentColor[i][j]);
		for (let i = 0; i < 3; ++i) stream.uint8(emitter.Alpha[i]);
		for (let i = 0; i < 3; ++i) stream.float32(emitter.ParticleScaling[i]);
		for (const part of [
			"LifeSpanUVAnim",
			"DecayUVAnim",
			"TailUVAnim",
			"TailDecayUVAnim"
		]) for (let i = 0; i < 3; ++i) stream.int32(emitter[part][i]);
		stream.int32(emitter.TextureID !== null ? emitter.TextureID : NONE);
		stream.int32(emitter.Squirt ? 1 : 0);
		stream.int32(emitter.PriorityPlane);
		stream.int32(emitter.ReplaceableId);
		if (emitter.Speed && typeof emitter.Speed !== "number") {
			stream.keyword("KP2S");
			stream.animVector(emitter.Speed, AnimVectorType.FLOAT1);
		}
		if (emitter.Latitude && typeof emitter.Latitude !== "number") {
			stream.keyword("KP2L");
			stream.animVector(emitter.Latitude, AnimVectorType.FLOAT1);
		}
		if (emitter.EmissionRate && typeof emitter.EmissionRate !== "number") {
			stream.keyword("KP2E");
			stream.animVector(emitter.EmissionRate, AnimVectorType.FLOAT1);
		}
		if (emitter.Visibility && typeof emitter.Visibility !== "number") {
			stream.keyword("KP2V");
			stream.animVector(emitter.Visibility, AnimVectorType.FLOAT1);
		}
		if (emitter.Length && typeof emitter.Length !== "number") {
			stream.keyword("KP2N");
			stream.animVector(emitter.Length, AnimVectorType.FLOAT1);
		}
		if (emitter.Width && typeof emitter.Width !== "number") {
			stream.keyword("KP2W");
			stream.animVector(emitter.Width, AnimVectorType.FLOAT1);
		}
		if (emitter.Gravity && typeof emitter.Gravity !== "number") {
			stream.keyword("KP2G");
			stream.animVector(emitter.Gravity, AnimVectorType.FLOAT1);
		}
		if (emitter.Variation && typeof emitter.Variation !== "number") {
			stream.keyword("KP2R");
			stream.animVector(emitter.Variation, AnimVectorType.FLOAT1);
		}
	}
}
function byteLengthRibbonEmitter(emitter) {
	return 4 + byteLengthNode(emitter) + 4 + 4 + 4 + 12 + 4 + 4 + 4 + 4 + 4 + 4 + 4 + (emitter.Visibility ? 4 + byteLengthAnimVector(emitter.Visibility, AnimVectorType.FLOAT1) : 0) + (typeof emitter.HeightAbove !== "number" ? 4 + byteLengthAnimVector(emitter.HeightAbove, AnimVectorType.FLOAT1) : 0) + (typeof emitter.HeightBelow !== "number" ? 4 + byteLengthAnimVector(emitter.HeightBelow, AnimVectorType.FLOAT1) : 0) + (typeof emitter.Alpha !== "number" ? 4 + byteLengthAnimVector(emitter.Alpha, AnimVectorType.FLOAT1) : 0) + (typeof emitter.TextureSlot !== "number" ? 4 + byteLengthAnimVector(emitter.TextureSlot, AnimVectorType.FLOAT1) : 0);
}
function byteLengthRibbonEmitters(model) {
	if (!model.RibbonEmitters.length) return 0;
	return 8 + sum(model.RibbonEmitters.map(byteLengthRibbonEmitter));
}
function generateRibbonEmitters(model, stream) {
	if (!model.RibbonEmitters.length) return;
	stream.keyword("RIBB");
	stream.int32(byteLengthRibbonEmitters(model) - 8);
	for (const emitter of model.RibbonEmitters) {
		stream.int32(byteLengthRibbonEmitter(emitter));
		generateNode(emitter, stream);
		stream.float32(typeof emitter.HeightAbove === "number" ? emitter.HeightAbove : 0);
		stream.float32(typeof emitter.HeightBelow === "number" ? emitter.HeightBelow : 0);
		stream.float32(typeof emitter.Alpha === "number" ? emitter.Alpha : 0);
		if (emitter.Color) stream.float32Array(emitter.Color);
		else {
			stream.float32(1);
			stream.float32(1);
			stream.float32(1);
		}
		stream.float32(emitter.LifeSpan);
		stream.int32(typeof emitter.TextureSlot === "number" ? emitter.TextureSlot : 0);
		stream.int32(emitter.EmissionRate);
		stream.int32(emitter.Rows);
		stream.int32(emitter.Columns);
		stream.int32(emitter.MaterialID);
		stream.float32(emitter.Gravity);
		if (emitter.Visibility) {
			stream.keyword("KRVS");
			stream.animVector(emitter.Visibility, AnimVectorType.FLOAT1);
		}
		if (typeof emitter.HeightAbove !== "number") {
			stream.keyword("KRHA");
			stream.animVector(emitter.HeightAbove, AnimVectorType.FLOAT1);
		}
		if (typeof emitter.HeightBelow !== "number") {
			stream.keyword("KRHB");
			stream.animVector(emitter.HeightBelow, AnimVectorType.FLOAT1);
		}
		if (typeof emitter.Alpha !== "number") {
			stream.keyword("KRAL");
			stream.animVector(emitter.Alpha, AnimVectorType.FLOAT1);
		}
		if (typeof emitter.TextureSlot !== "number") {
			stream.keyword("KRTX");
			stream.animVector(emitter.TextureSlot, AnimVectorType.INT1);
		}
	}
}
var MODEL_CAMERA_NAME_LENGTH = 80;
function byteLengthCamera(camera) {
	return 4 + MODEL_CAMERA_NAME_LENGTH + 12 + 4 + 4 + 4 + 12 + (camera.Translation ? 4 + byteLengthAnimVector(camera.Translation, AnimVectorType.FLOAT3) : 0) + (camera.TargetTranslation ? 4 + byteLengthAnimVector(camera.TargetTranslation, AnimVectorType.FLOAT3) : 0) + (camera.Rotation ? 4 + byteLengthAnimVector(camera.Rotation, AnimVectorType.FLOAT1) : 0);
}
function byteLengthCameras(model) {
	if (!model.Cameras.length) return 0;
	return 8 + sum(model.Cameras.map(byteLengthCamera));
}
function generateCameras(model, stream) {
	if (!model.Cameras.length) return;
	stream.keyword("CAMS");
	stream.int32(byteLengthCameras(model) - 8);
	for (const camera of model.Cameras) {
		stream.int32(byteLengthCamera(camera));
		stream.str(camera.Name, MODEL_CAMERA_NAME_LENGTH);
		stream.float32Array(camera.Position);
		stream.float32(camera.FieldOfView);
		stream.float32(camera.FarClip);
		stream.float32(camera.NearClip);
		stream.float32Array(camera.TargetPosition);
		if (camera.Translation) {
			stream.keyword("KCTR");
			stream.animVector(camera.Translation, AnimVectorType.FLOAT3);
		}
		if (camera.Rotation) {
			stream.keyword("KCRL");
			stream.animVector(camera.Rotation, AnimVectorType.FLOAT1);
		}
		if (camera.TargetTranslation) {
			stream.keyword("KTTR");
			stream.animVector(camera.TargetTranslation, AnimVectorType.FLOAT3);
		}
	}
}
function byteLengthEventObject(eventObject) {
	return byteLengthNode(eventObject) + 4 + 4 + 4 + 4 * eventObject.EventTrack.length;
}
function byteLengthEventObjects(model) {
	if (model.EventObjects.length === 0) return 0;
	return 8 + sum(model.EventObjects.map(byteLengthEventObject));
}
function generateEventObjects(model, stream) {
	if (model.EventObjects.length === 0) return;
	stream.keyword("EVTS");
	stream.int32(byteLengthEventObjects(model) - 8);
	for (const eventObject of model.EventObjects) {
		generateNode(eventObject, stream);
		stream.keyword("KEVT");
		stream.int32(eventObject.EventTrack.length);
		stream.int32(NONE);
		stream.uint32Array(eventObject.EventTrack);
	}
}
function byteLengthCollisionShape(collisionShape) {
	return byteLengthNode(collisionShape) + 4 + (collisionShape.Shape === CollisionShapeType.Box ? 6 : 3) * 4 + (collisionShape.Shape === CollisionShapeType.Sphere ? 4 : 0);
}
function byteLengthCollisionShapes(model) {
	if (model.CollisionShapes.length === 0) return 0;
	return 8 + sum(model.CollisionShapes.map(byteLengthCollisionShape));
}
function generateCollisionShapes(model, stream) {
	if (model.CollisionShapes.length === 0) return;
	stream.keyword("CLID");
	stream.int32(byteLengthCollisionShapes(model) - 8);
	for (const collisionShape of model.CollisionShapes) {
		generateNode(collisionShape, stream);
		stream.int32(collisionShape.Shape);
		stream.float32Array(collisionShape.Vertices);
		if (collisionShape.Shape === CollisionShapeType.Sphere) stream.float32(collisionShape.BoundsRadius);
	}
}
function byteLengthFaceFX(model) {
	if (model.Version < 900 || !model.FaceFX) return 0;
	return 8 + 340 * model.FaceFX.length;
}
function generateFaceFX(model, stream) {
	if (model.Version < 900 || !model.FaceFX) return;
	stream.keyword("FAFX");
	stream.int32(byteLengthFaceFX(model) - 8);
	for (const faceFx of model.FaceFX) {
		stream.str(faceFx.Name, 80);
		stream.str(faceFx.Path, 260);
	}
}
function byteLengthBindPoseObject(bindPose) {
	return 48 * bindPose.Matrices.length;
}
function byteLengthBindPoses(model) {
	if (model.Version < 900 || !model.BindPoses) return 0;
	return 12 + sum(model.BindPoses.map(byteLengthBindPoseObject));
}
function generateBindPoses(model, stream) {
	if (model.Version < 900 || !model.BindPoses?.length) return;
	stream.keyword("BPOS");
	stream.int32(byteLengthBindPoses(model) - 8);
	const totalCount = model.BindPoses.reduce((acc, bindPose) => {
		return acc + bindPose.Matrices.length;
	}, 0);
	stream.int32(totalCount);
	for (const bindPose of model.BindPoses) for (const matrix of bindPose.Matrices) stream.float32Array(matrix);
}
function byteLengthParticleEmitterPopcorn(emitter) {
	return 4 + byteLengthNode(emitter) + 4 + 4 + 4 + 12 + 4 + 4 + 260 + 260 + (emitter.Alpha && typeof emitter.Alpha !== "number" ? 4 + byteLengthAnimVector(emitter.Alpha, AnimVectorType.FLOAT1) : 0) + (emitter.Visibility && typeof emitter.Visibility !== "number" ? 4 + byteLengthAnimVector(emitter.Visibility, AnimVectorType.FLOAT1) : 0) + (emitter.EmissionRate && typeof emitter.EmissionRate !== "number" ? 4 + byteLengthAnimVector(emitter.EmissionRate, AnimVectorType.FLOAT1) : 0) + (emitter.Color && !(emitter.Color instanceof Float32Array) ? 4 + byteLengthAnimVector(emitter.Color, AnimVectorType.FLOAT3) : 0) + (emitter.LifeSpan && typeof emitter.LifeSpan !== "number" ? 4 + byteLengthAnimVector(emitter.LifeSpan, AnimVectorType.FLOAT1) : 0) + (emitter.Speed && typeof emitter.Speed !== "number" ? 4 + byteLengthAnimVector(emitter.Speed, AnimVectorType.FLOAT1) : 0);
}
function byteLengthParticleEmitterPopcorns(model) {
	if (model.Version < 900 || !model.ParticleEmitterPopcorns?.length) return 0;
	return 8 + sum(model.ParticleEmitterPopcorns.map(byteLengthParticleEmitterPopcorn));
}
function generateParticleEmitterPopcorns(model, stream) {
	if (model.Version < 900 || !model.ParticleEmitterPopcorns?.length) return;
	stream.keyword("CORN");
	stream.int32(byteLengthParticleEmitterPopcorns(model) - 8);
	for (const emitter of model.ParticleEmitterPopcorns) {
		stream.int32(byteLengthParticleEmitterPopcorn(emitter));
		generateNode(emitter, stream);
		stream.float32(typeof emitter.LifeSpan === "number" ? emitter.LifeSpan : 0);
		stream.float32(typeof emitter.EmissionRate === "number" ? emitter.EmissionRate : 1);
		stream.float32(typeof emitter.Speed === "number" ? emitter.Speed : 0);
		if (emitter.Color instanceof Float32Array) {
			stream.float32(emitter.Color[0]);
			stream.float32(emitter.Color[1]);
			stream.float32(emitter.Color[2]);
		} else {
			stream.float32(1);
			stream.float32(1);
			stream.float32(1);
		}
		stream.float32(typeof emitter.Alpha === "number" ? emitter.Alpha : 1);
		stream.int32(typeof emitter.ReplaceableId === "number" ? emitter.ReplaceableId : 0);
		stream.str(emitter.Path, 260);
		stream.str(emitter.AnimVisibilityGuide, 260);
		if (emitter.Alpha && typeof emitter.Alpha !== "number") {
			stream.keyword("KPPA");
			stream.animVector(emitter.Alpha, AnimVectorType.FLOAT1);
		}
		if (emitter.Color && !(emitter.Color instanceof Float32Array)) {
			stream.keyword("KPPC");
			stream.animVector(emitter.Color, AnimVectorType.FLOAT3);
		}
		if (emitter.EmissionRate && typeof emitter.EmissionRate !== "number") {
			stream.keyword("KPPE");
			stream.animVector(emitter.EmissionRate, AnimVectorType.FLOAT1);
		}
		if (emitter.LifeSpan && typeof emitter.LifeSpan !== "number") {
			stream.keyword("KPPL");
			stream.animVector(emitter.LifeSpan, AnimVectorType.FLOAT1);
		}
		if (emitter.Speed && typeof emitter.Speed !== "number") {
			stream.keyword("KPPS");
			stream.animVector(emitter.Speed, AnimVectorType.FLOAT1);
		}
		if (emitter.Visibility && typeof emitter.Visibility !== "number") {
			stream.keyword("KPPV");
			stream.animVector(emitter.Visibility, AnimVectorType.FLOAT1);
		}
	}
}
var byteLength = [
	byteLengthVersion,
	byteLengthModelInfo,
	byteLengthSequences,
	byteLengthGlobalSequences,
	byteLengthMaterials,
	byteLengthTextures,
	byteLengthTextureAnims,
	byteLengthGeosets,
	byteLengthGeosetAnims,
	byteLengthBones,
	byteLengthLights,
	byteLengthHelpers,
	byteLengthAttachments,
	byteLengthPivotPoints,
	byteLengthParticleEmitters,
	byteLengthParticleEmitters2,
	byteLengthParticleEmitterPopcorns,
	byteLengthRibbonEmitters,
	byteLengthCameras,
	byteLengthEventObjects,
	byteLengthCollisionShapes,
	byteLengthFaceFX,
	byteLengthBindPoses
];
var generators = [
	generateVersion,
	generateModelInfo,
	generateSequences,
	generateGlobalSequences,
	generateMaterials,
	generateTextures,
	generateTextureAnims,
	generateGeosets,
	generateGeosetAnims,
	generateBones,
	generateLights,
	generateHelpers,
	generateAttachments,
	generatePivotPoints,
	generateParticleEmitters,
	generateParticleEmitters2,
	generateParticleEmitterPopcorns,
	generateRibbonEmitters,
	generateCameras,
	generateEventObjects,
	generateCollisionShapes,
	generateFaceFX,
	generateBindPoses
];
function generate$1(model) {
	let totalLength = 4;
	for (const lenFunc of byteLength) totalLength += lenFunc(model);
	const res = new ArrayBuffer(totalLength);
	const stream = new Stream(res);
	stream.keyword("MDLX");
	for (const generator of generators) generator(model, stream);
	return res;
}
//#endregion
//#region blp/blpimage.ts
var blpimage_exports = /* @__PURE__ */ __exportAll({
	BLPContent: () => BLPContent,
	BLPType: () => BLPType
});
var BLPType = /* @__PURE__ */ function(BLPType) {
	BLPType[BLPType["BLP0"] = 0] = "BLP0";
	BLPType[BLPType["BLP1"] = 1] = "BLP1";
	BLPType[BLPType["BLP2"] = 2] = "BLP2";
	return BLPType;
}({});
var BLPContent = /* @__PURE__ */ function(BLPContent) {
	BLPContent[BLPContent["JPEG"] = 0] = "JPEG";
	BLPContent[BLPContent["Direct"] = 1] = "Direct";
	return BLPContent;
}({});
//#endregion
//#region third_party/decoder.js
var JpegImage = (function jpegImage() {
	"use strict";
	var dctZigZag = new Int32Array([
		0,
		1,
		8,
		16,
		9,
		2,
		3,
		10,
		17,
		24,
		32,
		25,
		18,
		11,
		4,
		5,
		12,
		19,
		26,
		33,
		40,
		48,
		41,
		34,
		27,
		20,
		13,
		6,
		7,
		14,
		21,
		28,
		35,
		42,
		49,
		56,
		57,
		50,
		43,
		36,
		29,
		22,
		15,
		23,
		30,
		37,
		44,
		51,
		58,
		59,
		52,
		45,
		38,
		31,
		39,
		46,
		53,
		60,
		61,
		54,
		47,
		55,
		62,
		63
	]);
	var dctCos1 = 4017;
	var dctSin1 = 799;
	var dctCos3 = 3406;
	var dctSin3 = 2276;
	var dctCos6 = 1567;
	var dctSin6 = 3784;
	var dctSqrt2 = 5793;
	var dctSqrt1d2 = 2896;
	function constructor() {}
	function buildHuffmanTable(codeLengths, values) {
		var k = 0, code = [], i, j, length = 16;
		while (length > 0 && !codeLengths[length - 1]) length--;
		code.push({
			children: [],
			index: 0
		});
		var p = code[0], q;
		for (i = 0; i < length; i++) {
			for (j = 0; j < codeLengths[i]; j++) {
				p = code.pop();
				p.children[p.index] = values[k];
				while (p.index > 0) p = code.pop();
				p.index++;
				code.push(p);
				while (code.length <= i) {
					code.push(q = {
						children: [],
						index: 0
					});
					p.children[p.index] = q.children;
					p = q;
				}
				k++;
			}
			if (i + 1 < length) {
				code.push(q = {
					children: [],
					index: 0
				});
				p.children[p.index] = q.children;
				p = q;
			}
		}
		return code[0].children;
	}
	function getBlockBufferOffset(component, row, col) {
		return 64 * ((component.blocksPerLine + 1) * row + col);
	}
	function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
		frame.precision;
		frame.samplesPerLine;
		frame.scanLines;
		var mcusPerLine = frame.mcusPerLine;
		var progressive = frame.progressive;
		frame.maxH;
		frame.maxV;
		var startOffset = offset, bitsData = 0, bitsCount = 0;
		function readBit() {
			if (bitsCount > 0) {
				bitsCount--;
				return bitsData >> bitsCount & 1;
			}
			bitsData = data[offset++];
			if (bitsData == 255) {
				var nextByte = data[offset++];
				if (nextByte) throw "unexpected marker: " + (bitsData << 8 | nextByte).toString(16);
			}
			bitsCount = 7;
			return bitsData >>> 7;
		}
		function decodeHuffman(tree) {
			var node = tree;
			var bit;
			while ((bit = readBit()) !== null) {
				node = node[bit];
				if (typeof node === "number") return node;
				if (typeof node !== "object") throw "invalid huffman sequence";
			}
			return null;
		}
		function receive(length) {
			var n = 0;
			while (length > 0) {
				var bit = readBit();
				if (bit === null) return;
				n = n << 1 | bit;
				length--;
			}
			return n;
		}
		function receiveAndExtend(length) {
			var n = receive(length);
			if (n >= 1 << length - 1) return n;
			return n + (-1 << length) + 1;
		}
		function decodeBaseline(component, offset) {
			var t = decodeHuffman(component.huffmanTableDC);
			var diff = t === 0 ? 0 : receiveAndExtend(t);
			component.blockData[offset] = component.pred += diff;
			var k = 1;
			while (k < 64) {
				var rs = decodeHuffman(component.huffmanTableAC);
				var s = rs & 15, r = rs >> 4;
				if (s === 0) {
					if (r < 15) break;
					k += 16;
					continue;
				}
				k += r;
				var z = dctZigZag[k];
				component.blockData[offset + z] = receiveAndExtend(s);
				k++;
			}
		}
		function decodeDCFirst(component, offset) {
			var t = decodeHuffman(component.huffmanTableDC);
			var diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
			component.blockData[offset] = component.pred += diff;
		}
		function decodeDCSuccessive(component, offset) {
			component.blockData[offset] |= readBit() << successive;
		}
		var eobrun = 0;
		function decodeACFirst(component, offset) {
			if (eobrun > 0) {
				eobrun--;
				return;
			}
			var k = spectralStart, e = spectralEnd;
			while (k <= e) {
				var rs = decodeHuffman(component.huffmanTableAC);
				var s = rs & 15, r = rs >> 4;
				if (s === 0) {
					if (r < 15) {
						eobrun = receive(r) + (1 << r) - 1;
						break;
					}
					k += 16;
					continue;
				}
				k += r;
				var z = dctZigZag[k];
				component.blockData[offset + z] = receiveAndExtend(s) * (1 << successive);
				k++;
			}
		}
		var successiveACState = 0, successiveACNextValue;
		function decodeACSuccessive(component, offset) {
			var k = spectralStart, e = spectralEnd, r = 0;
			while (k <= e) {
				var z = dctZigZag[k];
				switch (successiveACState) {
					case 0:
						var rs = decodeHuffman(component.huffmanTableAC);
						var s = rs & 15, r = rs >> 4;
						if (s === 0) if (r < 15) {
							eobrun = receive(r) + (1 << r);
							successiveACState = 4;
						} else {
							r = 16;
							successiveACState = 1;
						}
						else {
							if (s !== 1) throw "invalid ACn encoding";
							successiveACNextValue = receiveAndExtend(s);
							successiveACState = r ? 2 : 3;
						}
						continue;
					case 1:
					case 2:
						if (component.blockData[offset + z]) component.blockData[offset + z] += readBit() << successive;
						else {
							r--;
							if (r === 0) successiveACState = successiveACState == 2 ? 3 : 0;
						}
						break;
					case 3:
						if (component.blockData[offset + z]) component.blockData[offset + z] += readBit() << successive;
						else {
							component.blockData[offset + z] = successiveACNextValue << successive;
							successiveACState = 0;
						}
						break;
					case 4:
						if (component.blockData[offset + z]) component.blockData[offset + z] += readBit() << successive;
						break;
				}
				k++;
			}
			if (successiveACState === 4) {
				eobrun--;
				if (eobrun === 0) successiveACState = 0;
			}
		}
		function decodeMcu(component, decode, mcu, row, col) {
			var mcuRow = mcu / mcusPerLine | 0;
			var mcuCol = mcu % mcusPerLine;
			decode(component, getBlockBufferOffset(component, mcuRow * component.v + row, mcuCol * component.h + col));
		}
		function decodeBlock(component, decode, mcu) {
			decode(component, getBlockBufferOffset(component, mcu / component.blocksPerLine | 0, mcu % component.blocksPerLine));
		}
		var componentsLength = components.length;
		var component, i, j, k, n;
		var decodeFn;
		if (progressive) if (spectralStart === 0) decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
		else decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
		else decodeFn = decodeBaseline;
		var mcu = 0, marker;
		var mcuExpected;
		if (componentsLength == 1) mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
		else mcuExpected = mcusPerLine * frame.mcusPerColumn;
		if (!resetInterval) resetInterval = mcuExpected;
		var h, v;
		while (mcu < mcuExpected) {
			for (i = 0; i < componentsLength; i++) components[i].pred = 0;
			eobrun = 0;
			if (componentsLength == 1) {
				component = components[0];
				for (n = 0; n < resetInterval; n++) {
					decodeBlock(component, decodeFn, mcu);
					mcu++;
				}
			} else for (n = 0; n < resetInterval; n++) {
				for (i = 0; i < componentsLength; i++) {
					component = components[i];
					h = component.h;
					v = component.v;
					for (j = 0; j < v; j++) for (k = 0; k < h; k++) decodeMcu(component, decodeFn, mcu, j, k);
				}
				mcu++;
			}
			bitsCount = 0;
			marker = data[offset] << 8 | data[offset + 1];
			if (marker <= 65280) throw "marker was not found";
			if (marker >= 65488 && marker <= 65495) offset += 2;
			else break;
		}
		return offset - startOffset;
	}
	function quantizeAndInverse(component, blockBufferOffset, p) {
		var qt = component.quantizationTable;
		var v0, v1, v2, v3, v4, v5, v6, v7, t;
		var i;
		for (i = 0; i < 64; i++) p[i] = component.blockData[blockBufferOffset + i] * qt[i];
		for (i = 0; i < 8; ++i) {
			var row = 8 * i;
			if (p[1 + row] == 0 && p[2 + row] == 0 && p[3 + row] == 0 && p[4 + row] == 0 && p[5 + row] == 0 && p[6 + row] == 0 && p[7 + row] == 0) {
				t = dctSqrt2 * p[0 + row] + 512 >> 10;
				p[0 + row] = t;
				p[1 + row] = t;
				p[2 + row] = t;
				p[3 + row] = t;
				p[4 + row] = t;
				p[5 + row] = t;
				p[6 + row] = t;
				p[7 + row] = t;
				continue;
			}
			v0 = dctSqrt2 * p[0 + row] + 128 >> 8;
			v1 = dctSqrt2 * p[4 + row] + 128 >> 8;
			v2 = p[2 + row];
			v3 = p[6 + row];
			v4 = dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128 >> 8;
			v7 = dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128 >> 8;
			v5 = p[3 + row] << 4;
			v6 = p[5 + row] << 4;
			t = v0 - v1 + 1 >> 1;
			v0 = v0 + v1 + 1 >> 1;
			v1 = t;
			t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
			v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
			v3 = t;
			t = v4 - v6 + 1 >> 1;
			v4 = v4 + v6 + 1 >> 1;
			v6 = t;
			t = v7 + v5 + 1 >> 1;
			v5 = v7 - v5 + 1 >> 1;
			v7 = t;
			t = v0 - v3 + 1 >> 1;
			v0 = v0 + v3 + 1 >> 1;
			v3 = t;
			t = v1 - v2 + 1 >> 1;
			v1 = v1 + v2 + 1 >> 1;
			v2 = t;
			t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
			v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
			v7 = t;
			t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
			v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
			v6 = t;
			p[0 + row] = v0 + v7;
			p[7 + row] = v0 - v7;
			p[1 + row] = v1 + v6;
			p[6 + row] = v1 - v6;
			p[2 + row] = v2 + v5;
			p[5 + row] = v2 - v5;
			p[3 + row] = v3 + v4;
			p[4 + row] = v3 - v4;
		}
		for (i = 0; i < 8; ++i) {
			var col = i;
			if (p[8 + col] == 0 && p[16 + col] == 0 && p[24 + col] == 0 && p[32 + col] == 0 && p[40 + col] == 0 && p[48 + col] == 0 && p[56 + col] == 0) {
				t = dctSqrt2 * p[i + 0] + 8192 >> 14;
				p[0 + col] = t;
				p[8 + col] = t;
				p[16 + col] = t;
				p[24 + col] = t;
				p[32 + col] = t;
				p[40 + col] = t;
				p[48 + col] = t;
				p[56 + col] = t;
				continue;
			}
			v0 = dctSqrt2 * p[0 + col] + 2048 >> 12;
			v1 = dctSqrt2 * p[32 + col] + 2048 >> 12;
			v2 = p[16 + col];
			v3 = p[48 + col];
			v4 = dctSqrt1d2 * (p[8 + col] - p[56 + col]) + 2048 >> 12;
			v7 = dctSqrt1d2 * (p[8 + col] + p[56 + col]) + 2048 >> 12;
			v5 = p[24 + col];
			v6 = p[40 + col];
			t = v0 - v1 + 1 >> 1;
			v0 = v0 + v1 + 1 >> 1;
			v1 = t;
			t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
			v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
			v3 = t;
			t = v4 - v6 + 1 >> 1;
			v4 = v4 + v6 + 1 >> 1;
			v6 = t;
			t = v7 + v5 + 1 >> 1;
			v5 = v7 - v5 + 1 >> 1;
			v7 = t;
			t = v0 - v3 + 1 >> 1;
			v0 = v0 + v3 + 1 >> 1;
			v3 = t;
			t = v1 - v2 + 1 >> 1;
			v1 = v1 + v2 + 1 >> 1;
			v2 = t;
			t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
			v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
			v7 = t;
			t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
			v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
			v6 = t;
			p[0 + col] = v0 + v7;
			p[56 + col] = v0 - v7;
			p[8 + col] = v1 + v6;
			p[48 + col] = v1 - v6;
			p[16 + col] = v2 + v5;
			p[40 + col] = v2 - v5;
			p[24 + col] = v3 + v4;
			p[32 + col] = v3 - v4;
		}
		for (i = 0; i < 64; ++i) {
			var index = blockBufferOffset + i;
			var q = p[i];
			q = q <= -2056 ? 0 : q >= 2024 ? 255 : q + 2056 >> 4;
			component.blockData[index] = q;
		}
	}
	function buildComponentData(frame, component) {
		var blocksPerLine = component.blocksPerLine;
		var blocksPerColumn = component.blocksPerColumn;
		blocksPerLine << 3;
		var computationBuffer = new Int32Array(64);
		for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) quantizeAndInverse(component, getBlockBufferOffset(component, blockRow, blockCol), computationBuffer);
		return component.blockData;
	}
	function clampToUint8(a) {
		return a <= 0 ? 0 : a >= 255 ? 255 : a | 0;
	}
	constructor.prototype = {
		load: function load(path) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", path, true);
			xhr.responseType = "arraybuffer";
			xhr.onload = (function() {
				var data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
				this.parse(data);
				if (this.onload) this.onload();
			}).bind(this);
			xhr.send(null);
		},
		loadFromBuffer: function loadFromBuffer(arrayBuffer) {
			this.parse(arrayBuffer);
			if (this.onload) this.onload();
		},
		parse: function parse(data) {
			function readUint16() {
				var value = data[offset] << 8 | data[offset + 1];
				offset += 2;
				return value;
			}
			function readDataBlock() {
				var length = readUint16();
				var array = data.subarray(offset, offset + length - 2);
				offset += array.length;
				return array;
			}
			function prepareComponents(frame) {
				var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
				var mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
				for (var i = 0; i < frame.components.length; i++) {
					component = frame.components[i];
					var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / frame.maxH);
					var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) * component.v / frame.maxV);
					var blocksPerLineForMcu = mcusPerLine * component.h;
					var blocksBufferSize = 64 * (mcusPerColumn * component.v) * (blocksPerLineForMcu + 1);
					component.blockData = new Int16Array(blocksBufferSize);
					component.blocksPerLine = blocksPerLine;
					component.blocksPerColumn = blocksPerColumn;
				}
				frame.mcusPerLine = mcusPerLine;
				frame.mcusPerColumn = mcusPerColumn;
			}
			var offset = 0;
			data.length;
			var jfif = null;
			var adobe = null;
			var frame, resetInterval;
			var quantizationTables = [];
			var huffmanTablesAC = [], huffmanTablesDC = [];
			var fileMarker = readUint16();
			if (fileMarker != 65496) throw "SOI not found";
			fileMarker = readUint16();
			while (fileMarker != 65497) {
				var i, j, l;
				switch (fileMarker) {
					case 65504:
					case 65505:
					case 65506:
					case 65507:
					case 65508:
					case 65509:
					case 65510:
					case 65511:
					case 65512:
					case 65513:
					case 65514:
					case 65515:
					case 65516:
					case 65517:
					case 65518:
					case 65519:
					case 65534:
						var appData = readDataBlock();
						if (fileMarker === 65504) {
							if (appData[0] === 74 && appData[1] === 70 && appData[2] === 73 && appData[3] === 70 && appData[4] === 0) jfif = {
								version: {
									major: appData[5],
									minor: appData[6]
								},
								densityUnits: appData[7],
								xDensity: appData[8] << 8 | appData[9],
								yDensity: appData[10] << 8 | appData[11],
								thumbWidth: appData[12],
								thumbHeight: appData[13],
								thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
							};
						}
						if (fileMarker === 65518) {
							if (appData[0] === 65 && appData[1] === 100 && appData[2] === 111 && appData[3] === 98 && appData[4] === 101 && appData[5] === 0) adobe = {
								version: appData[6],
								flags0: appData[7] << 8 | appData[8],
								flags1: appData[9] << 8 | appData[10],
								transformCode: appData[11]
							};
						}
						break;
					case 65499:
						var quantizationTablesEnd = readUint16() + offset - 2;
						while (offset < quantizationTablesEnd) {
							var quantizationTableSpec = data[offset++];
							var tableData = new Int32Array(64);
							if (quantizationTableSpec >> 4 === 0) for (j = 0; j < 64; j++) {
								var z = dctZigZag[j];
								tableData[z] = data[offset++];
							}
							else if (quantizationTableSpec >> 4 === 1) for (j = 0; j < 64; j++) {
								var z = dctZigZag[j];
								tableData[z] = readUint16();
							}
							else throw "DQT: invalid table spec";
							quantizationTables[quantizationTableSpec & 15] = tableData;
						}
						break;
					case 65472:
					case 65473:
					case 65474:
						if (frame) throw "Only single frame JPEGs supported";
						readUint16();
						frame = {};
						frame.extended = fileMarker === 65473;
						frame.progressive = fileMarker === 65474;
						frame.precision = data[offset++];
						frame.scanLines = readUint16();
						frame.samplesPerLine = readUint16();
						frame.components = [];
						frame.componentIds = {};
						var componentsCount = data[offset++], componentId;
						var maxH = 0, maxV = 0;
						for (i = 0; i < componentsCount; i++) {
							componentId = data[offset];
							var h = data[offset + 1] >> 4;
							var v = data[offset + 1] & 15;
							if (maxH < h) maxH = h;
							if (maxV < v) maxV = v;
							var qId = data[offset + 2];
							var l = frame.components.push({
								h,
								v,
								quantizationTable: quantizationTables[qId]
							});
							frame.componentIds[componentId] = l - 1;
							offset += 3;
						}
						frame.maxH = maxH;
						frame.maxV = maxV;
						prepareComponents(frame);
						break;
					case 65476:
						var huffmanLength = readUint16();
						for (i = 2; i < huffmanLength;) {
							var huffmanTableSpec = data[offset++];
							var codeLengths = new Uint8Array(16);
							var codeLengthSum = 0;
							for (j = 0; j < 16; j++, offset++) codeLengthSum += codeLengths[j] = data[offset];
							var huffmanValues = new Uint8Array(codeLengthSum);
							for (j = 0; j < codeLengthSum; j++, offset++) huffmanValues[j] = data[offset];
							i += 17 + codeLengthSum;
							(huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
						}
						break;
					case 65501:
						readUint16();
						resetInterval = readUint16();
						break;
					case 65498:
						readUint16();
						var selectorsCount = data[offset++];
						var components = [], component;
						for (i = 0; i < selectorsCount; i++) {
							var componentIndex = frame.componentIds[data[offset++]];
							component = frame.components[componentIndex];
							var tableSpec = data[offset++];
							component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
							component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
							components.push(component);
						}
						var spectralStart = data[offset++];
						var spectralEnd = data[offset++];
						var successiveApproximation = data[offset++];
						var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15);
						offset += processed;
						break;
					default:
						if (data[offset - 3] == 255 && data[offset - 2] >= 192 && data[offset - 2] <= 254) {
							offset -= 3;
							break;
						}
						throw "unknown JPEG marker " + fileMarker.toString(16);
				}
				fileMarker = readUint16();
			}
			this.width = frame.samplesPerLine;
			this.height = frame.scanLines;
			this.jfif = jfif;
			this.adobe = adobe;
			this.components = [];
			for (var i = 0; i < frame.components.length; i++) {
				var component = frame.components[i];
				this.components.push({
					output: buildComponentData(frame, component),
					scaleX: component.h / frame.maxH,
					scaleY: component.v / frame.maxV,
					blocksPerLine: component.blocksPerLine,
					blocksPerColumn: component.blocksPerColumn
				});
			}
		},
		getData: function getData(imageData, width, height) {
			var scaleX = this.width / width, scaleY = this.height / height;
			var component, componentScaleX, componentScaleY;
			var x, y, i;
			var offset = 0;
			var numComponents = this.components.length;
			width * height * numComponents;
			var data = imageData.data;
			var lineData = new Uint8Array((this.components[0].blocksPerLine << 3) * this.components[0].blocksPerColumn * 8);
			for (i = 0; i < numComponents; i++) {
				component = this.components[i < 3 ? 2 - i : i];
				var blocksPerLine = component.blocksPerLine;
				var blocksPerColumn = component.blocksPerColumn;
				var samplesPerLine = blocksPerLine << 3, j, k;
				var lineOffset = 0;
				for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
					var scanLine = blockRow << 3;
					for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
						var bufferOffset = getBlockBufferOffset(component, blockRow, blockCol);
						var offset = 0, sample = blockCol << 3;
						for (j = 0; j < 8; j++) {
							var lineOffset = (scanLine + j) * samplesPerLine;
							for (k = 0; k < 8; k++) lineData[lineOffset + sample + k] = component.output[bufferOffset + offset++];
						}
					}
				}
				componentScaleX = component.scaleX * scaleX;
				componentScaleY = component.scaleY * scaleY;
				offset = i;
				var cx, cy;
				var index;
				for (y = 0; y < height; y++) for (x = 0; x < width; x++) {
					cy = 0 | y * componentScaleY;
					cx = 0 | x * componentScaleX;
					index = cy * samplesPerLine + cx;
					data[offset] = lineData[index];
					offset += numComponents;
				}
			}
			return data;
		},
		copyToImageData: function copyToImageData(imageData) {
			var width = imageData.width, height = imageData.height;
			var imageDataBytes = width * height * 4;
			var imageDataArray = imageData.data;
			var data = this.getData(width, height);
			var i = 0, j = 0, k0, k1;
			var Y, K, C, M, R, G, B;
			switch (this.components.length) {
				case 1:
					while (j < imageDataBytes) {
						Y = data[i++];
						imageDataArray[j++] = Y;
						imageDataArray[j++] = Y;
						imageDataArray[j++] = Y;
						imageDataArray[j++] = 255;
					}
					break;
				case 3:
					while (j < imageDataBytes) {
						R = data[i++];
						G = data[i++];
						B = data[i++];
						imageDataArray[j++] = R;
						imageDataArray[j++] = G;
						imageDataArray[j++] = B;
						imageDataArray[j++] = 255;
					}
					break;
				case 4:
					while (j < imageDataBytes) {
						C = data[i++];
						M = data[i++];
						Y = data[i++];
						K = data[i++];
						k0 = 255 - K;
						k1 = k0 / 255;
						R = clampToUint8(k0 - C * k1);
						G = clampToUint8(k0 - M * k1);
						B = clampToUint8(k0 - Y * k1);
						imageDataArray[j++] = R;
						imageDataArray[j++] = G;
						imageDataArray[j++] = B;
						imageDataArray[j++] = 255;
					}
					break;
				default: throw "Unsupported color mode";
			}
		}
	};
	return constructor;
})();
function decode$1(data) {
	const jpegImage = new JpegImage();
	jpegImage.loadFromBuffer(data);
	var imageData;
	if (typeof ImageData !== "undefined") imageData = new ImageData(jpegImage.width, jpegImage.height);
	else imageData = {
		width: jpegImage.width,
		height: jpegImage.height,
		data: new Uint8ClampedArray(jpegImage.width * jpegImage.height * 4)
	};
	jpegImage.getData(imageData, jpegImage.width, jpegImage.height);
	return imageData;
}
var BLP1_PALETTE_BYTES = 256 * 4;
var MAX_BLP_DECODE_MIB = 128 * 1024 * 1024 / (1024 * 1024);
var BLP1_JPEG_SHARED_OFFSET = 160;
var BLP1_PALETTE_OFFSET = 156;
var BLP1_DIRECT_DATA_OFFSET = BLP1_PALETTE_OFFSET + BLP1_PALETTE_BYTES;
var BLP_MIP_COUNT = 16;
function isStartOfFrameMarker(marker) {
	return marker >= 192 && marker <= 207 && marker !== 196 && marker !== 200 && marker !== 204;
}
function getJPEGDimensions(data) {
	if (data.length < 4 || data[0] !== 255 || data[1] !== 216) throw new Error("Invalid BLP1 JPEG: missing SOI marker");
	let offset = 2;
	while (offset < data.length) {
		while (offset < data.length && data[offset] !== 255) offset += 1;
		while (offset < data.length && data[offset] === 255) offset += 1;
		if (offset >= data.length) break;
		const marker = data[offset++];
		if (marker === 0 || marker === 1 || marker === 216 || marker >= 208 && marker <= 215) continue;
		if (marker === 217 || marker === 218) break;
		if (offset + 2 > data.length) throw new Error("Invalid BLP1 JPEG: truncated marker length");
		const segmentLength = data[offset] << 8 | data[offset + 1];
		if (segmentLength < 2 || offset + segmentLength > data.length) throw new Error("Invalid BLP1 JPEG: marker range is outside the mip");
		if (isStartOfFrameMarker(marker)) {
			if (segmentLength < 8) throw new Error("Invalid BLP1 JPEG: truncated SOF marker");
			const height = data[offset + 3] << 8 | data[offset + 4];
			const width = data[offset + 5] << 8 | data[offset + 6];
			if (width === 0 || height === 0) throw new Error("Invalid BLP1 JPEG: SOF dimensions must be positive");
			if (checkedProduct(checkedProduct(width, height, "JPEG SOF dimensions"), 4, "JPEG SOF output size") > 134217728) throw new Error(`Invalid BLP1 JPEG: decoded output exceeds ${MAX_BLP_DECODE_MIB} MiB`);
			return {
				width,
				height
			};
		}
		offset += segmentLength;
	}
	throw new Error("Invalid BLP1 JPEG: missing SOF marker");
}
function keyword(view, offset) {
	return String.fromCharCode(view.getUint8(offset), view.getUint8(offset + 1), view.getUint8(offset + 2), view.getUint8(offset + 3));
}
function uint32(view, wordOffset) {
	return view.getUint32(wordOffset * 4, true);
}
function checkedProduct(left, right, description) {
	const result = left * right;
	if (!Number.isSafeInteger(result)) throw new Error(`Invalid BLP1 ${description}: integer overflow`);
	return result;
}
function assertRange(totalBytes, offset, length, description) {
	if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(length) || offset < 0 || length < 0 || offset > totalBytes || length > totalBytes - offset) throw new Error(`Invalid BLP1 ${description}: range is outside the file`);
}
function getMipDimensions(width, height, level) {
	const divisor = 2 ** level;
	const mipWidth = Math.max(1, Math.floor(width / divisor));
	const mipHeight = Math.max(1, Math.floor(height / divisor));
	const pixelCount = checkedProduct(mipWidth, mipHeight, `mip ${level} dimensions`);
	const outputBytes = checkedProduct(pixelCount, 4, `mip ${level} output size`);
	if (outputBytes > 134217728) throw new Error(`Invalid BLP1 mip ${level}: decoded output exceeds ${MAX_BLP_DECODE_MIB} MiB`);
	return {
		width: mipWidth,
		height: mipHeight,
		pixelCount,
		outputBytes
	};
}
function validateMipmap(image, mipmap, level, minimumOffset, sharedHeaderSize = 0) {
	if (mipmap.offset < minimumOffset) throw new Error(`Invalid BLP1 mip ${level}: data overlaps the BLP header`);
	assertRange(image.data.byteLength, mipmap.offset, mipmap.size, `mip ${level}`);
	const dimensions = getMipDimensions(image.width, image.height, level);
	if (image.content === BLPContent.Direct) {
		const alphaBytes = Math.ceil(checkedProduct(dimensions.pixelCount, image.alphaBits, `mip ${level} alpha size`) / 8);
		const requiredBytes = dimensions.pixelCount + alphaBytes;
		if (mipmap.size < requiredBytes) throw new Error(`Invalid BLP1 mip ${level}: palette data needs ${requiredBytes} bytes, got ${mipmap.size}`);
	} else if (sharedHeaderSize + mipmap.size > 134217728) throw new Error(`Invalid BLP1 mip ${level}: reconstructed JPEG exceeds ${MAX_BLP_DECODE_MIB} MiB`);
}
function validateParsedImage(image) {
	const view = new DataView(image.data);
	let minimumMipOffset;
	let sharedHeaderSize = 0;
	if (image.content === BLPContent.JPEG) {
		if (image.data.byteLength < BLP1_JPEG_SHARED_OFFSET) throw new Error("Invalid BLP1 JPEG: truncated shared-header length");
		sharedHeaderSize = view.getUint32(156, true);
		assertRange(image.data.byteLength, BLP1_JPEG_SHARED_OFFSET, sharedHeaderSize, "JPEG shared header");
		minimumMipOffset = BLP1_JPEG_SHARED_OFFSET + sharedHeaderSize;
	} else {
		if (![
			0,
			1,
			4,
			8
		].includes(image.alphaBits)) throw new Error(`Invalid BLP1 palette alpha depth: ${image.alphaBits}`);
		if (image.data.byteLength < BLP1_DIRECT_DATA_OFFSET) throw new Error("Invalid BLP1 palette: truncated 256-entry palette");
		minimumMipOffset = 156;
	}
	for (let level = 0; level < image.mipmaps.length; ++level) validateMipmap(image, image.mipmaps[level], level, minimumMipOffset, sharedHeaderSize);
}
function assertBLPImageMatchesData(blp) {
	if (!blp || !(blp.data instanceof ArrayBuffer)) throw new Error("Invalid BLP image object");
	const parsed = decode(blp.data);
	if (!(parsed.type === blp.type && parsed.content === blp.content && parsed.alphaBits === blp.alphaBits && parsed.width === blp.width && parsed.height === blp.height && parsed.mipmaps.length === blp.mipmaps.length && parsed.mipmaps.every((mipmap, index) => {
		const supplied = blp.mipmaps[index];
		return supplied && mipmap.offset === supplied.offset && mipmap.size === supplied.size;
	}))) throw new Error("Invalid BLP image object: metadata does not match its source data");
	return parsed;
}
function getValidatedMipmap(blp, mipmapLevel) {
	if (!Number.isInteger(mipmapLevel) || mipmapLevel < 0) throw new Error(`Invalid BLP mip level ${mipmapLevel}`);
	const image = assertBLPImageMatchesData(blp);
	const mipmap = image.mipmaps[mipmapLevel];
	if (!mipmap) throw new Error(`Invalid BLP mip level ${mipmapLevel}: image has ${image.mipmaps.length} mipmaps`);
	return {
		image,
		mipmap,
		...getMipDimensions(image.width, image.height, mipmapLevel)
	};
}
function bitVal(data, bitCount, index) {
	const bitOffset = index * bitCount;
	return data[Math.floor(bitOffset / 8)] >> bitOffset % 8 & (1 << bitCount) - 1;
}
function createImageData(width, height, pixels) {
	const data = pixels ?? new Uint8ClampedArray(checkedProduct(checkedProduct(width, height, "image dimensions"), 4, "image output size"));
	if (data.byteLength > 134217728) throw new Error(`Invalid BLP image: decoded output exceeds ${MAX_BLP_DECODE_MIB} MiB`);
	if (typeof ImageData !== "undefined") return pixels ? new ImageData(data, width, height) : new ImageData(width, height);
	return {
		width,
		height,
		data,
		colorSpace: "srgb"
	};
}
function decode(arrayBuffer) {
	if (!(arrayBuffer instanceof ArrayBuffer)) throw new Error("Invalid BLP input: expected an ArrayBuffer");
	if (arrayBuffer.byteLength < 4) throw new Error("Invalid BLP input: truncated BLP header");
	const view = new DataView(arrayBuffer);
	const type = keyword(view, 0);
	if (type === "BLP0" || type === "BLP2") throw new Error("BLP0/BLP2 not supported");
	if (type !== "BLP1") throw new Error("Not a BLP image");
	if (arrayBuffer.byteLength < 156) throw new Error("Invalid BLP1 input: truncated BLP1 header");
	const content = uint32(view, 1);
	if (content !== BLPContent.JPEG && content !== BLPContent.Direct) throw new Error(`Unknown BLP content ${content}`);
	const alphaBits = uint32(view, 2);
	const width = uint32(view, 3);
	const height = uint32(view, 4);
	if (width === 0 || height === 0) throw new Error("Invalid BLP1: width and height must be positive");
	getMipDimensions(width, height, 0);
	const mipmaps = [];
	let foundEmptyMipmap = false;
	for (let i = 0; i < BLP_MIP_COUNT; ++i) {
		const offset = uint32(view, 7 + i);
		const size = uint32(view, 7 + BLP_MIP_COUNT + i);
		if (size === 0) {
			foundEmptyMipmap = true;
			continue;
		}
		if (foundEmptyMipmap) throw new Error(`Invalid BLP1 mip ${i}: mip table contains a gap`);
		if (offset === 0) throw new Error(`Invalid BLP1 mip ${i}: nonempty mip has a zero offset`);
		const previous = mipmaps[mipmaps.length - 1];
		if (previous && previous.offset === offset && previous.size === size) break;
		mipmaps.push({
			offset,
			size
		});
		const dimensions = getMipDimensions(width, height, i);
		if (dimensions.width === 1 && dimensions.height === 1) break;
	}
	if (mipmaps.length === 0) throw new Error("Invalid BLP1: image contains no mipmaps");
	const image = {
		type: BLPType.BLP1,
		width,
		height,
		content,
		alphaBits,
		mipmaps,
		data: arrayBuffer
	};
	validateParsedImage(image);
	return image;
}
function reconstructJPEGMipmap(blp, mipmapLevel) {
	const { image, mipmap, width, height } = getValidatedMipmap(blp, mipmapLevel);
	if (image.content !== BLPContent.JPEG) throw new Error("BLP image does not contain JPEG data");
	const view = new DataView(image.data);
	const source = new Uint8Array(image.data);
	const sharedHeaderSize = view.getUint32(156, true);
	const data = new Uint8Array(sharedHeaderSize + mipmap.size);
	data.set(source.subarray(BLP1_JPEG_SHARED_OFFSET, BLP1_JPEG_SHARED_OFFSET + sharedHeaderSize));
	data.set(source.subarray(mipmap.offset, mipmap.offset + mipmap.size), sharedHeaderSize);
	return {
		data,
		width,
		height,
		forceOpaque: image.alphaBits === 0
	};
}
function validateJPEGMipmap(jpeg) {
	const dimensions = getJPEGDimensions(jpeg.data);
	return {
		...jpeg,
		...dimensions
	};
}
function decodeJPEGMipmap(jpeg) {
	const validated = validateJPEGMipmap(jpeg);
	const imageData = decode$1(validated.data);
	if (!Number.isInteger(imageData.width) || imageData.width <= 0 || !Number.isInteger(imageData.height) || imageData.height <= 0) throw new Error("Invalid BLP1 JPEG dimensions");
	const outputBytes = checkedProduct(checkedProduct(imageData.width, imageData.height, "JPEG dimensions"), 4, "JPEG output size");
	if (imageData.width !== validated.width || imageData.height !== validated.height || outputBytes > 134217728 || imageData.data.length !== outputBytes) throw new Error(`Invalid BLP1 JPEG result: expected ${validated.width}x${validated.height}, got ${imageData.width}x${imageData.height} (${imageData.data.length} bytes)`);
	if (validated.forceOpaque) for (let index = 3; index < imageData.data.length; index += 4) imageData.data[index] = 255;
	return imageData;
}
function decodePaletteMipmap(blp, mipmapLevel) {
	const { image, mipmap, width, height, pixelCount } = getValidatedMipmap(blp, mipmapLevel);
	if (image.content !== BLPContent.Direct) throw new Error("BLP image does not contain palette data");
	const view = new DataView(image.data);
	const palette = new Uint8Array(image.data, BLP1_PALETTE_OFFSET, BLP1_PALETTE_BYTES);
	const alphaBytes = Math.ceil(pixelCount * image.alphaBits / 8);
	const alphaData = new Uint8Array(image.data, mipmap.offset + pixelCount, alphaBytes);
	const imageData = createImageData(width, height);
	const alphaBits = image.alphaBits;
	const alphaScale = alphaBits === 0 ? 0 : 255 / ((1 << alphaBits) - 1);
	for (let i = 0; i < pixelCount; ++i) {
		const paletteIndex = view.getUint8(mipmap.offset + i) * 4;
		imageData.data[i * 4] = palette[paletteIndex + 2];
		imageData.data[i * 4 + 1] = palette[paletteIndex + 1];
		imageData.data[i * 4 + 2] = palette[paletteIndex];
		imageData.data[i * 4 + 3] = alphaBits === 0 ? 255 : Math.round(bitVal(alphaData, alphaBits, i) * alphaScale);
	}
	return imageData;
}
function getImageData(blp, mipmapLevel) {
	if (blp.content === BLPContent.JPEG) return decodeJPEGMipmap(reconstructJPEGMipmap(blp, mipmapLevel));
	return decodePaletteMipmap(blp, mipmapLevel);
}
//#endregion
//#region blp/wasm/blpJpegDecoderBytes.ts
var BLP_JPEG_DECODER_WASM_BASE64 = "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usCAAEEBIAYRgICAgACAgICAAA0GIAQgARC7gICAAA0GIAEoAgAhACABKAIEKAIMIQYMAQsgAEHNusCAAEECIAYRgICAgACAgICAAA0FQQEhAyACQQE6AA8gAiAFNgIEIAIgADYCACACQdS6wIAANgIUIAIgASkCCDcCGCACIAJBD2o2AgggAiACNgIQIAQgAkEQahC7gICAAA0FIAIoAhBByrrAgABBAiACKAIUKAIMEYCAgIAAgICAgAANBQsgAEHQusCAAEEBIAYRgICAgACAgICAACEDDAQLIAEoAgAiAEG8ssCAAEEEIAEoAgQiBSgCDCIGEYCAgIAAgICAgAANAwJAAkAgAS0ACkGAAXENAEEBIQMgAEHMusCAAEEBIAYRgICAgACAgICAAA0FIAQgARC7gICAAA0FIAEoAgAhACABKAIEKAIMIQYMAQsgAEHNusCAAEECIAYRgICAgACAgICAAA0EQQEhAyACQQE6AA8gAiAFNgIEIAIgADYCACACQdS6wIAANgIUIAIgASkCCDcCGCACIAJBD2o2AgggAiACNgIQIAQgAkEQahC7gICAAA0EIAIoAhBByrrAgABBAiACKAIUKAIMEYCAgIAAgICAgAANBAsgAEHQusCAAEEBIAYRgICAgACAgICAACEDDAMLIAEoAgBBwLLAgABBAyABKAIEKAIMEYCAgIAAgICAgAAhAwwCCyABKAIAQcOywIAAQQMgASgCBCgCDBGAgICAAICAgIAAIQMMAQsgASgCAEHGssCAAEEDIAEoAgQoAgwRgICAgACAgICAACEDCyACQSBqJICAgIAAIAMLhUADC38BfhV/I4CAgIAAQeAAayIDJICAgIAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCABKAIADQAgAUF/NgIAIAFBBGohBAJAIAEoAgRBgICAgHhHDQAgA0EEahCLgICAACAEIAMoAjQ2AjAgBCAD/QACJP0LAiAgBCAD/QACFP0LAhAgBCAD/QACBP0LAgALIAIoAhQhBSACKAIQIQYgAigCDCEHIAIoAgghCCAC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QQJqLQAAISsgAEEBai0AACEsIB0gAC0AADoAASAeICw6AAEgGiArOgABIBkgKjoAASAYICk6AAEgFyAoOgABIBYgJzoAASAVICY6AAEgFCAlOgABIBMgJDoAASASICM6AAEgESAiOgABIBAgIToAASAPICA6AAEgDiAfOgABIA0gDDoAASADIAtqIgBBD2otAAAhDCAAQQ5qLQAAIR8gAEENai0AACEgIABBDGotAAAhISAAQQtqLQAAISIgAEEKai0AACEjIABBCWotAAAhJCAAQQhqLQAAISUgAEEHai0AACEmIABBBmotAAAhJyAAQQVqLQAAISggAEEEai0AACEpIABBA2otAAAhKiAAQQJqLQAAISsgAEEBai0AACEsIB0gAC0AADoAAiAeICw6AAIgGiArOgACIBkgKjoAAiAYICk6AAIgFyAoOgACIBYgJzoAAiAVICY6AAIgFCAlOgACIBMgJDoAAiASICM6AAIgESAiOgACIBAgIToAAiAPICA6AAIgDiAfOgACIA0gDDoAAiAK/QwQAAAAEAAAABAAAAAQAAAAIhv9rgEhCiAJIBv9rgEhCSAIIBv9rgEhCCAHIBv9rgEhByABIAtBEGoiC0cNAAsgBiABRg0BCyACIAFBA2xqIQIDQCACIAUgAWotAAA6AAAgAkEBaiAEIAFqLQAAOgAAIAJBAmogAyABai0AADoAACACQQNqIQIgBUEBaiEFIARBAWohBCADQQFqIQMgASAGQX9qIgZHDQALCw8LQbzTwIAAQcUAQeDTwIAAEJOAgIAAAAvoEQMHfwF7Cn8jgICAgABBEGsiBSSAgICAAAJAIAJFDQAgAkEUbCEGIAFBEWotAAAhBwJAAkAgAkEBRw0AIAFBEmotAAAhCAwBCyAGQWxqIglBFG4hCkEAIQsCQAJAIAlBwAJJDQAgB/0PIQwgCkHw////AHEiCyENIAEhDgNAIAwgDkHRAmogDkG9AmogDkGpAmogDkGVAmogDkGBAmogDkHtAWogDkHZAWogDkHFAWogDkGxAWogDkGdAWogDkGJAWogDkH1AGogDkHhAGogDkHNAGogDkE5aiAOQSVq/QcAAP1UAAAB/VQAAAL9VAAAA/1UAAAE/VQAAAX9VAAABv1UAAAH/VQAAAj9VAAACf1UAAAK/VQAAAv9VAAADP1UAAAN/VQAAA79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MUHyAPwKAAAgAy8BqgghOCADQbACaiAgQYAB/AoAACADLwGsCSFCIANBsAFqIB9BgAH8CgAAIAMvAa4KIUMgA0EwaiAeQYAB/AoAACADIAMpA7AENwOwAyADIAMpAbYENwG2AyAdIANBqBRqQfIA/AoAAAJAIARBAXFFDQAgA0GoFGogA0GwA2pBgAH8CgAAIANBwARqQQBBgAH8CwBBgH8hCUGEy8CAACEEA0AgA0HABGogBC0AAEEBdGogA0GoFGogCWoiB0GAAWovAQA7AQAgA0HABGogBEEBai0AAEEBdGogB0GCAWovAQA7AQAgA0HABGogBEECai0AAEEBdGogB0GEAWovAQA7AQAgA0HABGogBEEDai0AAEEBdGogB0GGAWovAQA7AQAgBEEEaiEEIAlBCGoiCQ0AC0GIARCBgICAACIERQ0IIARCgYCAgBA3AgAgBEEIaiADQcAEakGAAfwKAAACQCAMKAIAIgdFDQAgByAHKAIAIglBf2o2AgAgCUEBRw0AIAwoAgAQuYCAgAALIAwgBDYCAAsCQCA4QQFxRQ0AIANBqBRqIANBsAJqQYAB/AoAACADQcAEakEAQYAB/AsAQYB/IQlBhMvAgAAhBANAIANBwARqIAQtAABBAXRqIANBqBRqIAlqIgdBgAFqLwEAOwEAIANBwARqIARBAWotAABBAXRqIAdBggFqLwEAOwEAIANBwARqIARBAmotAABBAXRqIAdBhAFqLwEAOwEAIANBwARqIARBA2otAABBAXRqIAdBhgFqLwEAOwEAIARBBGohBCAJQQhqIgkNAAtBiAEQgYCAgAAiBEUNCCAEQoGAgIAQNwIAIARBCGogA0HABGpBgAH8CgAAAkAgASgCRCIHRQ0AIAcgBygCACIJQX9qNgIAIAlBAUcNACABKAJEELmAgIAACyABIAQ2AkQLAkAgQkEBcUUNACADQagUaiADQbABakGAAfwKAAAgA0HABGpBAEGAAfwLAEGAfyEJQYTLwIAAIQQDQCADQcAEaiAELQAAQQF0aiADQagUaiAJaiIHQYABai8BADsBACADQcAEaiAEQQFqLQAAQQF0aiAHQYIBai8BADsBACADQcAEaiAEQQJqLQAAQQF0aiAHQYQBai8BADsBACADQcAEaiAEQQNqLQAAQQF0aiAHQYYBai8BADsBACAEQQRq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AgAgAkHUusCAADYCFCACIAEpAgg3AhggAiACQQ9qNgIIIAIgAjYCECAAIAJBEGoQ9YCAgAANAyACKAIQQcq6wIAAQQIgAigCFCgCDBGAgICAAICAgIAADQMLIAEoAgBB0LrAgABBASABKAIEKAIMEYCAgIAAgICAgAAhAwwCC0EBIQMgASgCACIEQZvfwIAAQQIgASgCBCIFKAIMIgYRgICAgACAgICAAA0BIABBBGohAAJAAkAgAS0ACkGAAXENAEEBIQMgBEHMusCAAEEBIAYRgICAgACAgICAAA0DIAAgARD2gICAAEUNAQwDCyAEQc26wIAAQQIgBhGAgICAAICAgIAADQJBASEDIAJBAToADyACIAU2AgQgAiAENgIAIAJB1LrAgAA2AhQgAiABKQIINwIYIAIgAkEPajYCCCACIAI2AhAgACACQRBqEPaAgIAADQIgAigCEEHKusCAAEECIAIoAhQoAgwRgICAgACAgICAAA0CCyABKAIAQdC6wIAAQQEgASgCBCgCDBGAgICAAICAgIAAIQMMAQtBASEDIAEoAgAiBEGd38CAAEEIIAEoAgQiBSgCDCIGEYCAgIAAgICAgAANAAJAAkAgAS0ACkGAAXENAEEBIQMgBEHMusCAAEEBIAYRgICAgACAgICAAA0CIAAoAgQgASAAKAIIKAIMEYSAgIAAgICAgABFDQEMAgsgBEHNusCAAEECIAYRgICAgACAgICAAA0BQQEhAyACQQE6AA8gAiAFNgIEIAIgBDYCACACQdS6wIAANgIUIAIgASkCCDcCGCACIAJBD2o2AgggAiACNgIQIAAoAgQgAkEQaiAAKAIIKAIMEYSAgIAAgICAgAANASACKAIQQcq6wIAAQQIgAigCFCgCDBGAgICAAICAgIAADQELIAEoAgBB0LrAgABBASABKAIEKAIMEYCAgIAAgICAgAAhAwsgAkEgaiSAgICAACADC6EIAQV/I4CAgIAAQSBrIgIkgICAgABBASEDIABBAWohBAJAAkACQAJAAkACQAJAAkACQCAALQAADggAAQIDBAUGBwALIAEoAgBB2d/AgABBDCABKAIEKAIMEYCAgIAAgICAgAAhAwwHCyABKAIAQeXfwIAAQRcgASgCBCgCDBGAgICAAICAgIAAIQMMBgsgASgCACIAQfzfwIAAQQ8gASgCBCIFKAIMIgYRgICAgACAgICAAA0FAkACQCABLQAKQYABcQ0AQQEhAyAAQcy6wIAAQQEgBhGAgICAAICAgIAADQcgBCABELuAgIAADQcgASgCACEAIAEoAgQoAgwhBgwBCyAAQc26wIAAQQIgBhGAgICAAICAgIAADQZBASEDIAJBAToADyACIAU2AgQgAiAANgIAIAJB1LrAgAA2AhQgAiABKQIINwIYIAIgAkEPajYCCCACIAI2AhAgBCACQRBqELuAgIAADQYgAigCEEHKusCAAEECIAIoAhQoAgwRgICAgACAgICAAA0GCyAAQdC6wIAAQQEgBhGAgICAAICAgIAAIQMMBQsgASgCACIAQYvgwIAAQQ4gASgCBCIFKAIMIgYRgICAgACAgICAAA0EAkACQCABLQAKQYABcQ0AQQEhAyAAQcy6wIAAQQEgBhGAgICAAICAgIAADQYgBCABELuAgIAADQYgASgCACEAIAEoAgQoAgwhBgwBCyAAQc26wIAAQQIgBhGAgICAAICAgIAADQVBASEDIAJBAToADyACIAU2AgQgAiAANgIAIAJB1LrAgAA2AhQgAiABKQIINwIYIAIgAkEPajYCCCACIAI2AhAgBCACQRBqELuAgIAADQUgAigCEEHKusCAAEECIAIoAhQoAgwRgICAgACAgICAAA0FCyAAQdC6wIAAQQEgBhGAgICAAICAgIAAIQMMBAsgASgCAEGZ4MCAAEEDIAEoAgQoAgwRgICAgACAgICAACEDDAMLIAEoAgBBnODAgABBECABKAIEKAIMEYCAgIAAgICAgAAhAwwCCyABKAIAQazgwIAAQRogASgCBCgCDBGAgICAAICAgIAAIQMMAQsgASgCACIAQcbgwIAAQQ4gASgCBCIFKAIMIgYRgICAgACAgICAAA0AAkACQCABLQAKQYABcQ0AQQEhAyAAQcy6wIAAQQEgBhGAgICAAICAgIAADQIgBCAAIAUQ+YCAgABFDQEMAgsgAEHNusCAAEECIAYRgICAgACAgICAAA0BIAIgBTYCFCACIAA2AhBBASEDIAJBAToAACACIAI2AhggBCACQRBqQdS6wIAAEPmAgIAADQEgAkEQakHKusCAAEECEN2AgIAADQELIABB0LrAgABBASAGEYCAgIAAgICAgAAhAwsgAkEgaiSAgICAACADC7kaAwJ/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EYCAgIAAgICAgABFDQBBASEADAMLQQEhACACQQE6AAggAkHUusCAADYCJCACIAEpAgA3AhAgAiABKQIINwIoIAIgAkEIajYCGCACIAJBEGo2AiAgAkEQakH45sCAAEEEEN2AgIAADQIgAkEQakHFusCAAEECEN2AgIAADQIgAyACQSBqEPiAgIAADQIgAkEQakHKusCAAEECEN2AgIAARQ0AQQEhAAwCCwJAAkACQCABLQAKQYABcQ0AAkAgASgCAEHDusCAAEECIAEoAgQoAgwRgICAgACAgICAAEUNAEEBIQAMBQsCQCABKAIAQfzmwIAAQQcgASgCBCgCDBGAgICAAICAgIAARQ0AQQEhAAwFCyABKAIAQcW6wIAAQQIgASgCBCgCDBGAgICAAICAgIAARQ0BQQEhAAwECyABKQIIIQQgASkCACEFQQEhACACQQE6AAggAiAFNwIQIAIgBDcCKCACQdS6wIAANgIkIAIgAkEIajYCGCACIAJBEGo2AiAgAkEQakH85sCAAEEHEN2AgIAADQMgAkEQakHFusCAAEECEN2AgIAADQMCQCAGKAIAIAYoAgQgAkEgahDqgICAAEUNAEEBIQAMBAsgAkEQakHKusCAAEECEN2AgIAARQ0BQQEhAAwDC0EBIQAgBigCACAGKAIEIAEQ6oCAgAANAgsCQCABLQAKQYABcQ0AIAEoAgBB0brAgABBAiABKAIEKAIMEYCAgIAAgICAgAAhAAwCCyABKAIAQc+6wIAAQQEgASgCBCgCDBGAgICAAICAgIAAIQAMAQsgACgCBCEGAkAgASgCAEGM58CAAEEGIAEoAgQoAgwRgICAgACAgICAAEUNAEEBIQAMAQsCQAJAIAEtAApBgAFxDQACQCABKAIAQcC6wIAAQQMgASgCBCgCDBGAgICAAICAgIAARQ0AQQEhAAwDCwJAIAEoAgBB+ObAgABBBCABKAIEKAIMEYCAgIAAgICAgABFDQBBASEADAMLAkAgASgCAEHFusCAAEECIAEoAgQoAgwRgICAgACAgICAAEUNAEEBIQAMAwsgASgCACAGLQAIQQJ0IgAoAvjywIAAIAAoAtDxwIAAIAEoAgQoAgwRgICAgACAgICAAEUNAUEBIQAMAgsCQCABKAIAQce6wIAAQQMgASgCBCgCDBGAgICAAICAgIAARQ0AQQEh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aW52YWxpZCBob3Jpem9udGFsIHNhbXBsaW5nIGZhY3RvciDAACFpbnZhbGlkIHZlcnRpY2FsIHNhbXBsaW5nIGZhY3RvciDAACRkdXBsaWNhdGUgc2NhbiBjb21wb25lbnQgaWRlbnRpZmllciDAACVkdXBsaWNhdGUgZnJhbWUgY29tcG9uZW50IGlkZW50aWZpZXIgwAAScmFuZ2Ugc3RhcnQgaW5kZXggwCIgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggwAAQcmFuZ2UgZW5kIGluZGV4IMAiIG91dCBvZiByYW5nZSBmb3Igc2xpY2Ugb2YgbGVuZ3RoIMAADGVuY291bnRlcmVkIMAVIHdpdGggaW52YWxpZCBsZW5ndGggwAAQYXNzZXJ0aW9uIGBsZWZ0IMAXIHJpZ2h0YCBmYWlsZWQKICBsZWZ0OiDACQogcmlnaHQ6IMAAI2ludmFsaWQgcHJlZGljdG9yIHNlbGVjdGlvbiB2YWx1ZTogwADAAjogwAAvdXNlclwucnVzdHVwXHRvb2xjaGFpbnNcMS45NS4wLXg4Nl82NC1wYy13aW5kb3dzLW1zdmNcbGliL3J1c3RsaWIvc3JjL3J1c3RcbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAvcnVzdGMvNTk4MDc2MTZlMWZhMjU0MDcyNGJmYmFjMTRkNzk3NmQ3ZTRhMzg2MC9saWJyYXJ5L2FsbG9jL3NyYy9mbXQucnMAL3VzZXJcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3ZlxqcGVnLWRlY29kZXItMC4zLjJcc3JjXGlkY3QucnMAL3VzZXJcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3ZlxqcGVnLWRlY29kZXItMC4zLjJcc3JjXGRlY29kZXJcbG9zc2xlc3MucnMAL3VzZXJcLnJ1c3R1cFx0b29sY2hhaW5zXDEuOTUuMC14ODZfNjQtcGMtd2luZG93cy1tc3ZjXGxpYi9ydXN0bGliL3NyYy9ydXN0XGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5ycwAvdXNlclwuY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmXGpwZWctZGVjb2Rlci0wLjMuMlxzcmNccGFyc2VyLnJzAC91c2VyXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2ZcanBlZy1kZWNvZGVyLTAuMy4yXHNyY1x1cHNhbXBsZXIucnMAL3VzZXJcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3ZlxqcGVnLWRlY29kZXItMC4zLjJcc3JjXGRlY29kZXIucnMAL3VzZXJcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3ZlxqcGVnLWRlY29kZXItMC4zLjJcc3JjXGh1ZmZtYW4ucnMAL3VzZXJcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3ZlxqcGVnLWRlY29kZXItMC4zLjJcc3JjXGFyY2hcd2FzbS5ycwAvdXNlclwuY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmXGpwZWctZGVjb2Rlci0wLjMuMlxzcmNcd29ya2VyXGltbWVkaWF0ZS5ycwAvcnVzdGMvNTk4MDc2MTZlMWZhMjU0MDcyNGJmYmFjMTRkNzk3NmQ3ZTRhMzg2MC9saWJyYXJ5L2NvcmUvc3JjL3VuaWNvZGUvcHJpbnRhYmxlLnJzAC91c2VyXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2ZcanBlZy1kZWNvZGVyLTAuMy4yXHNyY1x3b3JrZXJcbW9kLnJzAC9ydXN0Yy81OTgwNzYxNmUxZmEyNTQwNzI0YmZiYWMxNGQ3OTc2ZDdlNGEzODYwL2xpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycwAvcnVzdGMvNTk4MDc2MTZlMWZhMjU0MDcyNGJmYmFjMTRkNzk3NmQ3ZTRhMzg2MC9saWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjL21vZC5ycwAvcnVzdC9kZXBzL2RsbWFsbG9jLTAuMi4xMS9zcmMvZGxtYWxsb2MucnMAc3JjXGxpYi5ycwAYaW52YWxpZCBjb21wb25lbnQgY291bnQgwA8gaW4gc2NhbiBoZWFkZXIAEmludmFsaWQgcHJlY2lzaW9uIMAQIGluIGZyYW1lIGhlYWRlcgAac2NhbiBjb21wb25lbnQgaWRlbnRpZmllciDARSBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlIGNvbXBvbmVudCBpZGVudGlmaWVycyBkZWZpbmVkIGluIHRoZSBmcmFtZQDAHyBtYXJrZXIgZm91bmQgd2hlcmUgbm90IGFsbG93ZWQADWZvdW5kIG1hcmtlciDAFiBpbnNpZGUgc2NhbiB3aGVyZSBSU1TADSB3YXMgZXhwZWN0ZWQAGW5vIG1hcmtlciBmb3VuZCB3aGVyZSBSU1TADSB3YXMgZXhwZWN0ZWQACWZvdW5kIFJTVMAKIHdoZXJlIFJTVMANIHdhcyBleHBlY3RlZAAfaW52YWxpZCBkZXN0aW5hdGlvbiBpZGVudGlmaWVyIMAHIGluIERRVAASaW52YWxpZCBwcmVjaXNpb24gwAcgaW4gRFFUAA5pbnZhbGlkIGNsYXNzIMAHIGluIERIVAAfaW52YWxpZCBkZXN0aW5hdGlvbiBpZGVudGlmaWVyIMAHIGluIERIVAAXVW5zdXBwb3J0ZWQgSURDVCBzY2FsZSDAAi84ACZjb3B5X2Zyb21fc2xpY2U6IHNvdXJjZSBzbGljZSBsZW5ndGggKMArKSBkb2VzIG5vdCBtYXRjaCBkZXN0aW5hdGlvbiBzbGljZSBsZW5ndGggKMABKQAScmVtb3ZhbCBpbmRleCAoaXMgwBYpIHNob3VsZCBiZSA8IGxlbiAoaXMgwAEpAAAAggUQAGoAAAANCAAAEQAAAGFzc2VydGlvbiBmYWlsZWQ6IG1hcmtlci5oYXNfbGVuZ3RoKCkAAADtBRAAWwAAAIkAAAAFAAAAaW52YWxpZCBjb2xvciB0cmFuc2Zvcm0gaW4gYWRvYmUgYXBwIHNlZ21lbnRpbnZhbGlkIGxlbmd0aCBpbiBESFRlbmNvdW50ZXJlZCB0YWJsZSB3aXRoIHplcm8gbGVuZ3RoIGluIERIVGVuY291bnRlcmVkIHRhYmxlIHdpdGggZXhjZXNzaXZlIGxlbmd0aCBpbiBESFRhIG1heGltdW0gb2YgdHdvIGh1ZmZtYW4gdGFibGVzIHBlciBjbGFzcyBhcmUgYWxsb3dlZCBpbiBiYXNlbGluZXF1YW50aXphdGlvbiB0YWJsZSBjb250YWlucyBlbGVtZW50IHdpdGggYSB6ZXJvIHZhbHVlaW52YWxpZCBsZW5ndGggaW4gRFFURFJJIHdpdGggaW52YWxpZCBsZW5ndGgAAO0FEABbAAAAtwAAAA4AAAAxMiBiaXQgc2FtcGxlIHByZWNpc2lvbiBpcyBub3QgYWxsb3dlZCBpbiBiYXNlbGluZXplcm8gd2lkdGggaW4gZnJhbWUgaGVhZGVyemVybyBjb21wb25lbnQgY291bnQgaW4gZnJhbWUgaGVhZGVycHJvZ3Jlc3NpdmUgZnJhbWUgd2l0aCBtb3JlIHRoYW4gNCBjb21wb25lbnRzaW52YWxpZCBsZW5ndGggaW4gU09GAADtBRAAWwAAALIAAAAOAAAA7QUQAFsAAACsAAAADgAAAHplcm8gbGVuZ3RoIGluIFNPU3N1Y2Nlc3NpdmUgYXBwcm94aW1hdGlvbiBzY2FuIHdpdGggbW9yZSB0aGFuIG9uZSBiaXQgb2YgaW1wcm92ZW1lbnRzcGVjdHJhbCBzZWxlY3Rpb24gc2NhbiB3aXRoIEFDIGNvZWZmaWNpZW50cyBjYW4ndCBoYXZlIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50c3VjY2Vzc2l2ZSBhcHByb3hpbWF0aW9uIGhpZ2ggc2hhbGwgYmUgemVybyBpbiBsb3NzbGVzcyBzY2Fuc3BlY3RyYWwgc2VsZWN0aW9uIGVuZCBzaGFsbCBiZSB6ZXJvIGluIGxvc3NsZXNzIHNjYW5zdWNjZXNzaXZlIGFwcHJveGltYXRpb24gaXMgbm90IGFsbG93ZWQgaW4gbm9uLXByb2dyZXNzaXZlIHNjYW5zcGVjdHJhbCBzZWxlY3Rpb24gaXMgbm90IGFsbG93ZWQgaW4gbm9uLXByb2dyZXNzaXZlIHNjYW5pbnZhbGlkIHBvaW50IHRyYW5zZm9ybSwgbXVzdCBiZSBsZXNzIHRoYW4gdGhlIGZyYW1lIHByZWNpc2lvbnNjYW4gd2l0aCBtb3JlIHRoYW4gb25lIGNvbXBv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Y3Rpb25SZWZ1c2VkQ29ubmVjdGlvblJlc2V0SG9zdFVucmVhY2hhYmxlTmV0d29ya1VucmVhY2hhYmxlQ29ubmVjdGlvbkFib3J0ZWROb3RDb25uZWN0ZWRBZGRySW5Vc2VBZGRyTm90QXZhaWxhYmxlTmV0d29ya0Rvd25Ccm9rZW5QaXBlQWxyZWFkeUV4aXN0c05vdEFEaXJlY3RvcnlJc0FEaXJlY3RvcnlEaXJlY3RvcnlOb3RFbXB0eVJlYWRPbmx5RmlsZXN5c3RlbUZpbGVzeXN0ZW1Mb29wU3RhbGVOZXR3b3JrRmlsZUhhbmRsZUludmFsaWRJbnB1dEludmFsaWREYXRhVGltZWRPdXRXcml0ZVplcm9TdG9yYWdlRnVsbE5vdFNlZWthYmxlUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbnN1cHBvcnRlZFVuZXhwZWN0ZWRFb2ZPdXRPZk1lbW9yeUluUHJvZ3Jlc3NPdGhlclVuY2F0ZWdvcml6ZWQAAQIDAAUGBwAJCgsADQ4PAAECAwQFBgcAAAAAAAAAAAABAgMEBQYHCAkKCwwNDg8AAQIDBAUGBwgJCgsMDQAAAAAAAAAAAgAAAAEAAAADAAAABAQEBAQEBAQFBgcICQoLDA0NDQ0NDQ0NDQ0NDQ0NDQ0ODg4ODg4ODg4ODg4ODg8SEhAACAAAABAAAAARAAAADwAAAA8AAAASAAAAEQAAAAwAAAAJAAAAEAAAAAsAAAAKAAAADQAAAAoAAAANAAAADAAAABEAAAASAAAADgAAABYAAAAMAAAACwAAAAgAAAAJAAAACwAAAAsAAAANAAAADAAAAAwAAAASAAAACAAAAA4AAAAMAAAADwAAABMAAAALAAAACwAAAA0AAAALAAAACgAAAAUAAAANAAAAlzMQAJ8zEACvMxAAwDMQAM8zEADeMxAA8DMQAAE0EAANNBAAFjQQACY0EAAxNBAAOzQQAGgzEABINBAAVTQQAGE0EAByNBAAhDQQAJI0EACoNBAAtDQQAL80EADHNBAA0DQQANs0EADmNBAA8zQQAP80EAALNRAAHTUQACU1EAAzNRAAPzUQAE41EABhNRAAbDUQAHc1EACENRAAjzUQAJk1EACeNRAACAAAABAAAAARAAAADwAAAA8AAAASAAAAEQAAAAwAAAAJAAAAEAAAAAsAAAAKAAAADQAAAAoAAAANAAAADAAAABEAAAASAAAADgAAABYAAAAMAAAACwAAAAgAAAAJAAAACwAAAAsAAAANAAAADAAAAAwAAAASAAAACAAAAA4AAAAMAAAADwAAABMAAAALAAAACwAAAA0AAAALAAAACgAAAAUAAAANAAAAlzMQAJ8zEACvMxAAwDMQAM8zEADeMxAA8DMQAAE0EAANNBAAFjQQACY0EAAxNBAAOzQQAGgzEABINBAAVTQQAGE0EAByNBAAhDQQAJI0EACoNBAAtDQQAL80EADHNBAA0DQQANs0EADmNBAA8zQQAP80EAALNRAAHTUQACU1EAAzNRAAPzUQAE41EABhNRAAbDUQAHc1EACENRAAjzUQAJk1EACeNRAACAAAABAAAAARAAAADwAAAA8AAAASAAAAEQAAAAwAAAAJAAAAEAAAAAsAAAAKAAAADQAAAAoAAAANAAAADAAAABEAAAASAAAADgAAABYAAAAMAAAACwAAAAgAAAAJAAAACwAAAAsAAAANAAAADAAAAAwAAAASAAAACAAAAA4AAAAMAAAADwAAABMAAAALAAAACwAAAA0AAAALAAAACgAAAAUAAAANAAAAlzMQAJ8zEACvMxAAwDMQAM8zEADeMxAA8DMQAAE0EAANNBAAFjQQACY0EAAxNBAAOzQQAGgzEABINBAAVTQQAGE0EAByNBAAhDQQAJI0EACoNBAAtDQQAL80EADHNBAA0DQQANs0EADmNBAA8zQQAP80EAALNRAAHTUQACU1EAAzNRAAPzUQAE41EABhNRAAbDUQAHc1EACENRAAjzUQAJk1EACeNRAACAAAABAAAAARAAAADwAAAA8AAAASAAAAEQAAAAwAAAAJAAAAEAAAAAsAAAAKAAAADQAAAAoAAAANAAAADAAAABEAAAASAAAADgAAABYAAAAMAAAACwAAAAgAAAAJAAAACwAAAAsAAAANAAAADAAAAAwAAAASAAAACAAAAA4AAAAMAAAADwAAABMAAAALAAAACwAAAA0AAAALAAAACgAAAAUAAAANAAAAlzMQAJ8zEACvMxAAwDMQAM8zEADeMxAA8DMQAAE0EAANNBAAFjQQACY0EAAxNBAAOzQQAGgzEABINBAAVTQQAGE0EAByNBAAhDQQAJI0EACoNBAAtDQQAL80EADHNBAA0DQQANs0EADmNBAA8zQQAP80EAALNRAAHTUQACU1EAAzNRAAPzUQAE41EABhNRAAbDUQAHc1EACENRAAjzUQAJk1EACeNRAABAAAAAcAAAAJAAAAAwAAAAUAAAAEAAAABAAAAAgAAAAIAAAApS8QAKkvEACwLxAAuS8QALwvEADBLxAAxS8QAMkvEADRLxAACAAAABAAAAARAAAADwAAAA8AAAASAAAAEQAAAAwAAAAJAAAAEAAAAAsAAAAKAAAADQAAAAoAAAANAAAADAAAABEAAAASAAAADgAAABYAAAAMAAAACwAAAAgAAAAJAAAACwAAAAsAAAANAAAADAAAAAwAAAASAAAACAAAAA4AAAAMAAAADwAAABMAAAALAAAACwAAAA0AAAALAAAACgAAAAUAAAANAAAAlzMQAJ8zEACvMxAAwDMQAM8zEADeMxAA8DMQAAE0EAANNBAAFjQQACY0EAAxNBAAOzQQAGgzEABINBAAVTQQAGE0EAByNBAAhDQQAJI0EACoNBAAtDQQAL80EADHNBAA0DQQANs0EADmNBAA8zQQAP80EAALNRAAHTUQACU1EAAzNRAAPzUQAE41EABhNRAAbDUQAHc1EACENRAAjzUQAJk1EACeNRAA";
//#endregion
//#region blp/imageDecoder.ts
var BLPWasmTrapError = class extends Error {
	constructor(operation, cause) {
		super(`BLP WASM decoder trapped while ${operation}`);
		this.name = "BLPWasmTrapError";
		this.cause = cause;
	}
};
var BLPWasmDecodeError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "BLPWasmDecodeError";
	}
};
function getFunction(exports, name) {
	const value = exports[name];
	if (typeof value !== "function") throw new Error(`BLP WASM module is missing the ${name} export`);
	return value;
}
function validateExports(exports) {
	if (!(exports.memory instanceof WebAssembly.Memory)) throw new Error("BLP WASM module is missing the memory export");
	return {
		memory: exports.memory,
		allocate: getFunction(exports, "allocate"),
		deallocate: getFunction(exports, "deallocate"),
		decode_jpeg: getFunction(exports, "decode_jpeg"),
		result_pointer: getFunction(exports, "result_pointer"),
		result_length: getFunction(exports, "result_length"),
		result_width: getFunction(exports, "result_width"),
		result_height: getFunction(exports, "result_height"),
		clear_result: getFunction(exports, "clear_result")
	};
}
function callWasm(operation, callback) {
	try {
		return callback();
	} catch (cause) {
		throw new BLPWasmTrapError(operation, cause);
	}
}
function assertMemoryRange(memory, pointer, length, description) {
	if (!Number.isInteger(pointer) || !Number.isInteger(length) || pointer < 0 || length < 0 || pointer > memory.buffer.byteLength || length > memory.buffer.byteLength - pointer) throw new BLPWasmDecodeError(`Invalid BLP WASM ${description} memory range`);
}
var BLPJpegWasmDecoder = class {
	constructor(instance) {
		this.wasm = validateExports(instance.exports);
	}
	decode(jpeg) {
		const inputLength = jpeg.data.byteLength;
		const inputPointer = callWasm("allocating JPEG input", () => this.wasm.allocate(inputLength));
		if (inputPointer === 0) throw new BLPWasmDecodeError(`BLP WASM decoder rejected a ${inputLength}-byte JPEG input`);
		let cleanupError;
		try {
			assertMemoryRange(this.wasm.memory, inputPointer, inputLength, "input");
			callWasm("copying JPEG input", () => {
				new Uint8Array(this.wasm.memory.buffer, inputPointer, inputLength).set(jpeg.data);
			});
			const status = callWasm("decoding JPEG data", () => this.wasm.decode_jpeg(inputPointer, inputLength, jpeg.forceOpaque ? 1 : 0));
			if (status !== 0) throw new BLPWasmDecodeError(`BLP WASM JPEG decode failed with status ${status}`);
			const resultPointer = callWasm("reading the result pointer", () => this.wasm.result_pointer());
			const resultLength = callWasm("reading the result length", () => this.wasm.result_length());
			const width = callWasm("reading the result width", () => this.wasm.result_width());
			const height = callWasm("reading the result height", () => this.wasm.result_height());
			const outputLength = width * height * 4;
			if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0 || !Number.isSafeInteger(outputLength) || outputLength > 134217728) throw new BLPWasmDecodeError("BLP WASM output exceeds 128 MiB");
			if (width !== jpeg.width || height !== jpeg.height || resultLength !== outputLength) throw new BLPWasmDecodeError(`Invalid BLP WASM result: expected ${jpeg.width}x${jpeg.height}, got ${width}x${height} (${resultLength} bytes)`);
			assertMemoryRange(this.wasm.memory, resultPointer, resultLength, "result");
			const pixels = new Uint8ClampedArray(resultLength);
			callWasm("copying decoded pixels", () => {
				pixels.set(new Uint8Array(this.wasm.memory.buffer, resultPointer, resultLength));
			});
			return createImageData(width, height, pixels);
		} finally {
			try {
				callWasm("clearing the decoded result", () => this.wasm.clear_result());
			} catch (error) {
				cleanupError = error;
			}
			try {
				callWasm("releasing JPEG input", () => this.wasm.deallocate(inputPointer, inputLength));
			} catch (error) {
				cleanupError ??= error;
			}
			if (cleanupError) throw cleanupError;
		}
	}
	dispose() {
		callWasm("clearing the decoded result", () => this.wasm.clear_result());
	}
};
var InitializedBLPImageDecoder = class {
	constructor(backend, wasm, allowFallback) {
		this.wasm = wasm;
		this.allowFallback = allowFallback;
		this.disposed = false;
		this.wasmHealthy = true;
		this.backend = backend;
	}
	getImageData(blp, mipmapLevel) {
		if (this.disposed) throw new Error("BLP image decoder has been disposed");
		if (blp.content !== BLPContent.JPEG) return getImageData(blp, mipmapLevel);
		const jpeg = validateJPEGMipmap(reconstructJPEGMipmap(blp, mipmapLevel));
		if (!this.wasm || !this.wasmHealthy) return decodeJPEGMipmap(jpeg);
		try {
			return this.wasm.decode(jpeg);
		} catch (error) {
			if (error instanceof BLPWasmTrapError) {
				this.wasmHealthy = false;
				try {
					this.wasm.dispose();
				} catch {}
				this.wasm = void 0;
			}
			if (!this.allowFallback) throw error;
			return decodeJPEGMipmap(jpeg);
		}
	}
	dispose() {
		if (this.disposed) return;
		this.disposed = true;
		try {
			this.wasm?.dispose();
		} catch {}
		this.wasm = void 0;
		this.wasmHealthy = false;
	}
};
function decodeEmbeddedWasm() {
	const binary = atob(BLP_JPEG_DECODER_WASM_BASE64);
	const bytes = new Uint8Array(binary.length);
	for (let index = 0; index < binary.length; ++index) bytes[index] = binary.charCodeAt(index);
	return bytes.buffer;
}
async function instantiateWasm(source) {
	const module = source instanceof WebAssembly.Module ? source : await WebAssembly.compile(source);
	return new BLPJpegWasmDecoder(await WebAssembly.instantiate(module));
}
async function createBLPImageDecoder(options = {}) {
	const preference = options.backend ?? "auto";
	if (preference !== "auto" && preference !== "wasm-simd" && preference !== "javascript") throw new Error(`Unknown BLP decoder backend: ${preference}`);
	if (preference === "javascript") return new InitializedBLPImageDecoder("javascript", void 0, false);
	try {
		if (typeof WebAssembly === "undefined") throw new Error("WebAssembly is unavailable");
		return new InitializedBLPImageDecoder("wasm-simd", await instantiateWasm(options.wasmModule ?? decodeEmbeddedWasm()), preference === "auto");
	} catch (cause) {
		if (preference === "auto") return new InitializedBLPImageDecoder("javascript", void 0, false);
		const error = /* @__PURE__ */ new Error("Failed to initialize the BLP WASM SIMD decoder");
		error.cause = cause;
		throw error;
	}
}
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
Math.PI / 180;
if (!Math.hypot) Math.hypot = function() {
	var y = 0, i = arguments.length;
	while (i--) y += arguments[i] * arguments[i];
	return Math.sqrt(y);
};
//#endregion
//#region node_modules/gl-matrix/esm/mat3.js
/**
* 3x3 Matrix
* @module mat3
*/
/**
* Creates a new identity mat3
*
* @returns {mat3} a new 3x3 matrix
*/
function create$4() {
	var out = new ARRAY_TYPE(9);
	if (ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
		out[3] = 0;
		out[5] = 0;
		out[6] = 0;
		out[7] = 0;
	}
	out[0] = 1;
	out[4] = 1;
	out[8] = 1;
	return out;
}
/**
* Set the components of a mat3 to the given values
*
* @param {mat3} out the receiving matrix
* @param {Number} m00 Component in column 0, row 0 position (index 0)
* @param {Number} m01 Component in column 0, row 1 position (index 1)
* @param {Number} m02 Component in column 0, row 2 position (index 2)
* @param {Number} m10 Component in column 1, row 0 position (index 3)
* @param {Number} m11 Component in column 1, row 1 position (index 4)
* @param {Number} m12 Component in column 1, row 2 position (index 5)
* @param {Number} m20 Component in column 2, row 0 position (index 6)
* @param {Number} m21 Component in column 2, row 1 position (index 7)
* @param {Number} m22 Component in column 2, row 2 position (index 8)
* @returns {mat3} out
*/
function set$3(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	out[0] = m00;
	out[1] = m01;
	out[2] = m02;
	out[3] = m10;
	out[4] = m11;
	out[5] = m12;
	out[6] = m20;
	out[7] = m21;
	out[8] = m22;
	return out;
}
//#endregion
//#region node_modules/gl-matrix/esm/mat4.js
/**
* 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
* @module mat4
*/
/**
* Creates a new identity mat4
*
* @returns {mat4} a new 4x4 matrix
*/
function create$3() {
	var out = new ARRAY_TYPE(16);
	if (ARRAY_TYPE != Float32Array) {
		out[1] = 0;
		out[2] = 0;
		out[3] = 0;
		out[4] = 0;
		out[6] = 0;
		out[7] = 0;
		out[8] = 0;
		out[9] = 0;
		out[11] = 0;
		out[12] = 0;
		out[13] = 0;
		out[14] = 0;
	}
	out[0] = 1;
	out[5] = 1;
	out[10] = 1;
	out[15] = 1;
	return out;
}
/**
* Set a mat4 to the identity matrix
*
* @param {mat4} out the receiving matrix
* @returns {mat4} out
*/
function identity(out) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = 0;
	out[13] = 0;
	out[14] = 0;
	out[15] = 1;
	return out;
}
/**
* Multiplies two mat4s
*
* @param {mat4} out the receiving matrix
* @param {ReadonlyMat4} a the first operand
* @param {ReadonlyMat4} b the second operand
* @returns {mat4} out
*/
function multiply(out, a, b) {
	var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[4];
	b1 = b[5];
	b2 = b[6];
	b3 = b[7];
	out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[8];
	b1 = b[9];
	b2 = b[10];
	b3 = b[11];
	out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	b0 = b[12];
	b1 = b[13];
	b2 = b[14];
	b3 = b[15];
	out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
	out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
	out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
	out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
	return out;
}
/**
* Creates a matrix from a vector translation
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, dest, vec);
*
* @param {mat4} out mat4 receiving operation result
* @param {ReadonlyVec3} v Translation vector
* @returns {mat4} out
*/
function fromTranslation(out, v) {
	out[0] = 1;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = 1;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[10] = 1;
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}
/**
* Returns the scaling factor component of a transformation
*  matrix. If a matrix is built with fromRotationTranslationScale
*  with a normalized Quaternion paramter, the returned vector will be
*  the same as the scaling vector
*  originally supplied.
* @param  {vec3} out Vector to receive scaling factor component
* @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
* @return {vec3} out
*/
function getScaling(out, mat) {
	var m11 = mat[0];
	var m12 = mat[1];
	var m13 = mat[2];
	var m21 = mat[4];
	var m22 = mat[5];
	var m23 = mat[6];
	var m31 = mat[8];
	var m32 = mat[9];
	var m33 = mat[10];
	out[0] = Math.hypot(m11, m12, m13);
	out[1] = Math.hypot(m21, m22, m23);
	out[2] = Math.hypot(m31, m32, m33);
	return out;
}
/**
* Returns a quaternion representing the rotational component
*  of a transformation matrix. If a matrix is built with
*  fromRotationTranslation, the returned quaternion will be the
*  same as the quaternion originally supplied.
* @param {quat} out Quaternion to receive the rotation component
* @param {ReadonlyMat4} mat Matrix to be decomposed (input)
* @return {quat} out
*/
function getRotation(out, mat) {
	var scaling = new ARRAY_TYPE(3);
	getScaling(scaling, mat);
	var is1 = 1 / scaling[0];
	var is2 = 1 / scaling[1];
	var is3 = 1 / scaling[2];
	var sm11 = mat[0] * is1;
	var sm12 = mat[1] * is2;
	var sm13 = mat[2] * is3;
	var sm21 = mat[4] * is1;
	var sm22 = mat[5] * is2;
	var sm23 = mat[6] * is3;
	var sm31 = mat[8] * is1;
	var sm32 = mat[9] * is2;
	var sm33 = mat[10] * is3;
	var trace = sm11 + sm22 + sm33;
	var S = 0;
	if (trace > 0) {
		S = Math.sqrt(trace + 1) * 2;
		out[3] = .25 * S;
		out[0] = (sm23 - sm32) / S;
		out[1] = (sm31 - sm13) / S;
		out[2] = (sm12 - sm21) / S;
	} else if (sm11 > sm22 && sm11 > sm33) {
		S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
		out[3] = (sm23 - sm32) / S;
		out[0] = .25 * S;
		out[1] = (sm12 + sm21) / S;
		out[2] = (sm31 + sm13) / S;
	} else if (sm22 > sm33) {
		S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
		out[3] = (sm31 - sm13) / S;
		out[0] = (sm12 + sm21) / S;
		out[1] = .25 * S;
		out[2] = (sm23 + sm32) / S;
	} else {
		S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
		out[3] = (sm12 - sm21) / S;
		out[0] = (sm31 + sm13) / S;
		out[1] = (sm23 + sm32) / S;
		out[2] = .25 * S;
	}
	return out;
}
/**
* Creates a matrix from a quaternion rotation, vector translation and vector scale
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, vec);
*     let quatMat = mat4.create();
*     quat4.toMat4(quat, quatMat);
*     mat4.multiply(dest, quatMat);
*     mat4.scale(dest, scale)
*
* @param {mat4} out mat4 receiving operation result
* @param {quat4} q Rotation quaternion
* @param {ReadonlyVec3} v Translation vector
* @param {ReadonlyVec3} s Scaling vector
* @returns {mat4} out
*/
function fromRotationTranslationScale(out, q, v, s) {
	var x = q[0], y = q[1], z = q[2], w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	var sx = s[0];
	var sy = s[1];
	var sz = s[2];
	out[0] = (1 - (yy + zz)) * sx;
	out[1] = (xy + wz) * sx;
	out[2] = (xz - wy) * sx;
	out[3] = 0;
	out[4] = (xy - wz) * sy;
	out[5] = (1 - (xx + zz)) * sy;
	out[6] = (yz + wx) * sy;
	out[7] = 0;
	out[8] = (xz + wy) * sz;
	out[9] = (yz - wx) * sz;
	out[10] = (1 - (xx + yy)) * sz;
	out[11] = 0;
	out[12] = v[0];
	out[13] = v[1];
	out[14] = v[2];
	out[15] = 1;
	return out;
}
/**
* Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
* This is equivalent to (but much faster than):
*
*     mat4.identity(dest);
*     mat4.translate(dest, vec);
*     mat4.translate(dest, origin);
*     let quatMat = mat4.create();
*     quat4.toMat4(quat, quatMat);
*     mat4.multiply(dest, quatMat);
*     mat4.scale(dest, scale)
*     mat4.translate(dest, negativeOrigin);
*
* @param {mat4} out mat4 receiving operation result
* @param {quat4} q Rotation quaternion
* @param {ReadonlyVec3} v Translation vector
* @param {ReadonlyVec3} s Scaling vector
* @param {ReadonlyVec3} o The origin vector around which to scale and rotate
* @returns {mat4} out
*/
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
	var x = q[0], y = q[1], z = q[2], w = q[3];
	var x2 = x + x;
	var y2 = y + y;
	var z2 = z + z;
	var xx = x * x2;
	var xy = x * y2;
	var xz = x * z2;
	var yy = y * y2;
	var yz = y * z2;
	var zz = z * z2;
	var wx = w * x2;
	var wy = w * y2;
	var wz = w * z2;
	var sx = s[0];
	var sy = s[1];
	var sz = s[2];
	var ox = o[0];
	var oy = o[1];
	var oz = o[2];
	var out0 = (1 - (yy + zz)) * sx;
	var out1 = (xy + wz) * sx;
	var out2 = (xz - wy) * sx;
	var out4 = (xy - wz) * sy;
	var out5 = (1 - (xx + zz)) * sy;
	var out6 = (yz + wx) * sy;
	var out8 = (xz + wy) * sz;
	var out9 = (yz - wx) * sz;
	var out10 = (1 - (xx + yy)) * sz;
	out[0] = out0;
	out[1] = out1;
	out[2] = out2;
	out[3] = 0;
	out[4] = out4;
	out[5] = out5;
	out[6] = out6;
	out[7] = 0;
	out[8] = out8;
	out[9] = out9;
	out[10] = out10;
	out[11] = 0;
	out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
	out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
	out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
	out[15] = 1;
	return out;
}
/**
* Generates a perspective projection matrix with the given bounds.
* Passing null/undefined/no value for far will generate infinite projection matrix.
*
* @param {mat4} out mat4 frustum matrix will be written into
* @param {number} fovy Vertical field of view in radians
* @param {number} aspect Aspect ratio. typically viewport width/height
* @param {number} near Near bound of the frustum
* @param {number} far Far bound of the frustum, can be null or Infinity
* @returns {mat4} out
*/
function perspective(out, fovy, aspect, near, far) {
	var f = 1 / Math.tan(fovy / 2), nf;
	out[0] = f / aspect;
	out[1] = 0;
	out[2] = 0;
	out[3] = 0;
	out[4] = 0;
	out[5] = f;
	out[6] = 0;
	out[7] = 0;
	out[8] = 0;
	out[9] = 0;
	out[11] = -1;
	out[12] = 0;
	out[13] = 0;
	out[15] = 0;
	if (far != null && far !== Infinity) {
		nf = 1 / (near - far);
		out[10] = (far + near) * nf;
		out[14] = 2 * far * near * nf;
	} else {
		out[10] = -1;
		out[14] = -2 * near;
	}
	return out;
}
/**
* Generates a look-at matrix with the given eye position, focal point, and up axis.
* If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
*
* @param {mat4} out mat4 frustum matrix will be written into
* @param {ReadonlyVec3} eye Position of the viewer
* @param {ReadonlyVec3} center Point the viewer is looking at
* @param {ReadonlyVec3} up vec3 pointing up
* @returns {mat4} out
*/
function lookAt(out, eye, center, up) {
	var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
	var eyex = eye[0];
	var eyey = eye[1];
	var eyez = eye[2];
	var upx = up[0];
	var upy = up[1];
	var upz = up[2];
	var centerx = center[0];
	var centery = center[1];
	var centerz = center[2];
	if (Math.abs(eyex - centerx) < 1e-6 && Math.abs(eyey - centery) < 1e-6 && Math.abs(eyez - centerz) < 1e-6) return identity(out);
	z0 = eyex - centerx;
	z1 = eyey - centery;
	z2 = eyez - centerz;
	len = 1 / Math.hypot(z0, z1, z2);
	z0 *= len;
	z1 *= len;
	z2 *= len;
	x0 = upy * z2 - upz * z1;
	x1 = upz * z0 - upx * z2;
	x2 = upx * z1 - upy * z0;
	len = Math.hypot(x0, x1, x2);
	if (!len) {
		x0 = 0;
		x1 = 0;
		x2 = 0;
	} else {
		len = 1 / len;
		x0 *= len;
		x1 *= len;
		x2 *= len;
	}
	y0 = z1 * x2 - z2 * x1;
	y1 = z2 * x0 - z0 * x2;
	y2 = z0 * x1 - z1 * x0;
	len = Math.hypot(y0, y1, y2);
	if (!len) {
		y0 = 0;
		y1 = 0;
		y2 = 0;
	} else {
		len = 1 / len;
		y0 *= len;
		y1 *= len;
		y2 *= len;
	}
	out[0] = x0;
	out[1] = y0;
	out[2] = z0;
	out[3] = 0;
	out[4] = x1;
	out[5] = y1;
	out[6] = z1;
	out[7] = 0;
	out[8] = x2;
	out[9] = y2;
	out[10] = z2;
	out[11] = 0;
	out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	out[15] = 1;
	return out;
}
/**
* Alias for {@link mat4.multiply}
* @function
*/
var mul = multiply;
//#endregion
//#region node_modules/gl-matrix/esm/vec3.js
/**
* 3 Dimensional Vector
* @module vec3
*/
/**
* Creates a new, empty vec3
*
* @returns {vec3} a new 3D vector
*/
function create$2() {
	var out = new ARRAY_TYPE(3);
	if (ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
	}
	return out;
}
/**
* Calculates the length of a vec3
*
* @param {ReadonlyVec3} a vector to calculate length of
* @returns {Number} length of a
*/
function length$2(a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	return Math.hypot(x, y, z);
}
/**
* Creates a new vec3 initialized with the given values
*
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @returns {vec3} a new 3D vector
*/
function fromValues$2(x, y, z) {
	var out = new ARRAY_TYPE(3);
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}
/**
* Copy the values from one vec3 to another
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the source vector
* @returns {vec3} out
*/
function copy$2(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	return out;
}
/**
* Set the components of a vec3 to the given values
*
* @param {vec3} out the receiving vector
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @returns {vec3} out
*/
function set$2(out, x, y, z) {
	out[0] = x;
	out[1] = y;
	out[2] = z;
	return out;
}
/**
* Adds two vec3's
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @returns {vec3} out
*/
function add$2(out, a, b) {
	out[0] = a[0] + b[0];
	out[1] = a[1] + b[1];
	out[2] = a[2] + b[2];
	return out;
}
/**
* Subtracts vector b from vector a
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @returns {vec3} out
*/
function subtract(out, a, b) {
	out[0] = a[0] - b[0];
	out[1] = a[1] - b[1];
	out[2] = a[2] - b[2];
	return out;
}
/**
* Scales a vec3 by a scalar number
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the vector to scale
* @param {Number} b amount to scale the vector by
* @returns {vec3} out
*/
function scale$2(out, a, b) {
	out[0] = a[0] * b;
	out[1] = a[1] * b;
	out[2] = a[2] * b;
	return out;
}
/**
* Normalize a vec3
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a vector to normalize
* @returns {vec3} out
*/
function normalize$2(out, a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	var len = x * x + y * y + z * z;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = a[0] * len;
	out[1] = a[1] * len;
	out[2] = a[2] * len;
	return out;
}
/**
* Calculates the dot product of two vec3's
*
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @returns {Number} dot product of a and b
*/
function dot$2(a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
* Computes the cross product of two vec3's
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @returns {vec3} out
*/
function cross(out, a, b) {
	var ax = a[0], ay = a[1], az = a[2];
	var bx = b[0], by = b[1], bz = b[2];
	out[0] = ay * bz - az * by;
	out[1] = az * bx - ax * bz;
	out[2] = ax * by - ay * bx;
	return out;
}
/**
* Performs a linear interpolation between two vec3's
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @param {Number} t interpolation amount, in the range [0-1], between the two inputs
* @returns {vec3} out
*/
function lerp$3(out, a, b, t) {
	var ax = a[0];
	var ay = a[1];
	var az = a[2];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	return out;
}
/**
* Performs a hermite interpolation with two control points
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @param {ReadonlyVec3} c the third operand
* @param {ReadonlyVec3} d the fourth operand
* @param {Number} t interpolation amount, in the range [0-1], between the two inputs
* @returns {vec3} out
*/
function hermite$1(out, a, b, c, d, t) {
	var factorTimes2 = t * t;
	var factor1 = factorTimes2 * (2 * t - 3) + 1;
	var factor2 = factorTimes2 * (t - 2) + t;
	var factor3 = factorTimes2 * (t - 1);
	var factor4 = factorTimes2 * (3 - 2 * t);
	out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	return out;
}
/**
* Performs a bezier interpolation with two control points
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the first operand
* @param {ReadonlyVec3} b the second operand
* @param {ReadonlyVec3} c the third operand
* @param {ReadonlyVec3} d the fourth operand
* @param {Number} t interpolation amount, in the range [0-1], between the two inputs
* @returns {vec3} out
*/
function bezier$1(out, a, b, c, d, t) {
	var inverseFactor = 1 - t;
	var inverseFactorTimesTwo = inverseFactor * inverseFactor;
	var factorTimes2 = t * t;
	var factor1 = inverseFactorTimesTwo * inverseFactor;
	var factor2 = 3 * t * inverseFactorTimesTwo;
	var factor3 = 3 * factorTimes2 * inverseFactor;
	var factor4 = factorTimes2 * t;
	out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	return out;
}
/**
* Transforms the vec3 with a mat4.
* 4th vector component is implicitly '1'
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the vector to transform
* @param {ReadonlyMat4} m matrix to transform with
* @returns {vec3} out
*/
function transformMat4(out, a, m) {
	var x = a[0], y = a[1], z = a[2];
	var w = m[3] * x + m[7] * y + m[11] * z + m[15];
	w = w || 1;
	out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	return out;
}
/**
* Transforms the vec3 with a quat
* Can also be used for dual quaternions. (Multiply it with the real part)
*
* @param {vec3} out the receiving vector
* @param {ReadonlyVec3} a the vector to transform
* @param {ReadonlyQuat} q quaternion to transform with
* @returns {vec3} out
*/
function transformQuat(out, a, q) {
	var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
	var x = a[0], y = a[1], z = a[2];
	var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
	var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
	var w2 = qw * 2;
	uvx *= w2;
	uvy *= w2;
	uvz *= w2;
	uuvx *= 2;
	uuvy *= 2;
	uuvz *= 2;
	out[0] = x + uvx + uuvx;
	out[1] = y + uvy + uuvy;
	out[2] = z + uvz + uuvz;
	return out;
}
/**
* Rotate a 3D vector around the y-axis
* @param {vec3} out The receiving vec3
* @param {ReadonlyVec3} a The vec3 point to rotate
* @param {ReadonlyVec3} b The origin of the rotation
* @param {Number} rad The angle of rotation in radians
* @returns {vec3} out
*/
function rotateY(out, a, b, rad) {
	var p = [], r = [];
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];
	r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
	r[1] = p[1];
	r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}
/**
* Rotate a 3D vector around the z-axis
* @param {vec3} out The receiving vec3
* @param {ReadonlyVec3} a The vec3 point to rotate
* @param {ReadonlyVec3} b The origin of the rotation
* @param {Number} rad The angle of rotation in radians
* @returns {vec3} out
*/
function rotateZ(out, a, b, rad) {
	var p = [], r = [];
	p[0] = a[0] - b[0];
	p[1] = a[1] - b[1];
	p[2] = a[2] - b[2];
	r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
	r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
	r[2] = p[2];
	out[0] = r[0] + b[0];
	out[1] = r[1] + b[1];
	out[2] = r[2] + b[2];
	return out;
}
/**
* Alias for {@link vec3.subtract}
* @function
*/
var sub = subtract;
/**
* Alias for {@link vec3.length}
* @function
*/
var len = length$2;
(function() {
	var vec = create$2();
	return function(a, stride, offset, count, fn, arg) {
		var i, l;
		if (!stride) stride = 3;
		if (!offset) offset = 0;
		if (count) l = Math.min(count * stride + offset, a.length);
		else l = a.length;
		for (i = offset; i < l; i += stride) {
			vec[0] = a[i];
			vec[1] = a[i + 1];
			vec[2] = a[i + 2];
			fn(vec, vec, arg);
			a[i] = vec[0];
			a[i + 1] = vec[1];
			a[i + 2] = vec[2];
		}
		return a;
	};
})();
//#endregion
//#region node_modules/gl-matrix/esm/vec4.js
/**
* 4 Dimensional Vector
* @module vec4
*/
/**
* Creates a new, empty vec4
*
* @returns {vec4} a new 4D vector
*/
function create$1() {
	var out = new ARRAY_TYPE(4);
	if (ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
		out[3] = 0;
	}
	return out;
}
/**
* Creates a new vec4 initialized with the given values
*
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @param {Number} w W component
* @returns {vec4} a new 4D vector
*/
function fromValues$1(x, y, z, w) {
	var out = new ARRAY_TYPE(4);
	out[0] = x;
	out[1] = y;
	out[2] = z;
	out[3] = w;
	return out;
}
/**
* Copy the values from one vec4 to another
*
* @param {vec4} out the receiving vector
* @param {ReadonlyVec4} a the source vector
* @returns {vec4} out
*/
function copy$1(out, a) {
	out[0] = a[0];
	out[1] = a[1];
	out[2] = a[2];
	out[3] = a[3];
	return out;
}
/**
* Normalize a vec4
*
* @param {vec4} out the receiving vector
* @param {ReadonlyVec4} a vector to normalize
* @returns {vec4} out
*/
function normalize$1(out, a) {
	var x = a[0];
	var y = a[1];
	var z = a[2];
	var w = a[3];
	var len = x * x + y * y + z * z + w * w;
	if (len > 0) len = 1 / Math.sqrt(len);
	out[0] = x * len;
	out[1] = y * len;
	out[2] = z * len;
	out[3] = w * len;
	return out;
}
/**
* Performs a linear interpolation between two vec4's
*
* @param {vec4} out the receiving vector
* @param {ReadonlyVec4} a the first operand
* @param {ReadonlyVec4} b the second operand
* @param {Number} t interpolation amount, in the range [0-1], between the two inputs
* @returns {vec4} out
*/
function lerp$2(out, a, b, t) {
	var ax = a[0];
	var ay = a[1];
	var az = a[2];
	var aw = a[3];
	out[0] = ax + t * (b[0] - ax);
	out[1] = ay + t * (b[1] - ay);
	out[2] = az + t * (b[2] - az);
	out[3] = aw + t * (b[3] - aw);
	return out;
}
(function() {
	var vec = create$1();
	return function(a, stride, offset, count, fn, arg) {
		var i, l;
		if (!stride) stride = 4;
		if (!offset) offset = 0;
		if (count) l = Math.min(count * stride + offset, a.length);
		else l = a.length;
		for (i = offset; i < l; i += stride) {
			vec[0] = a[i];
			vec[1] = a[i + 1];
			vec[2] = a[i + 2];
			vec[3] = a[i + 3];
			fn(vec, vec, arg);
			a[i] = vec[0];
			a[i + 1] = vec[1];
			a[i + 2] = vec[2];
			a[i + 3] = vec[3];
		}
		return a;
	};
})();
//#endregion
//#region node_modules/gl-matrix/esm/quat.js
/**
* Quaternion
* @module quat
*/
/**
* Creates a new identity quat
*
* @returns {quat} a new quaternion
*/
function create() {
	var out = new ARRAY_TYPE(4);
	if (ARRAY_TYPE != Float32Array) {
		out[0] = 0;
		out[1] = 0;
		out[2] = 0;
	}
	out[3] = 1;
	return out;
}
/**
* Sets a quat from the given angle and rotation axis,
* then returns it.
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyVec3} axis the axis around which to rotate
* @param {Number} rad the angle in radians
* @returns {quat} out
**/
function setAxisAngle(out, axis, rad) {
	rad = rad * .5;
	var s = Math.sin(rad);
	out[0] = s * axis[0];
	out[1] = s * axis[1];
	out[2] = s * axis[2];
	out[3] = Math.cos(rad);
	return out;
}
/**
* Performs a spherical linear interpolation between two quat
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyQuat} a the first operand
* @param {ReadonlyQuat} b the second operand
* @param {Number} t interpolation amount, in the range [0-1], between the two inputs
* @returns {quat} out
*/
function slerp(out, a, b, t) {
	var ax = a[0], ay = a[1], az = a[2], aw = a[3];
	var bx = b[0], by = b[1], bz = b[2], bw = b[3];
	var omega, cosom = ax * bx + ay * by + az * bz + aw * bw, sinom, scale0, scale1;
	if (cosom < 0) {
		cosom = -cosom;
		bx = -bx;
		by = -by;
		bz = -bz;
		bw = -bw;
	}
	if (1 - cosom > 1e-6) {
		omega = Math.acos(cosom);
		sinom = Math.sin(omega);
		scale0 = Math.sin((1 - t) * omega) / sinom;
		scale1 = Math.sin(t * omega) / sinom;
	} else {
		scale0 = 1 - t;
		scale1 = t;
	}
	out[0] = scale0 * ax + scale1 * bx;
	out[1] = scale0 * ay + scale1 * by;
	out[2] = scale0 * az + scale1 * bz;
	out[3] = scale0 * aw + scale1 * bw;
	return out;
}
/**
* Calculates the inverse of a quat
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyQuat} a quat to calculate inverse of
* @returns {quat} out
*/
function invert(out, a) {
	var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
	var invDot = dot ? 1 / dot : 0;
	out[0] = -a0 * invDot;
	out[1] = -a1 * invDot;
	out[2] = -a2 * invDot;
	out[3] = a3 * invDot;
	return out;
}
/**
* Creates a quaternion from the given 3x3 rotation matrix.
*
* NOTE: The resultant quaternion is not normalized, so you should be sure
* to renormalize the quaternion yourself where necessary.
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyMat3} m rotation matrix
* @returns {quat} out
* @function
*/
function fromMat3(out, m) {
	var fTrace = m[0] + m[4] + m[8];
	var fRoot;
	if (fTrace > 0) {
		fRoot = Math.sqrt(fTrace + 1);
		out[3] = .5 * fRoot;
		fRoot = .5 / fRoot;
		out[0] = (m[5] - m[7]) * fRoot;
		out[1] = (m[6] - m[2]) * fRoot;
		out[2] = (m[1] - m[3]) * fRoot;
	} else {
		var i = 0;
		if (m[4] > m[0]) i = 1;
		if (m[8] > m[i * 3 + i]) i = 2;
		var j = (i + 1) % 3;
		var k = (i + 2) % 3;
		fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
		out[i] = .5 * fRoot;
		fRoot = .5 / fRoot;
		out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
		out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
		out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
	}
	return out;
}
/**
* Creates a new quat initialized with the given values
*
* @param {Number} x X component
* @param {Number} y Y component
* @param {Number} z Z component
* @param {Number} w W component
* @returns {quat} a new quaternion
* @function
*/
var fromValues = fromValues$1;
/**
* Copy the values from one quat to another
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyQuat} a the source quaternion
* @returns {quat} out
* @function
*/
var copy = copy$1;
/**
* Normalize a quat
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyQuat} a quaternion to normalize
* @returns {quat} out
* @function
*/
var normalize = normalize$1;
/**
* Sets a quaternion to represent the shortest rotation from one
* vector to another.
*
* Both vectors are assumed to be unit length.
*
* @param {quat} out the receiving quaternion.
* @param {ReadonlyVec3} a the initial vector
* @param {ReadonlyVec3} b the destination vector
* @returns {quat} out
*/
var rotationTo = function() {
	var tmpvec3 = create$2();
	var xUnitVec3 = fromValues$2(1, 0, 0);
	var yUnitVec3 = fromValues$2(0, 1, 0);
	return function(out, a, b) {
		var dot = dot$2(a, b);
		if (dot < -.999999) {
			cross(tmpvec3, xUnitVec3, a);
			if (len(tmpvec3) < 1e-6) cross(tmpvec3, yUnitVec3, a);
			normalize$2(tmpvec3, tmpvec3);
			setAxisAngle(out, tmpvec3, Math.PI);
			return out;
		} else if (dot > .999999) {
			out[0] = 0;
			out[1] = 0;
			out[2] = 0;
			out[3] = 1;
			return out;
		} else {
			cross(tmpvec3, a, b);
			out[0] = tmpvec3[0];
			out[1] = tmpvec3[1];
			out[2] = tmpvec3[2];
			out[3] = 1 + dot;
			return normalize(out, out);
		}
	};
}();
/**
* Performs a spherical linear interpolation with two control points
*
* @param {quat} out the receiving quaternion
* @param {ReadonlyQuat} a the first operand
* @param {ReadonlyQuat} b the second operand
* @param {ReadonlyQuat} c the third operand
* @param {ReadonlyQuat} d the fourth operand
* @param {Number} t interpolation amount, in the range [0-1], between the two inputs
* @returns {quat} out
*/
var sqlerp = function() {
	var temp1 = create();
	var temp2 = create();
	return function(out, a, b, c, d, t) {
		slerp(temp1, a, d, t);
		slerp(temp2, b, c, t);
		slerp(out, temp1, temp2, 2 * t * (1 - t));
		return out;
	};
}();
(function() {
	var matr = create$4();
	return function(out, view, right, up) {
		matr[0] = right[0];
		matr[3] = right[1];
		matr[6] = right[2];
		matr[1] = up[0];
		matr[4] = up[1];
		matr[7] = up[2];
		matr[2] = -view[0];
		matr[5] = -view[1];
		matr[8] = -view[2];
		return normalize(out, fromMat3(out, matr));
	};
})();
//#endregion
//#region renderer/interp.ts
var findKeyframesRes = {
	frame: 0,
	left: null,
	right: null
};
function lerp(left, right, t) {
	return left * (1 - t) + right * t;
}
function bezier(left, outTan, inTan, right, t) {
	const inverseFactor = 1 - t, inverseFactorTimesTwo = inverseFactor * inverseFactor, factorTimes2 = t * t, factor1 = inverseFactorTimesTwo * inverseFactor, factor2 = 3 * t * inverseFactorTimesTwo, factor3 = 3 * factorTimes2 * inverseFactor, factor4 = factorTimes2 * t;
	return left * factor1 + outTan * factor2 + inTan * factor3 + right * factor4;
}
function hermite(left, outTan, inTan, right, t) {
	const factorTimes2 = t * t, factor1 = factorTimes2 * (2 * t - 3) + 1, factor2 = factorTimes2 * (t - 2) + t, factor3 = factorTimes2 * (t - 1), factor4 = factorTimes2 * (3 - 2 * t);
	return left * factor1 + outTan * factor2 + inTan * factor3 + right * factor4;
}
function findKeyframes(animVector, frame, from, to) {
	if (!animVector) return null;
	const array = animVector.Keys;
	let first = 0;
	let count = array.length;
	if (count === 0) return null;
	if (array[0].Frame > to) return null;
	else if (array[count - 1].Frame < from) return null;
	while (count > 0) {
		const step = count >> 1;
		if (array[first + step].Frame <= frame) {
			first = first + step + 1;
			count -= step + 1;
		} else count = step;
	}
	if (first === array.length || array[first].Frame > to) if (first > 0 && array[first - 1].Frame >= from) {
		findKeyframesRes.frame = frame;
		findKeyframesRes.left = array[first - 1];
		findKeyframesRes.right = array[first - 1];
		return findKeyframesRes;
	} else return null;
	if (first === 0 || array[first - 1].Frame < from) if (array[first].Frame <= to) {
		findKeyframesRes.frame = frame;
		findKeyframesRes.left = array[first];
		findKeyframesRes.right = array[first];
		return findKeyframesRes;
	} else return null;
	findKeyframesRes.frame = frame;
	findKeyframesRes.left = array[first - 1];
	findKeyframesRes.right = array[first];
	return findKeyframesRes;
}
function interpNum(frame, left, right, lineType) {
	if (left.Frame === right.Frame) return left.Vector[0];
	const t = (frame - left.Frame) / (right.Frame - left.Frame);
	if (lineType === LineType.DontInterp) return left.Vector[0];
	else if (lineType === LineType.Bezier) return bezier(left.Vector[0], left.OutTan[0], right.InTan[0], right.Vector[0], t);
	else if (lineType === LineType.Hermite) return hermite(left.Vector[0], left.OutTan[0], right.InTan[0], right.Vector[0], t);
	else return lerp(left.Vector[0], right.Vector[0], t);
}
function interpVec3(out, frame, left, right, lineType) {
	if (left.Frame === right.Frame) return left.Vector;
	const t = (frame - left.Frame) / (right.Frame - left.Frame);
	if (lineType === LineType.DontInterp) return left.Vector;
	else if (lineType === LineType.Bezier) return bezier$1(out, left.Vector, left.OutTan, right.InTan, right.Vector, t);
	else if (lineType === LineType.Hermite) return hermite$1(out, left.Vector, left.OutTan, right.InTan, right.Vector, t);
	else return lerp$3(out, left.Vector, right.Vector, t);
}
function interpQuat(out, frame, left, right, lineType) {
	if (left.Frame === right.Frame) return left.Vector;
	const t = (frame - left.Frame) / (right.Frame - left.Frame);
	if (lineType === LineType.DontInterp) return left.Vector;
	else if (lineType === LineType.Hermite || lineType === LineType.Bezier) return sqlerp(out, left.Vector, left.OutTan, right.InTan, right.Vector, t);
	else return slerp(out, left.Vector, right.Vector, t);
}
//#endregion
//#region renderer/modelInterp.ts
var findLocalFrameRes = {
	frame: 0,
	from: 0,
	to: 0
};
var ModelInterp = class {
	static maxAnimVectorVal(vector) {
		if (typeof vector === "number") return vector;
		let max = vector.Keys[0].Vector[0];
		for (let i = 1; i < vector.Keys.length; ++i) if (vector.Keys[i].Vector[0] > max) max = vector.Keys[i].Vector[0];
		return max;
	}
	constructor(rendererData) {
		this.rendererData = rendererData;
	}
	num(animVector) {
		const res = this.findKeyframes(animVector);
		if (!res) return null;
		return interpNum(res.frame, res.left, res.right, animVector.LineType);
	}
	vec3(out, animVector) {
		const res = this.findKeyframes(animVector);
		if (!res) return null;
		return interpVec3(out, res.frame, res.left, res.right, animVector.LineType);
	}
	quat(out, animVector) {
		const res = this.findKeyframes(animVector);
		if (!res) return null;
		return interpQuat(out, res.frame, res.left, res.right, animVector.LineType);
	}
	animVectorVal(vector, defaultVal) {
		let res;
		if (typeof vector === "number") res = vector;
		else {
			res = this.num(vector);
			if (res === null) res = defaultVal;
		}
		return res;
	}
	findKeyframes(animVector) {
		if (!animVector) return null;
		const { frame, from, to } = this.findLocalFrame(animVector);
		return findKeyframes(animVector, frame, from, to);
	}
	findLocalFrame(animVector) {
		if (typeof animVector.GlobalSeqId === "number") {
			findLocalFrameRes.frame = this.rendererData.globalSequencesFrames[animVector.GlobalSeqId];
			findLocalFrameRes.from = 0;
			findLocalFrameRes.to = this.rendererData.model.GlobalSequences[animVector.GlobalSeqId];
		} else {
			findLocalFrameRes.frame = this.rendererData.frame;
			findLocalFrameRes.from = this.rendererData.animationInfo.Interval[0];
			findLocalFrameRes.to = this.rendererData.animationInfo.Interval[1];
		}
		return findLocalFrameRes;
	}
};
//#endregion
//#region renderer/shaders/webgl/particles.vs.glsl?raw
var particles_vs_default = "attribute vec3 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\nattribute vec4 aColor;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vTextureCoord = aTextureCoord;\r\n    vColor = aColor;\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgl/particles.fs.glsl?raw
var particles_fs_default = "precision mediump float;\r\n\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\n\r\nuniform sampler2D uSampler;\r\nuniform vec3 uReplaceableColor;\r\nuniform float uReplaceableType;\r\nuniform float uDiscardAlphaLevel;\r\n\r\nfloat hypot (vec2 z) {\r\n    float t;\r\n    float x = abs(z.x);\r\n    float y = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    return (z.x == 0.0 && z.y == 0.0) ? 0.0 : x * sqrt(1.0 + t * t);\r\n}\r\n\r\nvoid main(void) {\r\n    vec2 coords = vec2(vTextureCoord.s, vTextureCoord.t);\r\n    if (uReplaceableType == 0.) {\r\n        gl_FragColor = texture2D(uSampler, coords);\r\n    } else if (uReplaceableType == 1.) {\r\n        gl_FragColor = vec4(uReplaceableColor, 1.0);\r\n    } else if (uReplaceableType == 2.) {\r\n        float dist = hypot(coords - vec2(0.5, 0.5)) * 2.;\r\n        float truncateDist = clamp(1. - dist * 1.4, 0., 1.);\r\n        float alpha = sin(truncateDist);\r\n        gl_FragColor = vec4(uReplaceableColor * alpha, 1.0);\r\n    }\r\n    gl_FragColor *= vColor;\r\n\r\n    if (gl_FragColor[3] < uDiscardAlphaLevel) {\r\n        discard;\r\n    }\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/particles.wgsl?raw
var particles_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\nstruct FSUniforms {\r\n    replaceableColor: vec3f,\r\n    replaceableType: u32,\r\n    discardAlphaLevel: f32,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var<uniform> fsUniforms: FSUniforms;\r\n@group(1) @binding(1) var fsUniformSampler: sampler;\r\n@group(1) @binding(2) var fsUniformTexture: texture_2d<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n    @location(1) textureCoord: vec2f,\r\n    @location(2) color: vec4f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) textureCoord: vec2f,\r\n    @location(1) color: vec4f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var position: vec4f = vec4f(in.vertexPosition, 1.0);\r\n\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * position;\r\n    out.textureCoord = in.textureCoord;\r\n    out.color = in.color;\r\n    return out;\r\n}\r\n\r\nfn hypot(z: vec2f) -> f32 {\r\n    var t: f32 = 0;\r\n    var x: f32 = abs(z.x);\r\n    let y: f32 = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    if (z.x == 0.0 && z.y == 0.0) {\r\n        return 0.0;\r\n    }\r\n    return x * sqrt(1.0 + t * t);\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    let texCoord: vec2f = in.textureCoord;\r\n    var color: vec4f = vec4f(0.0);\r\n\r\n    if (fsUniforms.replaceableType == 0) {\r\n        color = textureSample(fsUniformTexture, fsUniformSampler, texCoord);\r\n    } else if (fsUniforms.replaceableType == 1) {\r\n        color = vec4f(fsUniforms.replaceableColor, 1.0);\r\n    } else if (fsUniforms.replaceableType == 2) {\r\n        let dist: f32 = hypot(texCoord - vec2(0.5, 0.5)) * 2.;\r\n        let truncateDist: f32 = clamp(1. - dist * 1.4, 0., 1.);\r\n        let alpha: f32 = sin(truncateDist);\r\n        color = vec4f(fsUniforms.replaceableColor * alpha, 1.0);\r\n    }\r\n\r\n    color *= in.color;\r\n\r\n    // hand-made alpha-test\r\n    if (color.a < fsUniforms.discardAlphaLevel) {\r\n        discard;\r\n    }\r\n\r\n    return color;\r\n}\r\n";
//#endregion
//#region renderer/renderSemantics.ts
var DISCARD_MODULATE_LEVEL$1 = .01;
function getLayerDiscardAlphaLevel(filterMode = FilterMode.None) {
	if (filterMode === FilterMode.Transparent) return .75;
	if (filterMode === FilterMode.Modulate || filterMode === FilterMode.Modulate2x) return DISCARD_MODULATE_LEVEL$1;
	return 0;
}
function comparePriorityPlane(leftPriority, leftIndex, rightPriority, rightIndex) {
	return (leftPriority ?? 0) - (rightPriority ?? 0) || leftIndex - rightIndex;
}
var KIND_ORDER = {
	geoset: 0,
	particle: 1,
	ribbon: 2
};
function appendRenderGroup(groups, kind, index, layerIndex = -1) {
	const previous = groups[groups.length - 1];
	if (previous?.kind === kind) {
		previous.indices.push(index);
		previous.layerIndices?.push(layerIndex);
	} else groups.push({
		kind,
		indices: [index],
		...kind === "geoset" ? { layerIndices: [layerIndex] } : {}
	});
}
function buildModelRenderGroups(model, isHD = false) {
	const groups = [];
	const translucentItems = [];
	model.Geosets.forEach((geoset, index) => {
		const material = model.Materials[geoset.MaterialID];
		(isHD ? material?.Layers.slice(0, 1) : material?.Layers)?.forEach((layer, layerIndex) => {
			const filterMode = layer.FilterMode ?? FilterMode.None;
			if (filterMode < FilterMode.Blend) {
				appendRenderGroup(groups, "geoset", index, isHD ? -1 : layerIndex);
				return;
			}
			translucentItems.push({
				kind: "geoset",
				index,
				layerIndex: isHD ? -1 : layerIndex,
				priorityPlane: material?.PriorityPlane ?? 0,
				filterMode
			});
		});
	});
	model.ParticleEmitters2.forEach((emitter, index) => translucentItems.push({
		kind: "particle",
		index,
		layerIndex: -1,
		priorityPlane: emitter.PriorityPlane ?? 0,
		filterMode: Number.POSITIVE_INFINITY
	}));
	model.RibbonEmitters.forEach((emitter, index) => {
		const material = model.Materials[emitter.MaterialID];
		translucentItems.push({
			kind: "ribbon",
			index,
			layerIndex: -1,
			priorityPlane: material?.PriorityPlane ?? 0,
			filterMode: Number.POSITIVE_INFINITY
		});
	});
	translucentItems.sort((left, right) => left.priorityPlane - right.priorityPlane || KIND_ORDER[left.kind] - KIND_ORDER[right.kind] || left.filterMode - right.filterMode || left.index - right.index || left.layerIndex - right.layerIndex);
	for (const item of translucentItems) appendRenderGroup(groups, item.kind, item.index, item.layerIndex);
	return groups;
}
function getBlockCompressedBytesPerRow(format, width) {
	const bytesPerBlock = format === "bc1-rgba-unorm" || format === "bc1-rgba-unorm-srgb" || format === "bc4-r-unorm" || format === "bc4-r-snorm" ? 8 : 16;
	return Math.ceil(width / 4) * bytesPerBlock;
}
//#endregion
//#region renderer/particles.ts
var rotateCenter = fromValues$2(0, 0, 0);
var firstColor = create$1();
var secondColor = create$1();
var color = create$1();
var tailPos = create$2();
var tailCross = create$2();
var DISCARD_ALPHA_KEY_LEVEL = .83;
var DISCARD_MODULATE_LEVEL = .01;
var ParticlesController = class {
	constructor(interp, rendererData) {
		this.gpuVSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
		this.gpuVSUniformsViews = {
			mvMatrix: new Float32Array(this.gpuVSUniformsValues, 0, 16),
			pMatrix: new Float32Array(this.gpuVSUniformsValues, 64, 16)
		};
		this.gpuVSMatricesInitialized = false;
		this.gpuFSUniformsValues = /* @__PURE__ */ new ArrayBuffer(32);
		this.gpuFSUniformsViews = {
			replaceableColor: new Float32Array(this.gpuFSUniformsValues, 0, 3),
			replaceableType: new Uint32Array(this.gpuFSUniformsValues, 12, 1),
			discardAlphaLevel: new Float32Array(this.gpuFSUniformsValues, 16, 1)
		};
		this.shaderProgramLocations = {
			vertexPositionAttribute: null,
			textureCoordAttribute: null,
			colorAttribute: null,
			pMatrixUniform: null,
			mvMatrixUniform: null,
			samplerUniform: null,
			replaceableColorUniform: null,
			replaceableTypeUniform: null,
			discardAlphaLevelUniform: null
		};
		this.particleStorage = [];
		this.interp = interp;
		this.rendererData = rendererData;
		this.emitters = [];
		this.emittersByIndex = [];
		if (rendererData.model.ParticleEmitters2.length) {
			this.particleBaseVectors = [
				create$2(),
				create$2(),
				create$2(),
				create$2()
			];
			for (let i = 0; i < rendererData.model.ParticleEmitters2.length; ++i) {
				const particleEmitter = rendererData.model.ParticleEmitters2[i];
				const emitter = {
					index: i,
					emission: 0,
					squirtFrame: 0,
					particles: [],
					props: particleEmitter,
					capacity: 0,
					baseCapacity: 0,
					type: particleEmitter.FrameFlags,
					tailVertices: null,
					tailVertexBuffer: null,
					tailVertexGPUBuffer: null,
					headVertices: null,
					headVertexBuffer: null,
					headVertexGPUBuffer: null,
					tailTexCoords: null,
					tailTexCoordBuffer: null,
					tailTexCoordGPUBuffer: null,
					headTexCoords: null,
					headTexCoordBuffer: null,
					headTexCoordGPUBuffer: null,
					colors: null,
					colorBuffer: null,
					colorGPUBuffer: null,
					indices: null,
					indexBuffer: null,
					indexGPUBuffer: null,
					fsUniformsBuffer: null
				};
				emitter.baseCapacity = Math.ceil(ModelInterp.maxAnimVectorVal(emitter.props.EmissionRate) * emitter.props.LifeSpan);
				this.emitters.push(emitter);
				this.emittersByIndex[i] = emitter;
			}
			this.emitters.sort((left, right) => comparePriorityPlane(left.props.PriorityPlane, left.index, right.props.PriorityPlane, right.index));
		}
	}
	destroy() {
		if (this.shaderProgram) {
			if (this.vertexShader) {
				this.gl.detachShader(this.shaderProgram, this.vertexShader);
				this.gl.deleteShader(this.vertexShader);
				this.vertexShader = null;
			}
			if (this.fragmentShader) {
				this.gl.detachShader(this.shaderProgram, this.fragmentShader);
				this.gl.deleteShader(this.fragmentShader);
				this.fragmentShader = null;
			}
			this.gl.deleteProgram(this.shaderProgram);
			this.shaderProgram = null;
		}
		this.particleStorage = [];
		if (this.gpuVSUniformsBuffer) {
			this.gpuVSUniformsBuffer.destroy();
			this.gpuVSUniformsBuffer = null;
		}
		for (const emitter of this.emitters) {
			if (this.gl) [
				emitter.colorBuffer,
				emitter.indexBuffer,
				emitter.headVertexBuffer,
				emitter.tailVertexBuffer,
				emitter.headTexCoordBuffer,
				emitter.tailTexCoordBuffer
			].forEach((buffer) => {
				if (buffer) this.gl.deleteBuffer(buffer);
			});
			if (emitter.colorGPUBuffer) emitter.colorGPUBuffer.destroy();
			if (emitter.indexGPUBuffer) emitter.indexGPUBuffer.destroy();
			if (emitter.headVertexGPUBuffer) emitter.headVertexGPUBuffer.destroy();
			if (emitter.tailVertexGPUBuffer) emitter.tailVertexGPUBuffer.destroy();
			if (emitter.headTexCoordGPUBuffer) emitter.headTexCoordGPUBuffer.destroy();
			if (emitter.tailTexCoordGPUBuffer) emitter.tailTexCoordGPUBuffer.destroy();
			if (emitter.fsUniformsBuffer) emitter.fsUniformsBuffer.destroy();
		}
		this.emitters = [];
		this.emittersByIndex = [];
	}
	initGL(glContext) {
		this.gl = glContext;
		this.initShaders();
	}
	initGPUDevice(device) {
		this.device = device;
		this.gpuVSMatricesInitialized = false;
		this.gpuShaderModule = device.createShaderModule({
			label: "particles shader module",
			code: particles_default
		});
		this.vsBindGroupLayout = this.device.createBindGroupLayout({
			label: "particles vs bind group layout",
			entries: [{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: {
					type: "uniform",
					hasDynamicOffset: false,
					minBindingSize: 128
				}
			}]
		});
		this.fsBindGroupLayout = this.device.createBindGroupLayout({
			label: "particles bind group layout2",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					buffer: {
						type: "uniform",
						hasDynamicOffset: false,
						minBindingSize: 32
					}
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				}
			]
		});
		this.gpuPipelineLayout = this.device.createPipelineLayout({
			label: "particles pipeline layout",
			bindGroupLayouts: [this.vsBindGroupLayout, this.fsBindGroupLayout]
		});
		const createPipeline = (name, blend, depth) => {
			return device.createRenderPipeline({
				label: `particles pipeline ${name}`,
				layout: this.gpuPipelineLayout,
				vertex: {
					module: this.gpuShaderModule,
					buffers: [
						{
							arrayStride: 12,
							attributes: [{
								shaderLocation: 0,
								offset: 0,
								format: "float32x3"
							}]
						},
						{
							arrayStride: 8,
							attributes: [{
								shaderLocation: 1,
								offset: 0,
								format: "float32x2"
							}]
						},
						{
							arrayStride: 16,
							attributes: [{
								shaderLocation: 2,
								offset: 0,
								format: "float32x4"
							}]
						}
					]
				},
				fragment: {
					module: this.gpuShaderModule,
					targets: [{
						format: navigator.gpu.getPreferredCanvasFormat(),
						blend
					}]
				},
				depthStencil: depth
			});
		};
		this.gpuPipelines = [
			createPipeline("blend", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one-minus-src-alpha"
				},
				alpha: {
					operation: "add",
					srcFactor: "one",
					dstFactor: "one-minus-src-alpha"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("additive", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				},
				alpha: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("modulate", {
				color: {
					operation: "add",
					srcFactor: "zero",
					dstFactor: "src"
				},
				alpha: {
					operation: "add",
					srcFactor: "zero",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("modulate2x", {
				color: {
					operation: "add",
					srcFactor: "dst",
					dstFactor: "src"
				},
				alpha: {
					operation: "add",
					srcFactor: "zero",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("alphaKey", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				},
				alpha: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			})
		];
		this.gpuVSUniformsBuffer = this.device.createBuffer({
			label: "particles vs uniforms",
			size: 128,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		});
		this.gpuVSUniformsBindGroup = this.device.createBindGroup({
			layout: this.vsBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this.gpuVSUniformsBuffer }
			}]
		});
	}
	initShaders() {
		const vertex = this.vertexShader = getShader(this.gl, particles_vs_default, this.gl.VERTEX_SHADER);
		const fragment = this.fragmentShader = getShader(this.gl, particles_fs_default, this.gl.FRAGMENT_SHADER);
		const shaderProgram = this.shaderProgram = this.gl.createProgram();
		this.gl.attachShader(shaderProgram, vertex);
		this.gl.attachShader(shaderProgram, fragment);
		this.gl.linkProgram(shaderProgram);
		if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) alert("Could not initialise shaders");
		this.gl.useProgram(shaderProgram);
		this.shaderProgramLocations.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
		this.shaderProgramLocations.textureCoordAttribute = this.gl.getAttribLocation(shaderProgram, "aTextureCoord");
		this.shaderProgramLocations.colorAttribute = this.gl.getAttribLocation(shaderProgram, "aColor");
		this.shaderProgramLocations.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
		this.shaderProgramLocations.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");
		this.shaderProgramLocations.samplerUniform = this.gl.getUniformLocation(shaderProgram, "uSampler");
		this.shaderProgramLocations.replaceableColorUniform = this.gl.getUniformLocation(shaderProgram, "uReplaceableColor");
		this.shaderProgramLocations.replaceableTypeUniform = this.gl.getUniformLocation(shaderProgram, "uReplaceableType");
		this.shaderProgramLocations.discardAlphaLevelUniform = this.gl.getUniformLocation(shaderProgram, "uDiscardAlphaLevel");
	}
	updateParticle(particle, delta) {
		delta /= 1e3;
		particle.lifeSpan -= delta;
		if (particle.lifeSpan <= 0) return;
		particle.speed[2] -= particle.gravity * delta;
		particle.pos[0] += particle.speed[0] * delta;
		particle.pos[1] += particle.speed[1] * delta;
		particle.pos[2] += particle.speed[2] * delta;
	}
	resizeEmitterBuffers(emitter, size) {
		if (size <= emitter.capacity) return;
		size = Math.max(size, emitter.baseCapacity);
		let tailVertices;
		let headVertices;
		let tailTexCoords;
		let headTexCoords;
		if (emitter.type & ParticleEmitter2FramesFlags.Tail) {
			tailVertices = new Float32Array(size * 4 * 3);
			tailTexCoords = new Float32Array(size * 4 * 2);
		}
		if (emitter.type & ParticleEmitter2FramesFlags.Head) {
			headVertices = new Float32Array(size * 4 * 3);
			headTexCoords = new Float32Array(size * 4 * 2);
		}
		const colors = new Float32Array(size * 4 * 4);
		const indices = new Uint16Array(size * 6);
		if (emitter.capacity) indices.set(emitter.indices);
		for (let i = emitter.capacity; i < size; ++i) {
			indices[i * 6] = i * 4;
			indices[i * 6 + 1] = i * 4 + 1;
			indices[i * 6 + 2] = i * 4 + 2;
			indices[i * 6 + 3] = i * 4 + 2;
			indices[i * 6 + 4] = i * 4 + 1;
			indices[i * 6 + 5] = i * 4 + 3;
		}
		if (tailVertices) {
			emitter.tailVertices = tailVertices;
			emitter.tailTexCoords = tailTexCoords;
		}
		if (headVertices) {
			emitter.headVertices = headVertices;
			emitter.headTexCoords = headTexCoords;
		}
		emitter.colors = colors;
		emitter.indices = indices;
		emitter.capacity = size;
		if (!emitter.indexBuffer) {
			if (this.gl) {
				if (emitter.type & ParticleEmitter2FramesFlags.Tail) {
					emitter.tailVertexBuffer = this.gl.createBuffer();
					emitter.tailTexCoordBuffer = this.gl.createBuffer();
				}
				if (emitter.type & ParticleEmitter2FramesFlags.Head) {
					emitter.headVertexBuffer = this.gl.createBuffer();
					emitter.headTexCoordBuffer = this.gl.createBuffer();
				}
				emitter.colorBuffer = this.gl.createBuffer();
				emitter.indexBuffer = this.gl.createBuffer();
			} else if (this.device) {
				if (emitter.type & ParticleEmitter2FramesFlags.Tail) {
					emitter.tailVertexGPUBuffer?.destroy();
					emitter.tailVertexGPUBuffer = this.device.createBuffer({
						label: `particles tail vertex buffer ${emitter.index}`,
						size: tailVertices.byteLength,
						usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
					});
					emitter.tailTexCoordGPUBuffer?.destroy();
					emitter.tailTexCoordGPUBuffer = this.device.createBuffer({
						label: `particles tail texCoords buffer ${emitter.index}`,
						size: tailTexCoords.byteLength,
						usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
					});
				}
				if (emitter.type & ParticleEmitter2FramesFlags.Head) {
					emitter.headVertexGPUBuffer?.destroy();
					emitter.headVertexGPUBuffer = this.device.createBuffer({
						label: `particles head vertex buffer ${emitter.index}`,
						size: headVertices.byteLength,
						usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
					});
					emitter.headTexCoordGPUBuffer?.destroy();
					emitter.headTexCoordGPUBuffer = this.device.createBuffer({
						label: `particles head texCoords buffer ${emitter.index}`,
						size: headTexCoords.byteLength,
						usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
					});
				}
				emitter.colorGPUBuffer?.destroy();
				emitter.colorGPUBuffer = this.device.createBuffer({
					label: `particles color buffer ${emitter.index}`,
					size: colors.byteLength,
					usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
				});
				emitter.indexGPUBuffer?.destroy();
				emitter.indexGPUBuffer = this.device.createBuffer({
					label: `particles index buffer ${emitter.index}`,
					size: indices.byteLength,
					usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
				});
				this.device.queue.writeBuffer(emitter.indexGPUBuffer, 0, indices);
			}
		}
	}
	update(delta) {
		for (const emitter of this.emitters) this.updateEmitter(emitter, delta);
	}
	render(mvMatrix, pMatrix, emitterIndices) {
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.useProgram(this.shaderProgram);
		this.gl.uniformMatrix4fv(this.shaderProgramLocations.pMatrixUniform, false, pMatrix);
		this.gl.uniformMatrix4fv(this.shaderProgramLocations.mvMatrixUniform, false, mvMatrix);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.vertexPositionAttribute);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.textureCoordAttribute);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.colorAttribute);
		const emitterCount = emitterIndices?.length ?? this.emitters.length;
		for (let emitterIndex = 0; emitterIndex < emitterCount; ++emitterIndex) {
			const emitter = emitterIndices ? this.emittersByIndex[emitterIndices[emitterIndex]] : this.emitters[emitterIndex];
			if (!emitter) continue;
			if (!emitter.particles.length) continue;
			this.setLayerProps(emitter);
			this.setGeneralBuffers(emitter);
			if (emitter.type & ParticleEmitter2FramesFlags.Tail) this.renderEmitterType(emitter, ParticleEmitter2FramesFlags.Tail);
			if (emitter.type & ParticleEmitter2FramesFlags.Head) this.renderEmitterType(emitter, ParticleEmitter2FramesFlags.Head);
		}
		this.gl.disableVertexAttribArray(this.shaderProgramLocations.vertexPositionAttribute);
		this.gl.disableVertexAttribArray(this.shaderProgramLocations.textureCoordAttribute);
		this.gl.disableVertexAttribArray(this.shaderProgramLocations.colorAttribute);
	}
	renderGPUEmitterType(pass, emitter, type) {
		const particleCount = emitter.particles.length;
		if (type === ParticleEmitter2FramesFlags.Tail) {
			this.device.queue.writeBuffer(emitter.tailTexCoordGPUBuffer, 0, emitter.tailTexCoords, 0, particleCount * 8);
			pass.setVertexBuffer(1, emitter.tailTexCoordGPUBuffer);
		} else {
			this.device.queue.writeBuffer(emitter.headTexCoordGPUBuffer, 0, emitter.headTexCoords, 0, particleCount * 8);
			pass.setVertexBuffer(1, emitter.headTexCoordGPUBuffer);
		}
		if (type === ParticleEmitter2FramesFlags.Tail) {
			this.device.queue.writeBuffer(emitter.tailVertexGPUBuffer, 0, emitter.tailVertices, 0, particleCount * 12);
			pass.setVertexBuffer(0, emitter.tailVertexGPUBuffer);
		} else {
			this.device.queue.writeBuffer(emitter.headVertexGPUBuffer, 0, emitter.headVertices, 0, particleCount * 12);
			pass.setVertexBuffer(0, emitter.headVertexGPUBuffer);
		}
		pass.drawIndexed(particleCount * 6);
	}
	renderGPU(pass, mvMatrix, pMatrix, emitterIndices) {
		const VSUniformsViews = this.gpuVSUniformsViews;
		let matricesChanged = !this.gpuVSMatricesInitialized;
		for (let i = 0; i < 16 && !matricesChanged; ++i) matricesChanged = VSUniformsViews.mvMatrix[i] !== mvMatrix[i] || VSUniformsViews.pMatrix[i] !== pMatrix[i];
		if (matricesChanged) {
			VSUniformsViews.mvMatrix.set(mvMatrix);
			VSUniformsViews.pMatrix.set(pMatrix);
			this.device.queue.writeBuffer(this.gpuVSUniformsBuffer, 0, this.gpuVSUniformsValues);
			this.gpuVSMatricesInitialized = true;
		}
		pass.setBindGroup(0, this.gpuVSUniformsBindGroup);
		const emitterCount = emitterIndices?.length ?? this.emitters.length;
		for (let emitterIndex = 0; emitterIndex < emitterCount; ++emitterIndex) {
			const emitter = emitterIndices ? this.emittersByIndex[emitterIndices[emitterIndex]] : this.emitters[emitterIndex];
			if (!emitter) continue;
			if (!emitter.particles.length) continue;
			const pipeline = this.gpuPipelines[emitter.props.FilterMode] || this.gpuPipelines[0];
			pass.setPipeline(pipeline);
			const textureID = emitter.props.TextureID;
			const texture = this.rendererData.model.Textures[textureID];
			if (!emitter.fsUniformsBuffer) emitter.fsUniformsBuffer = this.device.createBuffer({
				label: `particles fs uniforms ${emitter.index}`,
				size: 32,
				usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
			});
			if (!emitter.fsUniformsInitialized || emitter.fsTeamColorR !== this.rendererData.teamColor[0] || emitter.fsTeamColorG !== this.rendererData.teamColor[1] || emitter.fsTeamColorB !== this.rendererData.teamColor[2]) {
				const fsUniformsViews = this.gpuFSUniformsViews;
				fsUniformsViews.replaceableColor.set(this.rendererData.teamColor);
				fsUniformsViews.replaceableType[0] = texture.ReplaceableId || 0;
				if (emitter.props.FilterMode === ParticleEmitter2FilterMode.AlphaKey) fsUniformsViews.discardAlphaLevel[0] = DISCARD_ALPHA_KEY_LEVEL;
				else if (emitter.props.FilterMode === ParticleEmitter2FilterMode.Modulate || emitter.props.FilterMode === ParticleEmitter2FilterMode.Modulate2x) fsUniformsViews.discardAlphaLevel[0] = DISCARD_MODULATE_LEVEL;
				else fsUniformsViews.discardAlphaLevel[0] = 0;
				this.device.queue.writeBuffer(emitter.fsUniformsBuffer, 0, this.gpuFSUniformsValues);
				emitter.fsUniformsInitialized = true;
				emitter.fsTeamColorR = this.rendererData.teamColor[0];
				emitter.fsTeamColorG = this.rendererData.teamColor[1];
				emitter.fsTeamColorB = this.rendererData.teamColor[2];
			}
			const sampler = this.rendererData.gpuSamplers[textureID];
			const gpuTexture = this.rendererData.gpuTextures[texture.Image] || this.rendererData.gpuEmptyTexture;
			if (!emitter.fsUniformsBindGroup || emitter.fsUniformsBoundBuffer !== emitter.fsUniformsBuffer || emitter.fsUniformsTexture !== gpuTexture || emitter.fsUniformsSampler !== sampler) {
				emitter.fsUniformsBindGroup = this.device.createBindGroup({
					label: `particles fs uniforms ${emitter.index}`,
					layout: this.fsBindGroupLayout,
					entries: [
						{
							binding: 0,
							resource: { buffer: emitter.fsUniformsBuffer }
						},
						{
							binding: 1,
							resource: sampler
						},
						{
							binding: 2,
							resource: gpuTexture.createView()
						}
					]
				});
				emitter.fsUniformsBoundBuffer = emitter.fsUniformsBuffer;
				emitter.fsUniformsTexture = gpuTexture;
				emitter.fsUniformsSampler = sampler;
			}
			pass.setBindGroup(1, emitter.fsUniformsBindGroup);
			this.device.queue.writeBuffer(emitter.colorGPUBuffer, 0, emitter.colors, 0, emitter.particles.length * 16);
			pass.setVertexBuffer(2, emitter.colorGPUBuffer);
			pass.setIndexBuffer(emitter.indexGPUBuffer, "uint16");
			if (emitter.type & ParticleEmitter2FramesFlags.Tail) this.renderGPUEmitterType(pass, emitter, ParticleEmitter2FramesFlags.Tail);
			if (emitter.type & ParticleEmitter2FramesFlags.Head) this.renderGPUEmitterType(pass, emitter, ParticleEmitter2FramesFlags.Head);
		}
	}
	updateEmitter(emitter, delta) {
		if (this.interp.animVectorVal(emitter.props.Visibility, 1) > 0) {
			if (emitter.props.Squirt && typeof emitter.props.EmissionRate !== "number") {
				const interp = this.interp.findKeyframes(emitter.props.EmissionRate);
				if (interp && interp.left && interp.left.Frame !== emitter.squirtFrame) {
					emitter.squirtFrame = interp.left.Frame;
					if (interp.left.Vector[0] > 0) emitter.emission += interp.left.Vector[0] * 1e3;
				}
			} else {
				const emissionRate = this.interp.animVectorVal(emitter.props.EmissionRate, 0);
				emitter.emission += emissionRate * delta;
			}
			while (emitter.emission >= 1e3) {
				emitter.emission -= 1e3;
				emitter.particles.push(this.createParticle(emitter, this.rendererData.nodes[emitter.props.ObjectId].matrix));
			}
		}
		if (emitter.particles.length) {
			let activeParticleCount = 0;
			for (let i = 0; i < emitter.particles.length; ++i) {
				const particle = emitter.particles[i];
				this.updateParticle(particle, delta);
				if (particle.lifeSpan > 0) emitter.particles[activeParticleCount++] = particle;
				else this.particleStorage.push(particle);
			}
			emitter.particles.length = activeParticleCount;
			if (emitter.type & ParticleEmitter2FramesFlags.Head) if (emitter.props.Flags & ParticleEmitter2Flags.XYQuad) {
				set$2(this.particleBaseVectors[0], -1, 1, 0);
				set$2(this.particleBaseVectors[1], -1, -1, 0);
				set$2(this.particleBaseVectors[2], 1, 1, 0);
				set$2(this.particleBaseVectors[3], 1, -1, 0);
			} else {
				set$2(this.particleBaseVectors[0], 0, -1, 1);
				set$2(this.particleBaseVectors[1], 0, -1, -1);
				set$2(this.particleBaseVectors[2], 0, 1, 1);
				set$2(this.particleBaseVectors[3], 0, 1, -1);
				for (let i = 0; i < 4; ++i) transformQuat(this.particleBaseVectors[i], this.particleBaseVectors[i], this.rendererData.cameraQuat);
			}
			this.resizeEmitterBuffers(emitter, emitter.particles.length);
			for (let i = 0; i < emitter.particles.length; ++i) this.updateParticleBuffers(emitter.particles[i], i, emitter);
		}
	}
	createParticle(emitter, emitterMatrix) {
		let particle;
		if (this.particleStorage.length) particle = this.particleStorage.pop();
		else particle = {
			emitter: null,
			pos: create$2(),
			angle: 0,
			speed: create$2(),
			gravity: null,
			lifeSpan: null
		};
		const width = this.interp.animVectorVal(emitter.props.Width, 0);
		const length = this.interp.animVectorVal(emitter.props.Length, 0);
		let speedScale = this.interp.animVectorVal(emitter.props.Speed, 0);
		const variation = this.interp.animVectorVal(emitter.props.Variation, 0);
		const latitude = degToRad(this.interp.animVectorVal(emitter.props.Latitude, 0));
		particle.emitter = emitter;
		particle.pos[0] = emitter.props.PivotPoint[0] + rand(-width, width);
		particle.pos[1] = emitter.props.PivotPoint[1] + rand(-length, length);
		particle.pos[2] = emitter.props.PivotPoint[2];
		transformMat4(particle.pos, particle.pos, emitterMatrix);
		if (variation > 0) speedScale *= 1 + rand(-variation, variation);
		set$2(particle.speed, 0, 0, speedScale);
		particle.angle = rand(0, Math.PI * 2);
		rotateY(particle.speed, particle.speed, rotateCenter, rand(0, latitude));
		rotateZ(particle.speed, particle.speed, rotateCenter, particle.angle);
		if (emitter.props.Flags & ParticleEmitter2Flags.LineEmitter) particle.speed[0] = 0;
		transformMat4(particle.speed, particle.speed, emitterMatrix);
		particle.speed[0] -= emitterMatrix[12];
		particle.speed[1] -= emitterMatrix[13];
		particle.speed[2] -= emitterMatrix[14];
		particle.gravity = this.interp.animVectorVal(emitter.props.Gravity, 0);
		particle.lifeSpan = emitter.props.LifeSpan;
		return particle;
	}
	updateParticleBuffers(particle, index, emitter) {
		const globalT = 1 - particle.lifeSpan / emitter.props.LifeSpan;
		const firstHalf = globalT < emitter.props.Time;
		let t;
		if (firstHalf) t = globalT / emitter.props.Time;
		else t = (globalT - emitter.props.Time) / (1 - emitter.props.Time);
		this.updateParticleVertices(particle, index, emitter, firstHalf, t);
		this.updateParticleTexCoords(index, emitter, firstHalf, t);
		this.updateParticleColor(index, emitter, firstHalf, t);
	}
	updateParticleVertices(particle, index, emitter, firstHalf, t) {
		let firstScale;
		let secondScale;
		let scale;
		if (firstHalf) {
			firstScale = emitter.props.ParticleScaling[0];
			secondScale = emitter.props.ParticleScaling[1];
		} else {
			firstScale = emitter.props.ParticleScaling[1];
			secondScale = emitter.props.ParticleScaling[2];
		}
		scale = lerp(firstScale, secondScale, t);
		if (emitter.type & ParticleEmitter2FramesFlags.Head) {
			const xyQuad = Boolean(emitter.props.Flags & ParticleEmitter2Flags.XYQuad);
			const sin = xyQuad ? Math.sin(particle.angle) : 0;
			const cos = xyQuad ? Math.cos(particle.angle) : 0;
			for (let i = 0; i < 4; ++i) {
				emitter.headVertices[index * 12 + i * 3] = this.particleBaseVectors[i][0] * scale;
				emitter.headVertices[index * 12 + i * 3 + 1] = this.particleBaseVectors[i][1] * scale;
				emitter.headVertices[index * 12 + i * 3 + 2] = this.particleBaseVectors[i][2] * scale;
				if (xyQuad) {
					const x = emitter.headVertices[index * 12 + i * 3];
					const y = emitter.headVertices[index * 12 + i * 3 + 1];
					emitter.headVertices[index * 12 + i * 3] = x * cos - y * sin;
					emitter.headVertices[index * 12 + i * 3 + 1] = x * sin + y * cos;
				}
			}
		}
		if (emitter.type & ParticleEmitter2FramesFlags.Tail) {
			tailPos[0] = -particle.speed[0] * emitter.props.TailLength;
			tailPos[1] = -particle.speed[1] * emitter.props.TailLength;
			tailPos[2] = -particle.speed[2] * emitter.props.TailLength;
			cross(tailCross, particle.speed, this.rendererData.cameraPos);
			normalize$2(tailCross, tailCross);
			scale$2(tailCross, tailCross, scale);
			emitter.tailVertices[index * 12] = tailCross[0];
			emitter.tailVertices[index * 12 + 1] = tailCross[1];
			emitter.tailVertices[index * 12 + 2] = tailCross[2];
			emitter.tailVertices[index * 12 + 3] = -tailCross[0];
			emitter.tailVertices[index * 12 + 3 + 1] = -tailCross[1];
			emitter.tailVertices[index * 12 + 3 + 2] = -tailCross[2];
			emitter.tailVertices[index * 12 + 6] = tailCross[0] + tailPos[0];
			emitter.tailVertices[index * 12 + 6 + 1] = tailCross[1] + tailPos[1];
			emitter.tailVertices[index * 12 + 6 + 2] = tailCross[2] + tailPos[2];
			emitter.tailVertices[index * 12 + 9] = -tailCross[0] + tailPos[0];
			emitter.tailVertices[index * 12 + 9 + 1] = -tailCross[1] + tailPos[1];
			emitter.tailVertices[index * 12 + 9 + 2] = -tailCross[2] + tailPos[2];
		}
		for (let i = 0; i < 4; ++i) {
			if (emitter.headVertices) {
				emitter.headVertices[index * 12 + i * 3] += particle.pos[0];
				emitter.headVertices[index * 12 + i * 3 + 1] += particle.pos[1];
				emitter.headVertices[index * 12 + i * 3 + 2] += particle.pos[2];
			}
			if (emitter.tailVertices) {
				emitter.tailVertices[index * 12 + i * 3] += particle.pos[0];
				emitter.tailVertices[index * 12 + i * 3 + 1] += particle.pos[1];
				emitter.tailVertices[index * 12 + i * 3 + 2] += particle.pos[2];
			}
		}
	}
	updateParticleTexCoords(index, emitter, firstHalf, t) {
		if (emitter.type & ParticleEmitter2FramesFlags.Head) this.updateParticleTexCoordsByType(index, emitter, firstHalf, t, ParticleEmitter2FramesFlags.Head);
		if (emitter.type & ParticleEmitter2FramesFlags.Tail) this.updateParticleTexCoordsByType(index, emitter, firstHalf, t, ParticleEmitter2FramesFlags.Tail);
	}
	updateParticleTexCoordsByType(index, emitter, firstHalf, t, type) {
		let uvAnim;
		let texCoords;
		if (type === ParticleEmitter2FramesFlags.Tail) {
			uvAnim = firstHalf ? emitter.props.TailUVAnim : emitter.props.TailDecayUVAnim;
			texCoords = emitter.tailTexCoords;
		} else {
			uvAnim = firstHalf ? emitter.props.LifeSpanUVAnim : emitter.props.DecayUVAnim;
			texCoords = emitter.headTexCoords;
		}
		const firstFrame = uvAnim[0];
		const secondFrame = uvAnim[1];
		const frame = Math.round(lerp(firstFrame, secondFrame, t));
		const texCoordX = frame % emitter.props.Columns;
		const texCoordY = Math.floor(frame / emitter.props.Rows);
		const cellWidth = 1 / emitter.props.Columns;
		const cellHeight = 1 / emitter.props.Rows;
		texCoords[index * 8] = texCoordX * cellWidth;
		texCoords[index * 8 + 1] = texCoordY * cellHeight;
		texCoords[index * 8 + 2] = texCoordX * cellWidth;
		texCoords[index * 8 + 3] = (1 + texCoordY) * cellHeight;
		texCoords[index * 8 + 4] = (1 + texCoordX) * cellWidth;
		texCoords[index * 8 + 5] = texCoordY * cellHeight;
		texCoords[index * 8 + 6] = (1 + texCoordX) * cellWidth;
		texCoords[index * 8 + 7] = (1 + texCoordY) * cellHeight;
	}
	updateParticleColor(index, emitter, firstHalf, t) {
		if (firstHalf) {
			firstColor[0] = emitter.props.SegmentColor[0][0];
			firstColor[1] = emitter.props.SegmentColor[0][1];
			firstColor[2] = emitter.props.SegmentColor[0][2];
			firstColor[3] = emitter.props.Alpha[0] / 255;
			secondColor[0] = emitter.props.SegmentColor[1][0];
			secondColor[1] = emitter.props.SegmentColor[1][1];
			secondColor[2] = emitter.props.SegmentColor[1][2];
			secondColor[3] = emitter.props.Alpha[1] / 255;
		} else {
			firstColor[0] = emitter.props.SegmentColor[1][0];
			firstColor[1] = emitter.props.SegmentColor[1][1];
			firstColor[2] = emitter.props.SegmentColor[1][2];
			firstColor[3] = emitter.props.Alpha[1] / 255;
			secondColor[0] = emitter.props.SegmentColor[2][0];
			secondColor[1] = emitter.props.SegmentColor[2][1];
			secondColor[2] = emitter.props.SegmentColor[2][2];
			secondColor[3] = emitter.props.Alpha[2] / 255;
		}
		lerp$2(color, firstColor, secondColor, t);
		for (let i = 0; i < 4; ++i) {
			emitter.colors[index * 16 + i * 4] = color[0];
			emitter.colors[index * 16 + i * 4 + 1] = color[1];
			emitter.colors[index * 16 + i * 4 + 2] = color[2];
			emitter.colors[index * 16 + i * 4 + 3] = color[3];
		}
	}
	setLayerProps(emitter) {
		if (emitter.props.FilterMode === ParticleEmitter2FilterMode.AlphaKey) this.gl.uniform1f(this.shaderProgramLocations.discardAlphaLevelUniform, DISCARD_ALPHA_KEY_LEVEL);
		else if (emitter.props.FilterMode === ParticleEmitter2FilterMode.Modulate || emitter.props.FilterMode === ParticleEmitter2FilterMode.Modulate2x) this.gl.uniform1f(this.shaderProgramLocations.discardAlphaLevelUniform, DISCARD_MODULATE_LEVEL);
		else this.gl.uniform1f(this.shaderProgramLocations.discardAlphaLevelUniform, 0);
		if (emitter.props.FilterMode === ParticleEmitter2FilterMode.Blend) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(false);
		} else if (emitter.props.FilterMode === ParticleEmitter2FilterMode.Additive) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (emitter.props.FilterMode === ParticleEmitter2FilterMode.AlphaKey) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (emitter.props.FilterMode === ParticleEmitter2FilterMode.Modulate) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.ZERO, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (emitter.props.FilterMode === ParticleEmitter2FilterMode.Modulate2x) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.DST_COLOR, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		}
		const texture = this.rendererData.model.Textures[emitter.props.TextureID];
		if (texture.Image) {
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[texture.Image]);
			this.gl.uniform1i(this.shaderProgramLocations.samplerUniform, 0);
			this.gl.uniform1f(this.shaderProgramLocations.replaceableTypeUniform, 0);
		} else if (texture.ReplaceableId === 1 || texture.ReplaceableId === 2) {
			this.gl.uniform3fv(this.shaderProgramLocations.replaceableColorUniform, this.rendererData.teamColor);
			this.gl.uniform1f(this.shaderProgramLocations.replaceableTypeUniform, texture.ReplaceableId);
		}
	}
	setGeneralBuffers(emitter) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.colorBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.colors, this.gl.DYNAMIC_DRAW);
		this.gl.vertexAttribPointer(this.shaderProgramLocations.colorAttribute, 4, this.gl.FLOAT, false, 0, 0);
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, emitter.indexBuffer);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, emitter.indices, this.gl.DYNAMIC_DRAW);
	}
	renderEmitterType(emitter, type) {
		if (type === ParticleEmitter2FramesFlags.Tail) {
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.tailTexCoordBuffer);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.tailTexCoords, this.gl.DYNAMIC_DRAW);
		} else {
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.headTexCoordBuffer);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.headTexCoords, this.gl.DYNAMIC_DRAW);
		}
		this.gl.vertexAttribPointer(this.shaderProgramLocations.textureCoordAttribute, 2, this.gl.FLOAT, false, 0, 0);
		if (type === ParticleEmitter2FramesFlags.Tail) {
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.tailVertexBuffer);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.tailVertices, this.gl.DYNAMIC_DRAW);
		} else {
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.headVertexBuffer);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.headVertices, this.gl.DYNAMIC_DRAW);
		}
		this.gl.vertexAttribPointer(this.shaderProgramLocations.vertexPositionAttribute, 3, this.gl.FLOAT, false, 0, 0);
		this.gl.drawElements(this.gl.TRIANGLES, emitter.particles.length * 6, this.gl.UNSIGNED_SHORT, 0);
	}
};
//#endregion
//#region renderer/shaders/webgl/ribbon.vs.glsl?raw
var ribbon_vs_default = "attribute vec3 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vTextureCoord = aTextureCoord;\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgl/ribbon.fs.glsl?raw
var ribbon_fs_default = "precision mediump float;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform sampler2D uSampler;\r\nuniform vec3 uReplaceableColor;\r\nuniform float uReplaceableType;\r\nuniform float uDiscardAlphaLevel;\r\nuniform vec4 uColor;\r\n\r\nfloat hypot (vec2 z) {\r\n    float t;\r\n    float x = abs(z.x);\r\n    float y = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    return (z.x == 0.0 && z.y == 0.0) ? 0.0 : x * sqrt(1.0 + t * t);\r\n}\r\n\r\nvoid main(void) {\r\n    vec2 coords = vec2(vTextureCoord.s, vTextureCoord.t);\r\n    if (uReplaceableType == 0.) {\r\n        gl_FragColor = texture2D(uSampler, coords);\r\n    } else if (uReplaceableType == 1.) {\r\n        gl_FragColor = vec4(uReplaceableColor, 1.0);\r\n    } else if (uReplaceableType == 2.) {\r\n        float dist = hypot(coords - vec2(0.5, 0.5)) * 2.;\r\n        float truncateDist = clamp(1. - dist * 1.4, 0., 1.);\r\n        float alpha = sin(truncateDist);\r\n        gl_FragColor = vec4(uReplaceableColor * alpha, 1.0);\r\n    }\r\n    gl_FragColor *= uColor;\r\n\r\n    if (gl_FragColor[3] < uDiscardAlphaLevel) {\r\n        discard;\r\n    }\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/ribbons.wgsl?raw
var ribbons_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\nstruct FSUniforms {\r\n    replaceableColor: vec3f,\r\n    replaceableType: u32,\r\n    discardAlphaLevel: f32,\r\n    color: vec4f,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var<uniform> fsUniforms: FSUniforms;\r\n@group(1) @binding(1) var fsUniformSampler: sampler;\r\n@group(1) @binding(2) var fsUniformTexture: texture_2d<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n    @location(1) textureCoord: vec2f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) textureCoord: vec2f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var position: vec4f = vec4f(in.vertexPosition, 1.0);\r\n\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * position;\r\n    out.textureCoord = in.textureCoord;\r\n    return out;\r\n}\r\n\r\nfn hypot(z: vec2f) -> f32 {\r\n    var t: f32 = 0;\r\n    var x: f32 = abs(z.x);\r\n    let y: f32 = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    if (z.x == 0.0 && z.y == 0.0) {\r\n        return 0.0;\r\n    }\r\n    return x * sqrt(1.0 + t * t);\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    let texCoord: vec2f = in.textureCoord;\r\n    var color: vec4f = vec4f(0.0);\r\n\r\n    if (fsUniforms.replaceableType == 0) {\r\n        color = textureSample(fsUniformTexture, fsUniformSampler, texCoord);\r\n    } else if (fsUniforms.replaceableType == 1) {\r\n        color = vec4f(fsUniforms.replaceableColor, 1.0);\r\n    } else if (fsUniforms.replaceableType == 2) {\r\n        let dist: f32 = hypot(texCoord - vec2(0.5, 0.5)) * 2.;\r\n        let truncateDist: f32 = clamp(1. - dist * 1.4, 0., 1.);\r\n        let alpha: f32 = sin(truncateDist);\r\n        color = vec4f(fsUniforms.replaceableColor * alpha, 1.0);\r\n    }\r\n\r\n    color *= fsUniforms.color;\r\n\r\n    // hand-made alpha-test\r\n    if (color.a < fsUniforms.discardAlphaLevel) {\r\n        discard;\r\n    }\r\n\r\n    return color;\r\n}\r\n";
//#endregion
//#region renderer/ribbons.ts
var firstVertex = create$2();
var secondVertex = create$2();
var RibbonsController = class {
	constructor(interp, rendererData) {
		this.gpuVSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
		this.gpuVSUniformsViews = {
			mvMatrix: new Float32Array(this.gpuVSUniformsValues, 0, 16),
			pMatrix: new Float32Array(this.gpuVSUniformsValues, 64, 16)
		};
		this.gpuVSMatricesInitialized = false;
		this.gpuFSUniformsValues = /* @__PURE__ */ new ArrayBuffer(48);
		this.gpuFSUniformsViews = {
			replaceableColor: new Float32Array(this.gpuFSUniformsValues, 0, 3),
			replaceableType: new Uint32Array(this.gpuFSUniformsValues, 12, 1),
			discardAlphaLevel: new Float32Array(this.gpuFSUniformsValues, 16, 1),
			color: new Float32Array(this.gpuFSUniformsValues, 32, 4)
		};
		this.shaderProgramLocations = {
			vertexPositionAttribute: null,
			textureCoordAttribute: null,
			pMatrixUniform: null,
			mvMatrixUniform: null,
			samplerUniform: null,
			replaceableColorUniform: null,
			replaceableTypeUniform: null,
			discardAlphaLevelUniform: null,
			colorUniform: null
		};
		this.interp = interp;
		this.rendererData = rendererData;
		this.emitters = [];
		this.emittersByIndex = [];
		if (rendererData.model.RibbonEmitters.length) {
			for (let i = 0; i < rendererData.model.RibbonEmitters.length; ++i) {
				const ribbonEmitter = rendererData.model.RibbonEmitters[i];
				const emitter = {
					index: i,
					emission: 0,
					props: ribbonEmitter,
					capacity: 0,
					baseCapacity: 0,
					creationTimes: [],
					vertices: null,
					vertexBuffer: null,
					vertexGPUBuffer: null,
					texCoords: null,
					texCoordBuffer: null,
					texCoordGPUBuffer: null,
					fsUnifrmsPerLayer: [],
					fsBindGroupsPerLayer: [],
					fsBoundBuffersPerLayer: [],
					fsTexturesPerLayer: [],
					fsSamplersPerLayer: []
				};
				emitter.baseCapacity = Math.ceil(ModelInterp.maxAnimVectorVal(emitter.props.EmissionRate) * emitter.props.LifeSpan) + 1;
				this.emitters.push(emitter);
				this.emittersByIndex[i] = emitter;
			}
			this.emitters.sort((left, right) => {
				const leftPriority = rendererData.model.Materials[left.props.MaterialID]?.PriorityPlane ?? 0;
				const rightPriority = rendererData.model.Materials[right.props.MaterialID]?.PriorityPlane ?? 0;
				return comparePriorityPlane(leftPriority, left.index, rightPriority, right.index);
			});
		}
	}
	destroy() {
		if (this.shaderProgram) {
			if (this.vertexShader) {
				this.gl.detachShader(this.shaderProgram, this.vertexShader);
				this.gl.deleteShader(this.vertexShader);
				this.vertexShader = null;
			}
			if (this.fragmentShader) {
				this.gl.detachShader(this.shaderProgram, this.fragmentShader);
				this.gl.deleteShader(this.fragmentShader);
				this.fragmentShader = null;
			}
			this.gl.deleteProgram(this.shaderProgram);
			this.shaderProgram = null;
		}
		if (this.gpuVSUniformsBuffer) {
			this.gpuVSUniformsBuffer.destroy();
			this.gpuVSUniformsBuffer = null;
		}
		for (const emitter of this.emitters) {
			if (this.gl) {
				if (emitter.vertexBuffer) this.gl.deleteBuffer(emitter.vertexBuffer);
				if (emitter.texCoordBuffer) this.gl.deleteBuffer(emitter.texCoordBuffer);
			}
			emitter.vertexGPUBuffer?.destroy();
			emitter.texCoordGPUBuffer?.destroy();
			for (const buffer of emitter.fsUnifrmsPerLayer) buffer?.destroy();
		}
		this.emitters = [];
		this.emittersByIndex = [];
	}
	initGL(glContext) {
		this.gl = glContext;
		this.initShaders();
	}
	initGPUDevice(device) {
		this.device = device;
		this.gpuVSMatricesInitialized = false;
		this.gpuShaderModule = device.createShaderModule({
			label: "ribbons shader module",
			code: ribbons_default
		});
		this.vsBindGroupLayout = this.device.createBindGroupLayout({
			label: "ribbons vs bind group layout",
			entries: [{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: {
					type: "uniform",
					hasDynamicOffset: false,
					minBindingSize: 128
				}
			}]
		});
		this.fsBindGroupLayout = this.device.createBindGroupLayout({
			label: "ribbons bind group layout2",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					buffer: {
						type: "uniform",
						hasDynamicOffset: false,
						minBindingSize: 48
					}
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				}
			]
		});
		this.gpuPipelineLayout = this.device.createPipelineLayout({
			label: "ribbons pipeline layout",
			bindGroupLayouts: [this.vsBindGroupLayout, this.fsBindGroupLayout]
		});
		const createPipeline = (name, blend, depth) => {
			return device.createRenderPipeline({
				label: `ribbons pipeline ${name}`,
				layout: this.gpuPipelineLayout,
				vertex: {
					module: this.gpuShaderModule,
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}, {
						arrayStride: 8,
						attributes: [{
							shaderLocation: 1,
							offset: 0,
							format: "float32x2"
						}]
					}]
				},
				fragment: {
					module: this.gpuShaderModule,
					targets: [{
						format: navigator.gpu.getPreferredCanvasFormat(),
						blend
					}]
				},
				depthStencil: depth,
				primitive: { topology: "triangle-strip" }
			});
		};
		this.gpuPipelines = [
			createPipeline("none", {
				color: {
					operation: "add",
					srcFactor: "one",
					dstFactor: "zero"
				},
				alpha: {
					operation: "add",
					srcFactor: "one",
					dstFactor: "zero"
				}
			}, {
				depthWriteEnabled: true,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("transparent", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one-minus-src-alpha"
				},
				alpha: {
					operation: "add",
					srcFactor: "one",
					dstFactor: "one-minus-src-alpha"
				}
			}, {
				depthWriteEnabled: true,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("blend", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one-minus-src-alpha"
				},
				alpha: {
					operation: "add",
					srcFactor: "one",
					dstFactor: "one-minus-src-alpha"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("additive", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				},
				alpha: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("addAlpha", {
				color: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				},
				alpha: {
					operation: "add",
					srcFactor: "src-alpha",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("modulate", {
				color: {
					operation: "add",
					srcFactor: "zero",
					dstFactor: "src"
				},
				alpha: {
					operation: "add",
					srcFactor: "zero",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			}),
			createPipeline("modulate2x", {
				color: {
					operation: "add",
					srcFactor: "dst",
					dstFactor: "src"
				},
				alpha: {
					operation: "add",
					srcFactor: "zero",
					dstFactor: "one"
				}
			}, {
				depthWriteEnabled: false,
				depthCompare: "less-equal",
				format: "depth24plus"
			})
		];
		this.gpuVSUniformsBuffer = this.device.createBuffer({
			label: "ribbons vs uniforms",
			size: 128,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		});
		this.gpuVSUniformsBindGroup = this.device.createBindGroup({
			layout: this.vsBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this.gpuVSUniformsBuffer }
			}]
		});
	}
	update(delta) {
		for (const emitter of this.emitters) this.updateEmitter(emitter, delta);
	}
	render(mvMatrix, pMatrix, emitterIndices) {
		this.gl.useProgram(this.shaderProgram);
		this.gl.uniformMatrix4fv(this.shaderProgramLocations.pMatrixUniform, false, pMatrix);
		this.gl.uniformMatrix4fv(this.shaderProgramLocations.mvMatrixUniform, false, mvMatrix);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.vertexPositionAttribute);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.textureCoordAttribute);
		const emitterCount = emitterIndices?.length ?? this.emitters.length;
		for (let emitterIndex = 0; emitterIndex < emitterCount; ++emitterIndex) {
			const emitter = emitterIndices ? this.emittersByIndex[emitterIndices[emitterIndex]] : this.emitters[emitterIndex];
			if (!emitter) continue;
			if (emitter.creationTimes.length < 2) continue;
			this.gl.uniform4f(this.shaderProgramLocations.colorUniform, emitter.props.Color[0], emitter.props.Color[1], emitter.props.Color[2], this.interp.animVectorVal(emitter.props.Alpha, 1));
			this.setGeneralBuffers(emitter);
			const materialID = emitter.props.MaterialID;
			const material = this.rendererData.model.Materials[materialID];
			for (let j = 0; j < material.Layers.length; ++j) {
				this.setLayerProps(material.Layers[j], this.rendererData.materialLayerTextureID[materialID][j]);
				this.renderEmitter(emitter);
			}
		}
		this.gl.disableVertexAttribArray(this.shaderProgramLocations.vertexPositionAttribute);
		this.gl.disableVertexAttribArray(this.shaderProgramLocations.textureCoordAttribute);
	}
	renderGPU(pass, mvMatrix, pMatrix, emitterIndices) {
		const VSUniformsViews = this.gpuVSUniformsViews;
		let matricesChanged = !this.gpuVSMatricesInitialized;
		for (let i = 0; i < 16 && !matricesChanged; ++i) matricesChanged = VSUniformsViews.mvMatrix[i] !== mvMatrix[i] || VSUniformsViews.pMatrix[i] !== pMatrix[i];
		if (matricesChanged) {
			VSUniformsViews.mvMatrix.set(mvMatrix);
			VSUniformsViews.pMatrix.set(pMatrix);
			this.device.queue.writeBuffer(this.gpuVSUniformsBuffer, 0, this.gpuVSUniformsValues);
			this.gpuVSMatricesInitialized = true;
		}
		const emitterCount = emitterIndices?.length ?? this.emitters.length;
		for (let emitterIndex = 0; emitterIndex < emitterCount; ++emitterIndex) {
			const emitter = emitterIndices ? this.emittersByIndex[emitterIndices[emitterIndex]] : this.emitters[emitterIndex];
			if (!emitter) continue;
			if (emitter.creationTimes.length < 2) continue;
			this.device.queue.writeBuffer(emitter.vertexGPUBuffer, 0, emitter.vertices, 0, emitter.creationTimes.length * 6);
			this.device.queue.writeBuffer(emitter.texCoordGPUBuffer, 0, emitter.texCoords, 0, emitter.creationTimes.length * 4);
			pass.setVertexBuffer(0, emitter.vertexGPUBuffer);
			pass.setVertexBuffer(1, emitter.texCoordGPUBuffer);
			pass.setBindGroup(0, this.gpuVSUniformsBindGroup);
			const materialID = emitter.props.MaterialID;
			const material = this.rendererData.model.Materials[materialID];
			for (let j = 0; j < material.Layers.length; ++j) {
				const textureID = this.rendererData.materialLayerTextureID[materialID][j];
				const texture = this.rendererData.model.Textures[textureID];
				const layer = material.Layers[j];
				const pipeline = this.gpuPipelines[layer.FilterMode] || this.gpuPipelines[0];
				pass.setPipeline(pipeline);
				const fsUniformsViews = this.gpuFSUniformsViews;
				fsUniformsViews.replaceableColor.set(this.rendererData.teamColor);
				fsUniformsViews.replaceableType[0] = texture.ReplaceableId || 0;
				fsUniformsViews.discardAlphaLevel[0] = getLayerDiscardAlphaLevel(layer.FilterMode);
				fsUniformsViews.color[0] = emitter.props.Color[0];
				fsUniformsViews.color[1] = emitter.props.Color[1];
				fsUniformsViews.color[2] = emitter.props.Color[2];
				fsUniformsViews.color[3] = this.interp.animVectorVal(emitter.props.Alpha, 1);
				if (!emitter.fsUnifrmsPerLayer[j]) emitter.fsUnifrmsPerLayer[j] = this.device.createBuffer({
					label: `ribbons fs uniforms ${emitter.index} layer ${j}`,
					size: 48,
					usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
				});
				const fsUniformsBuffer = emitter.fsUnifrmsPerLayer[j];
				this.device.queue.writeBuffer(fsUniformsBuffer, 0, this.gpuFSUniformsValues);
				const sampler = this.rendererData.gpuSamplers[textureID];
				const gpuTexture = this.rendererData.gpuTextures[texture.Image] || this.rendererData.gpuEmptyTexture;
				if (!emitter.fsBindGroupsPerLayer[j] || emitter.fsBoundBuffersPerLayer[j] !== fsUniformsBuffer || emitter.fsTexturesPerLayer[j] !== gpuTexture || emitter.fsSamplersPerLayer[j] !== sampler) {
					emitter.fsBindGroupsPerLayer[j] = this.device.createBindGroup({
						label: `ribbons fs uniforms ${emitter.index} layer ${j}`,
						layout: this.fsBindGroupLayout,
						entries: [
							{
								binding: 0,
								resource: { buffer: fsUniformsBuffer }
							},
							{
								binding: 1,
								resource: sampler
							},
							{
								binding: 2,
								resource: gpuTexture.createView()
							}
						]
					});
					emitter.fsBoundBuffersPerLayer[j] = fsUniformsBuffer;
					emitter.fsTexturesPerLayer[j] = gpuTexture;
					emitter.fsSamplersPerLayer[j] = sampler;
				}
				pass.setBindGroup(1, emitter.fsBindGroupsPerLayer[j]);
				pass.draw(emitter.creationTimes.length * 2);
			}
		}
	}
	initShaders() {
		const vertex = this.vertexShader = getShader(this.gl, ribbon_vs_default, this.gl.VERTEX_SHADER);
		const fragment = this.fragmentShader = getShader(this.gl, ribbon_fs_default, this.gl.FRAGMENT_SHADER);
		const shaderProgram = this.shaderProgram = this.gl.createProgram();
		this.gl.attachShader(shaderProgram, vertex);
		this.gl.attachShader(shaderProgram, fragment);
		this.gl.linkProgram(shaderProgram);
		if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) alert("Could not initialise shaders");
		this.gl.useProgram(shaderProgram);
		this.shaderProgramLocations.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
		this.shaderProgramLocations.textureCoordAttribute = this.gl.getAttribLocation(shaderProgram, "aTextureCoord");
		this.shaderProgramLocations.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
		this.shaderProgramLocations.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");
		this.shaderProgramLocations.samplerUniform = this.gl.getUniformLocation(shaderProgram, "uSampler");
		this.shaderProgramLocations.replaceableColorUniform = this.gl.getUniformLocation(shaderProgram, "uReplaceableColor");
		this.shaderProgramLocations.replaceableTypeUniform = this.gl.getUniformLocation(shaderProgram, "uReplaceableType");
		this.shaderProgramLocations.discardAlphaLevelUniform = this.gl.getUniformLocation(shaderProgram, "uDiscardAlphaLevel");
		this.shaderProgramLocations.colorUniform = this.gl.getUniformLocation(shaderProgram, "uColor");
	}
	resizeEmitterBuffers(emitter, size) {
		if (size <= emitter.capacity) return;
		size = Math.max(size, emitter.baseCapacity);
		const vertices = new Float32Array(size * 2 * 3);
		const texCoords = new Float32Array(size * 2 * 2);
		if (emitter.vertices) vertices.set(emitter.vertices);
		emitter.vertices = vertices;
		emitter.texCoords = texCoords;
		emitter.capacity = size;
		if (this.gl) {
			if (!emitter.vertexBuffer) {
				emitter.vertexBuffer = this.gl.createBuffer();
				emitter.texCoordBuffer = this.gl.createBuffer();
			}
		} else if (this.device) {
			emitter.vertexGPUBuffer?.destroy();
			emitter.texCoordGPUBuffer?.destroy();
			emitter.vertexGPUBuffer = this.device.createBuffer({
				label: `ribbon vertex buffer ${emitter.index}`,
				size: vertices.byteLength,
				usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
			});
			emitter.texCoordGPUBuffer = this.device.createBuffer({
				label: `ribbon texCoord buffer ${emitter.index}`,
				size: texCoords.byteLength,
				usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
			});
		}
	}
	updateEmitter(emitter, delta) {
		const now = Date.now();
		if (this.interp.animVectorVal(emitter.props.Visibility, 0) > 0) {
			const emissionRate = emitter.props.EmissionRate;
			emitter.emission += emissionRate * delta;
			if (emitter.emission >= 1e3) {
				emitter.emission = emitter.emission % 1e3;
				if (emitter.creationTimes.length + 1 > emitter.capacity) this.resizeEmitterBuffers(emitter, emitter.creationTimes.length + 1);
				this.appendVertices(emitter);
				emitter.creationTimes.push(now);
			}
		}
		if (emitter.creationTimes.length) {
			let expiredCount = 0;
			while (expiredCount < emitter.creationTimes.length && emitter.creationTimes[expiredCount] + emitter.props.LifeSpan * 1e3 < now) ++expiredCount;
			if (expiredCount) {
				const remainingCount = emitter.creationTimes.length - expiredCount;
				for (let i = 0; i < remainingCount; ++i) emitter.creationTimes[i] = emitter.creationTimes[i + expiredCount];
				emitter.creationTimes.length = remainingCount;
				emitter.vertices.copyWithin(0, expiredCount * 6, (expiredCount + remainingCount) * 6);
			}
		}
		if (emitter.creationTimes.length) this.updateEmitterTexCoords(emitter, now);
	}
	appendVertices(emitter) {
		const first = copy$2(firstVertex, emitter.props.PivotPoint);
		const second = copy$2(secondVertex, emitter.props.PivotPoint);
		first[1] -= this.interp.animVectorVal(emitter.props.HeightBelow, 0);
		second[1] += this.interp.animVectorVal(emitter.props.HeightAbove, 0);
		const emitterMatrix = this.rendererData.nodes[emitter.props.ObjectId].matrix;
		transformMat4(first, first, emitterMatrix);
		transformMat4(second, second, emitterMatrix);
		const currentSize = emitter.creationTimes.length;
		emitter.vertices[currentSize * 6] = first[0];
		emitter.vertices[currentSize * 6 + 1] = first[1];
		emitter.vertices[currentSize * 6 + 2] = first[2];
		emitter.vertices[currentSize * 6 + 3] = second[0];
		emitter.vertices[currentSize * 6 + 4] = second[1];
		emitter.vertices[currentSize * 6 + 5] = second[2];
	}
	updateEmitterTexCoords(emitter, now) {
		const textureSlot = this.interp.animVectorVal(emitter.props.TextureSlot, 0);
		const texCoordX = textureSlot % emitter.props.Columns;
		const texCoordY = Math.floor(textureSlot / emitter.props.Rows);
		const cellWidth = 1 / emitter.props.Columns;
		const cellHeight = 1 / emitter.props.Rows;
		for (let i = 0; i < emitter.creationTimes.length; ++i) {
			let relativePos = (now - emitter.creationTimes[i]) / (emitter.props.LifeSpan * 1e3);
			relativePos = texCoordX * cellWidth + relativePos * cellWidth;
			emitter.texCoords[i * 2 * 2] = relativePos;
			emitter.texCoords[i * 2 * 2 + 1] = texCoordY * cellHeight;
			emitter.texCoords[i * 2 * 2 + 2] = relativePos;
			emitter.texCoords[i * 2 * 2 + 3] = (1 + texCoordY) * cellHeight;
		}
	}
	setLayerProps(layer, textureID) {
		const texture = this.rendererData.model.Textures[textureID];
		if (layer.Shading & LayerShading.TwoSided) this.gl.disable(this.gl.CULL_FACE);
		else this.gl.enable(this.gl.CULL_FACE);
		this.gl.uniform1f(this.shaderProgramLocations.discardAlphaLevelUniform, getLayerDiscardAlphaLevel(layer.FilterMode));
		if (layer.FilterMode === FilterMode.None) {
			this.gl.disable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.depthMask(true);
		} else if (layer.FilterMode === FilterMode.Transparent) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(true);
		} else if (layer.FilterMode === FilterMode.Blend) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.Additive) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.AddAlpha) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.Modulate) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.ZERO, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.Modulate2x) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.DST_COLOR, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		}
		if (texture.Image) {
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[texture.Image]);
			this.gl.uniform1i(this.shaderProgramLocations.samplerUniform, 0);
			this.gl.uniform1f(this.shaderProgramLocations.replaceableTypeUniform, 0);
		} else if (texture.ReplaceableId === 1 || texture.ReplaceableId === 2) {
			this.gl.uniform3fv(this.shaderProgramLocations.replaceableColorUniform, this.rendererData.teamColor);
			this.gl.uniform1f(this.shaderProgramLocations.replaceableTypeUniform, texture.ReplaceableId);
		}
		if (layer.Shading & LayerShading.NoDepthTest) this.gl.disable(this.gl.DEPTH_TEST);
		if (layer.Shading & LayerShading.NoDepthSet) this.gl.depthMask(false);
	}
	setGeneralBuffers(emitter) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.texCoordBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.texCoords, this.gl.DYNAMIC_DRAW);
		this.gl.vertexAttribPointer(this.shaderProgramLocations.textureCoordAttribute, 2, this.gl.FLOAT, false, 0, 0);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, emitter.vertexBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, emitter.vertices, this.gl.DYNAMIC_DRAW);
		this.gl.vertexAttribPointer(this.shaderProgramLocations.vertexPositionAttribute, 3, this.gl.FLOAT, false, 0, 0);
	}
	renderEmitter(emitter) {
		this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, emitter.creationTimes.length * 2);
	}
};
//#endregion
//#region renderer/shaders/webgl/sdHardwareSkinning.vs.glsl?raw
var sdHardwareSkinning_vs_default = "attribute vec3 aVertexPosition;\r\nattribute vec3 aNormal;\r\nattribute vec2 aTextureCoord;\r\nattribute vec4 aGroup;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\nuniform mat4 uNodesMatrices[${MAX_NODES}];\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    int count = 1;\r\n    vec4 sum = uNodesMatrices[int(aGroup[0])] * position;\r\n\r\n    if (aGroup[1] < ${MAX_NODES}.) {\r\n        sum += uNodesMatrices[int(aGroup[1])] * position;\r\n        count += 1;\r\n    }\r\n    if (aGroup[2] < ${MAX_NODES}.) {\r\n        sum += uNodesMatrices[int(aGroup[2])] * position;\r\n        count += 1;\r\n    }\r\n    if (aGroup[3] < ${MAX_NODES}.) {\r\n        sum += uNodesMatrices[int(aGroup[3])] * position;\r\n        count += 1;\r\n    }\r\n    sum.xyz /= float(count);\r\n    sum.w = 1.;\r\n    position = sum;\r\n\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vTextureCoord = aTextureCoord;\r\n    vNormal = aNormal;\r\n}";
//#endregion
//#region renderer/shaders/webgl/sdSoftwareSkinning.vs.glsl?raw
var sdSoftwareSkinning_vs_default = "attribute vec3 aVertexPosition;\r\nattribute vec3 aNormal;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vTextureCoord = aTextureCoord;\r\n    vNormal = aNormal;\r\n}";
//#endregion
//#region renderer/shaders/webgl/sd.fs.glsl?raw
var sd_fs_default = "precision mediump float;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform sampler2D uSampler;\r\nuniform vec3 uReplaceableColor;\nuniform float uReplaceableType;\nuniform float uDiscardAlphaLevel;\nuniform float uAlpha;\nuniform mat3 uTVertexAnim;\nuniform float uWireframe;\r\n\r\nfloat hypot (vec2 z) {\r\n    float t;\r\n    float x = abs(z.x);\r\n    float y = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    return (z.x == 0.0 && z.y == 0.0) ? 0.0 : x * sqrt(1.0 + t * t);\r\n}\r\n\r\nvoid main(void) {\r\n    if (uWireframe > 0.) {\r\n        gl_FragColor = vec4(1.);\r\n        return;\r\n    }\r\n\r\n    vec2 texCoord = (uTVertexAnim * vec3(vTextureCoord.s, vTextureCoord.t, 1.)).st;\r\n\r\n    if (uReplaceableType == 0.) {\r\n        gl_FragColor = texture2D(uSampler, texCoord);\r\n    } else if (uReplaceableType == 1.) {\r\n        gl_FragColor = vec4(uReplaceableColor, 1.0);\r\n    } else if (uReplaceableType == 2.) {\r\n        float dist = hypot(texCoord - vec2(0.5, 0.5)) * 2.;\r\n        float truncateDist = clamp(1. - dist * 1.4, 0., 1.);\r\n        float alpha = sin(truncateDist);\r\n        gl_FragColor = vec4(uReplaceableColor * alpha, 1.0);\n    }\n\n    gl_FragColor.a *= uAlpha;\n\n    // hand-made alpha-test\n    if (gl_FragColor[3] < uDiscardAlphaLevel) {\r\n        discard;\r\n    }\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgl/hdHardwareSkinningOld.vs.glsl?raw
var hdHardwareSkinningOld_vs_default = "attribute vec3 aVertexPosition;\r\nattribute vec3 aNormal;\r\nattribute vec2 aTextureCoord;\r\nattribute vec4 aSkin;\r\nattribute vec4 aBoneWeight;\r\nattribute vec4 aTangent;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\nuniform mat4 uNodesMatrices[${MAX_NODES}];\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec2 vTextureCoord;\r\nvarying mat3 vTBN;\r\nvarying vec3 vFragPos;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    mat4 sum;\r\n\r\n    // sum += uNodesMatrices[int(aSkin[0])] * 1.;\r\n    sum += uNodesMatrices[int(aSkin[0])] * aBoneWeight[0];\r\n    sum += uNodesMatrices[int(aSkin[1])] * aBoneWeight[1];\r\n    sum += uNodesMatrices[int(aSkin[2])] * aBoneWeight[2];\r\n    sum += uNodesMatrices[int(aSkin[3])] * aBoneWeight[3];\r\n\r\n    mat3 rotation = mat3(sum);\r\n\r\n    position = sum * position;\r\n    position.w = 1.;\r\n\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vTextureCoord = aTextureCoord;\r\n\r\n    vec3 normal = aNormal;\r\n    vec3 tangent = aTangent.xyz;\r\n\r\n    // https://learnopengl.com/Advanced-Lighting/Normal-Mapping\r\n    tangent = normalize(tangent - dot(tangent, normal) * normal);\r\n\r\n    vec3 binormal = cross(normal, tangent) * aTangent.w;\r\n\r\n    normal = normalize(rotation * normal);\r\n    tangent = normalize(rotation * tangent);\r\n    binormal = normalize(rotation * binormal);\r\n\r\n    vNormal = normal;\r\n    vTangent = tangent;\r\n    vBinormal = binormal;\r\n\r\n    vTBN = mat3(tangent, binormal, normal);\r\n\r\n    vFragPos = position.xyz;\r\n}";
//#endregion
//#region renderer/shaders/webgl/hdHardwareSkinningNew.vs.glsl?raw
var hdHardwareSkinningNew_vs_default = "#version 300 es\r\nin vec3 aVertexPosition;\r\nin vec3 aNormal;\r\nin vec2 aTextureCoord;\r\nin vec4 aSkin;\r\nin vec4 aBoneWeight;\r\nin vec4 aTangent;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\nuniform mat4 uNodesMatrices[${MAX_NODES}];\r\n\r\nout vec3 vNormal;\r\nout vec3 vTangent;\r\nout vec3 vBinormal;\r\nout vec2 vTextureCoord;\r\nout mat3 vTBN;\r\nout vec3 vFragPos;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    mat4 sum;\r\n\r\n    // sum += uNodesMatrices[int(aSkin[0])] * 1.;\r\n    sum += uNodesMatrices[int(aSkin[0])] * aBoneWeight[0];\r\n    sum += uNodesMatrices[int(aSkin[1])] * aBoneWeight[1];\r\n    sum += uNodesMatrices[int(aSkin[2])] * aBoneWeight[2];\r\n    sum += uNodesMatrices[int(aSkin[3])] * aBoneWeight[3];\r\n\r\n    mat3 rotation = mat3(sum);\r\n\r\n    position = sum * position;\r\n    position.w = 1.;\r\n\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vTextureCoord = aTextureCoord;\r\n\r\n    vec3 normal = aNormal;\r\n    vec3 tangent = aTangent.xyz;\r\n\r\n    // https://learnopengl.com/Advanced-Lighting/Normal-Mapping\r\n    tangent = normalize(tangent - dot(tangent, normal) * normal);\r\n\r\n    vec3 binormal = cross(normal, tangent) * aTangent.w;\r\n\r\n    normal = normalize(rotation * normal);\r\n    tangent = normalize(rotation * tangent);\r\n    binormal = normalize(rotation * binormal);\r\n\r\n    vNormal = normal;\r\n    vTangent = tangent;\r\n    vBinormal = binormal;\r\n\r\n    vTBN = mat3(tangent, binormal, normal);\r\n\r\n    vFragPos = position.xyz;\r\n}";
//#endregion
//#region renderer/shaders/webgl/hdOld.fs.glsl?raw
var hdOld_fs_default = "precision mediump float;\r\n\r\nvarying vec2 vTextureCoord;\r\nvarying vec3 vNormal;\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying mat3 vTBN;\r\nvarying vec3 vFragPos;\r\n\r\nuniform sampler2D uSampler;\r\nuniform sampler2D uNormalSampler;\r\nuniform sampler2D uOrmSampler;\r\nuniform vec3 uReplaceableColor;\r\nuniform float uDiscardAlphaLevel;\r\nuniform mat3 uTVertexAnim;\r\nuniform vec3 uLightPos;\r\nuniform vec3 uLightColor;\r\nuniform vec3 uCameraPos;\r\nuniform vec3 uShadowParams;\r\nuniform sampler2D uShadowMapSampler;\r\nuniform mat4 uShadowMapLightMatrix;\r\nuniform float uWireframe;\r\n\r\nconst float PI = 3.14159265359;\r\nconst float gamma = 2.2;\r\n\r\nfloat distributionGGX(vec3 normal, vec3 halfWay, float roughness) {\r\n    float a = roughness * roughness;\r\n    float a2 = a * a;\r\n    float nDotH = max(dot(normal, halfWay), 0.0);\r\n    float nDotH2 = nDotH * nDotH;\r\n\r\n    float num = a2;\r\n    float denom = (nDotH2 * (a2 - 1.0) + 1.0);\r\n    denom = PI * denom * denom;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfloat geometrySchlickGGX(float nDotV, float roughness) {\r\n    float r = roughness + 1.;\r\n    float k = r * r / 8.;\r\n    // float k = roughness * roughness / 2.;\r\n\r\n    float num = nDotV;\r\n    float denom = nDotV * (1. - k) + k;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfloat geometrySmith(vec3 normal, vec3 viewDir, vec3 lightDir, float roughness) {\r\n    float nDotV = max(dot(normal, viewDir), .0);\r\n    float nDotL = max(dot(normal, lightDir), .0);\r\n    float ggx2  = geometrySchlickGGX(nDotV, roughness);\r\n    float ggx1  = geometrySchlickGGX(nDotL, roughness);\r\n\r\n    return ggx1 * ggx2;\r\n}\r\n\r\nvec3 fresnelSchlick(float lightFactor, vec3 f0) {\r\n    return f0 + (1. - f0) * pow(clamp(1. - lightFactor, 0., 1.), 5.);\r\n}\r\n\r\nvoid main(void) {\r\n    if (uWireframe > 0.) {\r\n        gl_FragColor = vec4(1.);\r\n        return;\r\n    }\r\n\r\n    vec2 texCoord = (uTVertexAnim * vec3(vTextureCoord.s, vTextureCoord.t, 1.)).st;\r\n\r\n    vec4 orm = texture2D(uOrmSampler, texCoord);\r\n\r\n    float occlusion = orm.r;\r\n    float roughness = orm.g;\r\n    float metallic = orm.b;\r\n    float teamColorFactor = orm.a;\r\n\r\n    vec4 baseColor = texture2D(uSampler, texCoord);\r\n    vec3 teamColor = baseColor.rgb * uReplaceableColor;\r\n    baseColor.rgb = mix(baseColor.rgb, teamColor, teamColorFactor);\r\n    baseColor.rgb = pow(baseColor.rgb, vec3(gamma));\r\n\r\n    vec3 normal = texture2D(uNormalSampler, texCoord).rgb;\r\n    normal = normal * 2.0 - 1.0;\r\n    normal.x = -normal.x;\r\n    normal.y = -normal.y;\r\n    if (!gl_FrontFacing) {\r\n        normal = -normal;\r\n    }\r\n    normal = normalize(vTBN * -normal);\r\n\r\n    vec3 viewDir = normalize(uCameraPos - vFragPos);\r\n    vec3 reflected = reflect(-viewDir, normal);\r\n\r\n    vec3 lightDir = normalize(uLightPos - vFragPos);\r\n    float lightFactor = max(dot(normal, lightDir), .0);\r\n    vec3 radiance = uLightColor;\r\n\r\n    vec3 f0 = vec3(.04);\r\n    f0 = mix(f0, baseColor.rgb, metallic);\r\n\r\n    vec3 totalLight = vec3(0.);\r\n    vec3 halfWay = normalize(viewDir + lightDir);\r\n    float ndf = distributionGGX(normal, halfWay, roughness);\r\n    float g = geometrySmith(normal, viewDir, lightDir, roughness);\r\n    vec3 f = fresnelSchlick(max(dot(halfWay, viewDir), 0.), f0);\r\n\r\n    vec3 kS = f;\r\n    // vec3 kD = vec3(1.) - kS;\r\n    vec3 kD = vec3(1.);\r\n    // kD *= 1.0 - metallic;\r\n    vec3 num = ndf * g * f;\r\n    float denom = 4. * max(dot(normal, viewDir), 0.) * max(dot(normal, lightDir), 0.) + .0001;\r\n    vec3 specular = num / denom;\r\n\r\n    totalLight = (kD * baseColor.rgb / PI + specular) * radiance * lightFactor;\r\n\r\n    if (uShadowParams[0] > .5) {\r\n        float shadowBias = uShadowParams[1];\r\n        float shadowStep = uShadowParams[2];\r\n        vec4 fragInLightPos = uShadowMapLightMatrix * vec4(vFragPos, 1.);\r\n        vec3 shadowMapCoord = fragInLightPos.xyz / fragInLightPos.w;\r\n        shadowMapCoord.xyz = (shadowMapCoord.xyz + 1.0) * .5;\r\n\r\n        int passes = 5;\r\n        float step = 1. / float(passes);\r\n\r\n        float lightDepth = texture2D(uShadowMapSampler, shadowMapCoord.xy).r;\r\n        float lightDepth0 = texture2D(uShadowMapSampler, vec2(shadowMapCoord.x + shadowStep, shadowMapCoord.y)).r;\r\n        float lightDepth1 = texture2D(uShadowMapSampler, vec2(shadowMapCoord.x, shadowMapCoord.y + shadowStep)).r;\r\n        float lightDepth2 = texture2D(uShadowMapSampler, vec2(shadowMapCoord.x, shadowMapCoord.y - shadowStep)).r;\r\n        float lightDepth3 = texture2D(uShadowMapSampler, vec2(shadowMapCoord.x - shadowStep, shadowMapCoord.y)).r;\r\n        float currentDepth = shadowMapCoord.z;\r\n\r\n        float visibility = 0.;\r\n        if (lightDepth > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth0 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth1 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth2 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth3 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n\r\n        totalLight *= visibility;\r\n    }\r\n\r\n    vec3 color;\r\n\r\n    vec3 ambient = vec3(.03);\r\n    ambient *= baseColor.rgb * occlusion;\r\n    color = ambient + totalLight;\r\n\r\n    color = color / (vec3(1.) + color);\r\n    color = pow(color, vec3(1. / gamma));\r\n\r\n    gl_FragColor = vec4(color, baseColor.a);\n\r\n    // hand-made alpha-test\r\n    if (gl_FragColor[3] < uDiscardAlphaLevel) {\r\n        discard;\r\n    }\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgl/hdNew.fs.glsl?raw
var hdNew_fs_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec2 vTextureCoord;\r\nin vec3 vNormal;\r\nin vec3 vTangent;\r\nin vec3 vBinormal;\r\nin mat3 vTBN;\r\nin vec3 vFragPos;\r\n\r\nout vec4 FragColor;\r\n\r\nuniform sampler2D uSampler;\r\nuniform sampler2D uNormalSampler;\r\nuniform sampler2D uOrmSampler;\r\nuniform vec3 uReplaceableColor;\r\nuniform float uDiscardAlphaLevel;\r\nuniform mat3 uTVertexAnim;\r\nuniform vec3 uLightPos;\r\nuniform vec3 uLightColor;\r\nuniform vec3 uCameraPos;\r\nuniform vec3 uShadowParams;\r\nuniform sampler2D uShadowMapSampler;\r\nuniform mat4 uShadowMapLightMatrix;\r\nuniform bool uHasEnv;\r\nuniform samplerCube uIrradianceMap;\r\nuniform samplerCube uPrefilteredEnv;\r\nuniform sampler2D uBRDFLUT;\r\nuniform float uWireframe;\r\n\r\nconst float PI = 3.14159265359;\r\nconst float gamma = 2.2;\r\nconst float MAX_REFLECTION_LOD = ${MAX_ENV_MIP_LEVELS};\r\n\r\nfloat distributionGGX(vec3 normal, vec3 halfWay, float roughness) {\r\n    float a = roughness * roughness;\r\n    float a2 = a * a;\r\n    float nDotH = max(dot(normal, halfWay), 0.0);\r\n    float nDotH2 = nDotH * nDotH;\r\n\r\n    float num = a2;\r\n    float denom = (nDotH2 * (a2 - 1.0) + 1.0);\r\n    denom = PI * denom * denom;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfloat geometrySchlickGGX(float nDotV, float roughness) {\r\n    float r = roughness + 1.;\r\n    float k = r * r / 8.;\r\n    // float k = roughness * roughness / 2.;\r\n\r\n    float num = nDotV;\r\n    float denom = nDotV * (1. - k) + k;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfloat geometrySmith(vec3 normal, vec3 viewDir, vec3 lightDir, float roughness) {\r\n    float nDotV = max(dot(normal, viewDir), .0);\r\n    float nDotL = max(dot(normal, lightDir), .0);\r\n    float ggx2  = geometrySchlickGGX(nDotV, roughness);\r\n    float ggx1  = geometrySchlickGGX(nDotL, roughness);\r\n\r\n    return ggx1 * ggx2;\r\n}\r\n\r\nvec3 fresnelSchlick(float lightFactor, vec3 f0) {\r\n    return f0 + (1. - f0) * pow(clamp(1. - lightFactor, 0., 1.), 5.);\r\n}\r\n\r\nvec3 fresnelSchlickRoughness(float lightFactor, vec3 f0, float roughness) {\r\n    return f0 + (max(vec3(1.0 - roughness), f0) - f0) * pow(clamp(1.0 - lightFactor, 0.0, 1.0), 5.0);\r\n}\r\n\r\nvoid main(void) {\r\n    if (uWireframe > 0.) {\r\n        FragColor = vec4(1.);\r\n        return;\r\n    }\r\n\r\n    vec2 texCoord = (uTVertexAnim * vec3(vTextureCoord.s, vTextureCoord.t, 1.)).st;\r\n\r\n    vec4 orm = texture(uOrmSampler, texCoord);\r\n\r\n    float occlusion = orm.r;\r\n    float roughness = orm.g;\r\n    float metallic = orm.b;\r\n    float teamColorFactor = orm.a;\r\n\r\n    vec4 baseColor = texture(uSampler, texCoord);\r\n    vec3 teamColor = baseColor.rgb * uReplaceableColor;\r\n    baseColor.rgb = mix(baseColor.rgb, teamColor, teamColorFactor);\r\n    baseColor.rgb = pow(baseColor.rgb, vec3(gamma));\r\n\r\n    vec3 normal = texture(uNormalSampler, texCoord).rgb;\r\n    normal = normal * 2.0 - 1.0;\r\n    normal.x = -normal.x;\r\n    normal.y = -normal.y;\r\n    if (!gl_FrontFacing) {\r\n        normal = -normal;\r\n    }\r\n    normal = normalize(vTBN * -normal);\r\n\r\n    vec3 viewDir = normalize(uCameraPos - vFragPos);\r\n    vec3 reflected = reflect(-viewDir, normal);\r\n\r\n    vec3 lightDir = normalize(uLightPos - vFragPos);\r\n    float lightFactor = max(dot(normal, lightDir), .0);\r\n    vec3 radiance = uLightColor;\r\n\r\n    vec3 f0 = vec3(.04);\r\n    f0 = mix(f0, baseColor.rgb, metallic);\r\n\r\n    vec3 totalLight = vec3(0.);\r\n    vec3 halfWay = normalize(viewDir + lightDir);\r\n    float ndf = distributionGGX(normal, halfWay, roughness);\r\n    float g = geometrySmith(normal, viewDir, lightDir, roughness);\r\n    vec3 f = fresnelSchlick(max(dot(halfWay, viewDir), 0.), f0);\r\n\r\n    vec3 kS = f;\r\n    vec3 kD = vec3(1.);// - kS;\r\n    if (uHasEnv) {\r\n        kD *= 1.0 - metallic;\r\n    }\r\n    vec3 num = ndf * g * f;\r\n    float denom = 4. * max(dot(normal, viewDir), 0.) * max(dot(normal, lightDir), 0.) + .0001;\r\n    vec3 specular = num / denom;\r\n\r\n    totalLight = (kD * baseColor.rgb / PI + specular) * radiance * lightFactor;\r\n\r\n    if (uShadowParams[0] > .5) {\r\n        float shadowBias = uShadowParams[1];\r\n        float shadowStep = uShadowParams[2];\r\n        vec4 fragInLightPos = uShadowMapLightMatrix * vec4(vFragPos, 1.);\r\n        vec3 shadowMapCoord = fragInLightPos.xyz / fragInLightPos.w;\r\n        shadowMapCoord.xyz = (shadowMapCoord.xyz + 1.0) * .5;\r\n\r\n        int passes = 5;\r\n        float step = 1. / float(passes);\r\n\r\n        float lightDepth = texture(uShadowMapSampler, shadowMapCoord.xy).r;\r\n        float lightDepth0 = texture(uShadowMapSampler, vec2(shadowMapCoord.x + shadowStep, shadowMapCoord.y)).r;\r\n        float lightDepth1 = texture(uShadowMapSampler, vec2(shadowMapCoord.x, shadowMapCoord.y + shadowStep)).r;\r\n        float lightDepth2 = texture(uShadowMapSampler, vec2(shadowMapCoord.x, shadowMapCoord.y - shadowStep)).r;\r\n        float lightDepth3 = texture(uShadowMapSampler, vec2(shadowMapCoord.x - shadowStep, shadowMapCoord.y)).r;\r\n        float currentDepth = shadowMapCoord.z;\r\n\r\n        float visibility = 0.;\r\n        if (lightDepth > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth0 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth1 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth2 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth3 > currentDepth - shadowBias) {\r\n            visibility += step;\r\n        }\r\n\r\n        totalLight *= visibility;\r\n    }\r\n\r\n    vec3 color;\r\n\r\n    if (uHasEnv) {\r\n        vec3 f = fresnelSchlickRoughness(max(dot(normal, viewDir), 0.0), f0, roughness);\r\n        vec3 kS = f;\r\n        vec3 kD = vec3(1.0) - kS;\r\n        kD *= 1.0 - metallic;\r\n\r\n        vec3 diffuse = texture(uIrradianceMap, normal).rgb * baseColor.rgb;\r\n        vec3 prefilteredColor = textureLod(uPrefilteredEnv, reflected, roughness * MAX_REFLECTION_LOD).rgb;\r\n        vec2 envBRDF = texture(uBRDFLUT, vec2(max(dot(normal, viewDir), 0.0), roughness)).rg;\r\n        specular = prefilteredColor * (f * envBRDF.x + envBRDF.y);\r\n\r\n        vec3 ambient = (kD * diffuse + specular) * occlusion;\r\n        color = ambient + totalLight;\r\n    } else {\r\n        vec3 ambient = vec3(.03);\r\n        ambient *= baseColor.rgb * occlusion;\r\n        color = ambient + totalLight;\r\n    }\r\n\r\n    color = color / (vec3(1.) + color);\r\n    color = pow(color, vec3(1. / gamma));\r\n\r\n    FragColor = vec4(color, baseColor.a);\r\n\r\n    // hand-made alpha-test\r\n    if (FragColor[3] < uDiscardAlphaLevel) {\r\n        discard;\r\n    }\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgl/skeleton.vs.glsl?raw
var skeleton_vs_default = "attribute vec3 aVertexPosition;\r\nattribute vec3 aColor;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvarying vec3 vColor;\r\n\r\nvoid main(void) {\r\n    vec4 position = vec4(aVertexPosition, 1.0);\r\n    gl_Position = uPMatrix * uMVMatrix * position;\r\n    vColor = aColor;\r\n}";
//#endregion
//#region renderer/shaders/webgl/skeleton.fs.glsl?raw
var skeleton_fs_default = "precision mediump float;\r\n\r\nvarying vec3 vColor;\r\n\r\nvoid main(void) {\r\n    gl_FragColor = vec4(vColor, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/envToCubemap.vs.glsl?raw
var envToCubemap_vs_default = "attribute vec3 aPos;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvarying vec3 vLocalPos;\r\n\r\nvoid main(void) {\r\n    vLocalPos = aPos;\r\n    gl_Position = uPMatrix * uMVMatrix * vec4(aPos, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/envToCubemap.fs.glsl?raw
var envToCubemap_fs_default = "precision mediump float;\r\n\r\nvarying vec3 vLocalPos;\r\n\r\nuniform sampler2D uEquirectangularMap;\r\n\r\nconst vec2 invAtan = vec2(0.1591, 0.3183);\r\n\r\nvec2 SampleSphericalMap(vec3 v) {\r\n    // vec2 uv = vec2(atan(v.z, v.x), asin(v.y));\r\n    vec2 uv = vec2(atan(v.x, v.y), asin(-v.z));\r\n    uv *= invAtan;\r\n    uv += 0.5;\r\n    return uv;\r\n}\r\n\r\nvoid main(void) {\r\n    vec2 uv = SampleSphericalMap(normalize(vLocalPos)); // make sure to normalize localPos\r\n    vec3 color = texture2D(uEquirectangularMap, uv).rgb;\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/env.vs.glsl?raw
var env_vs_default = "#version 300 es\r\n\r\nin vec3 aPos;\r\nout vec3 vLocalPos;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvoid main(void) {\r\n    vLocalPos = aPos;\r\n    mat4 rotView = mat4(mat3(uMVMatrix)); // remove translation from the view matrix\r\n    vec4 clipPos = uPMatrix * rotView * 1000. * vec4(aPos, 1.0);\r\n\r\n    gl_Position = clipPos.xyww;\r\n}";
//#endregion
//#region renderer/shaders/webgl/env.fs.glsl?raw
var env_fs_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec3 vLocalPos;\r\n\r\nout vec4 FragColor;\r\n\r\nuniform samplerCube uEnvironmentMap;\r\n\r\nvoid main(void) {\r\n    // vec3 envColor = textureLod(uEnvironmentMap, vLocalPos, 0.0).rgb;\r\n    vec3 envColor = texture(uEnvironmentMap, vLocalPos).rgb;\r\n\r\n    FragColor = vec4(envColor, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/convoluteEnvDiffuse.vs.glsl?raw
var convoluteEnvDiffuse_vs_default = "attribute vec3 aPos;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvarying vec3 vLocalPos;\r\n\r\nvoid main(void) {\r\n    vLocalPos = aPos;\r\n    gl_Position = uPMatrix * uMVMatrix * vec4(aPos, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/convoluteEnvDiffuse.fs.glsl?raw
var convoluteEnvDiffuse_fs_default = "precision mediump float;\r\n\r\nvarying vec3 vLocalPos;\r\n\r\nuniform samplerCube uEnvironmentMap;\r\n\r\nconst float PI = 3.14159265359;\r\nconst float gamma = 2.2;\r\n\r\nvoid main(void) {\r\n    vec3 irradiance = vec3(0.0);\r\n\r\n    // the sample direction equals the hemisphere's orientation\r\n    vec3 normal = normalize(vLocalPos);\r\n\r\n    vec3 up    = vec3(0.0, 1.0, 0.0);\r\n    vec3 right = normalize(cross(up, normal));\r\n    up         = normalize(cross(normal, right));\r\n\r\n    const float sampleDelta = 0.025;\r\n    float nrSamples = 0.0;\r\n    for(float phi = 0.0; phi < 2.0 * PI; phi += sampleDelta)\r\n    {\r\n        for(float theta = 0.0; theta < 0.5 * PI; theta += sampleDelta)\r\n        {\r\n            // spherical to cartesian (in tangent space)\r\n            vec3 tangentSample = vec3(sin(theta) * cos(phi),  sin(theta) * sin(phi), cos(theta));\r\n            // tangent space to world\r\n            vec3 sampleVec = tangentSample.x * right + tangentSample.y * up + tangentSample.z * normal;\r\n\r\n            irradiance += pow(textureCube(uEnvironmentMap, sampleVec).rgb, vec3(gamma)) * cos(theta) * sin(theta);\r\n            nrSamples++;\r\n        }\r\n    }\r\n    irradiance = PI * irradiance * (1.0 / float(nrSamples));\r\n\r\n    gl_FragColor = vec4(irradiance, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/prefilterEnv.vs.glsl?raw
var prefilterEnv_vs_default = "#version 300 es\r\n\r\nin vec3 aPos;\r\n\r\nout vec3 vLocalPos;\r\n\r\nuniform mat4 uMVMatrix;\r\nuniform mat4 uPMatrix;\r\n\r\nvoid main(void) {\r\n    vLocalPos = aPos;\r\n    gl_Position = uPMatrix * uMVMatrix * vec4(aPos, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/prefilterEnv.fs.glsl?raw
var prefilterEnv_fs_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nout vec4 FragColor;\r\n\r\nin vec3 vLocalPos;\r\n\r\nuniform samplerCube uEnvironmentMap;\r\nuniform float uRoughness;\r\n\r\nconst float PI = 3.14159265359;\r\nconst float gamma = 2.2;\r\n\r\nfloat RadicalInverse_VdC(uint bits) {\r\n    bits = (bits << 16u) | (bits >> 16u);\r\n    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\r\n    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\r\n    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\r\n    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\r\n    return float(bits) * 2.3283064365386963e-10; // / 0x100000000\r\n}\r\n\r\nvec2 Hammersley(uint i, uint N) {\r\n    return vec2(float(i)/float(N), RadicalInverse_VdC(i));\r\n}\r\n\r\nvec3 ImportanceSampleGGX(vec2 Xi, vec3 N, float roughness) {\r\n    float a = roughness * roughness;\r\n\r\n    float phi = 2.0 * PI * Xi.x;\r\n    float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));\r\n    float sinTheta = sqrt(1.0 - cosTheta*cosTheta);\r\n\r\n    // from spherical coordinates to cartesian coordinates\r\n    vec3 H;\r\n    H.x = cos(phi) * sinTheta;\r\n    H.y = sin(phi) * sinTheta;\r\n    H.z = cosTheta;\r\n\r\n    // from tangent-space vector to world-space sample vector\r\n    vec3 up        = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\r\n    vec3 tangent   = normalize(cross(up, N));\r\n    vec3 bitangent = cross(N, tangent);\r\n\r\n    vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;\r\n\r\n    return normalize(sampleVec);\r\n}\r\n\r\nvoid main() {\r\n    vec3 N = normalize(vLocalPos);\r\n    vec3 R = N;\r\n    vec3 V = R;\r\n\r\n    const uint SAMPLE_COUNT = 1024u;\r\n    float totalWeight = 0.0;\r\n    vec3 prefilteredColor = vec3(0.0);\r\n    for(uint i = 0u; i < SAMPLE_COUNT; ++i)\r\n    {\r\n        vec2 Xi = Hammersley(i, SAMPLE_COUNT);\r\n        vec3 H  = ImportanceSampleGGX(Xi, N, uRoughness);\r\n        vec3 L  = normalize(2.0 * dot(V, H) * H - V);\r\n\r\n        float NdotL = max(dot(N, L), 0.0);\r\n        if(NdotL > 0.0) {\r\n            prefilteredColor += pow(texture(uEnvironmentMap, L).rgb, vec3(gamma)) * NdotL;\r\n            totalWeight      += NdotL;\r\n        }\r\n    }\r\n    prefilteredColor = prefilteredColor / totalWeight;\r\n\r\n    FragColor = vec4(prefilteredColor, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/integrateBRDF.vs.glsl?raw
var integrateBRDF_vs_default = "#version 300 es\r\n\r\nin vec3 aPos;\r\n\r\nout vec2 vLocalPos;\r\n\r\nvoid main(void) {\r\n    vLocalPos = aPos.xy;\r\n    gl_Position = vec4(aPos, 1.0);\r\n}";
//#endregion
//#region renderer/shaders/webgl/integrateBRDF.fs.glsl?raw
var integrateBRDF_fs_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec2 vLocalPos;\r\n\r\nout vec4 FragColor;\r\n\r\nconst float PI = 3.14159265359;\r\n\r\nfloat RadicalInverse_VdC(uint bits) {\r\n    bits = (bits << 16u) | (bits >> 16u);\r\n    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\r\n    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\r\n    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\r\n    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\r\n    return float(bits) * 2.3283064365386963e-10; // / 0x100000000\r\n}\r\n\r\nvec2 Hammersley(uint i, uint N) {\r\n    return vec2(float(i)/float(N), RadicalInverse_VdC(i));\r\n}\r\n\r\nvec3 ImportanceSampleGGX(vec2 Xi, vec3 N, float roughness) {\r\n    float a = roughness * roughness;\r\n\r\n    float phi = 2.0 * PI * Xi.x;\r\n    float cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));\r\n    float sinTheta = sqrt(1.0 - cosTheta*cosTheta);\r\n\r\n    // from spherical coordinates to cartesian coordinates\r\n    vec3 H;\r\n    H.x = cos(phi) * sinTheta;\r\n    H.y = sin(phi) * sinTheta;\r\n    H.z = cosTheta;\r\n\r\n    // from tangent-space vector to world-space sample vector\r\n    vec3 up        = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\r\n    vec3 tangent   = normalize(cross(up, N));\r\n    vec3 bitangent = cross(N, tangent);\r\n\r\n    vec3 sampleVec = tangent * H.x + bitangent * H.y + N * H.z;\r\n\r\n    return normalize(sampleVec);\r\n}\r\n\r\nfloat geometrySchlickGGX(float nDotV, float roughness) {\r\n    float r = roughness;\r\n    float k = r * r / 2.;\r\n\r\n    float num = nDotV;\r\n    float denom = nDotV * (1. - k) + k;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfloat geometrySmith(vec3 normal, vec3 viewDir, vec3 lightDir, float roughness) {\r\n    float nDotV = max(dot(normal, viewDir), .0);\r\n    float nDotL = max(dot(normal, lightDir), .0);\r\n    float ggx2  = geometrySchlickGGX(nDotV, roughness);\r\n    float ggx1  = geometrySchlickGGX(nDotL, roughness);\r\n\r\n    return ggx1 * ggx2;\r\n}\r\n\r\nvec2 IntegrateBRDF(float NdotV, float roughness) {\r\n    vec3 V;\r\n    V.x = sqrt(1.0 - NdotV*NdotV);\r\n    V.y = 0.0;\r\n    V.z = NdotV;\r\n\r\n    float A = 0.0;\r\n    float B = 0.0;\r\n\r\n    vec3 N = vec3(0.0, 0.0, 1.0);\r\n\r\n    const uint SAMPLE_COUNT = 1024u;\r\n    for(uint i = 0u; i < SAMPLE_COUNT; ++i)\r\n    {\r\n        vec2 Xi = Hammersley(i, SAMPLE_COUNT);\r\n        vec3 H  = ImportanceSampleGGX(Xi, N, roughness);\r\n        vec3 L  = normalize(2.0 * dot(V, H) * H - V);\r\n\r\n        float NdotL = max(L.z, 0.0);\r\n        float NdotH = max(H.z, 0.0);\r\n        float VdotH = max(dot(V, H), 0.0);\r\n\r\n        if(NdotL > 0.0)\r\n        {\r\n            float G = geometrySmith(N, V, L, roughness);\r\n            float G_Vis = (G * VdotH) / (NdotH * NdotV);\r\n            float Fc = pow(1.0 - VdotH, 5.0);\r\n\r\n            A += (1.0 - Fc) * G_Vis;\r\n            B += Fc * G_Vis;\r\n        }\r\n    }\r\n    A /= float(SAMPLE_COUNT);\r\n    B /= float(SAMPLE_COUNT);\r\n    return vec2(A, B);\r\n}\r\n\r\nvoid main() {\r\n    FragColor = vec4(IntegrateBRDF((vLocalPos.x + 1.0) * .5, (vLocalPos.y + 1.0) * .5), 0., 1.);\r\n}";
//#endregion
//#region renderer/shaders/webgpu/sd.wgsl?raw
var sd_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n    nodesMatrices: array<mat4x4f, ${MAX_NODES}>,\r\n}\r\n\r\nstruct FSUniforms {\r\n    replaceableColor: vec3f,\r\n    replaceableType: u32,\n    discardAlphaLevel: f32,\n    wireframe: u32,\n    alpha: f32,\n    tVertexAnim: mat3x3f,\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var<uniform> fsUniforms: FSUniforms;\r\n@group(1) @binding(1) var fsUniformSampler: sampler;\r\n@group(1) @binding(2) var fsUniformTexture: texture_2d<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n    @location(1) normal: vec3f,\r\n    @location(2) textureCoord: vec2f,\r\n    @location(3) group: vec4<u32>,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) normal: vec3f,\r\n    @location(1) textureCoord: vec2f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var position: vec4f = vec4f(in.vertexPosition, 1.0);\r\n    var count: i32 = 1;\r\n    var sum: vec4f = vsUniforms.nodesMatrices[in.group[0]] * position;\r\n\r\n    if (in.group[1] < ${MAX_NODES}) {\r\n        sum += vsUniforms.nodesMatrices[in.group[1]] * position;\r\n        count += 1;\r\n    }\r\n    if (in.group[2] < ${MAX_NODES}) {\r\n        sum += vsUniforms.nodesMatrices[in.group[2]] * position;\r\n        count += 1;\r\n    }\r\n    if (in.group[3] < ${MAX_NODES}) {\r\n        sum += vsUniforms.nodesMatrices[in.group[3]] * position;\r\n        count += 1;\r\n    }\r\n    sum /= f32(count);\r\n    sum.w = 1.;\r\n    position = sum;\r\n\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * position;\r\n    out.textureCoord = in.textureCoord;\r\n    out.normal = in.normal;\r\n    return out;\r\n}\r\n\r\nfn hypot(z: vec2f) -> f32 {\r\n    var t: f32 = 0;\r\n    var x: f32 = abs(z.x);\r\n    let y: f32 = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    if (z.x == 0.0 && z.y == 0.0) {\r\n        return 0.0;\r\n    }\r\n    return x * sqrt(1.0 + t * t);\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    if (fsUniforms.wireframe > 0) {\r\n        return vec4f(1);\r\n    }\r\n\r\n    let texCoord: vec2f = (fsUniforms.tVertexAnim * vec3f(in.textureCoord.x, in.textureCoord.y, 1.)).xy;\r\n    var color: vec4f = vec4f(0.0);\r\n\r\n    if (fsUniforms.replaceableType == 0) {\r\n        color = textureSample(fsUniformTexture, fsUniformSampler, texCoord);\r\n    } else if (fsUniforms.replaceableType == 1) {\r\n        color = vec4f(fsUniforms.replaceableColor, 1.0);\r\n    } else if (fsUniforms.replaceableType == 2) {\r\n        let dist: f32 = hypot(texCoord - vec2(0.5, 0.5)) * 2.;\r\n        let truncateDist: f32 = clamp(1. - dist * 1.4, 0., 1.);\r\n        let alpha: f32 = sin(truncateDist);\r\n        color = vec4f(fsUniforms.replaceableColor * alpha, 1.0);\n    }\n\n    color.a *= fsUniforms.alpha;\n\n    // hand-made alpha-test\n    if (color.a < fsUniforms.discardAlphaLevel) {\r\n        discard;\r\n    }\r\n\r\n    return color;\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/hd.wgsl?raw
var hd_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n    nodesMatrices: array<mat4x4f, ${MAX_NODES}>,\r\n}\r\n\r\nstruct FSUniforms {\r\n    replaceableColor: vec3f,\r\n    // replaceableType: u32,\r\n    discardAlphaLevel: f32,\r\n    tVertexAnim: mat3x3f,\r\n    lightPos: vec3f,\r\n    hasEnv: u32,\r\n    lightColor: vec3f,\r\n    wireframe: u32,\r\n    cameraPos: vec3f,\r\n    shadowParams: vec3f,\r\n    shadowMapLightMatrix: mat4x4f,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var<uniform> fsUniforms: FSUniforms;\r\n@group(1) @binding(1) var fsUniformDiffuseSampler: sampler;\r\n@group(1) @binding(2) var fsUniformDiffuseTexture: texture_2d<f32>;\r\n@group(1) @binding(3) var fsUniformNormalSampler: sampler;\r\n@group(1) @binding(4) var fsUniformNormalTexture: texture_2d<f32>;\r\n@group(1) @binding(5) var fsUniformOrmSampler: sampler;\r\n@group(1) @binding(6) var fsUniformOrmTexture: texture_2d<f32>;\r\n@group(1) @binding(7) var fsUniformShadowSampler: sampler_comparison;\r\n@group(1) @binding(8) var fsUniformShadowTexture: texture_depth_2d;\r\n@group(1) @binding(9) var irradienceMapSampler: sampler;\r\n@group(1) @binding(10) var irradienceMapTexture: texture_cube<f32>;\r\n@group(1) @binding(11) var prefilteredEnvSampler: sampler;\r\n@group(1) @binding(12) var prefilteredEnvTexture: texture_cube<f32>;\r\n@group(1) @binding(13) var brdfLutSampler: sampler;\r\n@group(1) @binding(14) var brdfLutTexture: texture_2d<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n    @location(1) normal: vec3f,\r\n    @location(2) textureCoord: vec2f,\r\n    @location(3) tangent: vec4f,\r\n    @location(4) skin: vec4<u32>,\r\n    @location(5) boneWeight: vec4f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) normal: vec3f,\r\n    @location(1) textureCoord: vec2f,\r\n    @location(2) tangent: vec3f,\r\n    @location(3) binormal: vec3f,\r\n    @location(4) fragPos: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var position: vec4f = vec4f(in.vertexPosition, 1.0);\r\n    var sum: mat4x4f;\r\n\r\n    sum += vsUniforms.nodesMatrices[in.skin[0]] * in.boneWeight[0];\r\n    sum += vsUniforms.nodesMatrices[in.skin[1]] * in.boneWeight[1];\r\n    sum += vsUniforms.nodesMatrices[in.skin[2]] * in.boneWeight[2];\r\n    sum += vsUniforms.nodesMatrices[in.skin[3]] * in.boneWeight[3];\r\n\r\n    let rotation: mat3x3f = mat3x3f(sum[0].xyz, sum[1].xyz, sum[2].xyz);\r\n\r\n    position = sum * position;\r\n    position.w = 1;\r\n\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * position;\r\n    out.textureCoord = in.textureCoord;\r\n    out.normal = in.normal;\r\n\r\n    var normal: vec3f = in.normal;\r\n    var tangent: vec3f = in.tangent.xyz;\r\n\r\n    // https://learnopengl.com/Advanced-Lighting/Normal-Mapping\r\n    tangent = normalize(tangent - dot(tangent, normal) * normal);\r\n\r\n    var binormal: vec3f = cross(normal, tangent) * in.tangent.w;\r\n\r\n    normal = normalize(rotation * normal);\r\n    tangent = normalize(rotation * tangent);\r\n    binormal = normalize(rotation * binormal);\r\n\r\n    out.normal = normal;\r\n    out.tangent = tangent;\r\n    out.binormal = binormal;\r\n\r\n    out.fragPos = position.xyz;\r\n\r\n    return out;\r\n}\r\n\r\nfn hypot(z: vec2f) -> f32 {\r\n    var t: f32 = 0;\r\n    var x: f32 = abs(z.x);\r\n    let y: f32 = abs(z.y);\r\n    t = min(x, y);\r\n    x = max(x, y);\r\n    t = t / x;\r\n    if (z.x == 0.0 && z.y == 0.0) {\r\n        return 0.0;\r\n    }\r\n    return x * sqrt(1.0 + t * t);\r\n}\r\n\r\nconst PI: f32 = 3.14159265359;\r\nconst gamma: f32 = 2.2;\r\nconst MAX_REFLECTION_LOD: f32 = ${MAX_ENV_MIP_LEVELS};\r\n\r\nfn distributionGGX(normal: vec3f, halfWay: vec3f, roughness: f32) -> f32 {\r\n    let a: f32 = roughness * roughness;\r\n    let a2: f32 = a * a;\r\n    let nDotH: f32 = max(dot(normal, halfWay), 0.0);\r\n    let nDotH2: f32 = nDotH * nDotH;\r\n\r\n    let num: f32 = a2;\r\n    var denom: f32 = (nDotH2 * (a2 - 1.0) + 1.0);\r\n    denom = PI * denom * denom;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfn geometrySchlickGGX(nDotV: f32, roughness: f32) -> f32 {\r\n    let r: f32 = roughness + 1.;\r\n    let k: f32 = r * r / 8.;\r\n    // float k = roughness * roughness / 2.;\r\n\r\n    let num: f32 = nDotV;\r\n    let denom: f32 = nDotV * (1. - k) + k;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfn geometrySmith(normal: vec3f, viewDir: vec3f, lightDir: vec3f, roughness: f32) -> f32 {\r\n    let nDotV: f32 = max(dot(normal, viewDir), .0);\r\n    let nDotL: f32 = max(dot(normal, lightDir), .0);\r\n    let ggx2: f32  = geometrySchlickGGX(nDotV, roughness);\r\n    let ggx1: f32  = geometrySchlickGGX(nDotL, roughness);\r\n\r\n    return ggx1 * ggx2;\r\n}\r\n\r\nfn fresnelSchlick(lightFactor: f32, f0: vec3f) -> vec3f {\r\n    return f0 + (1. - f0) * pow(clamp(1. - lightFactor, 0., 1.), 5.);\r\n}\r\n\r\nfn fresnelSchlickRoughness(lightFactor: f32, f0: vec3f, roughness: f32) -> vec3f {\r\n    return f0 + (max(vec3(1.0 - roughness), f0) - f0) * pow(clamp(1.0 - lightFactor, 0.0, 1.0), 5.0);\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut,\r\n    @builtin(front_facing) isFront: bool\r\n) -> @location(0) vec4f {\r\n    if (fsUniforms.wireframe > 0) {\r\n        return vec4f(1);\r\n    }\r\n\r\n    let texCoord: vec2f = (fsUniforms.tVertexAnim * vec3f(in.textureCoord.x, in.textureCoord.y, 1.)).xy;\r\n    var baseColor: vec4f = textureSample(fsUniformDiffuseTexture, fsUniformDiffuseSampler, texCoord);\r\n\r\n    // hand-made alpha-test\r\n    if (baseColor.a < fsUniforms.discardAlphaLevel) {\r\n        discard;\r\n    }\r\n\r\n    let orm: vec4f = textureSample(fsUniformOrmTexture, fsUniformOrmSampler, texCoord);\r\n\r\n    let occlusion: f32 = orm.r;\r\n    let roughness: f32 = orm.g;\r\n    let metallic: f32 = orm.b;\r\n    let teamColorFactor: f32 = orm.a;\r\n\r\n    var teamColor: vec3f = baseColor.rgb * fsUniforms.replaceableColor;\r\n    baseColor = vec4(mix(baseColor.rgb, teamColor, teamColorFactor), baseColor.a);\r\n    baseColor = vec4(pow(baseColor.rgb, vec3f(gamma)), baseColor.a);\r\n\r\n    let TBN: mat3x3f = mat3x3f(in.tangent, in.binormal, in.normal);\r\n\r\n    var normal: vec3f = textureSample(fsUniformNormalTexture, fsUniformNormalSampler, texCoord).xyz;\r\n    normal = normal * 2 - 1;\r\n    normal.x = -normal.x;\r\n    normal.y = -normal.y;\r\n    if (!isFront) {\r\n        normal = -normal;\r\n    }\r\n    normal = normalize(TBN * -normal);\r\n\r\n    let viewDir: vec3f = normalize(fsUniforms.cameraPos - in.fragPos);\r\n    let reflected = reflect(-viewDir, normal);\r\n\r\n    let lightDir: vec3f = normalize(fsUniforms.lightPos - in.fragPos);\r\n    let lightFactor: f32 = max(dot(normal, lightDir), 0);\r\n    let radiance: vec3f = fsUniforms.lightColor;\r\n\r\n    var f0 = vec3f(.04);\r\n    f0 = mix(f0, baseColor.rgb, metallic);\r\n\r\n    var totalLight: vec3f = vec3f(0);\r\n    let halfWay: vec3f = normalize(viewDir + lightDir);\r\n    let ndf: f32 = distributionGGX(normal, halfWay, roughness);\r\n    let g: f32 = geometrySmith(normal, viewDir, lightDir, roughness);\r\n    let f: vec3f = fresnelSchlick(max(dot(halfWay, viewDir), 0), f0);\r\n\r\n    let kS = f;\r\n    var kD = vec3f(1);// - kS;\r\n    if (fsUniforms.hasEnv > 0) {\r\n        kD *= 1 - metallic;\r\n    }\r\n    let num: vec3f = ndf * g * f;\r\n    let denom: f32 = 4. * max(dot(normal, viewDir), 0.) * max(dot(normal, lightDir), 0.) + .0001;\r\n    var specular: vec3f = num / denom;\r\n\r\n    totalLight = (kD * baseColor.rgb / PI + specular) * radiance * lightFactor;\r\n\r\n    if (fsUniforms.shadowParams[0] > .5) {\r\n        let shadowBias: f32 = fsUniforms.shadowParams[1];\r\n        let shadowStep: f32 = fsUniforms.shadowParams[2];\r\n        let fragInLightPos: vec4f = fsUniforms.shadowMapLightMatrix * vec4f(in.fragPos, 1.);\r\n        var shadowMapCoord: vec3f = fragInLightPos.xyz / fragInLightPos.w;\r\n        shadowMapCoord = vec3f((shadowMapCoord.xy + 1) * .5, shadowMapCoord.z);\r\n        shadowMapCoord.y = 1 - shadowMapCoord.y;\r\n\r\n        let passes: u32 = 5;\r\n        let step: f32 = 1. / f32(passes);\r\n\r\n        let currentDepth: f32 = shadowMapCoord.z;\r\n        var lightDepth: f32 = textureSampleCompare(fsUniformShadowTexture, fsUniformShadowSampler, shadowMapCoord.xy, currentDepth - shadowBias);\r\n        let lightDepth0: f32 = textureSampleCompare(fsUniformShadowTexture, fsUniformShadowSampler, vec2f(shadowMapCoord.x + shadowStep, shadowMapCoord.y), currentDepth - shadowBias);\r\n        let lightDepth1: f32 = textureSampleCompare(fsUniformShadowTexture, fsUniformShadowSampler, vec2f(shadowMapCoord.x, shadowMapCoord.y + shadowStep), currentDepth - shadowBias);\r\n        let lightDepth2: f32 = textureSampleCompare(fsUniformShadowTexture, fsUniformShadowSampler, vec2f(shadowMapCoord.x, shadowMapCoord.y - shadowStep), currentDepth - shadowBias);\r\n        let lightDepth3: f32 = textureSampleCompare(fsUniformShadowTexture, fsUniformShadowSampler, vec2f(shadowMapCoord.x - shadowStep, shadowMapCoord.y), currentDepth - shadowBias);\r\n\r\n        var visibility: f32 = 0.;\r\n        if (lightDepth > .5) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth0 > .5) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth1 > .5) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth2 > .5) {\r\n            visibility += step;\r\n        }\r\n        if (lightDepth3 > .5) {\r\n            visibility += step;\r\n        }\r\n\r\n        totalLight *= visibility;\r\n    }\r\n\r\n    var color: vec3f = vec3f(0.0);\r\n\r\n    if (fsUniforms.hasEnv > 0) {\r\n        let f: vec3f = fresnelSchlickRoughness(max(dot(normal, viewDir), 0.0), f0, roughness);\r\n        let kS: vec3f = f;\r\n        var kD: vec3f = vec3f(1.0) - kS;\r\n        kD *= 1.0 - metallic;\r\n\r\n        let diffuse: vec3f = textureSample(irradienceMapTexture, irradienceMapSampler, normal).rgb * baseColor.rgb;\r\n        let prefilteredColor: vec3f = textureSampleLevel(prefilteredEnvTexture, prefilteredEnvSampler, reflected, roughness * MAX_REFLECTION_LOD).rgb;\r\n        let envBRDF: vec2f = textureSample(brdfLutTexture, brdfLutSampler, vec2f(max(dot(normal, viewDir), 0.0), roughness)).rg;\r\n        specular = prefilteredColor * (f * envBRDF.x + envBRDF.y);\r\n\r\n        let ambient: vec3f = (kD * diffuse + specular) * occlusion;\r\n        color = ambient + totalLight;\r\n    } else {\r\n        var ambient: vec3f = vec3(.03);\r\n        ambient *= baseColor.rgb * occlusion;\r\n        color = ambient + totalLight;\r\n    }\r\n\r\n    color = color / (vec3f(1) + color);\r\n    color = pow(color, vec3f(1 / gamma));\r\n\r\n    return vec4f(color, baseColor.a);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/depth.wgsl?raw
var depth_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n    nodesMatrices: array<mat4x4f, ${MAX_NODES}>,\r\n}\r\n\r\nstruct FSUniforms {\r\n    replaceableColor: vec3f,\r\n    // replaceableType: u32,\r\n    discardAlphaLevel: f32,\r\n    tVertexAnim: mat3x3f,\r\n    lightPos: vec3f,\r\n    lightColor: vec3f,\r\n    cameraPos: vec3f,\r\n    shadowParams: vec3f,\r\n    shadowMapLightMatrix: mat4x4f,\r\n    // env\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var<uniform> fsUniforms: FSUniforms;\r\n@group(1) @binding(1) var fsUniformDiffuseSampler: sampler;\r\n@group(1) @binding(2) var fsUniformDiffuseTexture: texture_2d<f32>;\r\n@group(1) @binding(3) var fsUniformNormalSampler: sampler;\r\n@group(1) @binding(4) var fsUniformNormalTexture: texture_2d<f32>;\r\n@group(1) @binding(5) var fsUniformOrmSampler: sampler;\r\n@group(1) @binding(6) var fsUniformOrmTexture: texture_2d<f32>;\r\n@group(1) @binding(7) var fsUniformShadowSampler: sampler_comparison;\r\n// @group(1) @binding(7) var fsUniformShadowSampler: sampler;\r\n@group(1) @binding(8) var fsUniformShadowTexture: texture_depth_2d;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n    @location(1) normal: vec3f,\r\n    @location(2) textureCoord: vec2f,\r\n    @location(3) tangent: vec4f,\r\n    @location(4) skin: vec4<u32>,\r\n    @location(5) boneWeight: vec4f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) textureCoord: vec2f,\r\n    @location(1) depth: f32,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var position: vec4f = vec4f(in.vertexPosition, 1.0);\r\n    var sum: mat4x4f;\r\n\r\n    sum += vsUniforms.nodesMatrices[in.skin[0]] * in.boneWeight[0];\r\n    sum += vsUniforms.nodesMatrices[in.skin[1]] * in.boneWeight[1];\r\n    sum += vsUniforms.nodesMatrices[in.skin[2]] * in.boneWeight[2];\r\n    sum += vsUniforms.nodesMatrices[in.skin[3]] * in.boneWeight[3];\r\n\r\n    position = sum * position;\r\n    position.w = 1;\r\n\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * position;\r\n    out.textureCoord = in.textureCoord;\r\n\r\n    out.depth = out.position.z / out.position.w;\r\n\r\n    return out;\r\n}\r\n\r\nstruct FSOut {\r\n    @builtin(frag_depth) depth: f32,\r\n    @location(0) color: vec4f\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut,\r\n    @builtin(front_facing) isFront: bool\r\n) -> FSOut {\r\n    let texCoord: vec2f = (fsUniforms.tVertexAnim * vec3f(in.textureCoord.x, in.textureCoord.y, 1.)).xy;\r\n    var baseColor: vec4f = textureSample(fsUniformDiffuseTexture, fsUniformDiffuseSampler, texCoord);\r\n\r\n    // hand-made alpha-test\r\n    if (baseColor.a < fsUniforms.discardAlphaLevel) {\r\n        discard;\r\n    }\r\n\r\n    var out: FSOut;\r\n    out.color = vec4f(1, 1, 1, 1);\r\n    out.depth = in.depth;\r\n    return out;\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/skeleton.wgsl?raw
var skeleton_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n    @location(1) color: vec3f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) color: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var position: vec4f = vec4f(in.vertexPosition, 1.0);\r\n\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * position;\r\n    out.color = in.color;\r\n    return out;\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    return vec4f(in.color, 1);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/env.wgsl?raw
var env_default = "struct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var fsUniformSampler: sampler;\r\n@group(1) @binding(1) var fsUniformTexture: texture_cube<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) localPos: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    let rotView: mat4x4f = mat4x4f(\r\n        vec4f(vsUniforms.mvMatrix[0].xyz, 0),\r\n        vec4f(vsUniforms.mvMatrix[1].xyz, 0),\r\n        vec4f(vsUniforms.mvMatrix[2].xyz, 0),\r\n        vec4f(0, 0, 0, 1)\r\n    );\r\n\r\n    let clipPos: vec4f = vsUniforms.pMatrix * rotView * 1000. * vec4f(in.vertexPosition, 1.0);\r\n\r\n    var out: VSOut;\r\n    out.position = clipPos;\r\n    out.localPos = in.vertexPosition;\r\n    return out;\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    return textureSample(fsUniformTexture, fsUniformSampler, in.localPos);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/envToCubemap.wgsl?raw
var envToCubemap_default = "const invAtan: vec2f = vec2f(0.1591, 0.3183);\r\n\r\nstruct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var fsUniformSampler: sampler;\r\n@group(1) @binding(1) var fsUniformTexture: texture_2d<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) localPos: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * vec4f(in.vertexPosition, 1);\r\n    out.localPos = in.vertexPosition;\r\n    return out;\r\n}\r\n\r\nfn SampleSphericalMap(v: vec3f) -> vec2f {\r\n    // vec2 uv = vec2(atan(v.z, v.x), asin(v.y));\r\n    var uv: vec2f = vec2f(atan2(v.x, v.y), asin(-v.z));\r\n    uv *= invAtan;\r\n    uv += 0.5;\r\n    return uv;\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    let uv: vec2f = SampleSphericalMap(normalize(in.localPos)); // make sure to normalize localPos\r\n    let color: vec3f = textureSample(fsUniformTexture, fsUniformSampler, uv).rgb;\r\n\r\n    return vec4f(color, 1.0);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/convoluteEnvDiffuse.wgsl?raw
var convoluteEnvDiffuse_default = "const PI: f32 = 3.14159265359;\r\nconst gamma: f32 = 2.2;\r\nconst sampleDelta: f32 = 0.025;\r\n\r\nstruct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var fsUniformSampler: sampler;\r\n@group(1) @binding(1) var fsUniformTexture: texture_cube<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) localPos: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * vec4f(in.vertexPosition, 1);\r\n    out.localPos = in.vertexPosition;\r\n    return out;\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    var irradiance: vec3f = vec3f(0);\r\n\r\n    // the sample direction equals the hemisphere's orientation\r\n    let normal: vec3f = normalize(in.localPos);\r\n\r\n    var up: vec3f = vec3f(0.0, 1.0, 0.0);\r\n    let right: vec3f = normalize(cross(up, normal));\r\n    up = normalize(cross(normal, right));\r\n\r\n    var nrSamples: i32 = 0;\r\n    for (var phi: f32 = 0.0; phi < 2.0 * PI; phi += sampleDelta)\r\n    {\r\n        for (var theta: f32 = 0.0; theta < 0.5 * PI; theta += sampleDelta)\r\n        {\r\n            // spherical to cartesian (in tangent space)\r\n            let tangentSample: vec3f = vec3f(sin(theta) * cos(phi), sin(theta) * sin(phi), cos(theta));\r\n            // tangent space to world\r\n            let sampleVec: vec3f = tangentSample.x * right + tangentSample.y * up + tangentSample.z * normal;\r\n\r\n            irradiance += pow(textureSample(fsUniformTexture, fsUniformSampler, sampleVec).rgb, vec3f(gamma)) * cos(theta) * sin(theta);\r\n            nrSamples++;\r\n        }\r\n    }\r\n    irradiance = PI * irradiance * (1.0 / f32(nrSamples));\r\n\r\n    return vec4f(irradiance, 1.0);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/prefilterEnv.wgsl?raw
var prefilterEnv_default = "const PI: f32 = 3.14159265359;\r\nconst gamma: f32 = 2.2;\r\n\r\nstruct VSUniforms {\r\n    mvMatrix: mat4x4f,\r\n    pMatrix: mat4x4f,\r\n}\r\n\r\nstruct FSUniforms {\r\n    roughness: f32,\r\n}\r\n\r\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\r\n@group(1) @binding(0) var<uniform> fsUniforms: FSUniforms;\r\n@group(1) @binding(1) var fsUniformSampler: sampler;\r\n@group(1) @binding(2) var fsUniformTexture: texture_cube<f32>;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) localPos: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var out: VSOut;\r\n    out.position = vsUniforms.pMatrix * vsUniforms.mvMatrix * vec4f(in.vertexPosition, 1);\r\n    out.localPos = in.vertexPosition;\r\n    return out;\r\n}\r\n\r\nfn RadicalInverse_VdC(bits: u32) -> f32 {\r\n    var res: u32 = bits;\r\n    res = (res << 16u) | (res >> 16u);\r\n    res = ((res & 0x55555555u) << 1u) | ((res & 0xAAAAAAAAu) >> 1u);\r\n    res = ((res & 0x33333333u) << 2u) | ((res & 0xCCCCCCCCu) >> 2u);\r\n    res = ((res & 0x0F0F0F0Fu) << 4u) | ((res & 0xF0F0F0F0u) >> 4u);\r\n    res = ((res & 0x00FF00FFu) << 8u) | ((res & 0xFF00FF00u) >> 8u);\r\n    return f32(res) * 2.3283064365386963e-10; // / 0x100000000\r\n}\r\n\r\nfn Hammersley(i: u32, N: u32) -> vec2f {\r\n    return vec2f(f32(i)/f32(N), RadicalInverse_VdC(i));\r\n}\r\n\r\nfn ImportanceSampleGGX(Xi: vec2f, N: vec3f, roughness: f32) -> vec3f {\r\n    let a: f32 = roughness * roughness;\r\n\r\n    let phi: f32 = 2.0 * PI * Xi.x;\r\n    let cosTheta: f32 = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));\r\n    let sinTheta: f32 = sqrt(1.0 - cosTheta*cosTheta);\r\n\r\n    // from spherical coordinates to cartesian coordinates\r\n    var H: vec3f;\r\n    H.x = cos(phi) * sinTheta;\r\n    H.y = sin(phi) * sinTheta;\r\n    H.z = cosTheta;\r\n\r\n    // from tangent-space vector to world-space sample vector\r\n    var up: vec3f;\r\n    if (abs(N.z) < 0.999) {\r\n        up = vec3f(0.0, 0.0, 1.0);\r\n    } else {\r\n        up = vec3f(1.0, 0.0, 0.0);\r\n    }\r\n    let tangent: vec3f   = normalize(cross(up, N));\r\n    let bitangent: vec3f = cross(N, tangent);\r\n\r\n    let sampleVec: vec3f = tangent * H.x + bitangent * H.y + N * H.z;\r\n\r\n    return normalize(sampleVec);\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    let N: vec3f = normalize(in.localPos);\r\n    let R: vec3f = N;\r\n    let V: vec3f = R;\r\n\r\n    const SAMPLE_COUNT: u32 = 1024u;\r\n    var totalWeight: f32 = 0.0;\r\n    var prefilteredColor: vec3f = vec3f(0.0);\r\n    for(var i: u32 = 0u; i < SAMPLE_COUNT; i++)\r\n    {\r\n        let Xi: vec2f = Hammersley(i, SAMPLE_COUNT);\r\n        let H: vec3f  = ImportanceSampleGGX(Xi, N, fsUniforms.roughness);\r\n        let L: vec3f  = normalize(2.0 * dot(V, H) * H - V);\r\n\r\n        let NdotL: f32 = max(dot(N, L), 0.0);\r\n        if(NdotL > 0.0) {\r\n            prefilteredColor += pow(textureSampleLevel(fsUniformTexture, fsUniformSampler, L, 0).rgb, vec3f(gamma)) * NdotL;\r\n            totalWeight      += NdotL;\r\n        }\r\n    }\r\n    prefilteredColor = prefilteredColor / totalWeight;\r\n\r\n    return vec4f(prefilteredColor, 1.0);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/integrateBRDF.wgsl?raw
var integrateBRDF_default = "const PI: f32 = 3.14159265359;\r\n\r\nstruct VSIn {\r\n    @location(0) vertexPosition: vec3f,\r\n}\r\n\r\nstruct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) localPos: vec3f,\r\n}\r\n\r\n@vertex fn vs(\r\n    in: VSIn\r\n) -> VSOut {\r\n    var out: VSOut;\r\n    out.position = vec4f(in.vertexPosition, 1);\r\n    out.localPos = in.vertexPosition;\r\n    return out;\r\n}\r\n\r\nfn RadicalInverse_VdC(bits: u32) -> f32 {\r\n    var res: u32 = bits;\r\n    res = (res << 16u) | (res >> 16u);\r\n    res = ((res & 0x55555555u) << 1u) | ((res & 0xAAAAAAAAu) >> 1u);\r\n    res = ((res & 0x33333333u) << 2u) | ((res & 0xCCCCCCCCu) >> 2u);\r\n    res = ((res & 0x0F0F0F0Fu) << 4u) | ((res & 0xF0F0F0F0u) >> 4u);\r\n    res = ((res & 0x00FF00FFu) << 8u) | ((res & 0xFF00FF00u) >> 8u);\r\n    return f32(res) * 2.3283064365386963e-10; // / 0x100000000\r\n}\r\n\r\nfn Hammersley(i: u32, N: u32) -> vec2f {\r\n    return vec2f(f32(i)/f32(N), RadicalInverse_VdC(i));\r\n}\r\n\r\nfn ImportanceSampleGGX(Xi: vec2f, N: vec3f, roughness: f32) -> vec3f {\r\n    let a: f32 = roughness * roughness;\r\n\r\n    let phi: f32 = 2.0 * PI * Xi.x;\r\n    let cosTheta: f32 = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));\r\n    let sinTheta: f32 = sqrt(1.0 - cosTheta*cosTheta);\r\n\r\n    // from spherical coordinates to cartesian coordinates\r\n    var H: vec3f;\r\n    H.x = cos(phi) * sinTheta;\r\n    H.y = sin(phi) * sinTheta;\r\n    H.z = cosTheta;\r\n\r\n    // from tangent-space vector to world-space sample vector\r\n    var up: vec3f;\r\n    if (abs(N.z) < 0.999) {\r\n        up = vec3f(0.0, 0.0, 1.0);\r\n    } else {\r\n        up = vec3f(1.0, 0.0, 0.0);\r\n    }\r\n    let tangent: vec3f   = normalize(cross(up, N));\r\n    let bitangent: vec3f = cross(N, tangent);\r\n\r\n    let sampleVec: vec3f = tangent * H.x + bitangent * H.y + N * H.z;\r\n\r\n    return normalize(sampleVec);\r\n}\r\n\r\nfn geometrySchlickGGX(nDotV: f32, roughness: f32) -> f32 {\r\n    let r: f32 = roughness + 1.;\r\n    let k: f32 = r * r / 8.;\r\n    // float k = roughness * roughness / 2.;\r\n\r\n    let num: f32 = nDotV;\r\n    let denom: f32 = nDotV * (1. - k) + k;\r\n\r\n    return num / denom;\r\n}\r\n\r\nfn geometrySmith(normal: vec3f, viewDir: vec3f, lightDir: vec3f, roughness: f32) -> f32 {\r\n    let nDotV: f32 = max(dot(normal, viewDir), .0);\r\n    let nDotL: f32 = max(dot(normal, lightDir), .0);\r\n    let ggx2: f32  = geometrySchlickGGX(nDotV, roughness);\r\n    let ggx1: f32  = geometrySchlickGGX(nDotL, roughness);\r\n\r\n    return ggx1 * ggx2;\r\n}\r\n\r\nfn IntegrateBRDF(NdotV: f32, roughness: f32) -> vec2f {\r\n    var V: vec3f;\r\n    V.x = sqrt(1.0 - NdotV*NdotV);\r\n    V.y = 0.0;\r\n    V.z = NdotV;\r\n\r\n    var A: f32 = 0.0;\r\n    var B: f32 = 0.0;\r\n\r\n    let N: vec3f = vec3f(0.0, 0.0, 1.0);\r\n\r\n    const SAMPLE_COUNT: u32 = 1024u;\r\n    for(var i: u32 = 0u; i < SAMPLE_COUNT; i++) {\r\n        let Xi: vec2f = Hammersley(i, SAMPLE_COUNT);\r\n        let H: vec3f  = ImportanceSampleGGX(Xi, N, roughness);\r\n        let L: vec3f  = normalize(2.0 * dot(V, H) * H - V);\r\n\r\n        let NdotL: f32 = max(L.z, 0.0);\r\n        let NdotH: f32 = max(H.z, 0.0);\r\n        let VdotH: f32 = max(dot(V, H), 0.0);\r\n\r\n        if (NdotL > 0.0) {\r\n            let G: f32 = geometrySmith(N, V, L, roughness);\r\n            let G_Vis: f32 = (G * VdotH) / (NdotH * NdotV);\r\n            let Fc: f32 = pow(1.0 - VdotH, 5.0);\r\n\r\n            A += (1.0 - Fc) * G_Vis;\r\n            B += Fc * G_Vis;\r\n        }\r\n    }\r\n    A /= f32(SAMPLE_COUNT);\r\n    B /= f32(SAMPLE_COUNT);\r\n\r\n    return vec2f(A, B);\r\n}\r\n\r\n@fragment fn fs(\r\n    in: VSOut\r\n) -> @location(0) vec4f {\r\n    return vec4f(IntegrateBRDF((in.localPos.x + 1.0) * .5, (in.localPos.y + 1.0) * .5), 0., 1.);\r\n}\r\n";
//#endregion
//#region renderer/shaders/webgpu/mips.wgsl?raw
var mips_default = "struct VSOut {\r\n    @builtin(position) position: vec4f,\r\n    @location(0) texCoord: vec2f,\r\n};\r\n\r\n@vertex fn vs(\r\n    @location(0) position: vec2f\r\n) -> VSOut {\r\n    var vsOutput: VSOut;\r\n    vsOutput.position = vec4f(position * 2.0 - 1.0, 0.0, 1.0);\r\n    vsOutput.texCoord = vec2f(position.x, 1.0 - position.y);\r\n    return vsOutput;\r\n}\r\n\r\n@group(0) @binding(0) var textureSampler: sampler;\r\n@group(0) @binding(1) var textureView: texture_2d<f32>;\r\n\r\n@fragment fn fs(\r\n    fsInput: VSOut\r\n) -> @location(0) vec4f {\r\n    return textureSample(textureView, textureSampler, fsInput.texCoord);\r\n}";
//#endregion
//#region renderer/generateMips.ts
var sampler;
var module$1;
var buffer;
var pipelineByFormat = /* @__PURE__ */ new WeakMap();
function generateMips(device, texture) {
	if (!buffer) {
		buffer = device.createBuffer({
			label: "mips vertex buffer",
			size: 48,
			usage: GPUBufferUsage.VERTEX,
			mappedAtCreation: true
		});
		new Float32Array(buffer.getMappedRange(0, buffer.size)).set([
			0,
			0,
			1,
			0,
			0,
			1,
			0,
			1,
			1,
			0,
			1,
			1
		]);
		buffer.unmap();
		module$1 = device.createShaderModule({
			label: "mips shader module",
			code: mips_default
		});
		sampler = device.createSampler({
			label: "mips sampler",
			minFilter: "linear"
		});
	}
	if (!pipelineByFormat[texture.format]) pipelineByFormat[texture.format] = device.createRenderPipeline({
		label: "mips pipeline",
		layout: "auto",
		vertex: {
			module: module$1,
			buffers: [{
				arrayStride: 8,
				attributes: [{
					shaderLocation: 0,
					offset: 0,
					format: "float32x2"
				}]
			}]
		},
		fragment: {
			module: module$1,
			targets: [{ format: texture.format }]
		}
	});
	const pipeline = pipelineByFormat[texture.format];
	const encoder = device.createCommandEncoder({ label: "mips encoder" });
	for (let i = 1; i < texture.mipLevelCount; ++i) for (let j = 0; j < texture.depthOrArrayLayers; ++j) {
		const bindGroup = device.createBindGroup({
			layout: pipeline.getBindGroupLayout(0),
			entries: [{
				binding: 0,
				resource: sampler
			}, {
				binding: 1,
				resource: texture.createView({
					dimension: "2d",
					baseMipLevel: i - 1,
					mipLevelCount: 1,
					baseArrayLayer: j,
					arrayLayerCount: 1
				})
			}]
		});
		const renderPassDescriptor = {
			label: "mips render pass",
			colorAttachments: [{
				view: texture.createView({
					dimension: "2d",
					baseMipLevel: i,
					mipLevelCount: 1,
					baseArrayLayer: j,
					arrayLayerCount: 1
				}),
				loadOp: "clear",
				storeOp: "store"
			}]
		};
		const pass = encoder.beginRenderPass(renderPassDescriptor);
		pass.setPipeline(pipeline);
		pass.setVertexBuffer(0, buffer);
		pass.setBindGroup(0, bindGroup);
		pass.draw(6);
		pass.end();
	}
	const commandBuffer = encoder.finish();
	device.queue.submit([commandBuffer]);
}
//#endregion
//#region renderer/modelRenderer.ts
var MAX_NODES = 254;
var ENV_MAP_SIZE = 2048;
var ENV_CONVOLUTE_DIFFUSE_SIZE = 32;
var ENV_PREFILTER_SIZE = 128;
var MAX_ENV_MIP_LEVELS = 8;
var BRDF_LUT_SIZE = 512;
var MULTISAMPLE = 4;
var FILTER_MODES_WITH_DEPTH_WRITE = new Set([0, 1]);
var vertexShaderHardwareSkinning = /* @__PURE__ */ sdHardwareSkinning_vs_default.replace(/\$\{MAX_NODES}/g, String(MAX_NODES));
var vertexShaderHDHardwareSkinningOld = /* @__PURE__ */ hdHardwareSkinningOld_vs_default.replace(/\$\{MAX_NODES}/g, String(MAX_NODES));
var vertexShaderHDHardwareSkinningNew = /* @__PURE__ */ hdHardwareSkinningNew_vs_default.replace(/\$\{MAX_NODES}/g, String(MAX_NODES));
var fragmentShaderHDNew = /* @__PURE__ */ hdNew_fs_default.replace(/\$\{MAX_ENV_MIP_LEVELS}/g, String(MAX_ENV_MIP_LEVELS.toFixed(1)));
var sdShader = /* @__PURE__ */ sd_default.replace(/\$\{MAX_NODES}/g, String(MAX_NODES));
var hdShader = /* @__PURE__ */ hd_default.replace(/\$\{MAX_NODES}/g, String(MAX_NODES)).replace(/\$\{MAX_ENV_MIP_LEVELS}/g, String(MAX_ENV_MIP_LEVELS.toFixed(1)));
var depthShader = /* @__PURE__ */ depth_default.replace(/\$\{MAX_NODES}/g, String(MAX_NODES));
var translation = create$2();
var rotation = create();
var scaling = create$2();
var defaultTranslation = fromValues$2(0, 0, 0);
var defaultRotation = fromValues(0, 0, 0, 1);
var defaultScaling = fromValues$2(1, 1, 1);
var tempParentRotationQuat = create();
var tempParentRotationMat = create$3();
var tempCameraMat = create$3();
var tempTransformedPivotPoint = create$2();
var tempAxis = create$2();
var tempLockQuat = create();
var tempLockMat = create$3();
var tempXAxis = create$2();
var tempCameraVec = create$2();
var tempCross0 = create$2();
var tempCross1 = create$2();
var tempPos = create$2();
var tempSum = create$2();
var tempVec3 = create$2();
var identifyMat3 = create$4();
var texCoordMat4 = create$3();
var texCoordMat3 = create$4();
function writePaddedMat3(out, value) {
	out[0] = value[0];
	out[1] = value[1];
	out[2] = value[2];
	out[4] = value[3];
	out[5] = value[4];
	out[6] = value[5];
	out[8] = value[6];
	out[9] = value[7];
	out[10] = value[8];
}
var GPU_LAYER_PROPS = [
	[
		"none",
		{
			color: {
				operation: "add",
				srcFactor: "one",
				dstFactor: "zero"
			},
			alpha: {
				operation: "add",
				srcFactor: "one",
				dstFactor: "zero"
			}
		},
		{
			depthWriteEnabled: true,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	],
	[
		"transparent",
		{
			color: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one-minus-src-alpha"
			},
			alpha: {
				operation: "add",
				srcFactor: "one",
				dstFactor: "one-minus-src-alpha"
			}
		},
		{
			depthWriteEnabled: true,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	],
	[
		"blend",
		{
			color: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one-minus-src-alpha"
			},
			alpha: {
				operation: "add",
				srcFactor: "one",
				dstFactor: "one-minus-src-alpha"
			}
		},
		{
			depthWriteEnabled: false,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	],
	[
		"additive",
		{
			color: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one"
			},
			alpha: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one"
			}
		},
		{
			depthWriteEnabled: false,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	],
	[
		"addAlpha",
		{
			color: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one"
			},
			alpha: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one"
			}
		},
		{
			depthWriteEnabled: false,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	],
	[
		"modulate",
		{
			color: {
				operation: "add",
				srcFactor: "zero",
				dstFactor: "src"
			},
			alpha: {
				operation: "add",
				srcFactor: "zero",
				dstFactor: "one"
			}
		},
		{
			depthWriteEnabled: false,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	],
	[
		"modulate2x",
		{
			color: {
				operation: "add",
				srcFactor: "dst",
				dstFactor: "src"
			},
			alpha: {
				operation: "add",
				srcFactor: "zero",
				dstFactor: "one"
			}
		},
		{
			depthWriteEnabled: false,
			depthCompare: "less-equal",
			format: "depth24plus"
		}
	]
];
var ModelRenderer = class {
	constructor(model) {
		this.gpuPipelines = {};
		this.clearColor = {
			r: .15,
			g: .15,
			b: .15,
			a: 1
		};
		this.vertexBuffer = [];
		this.normalBuffer = [];
		this.vertices = [];
		this.texCoordBuffer = [];
		this.indexBuffer = [];
		this.wireframeIndexBuffer = [];
		this.wireframeIndexGPUBuffer = [];
		this.groupBuffer = [];
		this.skinWeightBuffer = [];
		this.tangentBuffer = [];
		this.envFSBindGroupCache = {};
		this.envVSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
		this.envVSUniformsViews = {
			mvMatrix: new Float32Array(this.envVSUniformsValues, 0, 16),
			pMatrix: new Float32Array(this.envVSUniformsValues, 64, 16)
		};
		this.gpuVertexBuffer = [];
		this.gpuNormalBuffer = [];
		this.gpuTexCoordBuffer = [];
		this.gpuGroupBuffer = [];
		this.gpuIndexBuffer = [];
		this.gpuSkinWeightBuffer = [];
		this.gpuTangentBuffer = [];
		this.gpuFSUniformsBuffers = [];
		this.gpuSDBindGroupCache = [];
		this.gpuHDBindGroupCache = [];
		this.gpuVSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128 + 64 * MAX_NODES);
		this.gpuVSUniformsViews = {
			mvMatrix: new Float32Array(this.gpuVSUniformsValues, 0, 16),
			pMatrix: new Float32Array(this.gpuVSUniformsValues, 64, 16),
			nodesMatrices: new Float32Array(this.gpuVSUniformsValues, 128, 16 * MAX_NODES)
		};
		this.gpuSDFSUniformsValues = /* @__PURE__ */ new ArrayBuffer(80);
		this.gpuSDFSUniformsViews = {
			replaceableColor: new Float32Array(this.gpuSDFSUniformsValues, 0, 3),
			replaceableType: new Uint32Array(this.gpuSDFSUniformsValues, 12, 1),
			discardAlphaLevel: new Float32Array(this.gpuSDFSUniformsValues, 16, 1),
			wireframe: new Uint32Array(this.gpuSDFSUniformsValues, 20, 1),
			alpha: new Float32Array(this.gpuSDFSUniformsValues, 24, 1),
			tVertexAnim: new Float32Array(this.gpuSDFSUniformsValues, 32, 12)
		};
		this.gpuHDFSUniformsValues = /* @__PURE__ */ new ArrayBuffer(192);
		this.gpuHDFSUniformsViews = {
			replaceableColor: new Float32Array(this.gpuHDFSUniformsValues, 0, 3),
			discardAlphaLevel: new Float32Array(this.gpuHDFSUniformsValues, 12, 1),
			tVertexAnim: new Float32Array(this.gpuHDFSUniformsValues, 16, 12),
			lightPos: new Float32Array(this.gpuHDFSUniformsValues, 64, 3),
			hasEnv: new Uint32Array(this.gpuHDFSUniformsValues, 76, 1),
			lightColor: new Float32Array(this.gpuHDFSUniformsValues, 80, 3),
			wireframe: new Uint32Array(this.gpuHDFSUniformsValues, 92, 1),
			cameraPos: new Float32Array(this.gpuHDFSUniformsValues, 96, 3),
			shadowParams: new Float32Array(this.gpuHDFSUniformsValues, 112, 3),
			shadowMapLightMatrix: new Float32Array(this.gpuHDFSUniformsValues, 128, 16)
		};
		this.isHD = model.Geosets?.some((it) => it.SkinWeights?.length > 0);
		this.shaderProgramLocations = {
			vertexPositionAttribute: null,
			normalsAttribute: null,
			textureCoordAttribute: null,
			groupAttribute: null,
			skinAttribute: null,
			weightAttribute: null,
			tangentAttribute: null,
			pMatrixUniform: null,
			mvMatrixUniform: null,
			samplerUniform: null,
			normalSamplerUniform: null,
			ormSamplerUniform: null,
			replaceableColorUniform: null,
			replaceableTypeUniform: null,
			discardAlphaLevelUniform: null,
			alphaUniform: null,
			tVertexAnimUniform: null,
			wireframeUniform: null,
			nodesMatricesAttributes: null,
			lightPosUniform: null,
			lightColorUniform: null,
			cameraPosUniform: null,
			shadowParamsUniform: null,
			shadowMapSamplerUniform: null,
			shadowMapLightMatrixUniform: null,
			hasEnvUniform: null,
			irradianceMapUniform: null,
			prefilteredEnvUniform: null,
			brdfLUTUniform: null
		};
		this.skeletonShaderProgramLocations = {
			vertexPositionAttribute: null,
			colorAttribute: null,
			mvMatrixUniform: null,
			pMatrixUniform: null
		};
		this.model = model;
		this.renderGroups = buildModelRenderGroups(model, this.isHD);
		this.rendererData = {
			model,
			frame: 0,
			animation: null,
			animationInfo: null,
			globalSequencesFrames: [],
			rootNode: null,
			nodes: [],
			geosetAnims: [],
			geosetAlpha: [],
			materialLayerTextureID: [],
			materialLayerNormalTextureID: [],
			materialLayerOrmTextureID: [],
			materialLayerReflectionTextureID: [],
			teamColor: null,
			cameraPos: null,
			cameraQuat: null,
			lightPos: null,
			lightColor: null,
			shadowBias: 0,
			shadowSmoothingStep: 0,
			textures: {},
			gpuTextures: {},
			gpuSamplers: [],
			gpuDepthSampler: null,
			gpuEmptyTexture: null,
			gpuEmptyCubeTexture: null,
			gpuDepthEmptyTexture: null,
			envTextures: {},
			gpuEnvTextures: {},
			requiredEnvMaps: {},
			irradianceMap: {},
			gpuIrradianceMap: {},
			prefilteredEnvMap: {},
			gpuPrefilteredEnvMap: {}
		};
		this.rendererData.teamColor = fromValues$2(1, 0, 0);
		this.rendererData.cameraPos = create$2();
		this.rendererData.cameraQuat = create();
		this.rendererData.lightPos = fromValues$2(1e3, 1e3, 1e3);
		this.rendererData.lightColor = fromValues$2(1, 1, 1);
		this.setSequence(0);
		this.rendererData.rootNode = {
			node: {},
			matrix: create$3(),
			childs: []
		};
		for (const node of model.Nodes) if (node) this.rendererData.nodes[node.ObjectId] = {
			node,
			matrix: create$3(),
			childs: []
		};
		for (const node of model.Nodes) if (node) if (!node.Parent && node.Parent !== 0) this.rendererData.rootNode.childs.push(this.rendererData.nodes[node.ObjectId]);
		else this.rendererData.nodes[node.Parent].childs.push(this.rendererData.nodes[node.ObjectId]);
		if (model.GlobalSequences) for (let i = 0; i < model.GlobalSequences.length; ++i) this.rendererData.globalSequencesFrames[i] = 0;
		for (let i = 0; i < model.GeosetAnims.length; ++i) this.rendererData.geosetAnims[model.GeosetAnims[i].GeosetId] = model.GeosetAnims[i];
		for (let i = 0; i < model.Materials.length; ++i) {
			this.rendererData.materialLayerTextureID[i] = new Array(model.Materials[i].Layers.length);
			this.rendererData.materialLayerNormalTextureID[i] = new Array(model.Materials[i].Layers.length);
			this.rendererData.materialLayerOrmTextureID[i] = new Array(model.Materials[i].Layers.length);
			this.rendererData.materialLayerReflectionTextureID[i] = new Array(model.Materials[i].Layers.length);
		}
		this.interp = new ModelInterp(this.rendererData);
		this.particlesController = new ParticlesController(this.interp, this.rendererData);
		this.ribbonsController = new RibbonsController(this.interp, this.rendererData);
	}
	destroy() {
		if (this.particlesController) {
			this.particlesController.destroy();
			this.particlesController = null;
		}
		if (this.ribbonsController) {
			this.ribbonsController.destroy();
			this.ribbonsController = null;
		}
		if (this.device) {
			for (const buffer of this.wireframeIndexGPUBuffer) buffer?.destroy();
			this.gpuMultisampleTexture?.destroy();
			this.gpuDepthTexture?.destroy();
			for (const buffer of this.gpuVertexBuffer) buffer?.destroy();
			for (const buffer of this.gpuNormalBuffer) buffer?.destroy();
			for (const buffer of this.gpuTexCoordBuffer) buffer?.destroy();
			for (const buffer of this.gpuGroupBuffer) buffer?.destroy();
			for (const buffer of this.gpuIndexBuffer) buffer?.destroy();
			for (const buffer of this.gpuSkinWeightBuffer) buffer?.destroy();
			for (const buffer of this.gpuTangentBuffer) buffer?.destroy();
			this.gpuVSUniformsBuffer?.destroy();
			for (const materialID in this.gpuFSUniformsBuffers) for (const buffer of this.gpuFSUniformsBuffers[materialID]) buffer?.destroy();
			if (this.skeletonGPUVertexBuffer) {
				this.skeletonGPUVertexBuffer.destroy();
				this.skeletonGPUVertexBuffer = null;
			}
			if (this.skeletonGPUColorBuffer) {
				this.skeletonGPUColorBuffer.destroy();
				this.skeletonGPUColorBuffer = null;
			}
			if (this.skeletonGPUUniformsBuffer) {
				this.skeletonGPUUniformsBuffer.destroy();
				this.skeletonGPUUniformsBuffer = null;
			}
			if (this.envVSUniformsBuffer) {
				this.envVSUniformsBuffer.destroy();
				this.envVSUniformsBuffer = null;
			}
			if (this.cubeGPUVertexBuffer) {
				this.cubeGPUVertexBuffer.destroy();
				this.cubeGPUVertexBuffer = null;
			}
			new Set([
				...Object.values(this.rendererData.gpuTextures),
				...Object.values(this.rendererData.gpuEnvTextures),
				...Object.values(this.rendererData.gpuIrradianceMap),
				...Object.values(this.rendererData.gpuPrefilteredEnvMap),
				this.rendererData.gpuEmptyTexture,
				this.rendererData.gpuEmptyCubeTexture,
				this.rendererData.gpuDepthEmptyTexture,
				this.gpuBrdfLUT
			]).forEach((texture) => texture?.destroy());
		}
		if (this.gl) {
			if (this.skeletonShaderProgram) {
				if (this.skeletonVertexShader) {
					this.gl.detachShader(this.skeletonShaderProgram, this.skeletonVertexShader);
					this.gl.deleteShader(this.skeletonVertexShader);
					this.skeletonVertexShader = null;
				}
				if (this.skeletonFragmentShader) {
					this.gl.detachShader(this.skeletonShaderProgram, this.skeletonFragmentShader);
					this.gl.deleteShader(this.skeletonFragmentShader);
					this.skeletonFragmentShader = null;
				}
				this.gl.deleteProgram(this.skeletonShaderProgram);
				this.skeletonShaderProgram = null;
			}
			if (this.shaderProgram) {
				if (this.vertexShader) {
					this.gl.detachShader(this.shaderProgram, this.vertexShader);
					this.gl.deleteShader(this.vertexShader);
					this.vertexShader = null;
				}
				if (this.fragmentShader) {
					this.gl.detachShader(this.shaderProgram, this.fragmentShader);
					this.gl.deleteShader(this.fragmentShader);
					this.fragmentShader = null;
				}
				this.gl.deleteProgram(this.shaderProgram);
				this.shaderProgram = null;
			}
			this.destroyShaderProgramObject(this.envToCubemap);
			this.destroyShaderProgramObject(this.envSphere);
			this.destroyShaderProgramObject(this.convoluteDiffuseEnv);
			this.destroyShaderProgramObject(this.prefilterEnv);
			this.destroyShaderProgramObject(this.integrateBRDF);
			new Set([
				...this.vertexBuffer,
				...this.normalBuffer,
				...this.texCoordBuffer,
				...this.indexBuffer,
				...this.wireframeIndexBuffer,
				...this.groupBuffer,
				...this.skinWeightBuffer,
				...this.tangentBuffer,
				this.skeletonVertexBuffer,
				this.skeletonColorBuffer,
				this.cubeVertexBuffer,
				this.squareVertexBuffer
			]).forEach((buffer) => {
				if (buffer) this.gl.deleteBuffer(buffer);
			});
			new Set([
				...Object.values(this.rendererData.textures),
				...Object.values(this.rendererData.envTextures),
				...Object.values(this.rendererData.irradianceMap),
				...Object.values(this.rendererData.prefilteredEnvMap),
				this.brdfLUT
			]).forEach((texture) => {
				if (texture) this.gl.deleteTexture(texture);
			});
		}
	}
	initRequiredEnvMaps() {
		if (this.model.Version >= 1e3 && (isWebGL2(this.gl) || this.device)) this.model.Materials.forEach((material) => {
			let layer;
			if (material.Shader === "Shader_HD_DefaultUnit" && material.Layers.length === 6 && typeof material.Layers[5].TextureID === "number" || this.model.Version >= 1100 && (layer = material.Layers.find((it) => it.ShaderTypeId === 1 && it.ReflectionsTextureID)) && typeof layer.ReflectionsTextureID === "number") {
				const id = this.model.Version >= 1100 && layer ? layer.ReflectionsTextureID : material.Layers[5].TextureID;
				this.rendererData.requiredEnvMaps[this.model.Textures[id].Image] = true;
			}
		});
	}
	initGL(glContext) {
		this.gl = glContext;
		this.softwareSkinning = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS) < 4 * (MAX_NODES + 2);
		this.anisotropicExt = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
		this.colorBufferFloatExt = this.gl.getExtension("EXT_color_buffer_float");
		this.initRequiredEnvMaps();
		this.initShaders();
		this.initBuffers();
		this.initCube();
		this.initSquare();
		this.initBRDFLUT();
		this.particlesController.initGL(glContext);
		this.ribbonsController.initGL(glContext);
	}
	async initGPUDevice(canvas, device, context) {
		this.canvas = canvas;
		this.device = device;
		this.gpuContext = context;
		this.gpuSDBindGroupCache = [];
		this.gpuHDBindGroupCache = [];
		this.envFSBindGroupCache = {};
		this.initRequiredEnvMaps();
		this.initGPUShaders();
		this.initGPUPipeline();
		this.initGPUBuffers();
		this.initGPUUniformBuffers();
		this.initGPUMultisampleTexture();
		this.initGPUDepthTexture();
		this.initGPUEmptyTexture();
		this.initCube();
		this.initGPUBRDFLUT();
		this.particlesController.initGPUDevice(device);
		this.ribbonsController.initGPUDevice(device);
	}
	setClearColor(red, green, blue, alpha) {
		this.clearColor = {
			r: red,
			g: green,
			b: blue,
			a: alpha
		};
		this.gl?.clearColor(red, green, blue, alpha);
		const colorAttachment = this.gpuRenderPassDescriptor?.colorAttachments?.[0];
		if (colorAttachment) colorAttachment.clearValue = this.clearColor;
	}
	setTextureImage(path, img) {
		if (this.device) {
			const texture = this.rendererData.gpuTextures[path] = this.device.createTexture({
				size: [img.width, img.height],
				format: "rgba8unorm",
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
			});
			this.device.queue.copyExternalImageToTexture({ source: img }, { texture }, {
				width: img.width,
				height: img.height
			});
			generateMips(this.device, texture);
			this.processEnvMaps(path);
		} else {
			this.rendererData.textures[path] = this.gl.createTexture();
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[path]);
			this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, img);
			const flags = this.model.Textures.find((it) => it.Image === path)?.Flags || 0;
			this.setTextureParameters(flags, true);
			this.gl.generateMipmap(this.gl.TEXTURE_2D);
			this.processEnvMaps(path);
			this.gl.bindTexture(this.gl.TEXTURE_2D, null);
		}
	}
	setTextureImageData(path, imageData) {
		let count = 1;
		for (let i = 1; i < imageData.length; ++i, ++count) if (imageData[i].width !== imageData[i - 1].width / 2 || imageData[i].height !== imageData[i - 1].height / 2) break;
		if (this.device) {
			const texture = this.rendererData.gpuTextures[path] = this.device.createTexture({
				size: [imageData[0].width, imageData[0].height],
				format: "rgba8unorm",
				usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
				mipLevelCount: count
			});
			for (let i = 0; i < count; ++i) this.device.queue.writeTexture({
				texture,
				mipLevel: i
			}, imageData[i].data, { bytesPerRow: imageData[i].width * 4 }, {
				width: imageData[i].width,
				height: imageData[i].height
			});
			this.processEnvMaps(path);
		} else {
			this.rendererData.textures[path] = this.gl.createTexture();
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[path]);
			for (let i = 0; i < count; ++i) this.gl.texImage2D(this.gl.TEXTURE_2D, i, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, imageData[i]);
			const flags = this.model.Textures.find((it) => it.Image === path)?.Flags || 0;
			this.setTextureParameters(flags, false);
			this.processEnvMaps(path);
			this.gl.bindTexture(this.gl.TEXTURE_2D, null);
		}
	}
	setTextureCompressedImage(path, format, imageData, ddsInfo) {
		this.rendererData.textures[path] = this.gl.createTexture();
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[path]);
		const view = new Uint8Array(imageData);
		let count = 1;
		for (let i = 1; i < ddsInfo.images.length; ++i) {
			const image = ddsInfo.images[i];
			if (image.shape.width >= 2 && image.shape.height >= 2) count = i + 1;
		}
		if (isWebGL2(this.gl)) {
			this.gl.texStorage2D(this.gl.TEXTURE_2D, count, format, ddsInfo.images[0].shape.width, ddsInfo.images[0].shape.height);
			for (let i = 0; i < count; ++i) {
				const image = ddsInfo.images[i];
				this.gl.compressedTexSubImage2D(this.gl.TEXTURE_2D, i, 0, 0, image.shape.width, image.shape.height, format, view.subarray(image.offset, image.offset + image.length));
			}
		} else for (let i = 0; i < count; ++i) {
			const image = ddsInfo.images[i];
			this.gl.compressedTexImage2D(this.gl.TEXTURE_2D, i, format, image.shape.width, image.shape.height, 0, view.subarray(image.offset, image.offset + image.length));
		}
		const flags = this.model.Textures.find((it) => it.Image === path)?.Flags || 0;
		this.setTextureParameters(flags, isWebGL2(this.gl));
		this.processEnvMaps(path);
		this.gl.bindTexture(this.gl.TEXTURE_2D, null);
	}
	setGPUTextureCompressedImage(path, format, imageData, ddsInfo) {
		const view = new Uint8Array(imageData);
		let count = 1;
		for (let i = 1; i < ddsInfo.images.length; ++i) {
			const image = ddsInfo.images[i];
			if (image.shape.width >= 4 && image.shape.height >= 4) count = i + 1;
		}
		const texture = this.rendererData.gpuTextures[path] = this.device.createTexture({
			size: [ddsInfo.shape.width, ddsInfo.shape.height],
			format,
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
			mipLevelCount: count
		});
		for (let i = 0; i < count; ++i) {
			const image = ddsInfo.images[i];
			this.device.queue.writeTexture({
				texture,
				mipLevel: i
			}, view.subarray(image.offset, image.offset + image.length), { bytesPerRow: getBlockCompressedBytesPerRow(format, image.shape.width) }, {
				width: image.shape.width,
				height: image.shape.height
			});
		}
		this.processEnvMaps(path);
	}
	setCamera(cameraPos, cameraQuat) {
		copy$2(this.rendererData.cameraPos, cameraPos);
		copy(this.rendererData.cameraQuat, cameraQuat);
	}
	setLightPosition(lightPos) {
		copy$2(this.rendererData.lightPos, lightPos);
	}
	setLightColor(lightColor) {
		copy$2(this.rendererData.lightColor, lightColor);
	}
	setSequence(index) {
		this.rendererData.animation = index;
		this.rendererData.animationInfo = this.model.Sequences[this.rendererData.animation];
		this.rendererData.frame = this.rendererData.animationInfo.Interval[0];
	}
	getSequence() {
		return this.rendererData.animation;
	}
	setFrame(frame) {
		if (this.rendererData.animationInfo && this.rendererData.animationInfo.Interval[0] <= frame && this.rendererData.animationInfo.Interval[1] >= frame) {
			this.rendererData.frame = frame;
			return;
		}
		const index = this.model.Sequences.findIndex((it) => it.Interval[0] <= frame && it.Interval[1] >= frame);
		if (index < 0) return;
		this.rendererData.animation = index;
		this.rendererData.animationInfo = this.model.Sequences[this.rendererData.animation];
		this.rendererData.frame = frame;
	}
	getFrame() {
		return this.rendererData.frame;
	}
	setTeamColor(color) {
		copy$2(this.rendererData.teamColor, color);
	}
	update(delta) {
		this.rendererData.frame += delta;
		if (this.rendererData.frame > this.rendererData.animationInfo.Interval[1]) this.rendererData.frame = this.rendererData.animationInfo.Interval[0];
		this.updateGlobalSequences(delta);
		this.updateNode(this.rendererData.rootNode);
		this.particlesController.update(delta);
		this.ribbonsController.update(delta);
		for (let i = 0; i < this.model.Geosets.length; ++i) this.rendererData.geosetAlpha[i] = this.findAlpha(i);
		for (let materialId = 0; materialId < this.rendererData.materialLayerTextureID.length; ++materialId) for (let layerId = 0; layerId < this.rendererData.materialLayerTextureID[materialId].length; ++layerId) {
			const layer = this.model.Materials[materialId].Layers[layerId];
			const TextureID = layer.TextureID;
			const NormalTextureID = layer.NormalTextureID;
			const ORMTextureID = layer.ORMTextureID;
			const ReflectionsTextureID = layer.ReflectionsTextureID;
			if (typeof TextureID === "number") this.rendererData.materialLayerTextureID[materialId][layerId] = TextureID;
			else this.rendererData.materialLayerTextureID[materialId][layerId] = this.interp.num(TextureID);
			if (typeof NormalTextureID !== "undefined") this.rendererData.materialLayerNormalTextureID[materialId][layerId] = typeof NormalTextureID === "number" ? NormalTextureID : this.interp.num(NormalTextureID);
			if (typeof ORMTextureID !== "undefined") this.rendererData.materialLayerOrmTextureID[materialId][layerId] = typeof ORMTextureID === "number" ? ORMTextureID : this.interp.num(ORMTextureID);
			if (typeof ReflectionsTextureID !== "undefined") this.rendererData.materialLayerReflectionTextureID[materialId][layerId] = typeof ReflectionsTextureID === "number" ? ReflectionsTextureID : this.interp.num(ReflectionsTextureID);
		}
	}
	render(mvMatrix, pMatrix, { wireframe, env, levelOfDetail = 0, useEnvironmentMap = false, shadowMapTexture, shadowMapMatrix, shadowBias, shadowSmoothingStep, depthTextureTarget }) {
		if (depthTextureTarget && !this.isHD) return;
		if (this.device) {
			if (this.gpuMultisampleTexture.width !== this.canvas.width || this.gpuMultisampleTexture.height !== this.canvas.height) {
				this.gpuMultisampleTexture.destroy();
				this.initGPUMultisampleTexture();
			}
			if (this.gpuDepthTexture.width !== this.canvas.width || this.gpuDepthTexture.height !== this.canvas.height) {
				this.gpuDepthTexture.destroy();
				this.initGPUDepthTexture();
			}
			let renderPassDescriptor;
			if (depthTextureTarget) renderPassDescriptor = {
				label: "shadow renderPass",
				colorAttachments: [],
				depthStencilAttachment: {
					view: depthTextureTarget.createView(),
					depthClearValue: 1,
					depthLoadOp: "clear",
					depthStoreOp: "store"
				}
			};
			else {
				renderPassDescriptor = this.gpuRenderPassDescriptor;
				if (MULTISAMPLE > 1) {
					this.gpuRenderPassDescriptor.colorAttachments[0].view = this.gpuMultisampleTexture.createView();
					this.gpuRenderPassDescriptor.colorAttachments[0].resolveTarget = this.gpuContext.getCurrentTexture().createView();
				} else this.gpuRenderPassDescriptor.colorAttachments[0].view = this.gpuContext.getCurrentTexture().createView();
				this.gpuRenderPassDescriptor.depthStencilAttachment = {
					view: this.gpuDepthTexture.createView(),
					depthClearValue: 1,
					depthLoadOp: "clear",
					depthStoreOp: "store"
				};
			}
			const encoder = this.device.createCommandEncoder();
			const pass = encoder.beginRenderPass(renderPassDescriptor);
			if (env) this.renderEnvironmentGPU(pass, mvMatrix, pMatrix);
			const VSUniformsViews = this.gpuVSUniformsViews;
			VSUniformsViews.mvMatrix.set(mvMatrix);
			VSUniformsViews.pMatrix.set(pMatrix);
			for (let j = 0; j < MAX_NODES; ++j) if (this.rendererData.nodes[j]) VSUniformsViews.nodesMatrices.set(this.rendererData.nodes[j].matrix, j * 16);
			this.device.queue.writeBuffer(this.gpuVSUniformsBuffer, 0, this.gpuVSUniformsValues);
			for (const group of this.renderGroups) {
				if (group.kind === "particle") {
					if (!depthTextureTarget) this.particlesController.renderGPU(pass, mvMatrix, pMatrix, group.indices);
					continue;
				}
				if (group.kind === "ribbon") {
					if (!depthTextureTarget) this.ribbonsController.renderGPU(pass, mvMatrix, pMatrix, group.indices);
					continue;
				}
				for (let groupIndex = 0; groupIndex < group.indices.length; ++groupIndex) {
					const i = group.indices[groupIndex];
					const scheduledLayerIndex = group.layerIndices?.[groupIndex] ?? -1;
					const geoset = this.model.Geosets[i];
					if (this.rendererData.geosetAlpha[i] < 1e-6) continue;
					if (geoset.LevelOfDetail !== void 0 && geoset.LevelOfDetail !== levelOfDetail) continue;
					if (wireframe && !this.wireframeIndexGPUBuffer[i]) this.createWireframeGPUBuffer(i);
					const materialID = geoset.MaterialID;
					const material = this.model.Materials[materialID];
					pass.setVertexBuffer(0, this.gpuVertexBuffer[i]);
					pass.setVertexBuffer(1, this.gpuNormalBuffer[i]);
					pass.setVertexBuffer(2, this.gpuTexCoordBuffer[i]);
					if (this.isHD) {
						pass.setVertexBuffer(3, this.gpuTangentBuffer[i]);
						pass.setVertexBuffer(4, this.gpuSkinWeightBuffer[i]);
						pass.setVertexBuffer(5, this.gpuSkinWeightBuffer[i]);
					} else pass.setVertexBuffer(3, this.gpuGroupBuffer[i]);
					pass.setIndexBuffer(wireframe ? this.wireframeIndexGPUBuffer[i] : this.gpuIndexBuffer[i], "uint16");
					if (this.isHD) {
						const baseLayer = material.Layers[0];
						if (depthTextureTarget && !FILTER_MODES_WITH_DEPTH_WRITE.has(baseLayer.FilterMode || 0)) continue;
						const pipeline = depthTextureTarget ? this.gpuShadowPipeline : wireframe ? this.gpuWireframePipeline : this.getGPUPipeline(baseLayer);
						pass.setPipeline(pipeline);
						const textures = this.rendererData.materialLayerTextureID[materialID];
						const normalTextres = this.rendererData.materialLayerNormalTextureID[materialID];
						const ormTextres = this.rendererData.materialLayerOrmTextureID[materialID];
						const envTextres = this.rendererData.materialLayerReflectionTextureID[materialID];
						const diffuseTextureID = textures[0];
						const diffuseTexture = this.model.Textures[diffuseTextureID];
						const normalTextureID = baseLayer?.ShaderTypeId === 1 ? normalTextres[0] : textures[1];
						const normalTexture = this.model.Textures[normalTextureID];
						const ormTextureID = baseLayer?.ShaderTypeId === 1 ? ormTextres[0] : textures[2];
						const ormTexture = this.model.Textures[ormTextureID];
						const envTextureID = baseLayer?.ShaderTypeId === 1 ? envTextres[0] : textures[5];
						const envTextureImage = this.model.Textures[envTextureID]?.Image;
						const irradianceMap = this.rendererData.gpuIrradianceMap[envTextureImage];
						const prefilteredEnv = this.rendererData.gpuPrefilteredEnvMap[envTextureImage];
						const hasEnv = env && irradianceMap && prefilteredEnv;
						this.gpuFSUniformsBuffers[i] ||= [];
						let gpuFSUniformsBuffer = this.gpuFSUniformsBuffers[i][0];
						if (!gpuFSUniformsBuffer) gpuFSUniformsBuffer = this.gpuFSUniformsBuffers[i][0] = this.device.createBuffer({
							label: `fs uniforms geoset ${i}`,
							size: 192,
							usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
						});
						const tVetexAnim = this.getTexCoordMatrix(baseLayer);
						const FSUniformsViews = this.gpuHDFSUniformsViews;
						FSUniformsViews.replaceableColor.set(this.rendererData.teamColor);
						FSUniformsViews.discardAlphaLevel[0] = getLayerDiscardAlphaLevel(baseLayer.FilterMode);
						writePaddedMat3(FSUniformsViews.tVertexAnim, tVetexAnim);
						FSUniformsViews.lightPos.set(this.rendererData.lightPos);
						FSUniformsViews.lightColor.set(this.rendererData.lightColor);
						FSUniformsViews.cameraPos.set(this.rendererData.cameraPos);
						if (shadowMapTexture && shadowMapMatrix) {
							FSUniformsViews.shadowParams[0] = 1;
							FSUniformsViews.shadowParams[1] = shadowBias ?? 1e-6;
							FSUniformsViews.shadowParams[2] = shadowSmoothingStep ?? 1 / 1024;
							FSUniformsViews.shadowMapLightMatrix.set(shadowMapMatrix);
						} else {
							FSUniformsViews.shadowParams.fill(0);
							FSUniformsViews.shadowMapLightMatrix.fill(0);
						}
						FSUniformsViews.hasEnv[0] = hasEnv ? 1 : 0;
						FSUniformsViews.wireframe[0] = wireframe ? 1 : 0;
						this.device.queue.writeBuffer(gpuFSUniformsBuffer, 0, this.gpuHDFSUniformsValues);
						const fsBindGroup = this.getGPUHDBindGroup(i, gpuFSUniformsBuffer, this.rendererData.gpuSamplers[diffuseTextureID], this.rendererData.gpuTextures[diffuseTexture.Image] || this.rendererData.gpuEmptyTexture, this.rendererData.gpuSamplers[normalTextureID], this.rendererData.gpuTextures[normalTexture.Image] || this.rendererData.gpuEmptyTexture, this.rendererData.gpuSamplers[ormTextureID], this.rendererData.gpuTextures[ormTexture.Image] || this.rendererData.gpuEmptyTexture, shadowMapTexture || this.rendererData.gpuDepthEmptyTexture, irradianceMap || this.rendererData.gpuEmptyCubeTexture, prefilteredEnv || this.rendererData.gpuEmptyCubeTexture);
						pass.setBindGroup(0, this.gpuVSUniformsBindGroup);
						pass.setBindGroup(1, fsBindGroup);
						pass.drawIndexed(wireframe ? geoset.Faces.length * 2 : geoset.Faces.length);
					} else {
						const layerIndices = scheduledLayerIndex < 0 ? material.Layers.map((_, index) => index) : [scheduledLayerIndex];
						for (const j of layerIndices) {
							const layer = material.Layers[j];
							const textureID = this.rendererData.materialLayerTextureID[materialID][j];
							const texture = this.model.Textures[textureID];
							const pipeline = wireframe ? this.gpuWireframePipeline : this.getGPUPipeline(layer);
							pass.setPipeline(pipeline);
							this.gpuFSUniformsBuffers[i] ||= [];
							let gpuFSUniformsBuffer = this.gpuFSUniformsBuffers[i][j];
							if (!gpuFSUniformsBuffer) gpuFSUniformsBuffer = this.gpuFSUniformsBuffers[i][j] = this.device.createBuffer({
								label: `fs uniforms geoset ${i} layer ${j}`,
								size: 80,
								usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
							});
							const tVetexAnim = this.getTexCoordMatrix(layer);
							const FSUniformsViews = this.gpuSDFSUniformsViews;
							FSUniformsViews.replaceableColor.set(this.rendererData.teamColor);
							FSUniformsViews.replaceableType[0] = texture.ReplaceableId || 0;
							FSUniformsViews.discardAlphaLevel[0] = getLayerDiscardAlphaLevel(layer.FilterMode);
							FSUniformsViews.alpha[0] = this.rendererData.geosetAlpha[i] * this.getLayerAlpha(layer);
							writePaddedMat3(FSUniformsViews.tVertexAnim, tVetexAnim);
							FSUniformsViews.wireframe[0] = wireframe ? 1 : 0;
							this.device.queue.writeBuffer(gpuFSUniformsBuffer, 0, this.gpuSDFSUniformsValues);
							const fsBindGroup = this.getGPUSDBindGroup(i, j, gpuFSUniformsBuffer, textureID, texture);
							pass.setBindGroup(0, this.gpuVSUniformsBindGroup);
							pass.setBindGroup(1, fsBindGroup);
							pass.drawIndexed(wireframe ? geoset.Faces.length * 2 : geoset.Faces.length);
						}
					}
				}
			}
			pass.end();
			const commandBuffer = encoder.finish();
			this.device.queue.submit([commandBuffer]);
			return;
		}
		if (env) this.renderEnvironment(mvMatrix, pMatrix);
		let modelStateWasBound = false;
		for (const group of this.renderGroups) {
			if (group.kind === "particle") {
				this.particlesController.render(mvMatrix, pMatrix, group.indices);
				continue;
			}
			if (group.kind === "ribbon") {
				this.ribbonsController.render(mvMatrix, pMatrix, group.indices);
				continue;
			}
			this.bindWebGLModelState(mvMatrix, pMatrix, Boolean(wireframe));
			modelStateWasBound = true;
			for (let groupIndex = 0; groupIndex < group.indices.length; ++groupIndex) {
				const i = group.indices[groupIndex];
				const scheduledLayerIndex = group.layerIndices?.[groupIndex] ?? -1;
				const geoset = this.model.Geosets[i];
				if (this.rendererData.geosetAlpha[i] < 1e-6) continue;
				if (geoset.LevelOfDetail !== void 0 && geoset.LevelOfDetail !== levelOfDetail) continue;
				if (this.softwareSkinning) this.generateGeosetVertices(i);
				const materialID = geoset.MaterialID;
				const material = this.model.Materials[materialID];
				if (this.isHD) {
					this.gl.uniform3fv(this.shaderProgramLocations.lightPosUniform, this.rendererData.lightPos);
					this.gl.uniform3fv(this.shaderProgramLocations.lightColorUniform, this.rendererData.lightColor);
					this.gl.uniform3fv(this.shaderProgramLocations.cameraPosUniform, this.rendererData.cameraPos);
					if (shadowMapTexture && shadowMapMatrix) {
						this.gl.uniform3f(this.shaderProgramLocations.shadowParamsUniform, 1, shadowBias ?? 1e-6, shadowSmoothingStep ?? 1 / 1024);
						this.gl.activeTexture(this.gl.TEXTURE3);
						this.gl.bindTexture(this.gl.TEXTURE_2D, shadowMapTexture);
						this.gl.uniform1i(this.shaderProgramLocations.shadowMapSamplerUniform, 3);
						this.gl.uniformMatrix4fv(this.shaderProgramLocations.shadowMapLightMatrixUniform, false, shadowMapMatrix);
					} else this.gl.uniform3f(this.shaderProgramLocations.shadowParamsUniform, 0, 0, 0);
					const envTextureId = this.model.Version >= 1100 && material.Layers.find((it) => it.ShaderTypeId === 1 && typeof it.ReflectionsTextureID === "number")?.ReflectionsTextureID || material.Layers[5]?.TextureID;
					const envTexture = this.model.Textures[envTextureId]?.Image;
					const irradianceMap = this.rendererData.irradianceMap[envTexture];
					const prefilteredEnv = this.rendererData.prefilteredEnvMap[envTexture];
					if (useEnvironmentMap && irradianceMap && prefilteredEnv) {
						this.gl.uniform1i(this.shaderProgramLocations.hasEnvUniform, 1);
						this.gl.activeTexture(this.gl.TEXTURE4);
						this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, irradianceMap);
						this.gl.uniform1i(this.shaderProgramLocations.irradianceMapUniform, 4);
						this.gl.activeTexture(this.gl.TEXTURE5);
						this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, prefilteredEnv);
						this.gl.uniform1i(this.shaderProgramLocations.prefilteredEnvUniform, 5);
						this.gl.activeTexture(this.gl.TEXTURE6);
						this.gl.bindTexture(this.gl.TEXTURE_2D, this.brdfLUT);
						this.gl.uniform1i(this.shaderProgramLocations.brdfLUTUniform, 6);
					} else {
						this.gl.uniform1i(this.shaderProgramLocations.hasEnvUniform, 0);
						this.gl.uniform1i(this.shaderProgramLocations.irradianceMapUniform, 4);
						this.gl.uniform1i(this.shaderProgramLocations.prefilteredEnvUniform, 5);
						this.gl.uniform1i(this.shaderProgramLocations.brdfLUTUniform, 6);
					}
					this.setLayerPropsHD(materialID, material.Layers);
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer[i]);
					this.gl.vertexAttribPointer(this.shaderProgramLocations.vertexPositionAttribute, 3, this.gl.FLOAT, false, 0, 0);
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer[i]);
					this.gl.vertexAttribPointer(this.shaderProgramLocations.normalsAttribute, 3, this.gl.FLOAT, false, 0, 0);
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer[i]);
					this.gl.vertexAttribPointer(this.shaderProgramLocations.textureCoordAttribute, 2, this.gl.FLOAT, false, 0, 0);
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.skinWeightBuffer[i]);
					this.gl.vertexAttribPointer(this.shaderProgramLocations.skinAttribute, 4, this.gl.UNSIGNED_BYTE, false, 8, 0);
					this.gl.vertexAttribPointer(this.shaderProgramLocations.weightAttribute, 4, this.gl.UNSIGNED_BYTE, true, 8, 4);
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.tangentBuffer[i]);
					this.gl.vertexAttribPointer(this.shaderProgramLocations.tangentAttribute, 4, this.gl.FLOAT, false, 0, 0);
					if (wireframe && !this.wireframeIndexBuffer[i]) this.createWireframeBuffer(i);
					this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, wireframe ? this.wireframeIndexBuffer[i] : this.indexBuffer[i]);
					this.gl.drawElements(wireframe ? this.gl.LINES : this.gl.TRIANGLES, wireframe ? geoset.Faces.length * 2 : geoset.Faces.length, this.gl.UNSIGNED_SHORT, 0);
					if (shadowMapTexture && shadowMapMatrix) {
						this.gl.activeTexture(this.gl.TEXTURE3);
						this.gl.bindTexture(this.gl.TEXTURE_2D, null);
					}
				} else {
					const layerIndices = scheduledLayerIndex < 0 ? material.Layers.map((_, index) => index) : [scheduledLayerIndex];
					for (const j of layerIndices) {
						this.setLayerProps(material.Layers[j], this.rendererData.materialLayerTextureID[materialID][j], this.rendererData.geosetAlpha[i]);
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer[i]);
						this.gl.vertexAttribPointer(this.shaderProgramLocations.vertexPositionAttribute, 3, this.gl.FLOAT, false, 0, 0);
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer[i]);
						this.gl.vertexAttribPointer(this.shaderProgramLocations.normalsAttribute, 3, this.gl.FLOAT, false, 0, 0);
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer[i]);
						this.gl.vertexAttribPointer(this.shaderProgramLocations.textureCoordAttribute, 2, this.gl.FLOAT, false, 0, 0);
						if (!this.softwareSkinning) {
							this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.groupBuffer[i]);
							this.gl.vertexAttribPointer(this.shaderProgramLocations.groupAttribute, 4, this.gl.UNSIGNED_SHORT, false, 0, 0);
						}
						if (wireframe && !this.wireframeIndexBuffer[i]) this.createWireframeBuffer(i);
						this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, wireframe ? this.wireframeIndexBuffer[i] : this.indexBuffer[i]);
						this.gl.drawElements(wireframe ? this.gl.LINES : this.gl.TRIANGLES, wireframe ? geoset.Faces.length * 2 : geoset.Faces.length, this.gl.UNSIGNED_SHORT, 0);
					}
				}
			}
		}
		if (modelStateWasBound) {
			this.gl.disableVertexAttribArray(this.shaderProgramLocations.vertexPositionAttribute);
			this.gl.disableVertexAttribArray(this.shaderProgramLocations.normalsAttribute);
			this.gl.disableVertexAttribArray(this.shaderProgramLocations.textureCoordAttribute);
			if (this.isHD) {
				this.gl.disableVertexAttribArray(this.shaderProgramLocations.skinAttribute);
				this.gl.disableVertexAttribArray(this.shaderProgramLocations.weightAttribute);
				this.gl.disableVertexAttribArray(this.shaderProgramLocations.tangentAttribute);
			} else if (!this.softwareSkinning) this.gl.disableVertexAttribArray(this.shaderProgramLocations.groupAttribute);
		}
	}
	bindWebGLModelState(mvMatrix, pMatrix, wireframe) {
		this.gl.useProgram(this.shaderProgram);
		this.gl.uniformMatrix4fv(this.shaderProgramLocations.pMatrixUniform, false, pMatrix);
		this.gl.uniformMatrix4fv(this.shaderProgramLocations.mvMatrixUniform, false, mvMatrix);
		this.gl.uniform1f(this.shaderProgramLocations.wireframeUniform, wireframe ? 1 : 0);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.vertexPositionAttribute);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.normalsAttribute);
		this.gl.enableVertexAttribArray(this.shaderProgramLocations.textureCoordAttribute);
		if (this.isHD) {
			this.gl.enableVertexAttribArray(this.shaderProgramLocations.skinAttribute);
			this.gl.enableVertexAttribArray(this.shaderProgramLocations.weightAttribute);
			this.gl.enableVertexAttribArray(this.shaderProgramLocations.tangentAttribute);
		} else if (!this.softwareSkinning) this.gl.enableVertexAttribArray(this.shaderProgramLocations.groupAttribute);
		if (!this.softwareSkinning) {
			for (let j = 0; j < MAX_NODES; ++j) if (this.rendererData.nodes[j]) this.gl.uniformMatrix4fv(this.shaderProgramLocations.nodesMatricesAttributes[j], false, this.rendererData.nodes[j].matrix);
		}
	}
	getGPUSDBindGroup(geosetIndex, layerIndex, uniformsBuffer, textureID, texture) {
		this.gpuSDBindGroupCache[geosetIndex] ||= [];
		const layerCache = this.gpuSDBindGroupCache[geosetIndex];
		const cache = layerCache[layerIndex] ||= /* @__PURE__ */ new Map();
		const sampler = this.rendererData.gpuSamplers[textureID];
		const gpuTexture = this.rendererData.gpuTextures[texture.Image] || this.rendererData.gpuEmptyTexture;
		const cached = cache.get(textureID);
		if (cached?.uniformsBuffer === uniformsBuffer && cached.texture === gpuTexture && cached.sampler === sampler) return cached.bindGroup;
		const bindGroup = this.device.createBindGroup({
			label: `fs uniforms geoset ${geosetIndex} layer ${layerIndex}`,
			layout: this.fsBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: uniformsBuffer }
				},
				{
					binding: 1,
					resource: sampler
				},
				{
					binding: 2,
					resource: gpuTexture.createView()
				}
			]
		});
		cache.set(textureID, {
			uniformsBuffer,
			texture: gpuTexture,
			sampler,
			bindGroup
		});
		return bindGroup;
	}
	getGPUHDBindGroup(geosetIndex, uniformsBuffer, diffuseSampler, diffuseTexture, normalSampler, normalTexture, ormSampler, ormTexture, shadowTexture, irradianceTexture, prefilteredTexture) {
		const cache = this.gpuHDBindGroupCache[geosetIndex] ||= [];
		for (const cached of cache) if (cached.uniformsBuffer === uniformsBuffer && cached.diffuseTexture === diffuseTexture && cached.diffuseSampler === diffuseSampler && cached.normalTexture === normalTexture && cached.normalSampler === normalSampler && cached.ormTexture === ormTexture && cached.ormSampler === ormSampler && cached.shadowTexture === shadowTexture && cached.irradianceTexture === irradianceTexture && cached.prefilteredTexture === prefilteredTexture) return cached.bindGroup;
		const bindGroup = this.device.createBindGroup({
			label: `fs uniforms geoset ${geosetIndex}`,
			layout: this.fsBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: uniformsBuffer }
				},
				{
					binding: 1,
					resource: diffuseSampler
				},
				{
					binding: 2,
					resource: diffuseTexture.createView()
				},
				{
					binding: 3,
					resource: normalSampler
				},
				{
					binding: 4,
					resource: normalTexture.createView()
				},
				{
					binding: 5,
					resource: ormSampler
				},
				{
					binding: 6,
					resource: ormTexture.createView()
				},
				{
					binding: 7,
					resource: this.rendererData.gpuDepthSampler
				},
				{
					binding: 8,
					resource: shadowTexture.createView()
				},
				{
					binding: 9,
					resource: this.prefilterEnvSampler
				},
				{
					binding: 10,
					resource: irradianceTexture.createView({ dimension: "cube" })
				},
				{
					binding: 11,
					resource: this.prefilterEnvSampler
				},
				{
					binding: 12,
					resource: prefilteredTexture.createView({ dimension: "cube" })
				},
				{
					binding: 13,
					resource: this.gpuBrdfSampler
				},
				{
					binding: 14,
					resource: this.gpuBrdfLUT.createView()
				}
			]
		});
		cache.push({
			uniformsBuffer,
			diffuseTexture,
			diffuseSampler,
			normalTexture,
			normalSampler,
			ormTexture,
			ormSampler,
			shadowTexture,
			irradianceTexture,
			prefilteredTexture,
			bindGroup
		});
		return bindGroup;
	}
	renderEnvironmentGPU(pass, mvMatrix, pMatrix) {
		pass.setPipeline(this.envPiepeline);
		const VSUniformsViews = this.envVSUniformsViews;
		VSUniformsViews.mvMatrix.set(mvMatrix);
		VSUniformsViews.pMatrix.set(pMatrix);
		this.device.queue.writeBuffer(this.envVSUniformsBuffer, 0, this.envVSUniformsValues);
		pass.setBindGroup(0, this.envVSBindGroup);
		for (const path in this.rendererData.gpuEnvTextures) {
			const texture = this.rendererData.gpuEnvTextures[path];
			let cached = this.envFSBindGroupCache[path];
			if (!cached || cached.texture !== texture) cached = this.envFSBindGroupCache[path] = {
				texture,
				bindGroup: this.device.createBindGroup({
					label: `env fs uniforms ${path}`,
					layout: this.envFSBindGroupLayout,
					entries: [{
						binding: 0,
						resource: this.envSampler
					}, {
						binding: 1,
						resource: texture.createView({ dimension: "cube" })
					}]
				})
			};
			pass.setBindGroup(1, cached.bindGroup);
			pass.setPipeline(this.envPiepeline);
			pass.setVertexBuffer(0, this.cubeGPUVertexBuffer);
			pass.draw(36);
		}
	}
	renderEnvironment(mvMatrix, pMatrix) {
		if (!isWebGL2(this.gl)) return;
		this.gl.disable(this.gl.BLEND);
		this.gl.disable(this.gl.DEPTH_TEST);
		this.gl.disable(this.gl.CULL_FACE);
		for (const path in this.rendererData.envTextures) {
			this.gl.useProgram(this.envSphere.program);
			this.gl.uniformMatrix4fv(this.envSphere.uniforms.uPMatrix, false, pMatrix);
			this.gl.uniformMatrix4fv(this.envSphere.uniforms.uMVMatrix, false, mvMatrix);
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.rendererData.envTextures[path]);
			this.gl.uniform1i(this.envSphere.uniforms.uEnvironmentMap, 0);
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexBuffer);
			this.gl.enableVertexAttribArray(this.envSphere.attributes.aPos);
			this.gl.vertexAttribPointer(this.envSphere.attributes.aPos, 3, this.gl.FLOAT, false, 0, 0);
			this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
			this.gl.disableVertexAttribArray(this.envSphere.attributes.aPos);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);
		}
	}
	/**
	* @param mvMatrix
	* @param pMatrix
	* @param nodes Nodes to highlight. null means draw all
	*/
	renderSkeleton(mvMatrix, pMatrix, nodes) {
		const coords = [];
		const colors = [];
		const line = (node0, node1) => {
			transformMat4(tempPos, node0.node.PivotPoint, node0.matrix);
			coords.push(tempPos[0], tempPos[1], tempPos[2]);
			transformMat4(tempPos, node1.node.PivotPoint, node1.matrix);
			coords.push(tempPos[0], tempPos[1], tempPos[2]);
			colors.push(0, 1, 0, 0, 0, 1);
		};
		const updateNode = (node) => {
			if ((node.node.Parent || node.node.Parent === 0) && (!nodes || nodes.includes(node.node.Name))) line(node, this.rendererData.nodes[node.node.Parent]);
			for (const child of node.childs) updateNode(child);
		};
		updateNode(this.rendererData.rootNode);
		if (!coords.length) return;
		const vertexBuffer = new Float32Array(coords);
		const colorBuffer = new Float32Array(colors);
		if (this.device) {
			if (!this.skeletonShaderModule) this.skeletonShaderModule = this.device.createShaderModule({
				label: "skeleton",
				code: skeleton_default
			});
			if (!this.skeletonBindGroupLayout) this.skeletonBindGroupLayout = this.device.createBindGroupLayout({
				label: "skeleton bind group layout",
				entries: [{
					binding: 0,
					visibility: GPUShaderStage.VERTEX,
					buffer: {
						type: "uniform",
						hasDynamicOffset: false,
						minBindingSize: 128
					}
				}]
			});
			if (!this.skeletonPipelineLayout) this.skeletonPipelineLayout = this.device.createPipelineLayout({
				label: "skeleton pipeline layout",
				bindGroupLayouts: [this.skeletonBindGroupLayout]
			});
			if (!this.skeletonPipeline) this.skeletonPipeline = this.device.createRenderPipeline({
				label: "skeleton pipeline",
				layout: this.skeletonPipelineLayout,
				vertex: {
					module: this.skeletonShaderModule,
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}, {
						arrayStride: 12,
						attributes: [{
							shaderLocation: 1,
							offset: 0,
							format: "float32x3"
						}]
					}]
				},
				fragment: {
					module: this.skeletonShaderModule,
					targets: [{
						format: navigator.gpu.getPreferredCanvasFormat(),
						blend: {
							color: {
								operation: "add",
								srcFactor: "src-alpha",
								dstFactor: "one-minus-src-alpha"
							},
							alpha: {
								operation: "add",
								srcFactor: "one",
								dstFactor: "one-minus-src-alpha"
							}
						}
					}]
				},
				primitive: { topology: "line-list" }
			});
			this.skeletonGPUVertexBuffer?.destroy();
			this.skeletonGPUColorBuffer?.destroy();
			this.skeletonGPUUniformsBuffer?.destroy();
			const vertex = this.skeletonGPUVertexBuffer = this.device.createBuffer({
				label: "skeleton vertex",
				size: vertexBuffer.byteLength,
				usage: GPUBufferUsage.VERTEX,
				mappedAtCreation: true
			});
			new Float32Array(vertex.getMappedRange(0, vertex.size)).set(vertexBuffer);
			vertex.unmap();
			const color = this.skeletonGPUColorBuffer = this.device.createBuffer({
				label: "skeleton color",
				size: colorBuffer.byteLength,
				usage: GPUBufferUsage.VERTEX,
				mappedAtCreation: true
			});
			new Float32Array(color.getMappedRange(0, color.size)).set(colorBuffer);
			color.unmap();
			const uniformsBuffer = this.skeletonGPUUniformsBuffer = this.device.createBuffer({
				label: "skeleton vs uniforms",
				size: 128,
				usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
			});
			const uniformsBindGroup = this.device.createBindGroup({
				label: "skeleton uniforms bind group",
				layout: this.skeletonBindGroupLayout,
				entries: [{
					binding: 0,
					resource: { buffer: uniformsBuffer }
				}]
			});
			const renderPassDescriptor = {
				label: "skeleton renderPass",
				colorAttachments: [{
					view: this.gpuContext.getCurrentTexture().createView(),
					clearValue: this.clearColor,
					loadOp: "load",
					storeOp: "store"
				}]
			};
			const encoder = this.device.createCommandEncoder();
			const pass = encoder.beginRenderPass(renderPassDescriptor);
			const VSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
			const VSUniformsViews = {
				mvMatrix: new Float32Array(VSUniformsValues, 0, 16),
				pMatrix: new Float32Array(VSUniformsValues, 64, 16)
			};
			VSUniformsViews.mvMatrix.set(mvMatrix);
			VSUniformsViews.pMatrix.set(pMatrix);
			this.device.queue.writeBuffer(uniformsBuffer, 0, VSUniformsValues);
			pass.setVertexBuffer(0, vertex);
			pass.setVertexBuffer(1, color);
			pass.setPipeline(this.skeletonPipeline);
			pass.setBindGroup(0, uniformsBindGroup);
			pass.draw(vertexBuffer.length / 3);
			pass.end();
			const commandBuffer = encoder.finish();
			this.device.queue.submit([commandBuffer]);
			return;
		}
		if (!this.skeletonShaderProgram) this.skeletonShaderProgram = this.initSkeletonShaderProgram();
		this.gl.disable(this.gl.BLEND);
		this.gl.disable(this.gl.DEPTH_TEST);
		this.gl.useProgram(this.skeletonShaderProgram);
		this.gl.uniformMatrix4fv(this.skeletonShaderProgramLocations.pMatrixUniform, false, pMatrix);
		this.gl.uniformMatrix4fv(this.skeletonShaderProgramLocations.mvMatrixUniform, false, mvMatrix);
		this.gl.enableVertexAttribArray(this.skeletonShaderProgramLocations.vertexPositionAttribute);
		this.gl.enableVertexAttribArray(this.skeletonShaderProgramLocations.colorAttribute);
		if (!this.skeletonVertexBuffer) this.skeletonVertexBuffer = this.gl.createBuffer();
		if (!this.skeletonColorBuffer) this.skeletonColorBuffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.skeletonVertexBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexBuffer, this.gl.DYNAMIC_DRAW);
		this.gl.vertexAttribPointer(this.skeletonShaderProgramLocations.vertexPositionAttribute, 3, this.gl.FLOAT, false, 0, 0);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.skeletonColorBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, colorBuffer, this.gl.DYNAMIC_DRAW);
		this.gl.vertexAttribPointer(this.skeletonShaderProgramLocations.colorAttribute, 3, this.gl.FLOAT, false, 0, 0);
		this.gl.drawArrays(this.gl.LINES, 0, vertexBuffer.length / 3);
		this.gl.disableVertexAttribArray(this.skeletonShaderProgramLocations.vertexPositionAttribute);
		this.gl.disableVertexAttribArray(this.skeletonShaderProgramLocations.colorAttribute);
	}
	initSkeletonShaderProgram() {
		const vertex = this.skeletonVertexShader = getShader(this.gl, skeleton_vs_default, this.gl.VERTEX_SHADER);
		const fragment = this.skeletonFragmentShader = getShader(this.gl, skeleton_fs_default, this.gl.FRAGMENT_SHADER);
		const shaderProgram = this.gl.createProgram();
		this.gl.attachShader(shaderProgram, vertex);
		this.gl.attachShader(shaderProgram, fragment);
		this.gl.linkProgram(shaderProgram);
		if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) alert("Could not initialise shaders");
		this.gl.useProgram(shaderProgram);
		this.skeletonShaderProgramLocations.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
		this.skeletonShaderProgramLocations.colorAttribute = this.gl.getAttribLocation(shaderProgram, "aColor");
		this.skeletonShaderProgramLocations.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
		this.skeletonShaderProgramLocations.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");
		return shaderProgram;
	}
	generateGeosetVertices(geosetIndex) {
		const geoset = this.model.Geosets[geosetIndex];
		const buffer = this.vertices[geosetIndex];
		for (let i = 0; i < buffer.length; i += 3) {
			const index = i / 3;
			const group = geoset.Groups[geoset.VertexGroup[index]];
			set$2(tempPos, geoset.Vertices[i], geoset.Vertices[i + 1], geoset.Vertices[i + 2]);
			set$2(tempSum, 0, 0, 0);
			for (let j = 0; j < group.length; ++j) add$2(tempSum, tempSum, transformMat4(tempVec3, tempPos, this.rendererData.nodes[group[j]].matrix));
			scale$2(tempPos, tempSum, 1 / group.length);
			buffer[i] = tempPos[0];
			buffer[i + 1] = tempPos[1];
			buffer[i + 2] = tempPos[2];
		}
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer[geosetIndex]);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, buffer, this.gl.DYNAMIC_DRAW);
	}
	setTextureParameters(flags, hasMipmaps) {
		if (flags & TextureFlags.WrapWidth) this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.REPEAT);
		else this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
		if (flags & TextureFlags.WrapHeight) this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.REPEAT);
		else this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, hasMipmaps ? this.gl.LINEAR_MIPMAP_NEAREST : this.gl.LINEAR);
		if (this.anisotropicExt) {
			const max = this.gl.getParameter(this.anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
			this.gl.texParameterf(this.gl.TEXTURE_2D, this.anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, max);
		}
	}
	processEnvMaps(path) {
		if (!this.rendererData.requiredEnvMaps[path] || !(this.rendererData.textures[path] || this.rendererData.gpuTextures[path]) || !(isWebGL2(this.gl) || this.device) || !(this.colorBufferFloatExt || this.device)) return;
		if (this.gl) {
			this.gl.disable(this.gl.BLEND);
			this.gl.disable(this.gl.DEPTH_TEST);
			this.gl.disable(this.gl.CULL_FACE);
		}
		const pMatrix = create$3();
		const mvMatrix = create$3();
		const eye = fromValues$2(0, 0, 0);
		let center;
		let up;
		if (this.device) {
			center = [
				fromValues$2(1, 0, 0),
				fromValues$2(-1, 0, 0),
				fromValues$2(0, -1, 0),
				fromValues$2(0, 1, 0),
				fromValues$2(0, 0, 1),
				fromValues$2(0, 0, -1)
			];
			up = [
				fromValues$2(0, -1, 0),
				fromValues$2(0, -1, 0),
				fromValues$2(0, 0, -1),
				fromValues$2(0, 0, 1),
				fromValues$2(0, -1, 0),
				fromValues$2(0, -1, 0)
			];
		} else {
			center = [
				fromValues$2(1, 0, 0),
				fromValues$2(-1, 0, 0),
				fromValues$2(0, 1, 0),
				fromValues$2(0, -1, 0),
				fromValues$2(0, 0, 1),
				fromValues$2(0, 0, -1)
			];
			up = [
				fromValues$2(0, -1, 0),
				fromValues$2(0, -1, 0),
				fromValues$2(0, 0, 1),
				fromValues$2(0, 0, -1),
				fromValues$2(0, -1, 0),
				fromValues$2(0, -1, 0)
			];
		}
		perspective(pMatrix, Math.PI / 2, 1, .1, 10);
		let framebuffer;
		let cubemap;
		let gpuCubemap;
		if (this.device) {
			gpuCubemap = this.rendererData.gpuEnvTextures[path] = this.device.createTexture({
				label: `env cubemap ${path}`,
				size: [
					ENV_MAP_SIZE,
					ENV_MAP_SIZE,
					6
				],
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
				mipLevelCount: MAX_ENV_MIP_LEVELS
			});
			const encoder = this.device.createCommandEncoder({ label: "env to cubemap" });
			const buffers = [];
			for (let i = 0; i < 6; ++i) {
				lookAt(mvMatrix, eye, center[i], up[i]);
				const pass = encoder.beginRenderPass({
					label: "env to cubemap",
					colorAttachments: [{
						view: gpuCubemap.createView({
							dimension: "2d",
							baseArrayLayer: i,
							baseMipLevel: 0,
							mipLevelCount: 1
						}),
						clearValue: [
							0,
							0,
							0,
							1
						],
						loadOp: "clear",
						storeOp: "store"
					}]
				});
				const VSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
				const VSUniformsViews = {
					mvMatrix: new Float32Array(VSUniformsValues, 0, 16),
					pMatrix: new Float32Array(VSUniformsValues, 64, 16)
				};
				VSUniformsViews.mvMatrix.set(mvMatrix);
				VSUniformsViews.pMatrix.set(pMatrix);
				const buffer = this.device.createBuffer({
					label: `env to cubemap vs uniforms ${i}`,
					size: 128,
					usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
				});
				buffers.push(buffer);
				this.device.queue.writeBuffer(buffer, 0, VSUniformsValues);
				const bindGroup = this.device.createBindGroup({
					label: `env to cubemap vs bind group ${i}`,
					layout: this.envToCubemapVSBindGroupLayout,
					entries: [{
						binding: 0,
						resource: { buffer }
					}]
				});
				pass.setBindGroup(0, bindGroup);
				const fsUniformsBindGroup = this.device.createBindGroup({
					label: `env to cubemap fs uniforms ${i}`,
					layout: this.envToCubemapFSBindGroupLayout,
					entries: [{
						binding: 0,
						resource: this.envToCubemapSampler
					}, {
						binding: 1,
						resource: this.rendererData.gpuTextures[path].createView()
					}]
				});
				pass.setBindGroup(1, fsUniformsBindGroup);
				pass.setPipeline(this.envToCubemapPiepeline);
				pass.setVertexBuffer(0, this.cubeGPUVertexBuffer);
				pass.draw(36);
				pass.end();
			}
			const commandBuffer = encoder.finish();
			this.device.queue.submit([commandBuffer]);
			this.device.queue.onSubmittedWorkDone().finally(() => {
				buffers.forEach((buffer) => {
					buffer.destroy();
				});
			});
		} else if (isWebGL2(this.gl)) {
			framebuffer = this.gl.createFramebuffer();
			this.gl.useProgram(this.envToCubemap.program);
			cubemap = this.rendererData.envTextures[path] = this.gl.createTexture();
			this.gl.activeTexture(this.gl.TEXTURE1);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, cubemap);
			for (let i = 0; i < 6; ++i) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA16F, ENV_MAP_SIZE, ENV_MAP_SIZE, 0, this.gl.RGBA, this.gl.FLOAT, null);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_R, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexBuffer);
			this.gl.enableVertexAttribArray(this.envToCubemap.attributes.aPos);
			this.gl.vertexAttribPointer(this.envToCubemap.attributes.aPos, 3, this.gl.FLOAT, false, 0, 0);
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
			this.gl.uniformMatrix4fv(this.envToCubemap.uniforms.uPMatrix, false, pMatrix);
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[path]);
			this.gl.uniform1i(this.envToCubemap.uniforms.uEquirectangularMap, 0);
			this.gl.viewport(0, 0, ENV_MAP_SIZE, ENV_MAP_SIZE);
			for (let i = 0; i < 6; ++i) {
				this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, cubemap, 0);
				this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
				lookAt(mvMatrix, eye, center[i], up[i]);
				this.gl.uniformMatrix4fv(this.envToCubemap.uniforms.uMVMatrix, false, mvMatrix);
				this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
			}
			this.gl.disableVertexAttribArray(this.envToCubemap.attributes.aPos);
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
		}
		if (this.device) generateMips(this.device, gpuCubemap);
		else {
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, cubemap);
			this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);
		}
		if (this.device) {
			gpuCubemap = this.rendererData.gpuIrradianceMap[path] = this.device.createTexture({
				label: `convolute diffuse ${path}`,
				size: [
					ENV_CONVOLUTE_DIFFUSE_SIZE,
					ENV_CONVOLUTE_DIFFUSE_SIZE,
					6
				],
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
				mipLevelCount: 5
			});
			const encoder = this.device.createCommandEncoder({ label: "convolute diffuse" });
			const buffers = [];
			for (let i = 0; i < 6; ++i) {
				lookAt(mvMatrix, eye, center[i], up[i]);
				const pass = encoder.beginRenderPass({
					label: "convolute diffuse",
					colorAttachments: [{
						view: gpuCubemap.createView({
							dimension: "2d",
							baseArrayLayer: i,
							baseMipLevel: 0,
							mipLevelCount: 1
						}),
						clearValue: [
							0,
							0,
							0,
							1
						],
						loadOp: "clear",
						storeOp: "store"
					}]
				});
				const VSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
				const VSUniformsViews = {
					mvMatrix: new Float32Array(VSUniformsValues, 0, 16),
					pMatrix: new Float32Array(VSUniformsValues, 64, 16)
				};
				VSUniformsViews.mvMatrix.set(mvMatrix);
				VSUniformsViews.pMatrix.set(pMatrix);
				const buffer = this.device.createBuffer({
					label: `convolute diffuse vs uniforms ${i}`,
					size: 128,
					usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
				});
				buffers.push(buffer);
				this.device.queue.writeBuffer(buffer, 0, VSUniformsValues);
				const bindGroup = this.device.createBindGroup({
					label: `convolute diffuse vs bind group ${i}`,
					layout: this.convoluteDiffuseEnvVSBindGroupLayout,
					entries: [{
						binding: 0,
						resource: { buffer }
					}]
				});
				pass.setBindGroup(0, bindGroup);
				const fsUniformsBindGroup = this.device.createBindGroup({
					label: `convolute diffuse fs uniforms ${i}`,
					layout: this.convoluteDiffuseEnvFSBindGroupLayout,
					entries: [{
						binding: 0,
						resource: this.convoluteDiffuseEnvSampler
					}, {
						binding: 1,
						resource: this.rendererData.gpuEnvTextures[path].createView({ dimension: "cube" })
					}]
				});
				pass.setBindGroup(1, fsUniformsBindGroup);
				pass.setPipeline(this.convoluteDiffuseEnvPiepeline);
				pass.setVertexBuffer(0, this.cubeGPUVertexBuffer);
				pass.draw(36);
				pass.end();
			}
			const commandBuffer = encoder.finish();
			this.device.queue.submit([commandBuffer]);
			this.device.queue.onSubmittedWorkDone().finally(() => {
				buffers.forEach((buffer) => {
					buffer.destroy();
				});
			});
		} else if (isWebGL2(this.gl)) {
			this.gl.useProgram(this.convoluteDiffuseEnv.program);
			const diffuseCubemap = this.rendererData.irradianceMap[path] = this.gl.createTexture();
			this.gl.activeTexture(this.gl.TEXTURE1);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, diffuseCubemap);
			for (let i = 0; i < 6; ++i) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA16F, ENV_CONVOLUTE_DIFFUSE_SIZE, ENV_CONVOLUTE_DIFFUSE_SIZE, 0, this.gl.RGBA, this.gl.FLOAT, null);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_R, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexBuffer);
			this.gl.enableVertexAttribArray(this.convoluteDiffuseEnv.attributes.aPos);
			this.gl.vertexAttribPointer(this.convoluteDiffuseEnv.attributes.aPos, 3, this.gl.FLOAT, false, 0, 0);
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
			this.gl.uniformMatrix4fv(this.convoluteDiffuseEnv.uniforms.uPMatrix, false, pMatrix);
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.rendererData.envTextures[path]);
			this.gl.uniform1i(this.convoluteDiffuseEnv.uniforms.uEnvironmentMap, 0);
			this.gl.viewport(0, 0, ENV_CONVOLUTE_DIFFUSE_SIZE, ENV_CONVOLUTE_DIFFUSE_SIZE);
			for (let i = 0; i < 6; ++i) {
				this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, diffuseCubemap, 0);
				this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
				lookAt(mvMatrix, eye, center[i], up[i]);
				this.gl.uniformMatrix4fv(this.convoluteDiffuseEnv.uniforms.uMVMatrix, false, mvMatrix);
				this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
			}
			this.gl.disableVertexAttribArray(this.convoluteDiffuseEnv.attributes.aPos);
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, diffuseCubemap);
			this.gl.generateMipmap(this.gl.TEXTURE_CUBE_MAP);
		}
		if (this.device) {
			const prefilterEnv = this.rendererData.gpuPrefilteredEnvMap[path] = this.device.createTexture({
				label: `prefilter env ${path}`,
				size: [
					ENV_PREFILTER_SIZE,
					ENV_PREFILTER_SIZE,
					6
				],
				format: navigator.gpu.getPreferredCanvasFormat(),
				usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
				mipLevelCount: MAX_ENV_MIP_LEVELS
			});
			const encoder = this.device.createCommandEncoder({ label: "prefilter env" });
			const buffers = [];
			for (let mip = 0; mip < MAX_ENV_MIP_LEVELS; ++mip) {
				const FSUniformsValues = /* @__PURE__ */ new ArrayBuffer(4);
				const FSUniformsViews = { roughness: new Float32Array(FSUniformsValues) };
				const roughness = mip / (MAX_ENV_MIP_LEVELS - 1);
				FSUniformsViews.roughness.set([roughness]);
				const fsBuffer = this.device.createBuffer({
					label: `prefilter env fs uniforms ${mip}`,
					size: 4,
					usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
				});
				buffers.push(fsBuffer);
				this.device.queue.writeBuffer(fsBuffer, 0, FSUniformsValues);
				const fsUniformsBindGroup = this.device.createBindGroup({
					label: `prefilter env fs uniforms ${mip}`,
					layout: this.prefilterEnvFSBindGroupLayout,
					entries: [
						{
							binding: 0,
							resource: { buffer: fsBuffer }
						},
						{
							binding: 1,
							resource: this.prefilterEnvSampler
						},
						{
							binding: 2,
							resource: this.rendererData.gpuEnvTextures[path].createView({ dimension: "cube" })
						}
					]
				});
				for (let i = 0; i < 6; ++i) {
					const pass = encoder.beginRenderPass({
						label: "prefilter env",
						colorAttachments: [{
							view: prefilterEnv.createView({
								dimension: "2d",
								baseArrayLayer: i,
								baseMipLevel: mip,
								mipLevelCount: 1
							}),
							clearValue: [
								0,
								0,
								0,
								1
							],
							loadOp: "clear",
							storeOp: "store"
						}]
					});
					lookAt(mvMatrix, eye, center[i], up[i]);
					const VSUniformsValues = /* @__PURE__ */ new ArrayBuffer(128);
					const VSUniformsViews = {
						mvMatrix: new Float32Array(VSUniformsValues, 0, 16),
						pMatrix: new Float32Array(VSUniformsValues, 64, 16)
					};
					VSUniformsViews.mvMatrix.set(mvMatrix);
					VSUniformsViews.pMatrix.set(pMatrix);
					const vsBuffer = this.device.createBuffer({
						label: "prefilter env vs uniforms",
						size: 128,
						usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
					});
					buffers.push(vsBuffer);
					this.device.queue.writeBuffer(vsBuffer, 0, VSUniformsValues);
					const fsBindGroup = this.device.createBindGroup({
						label: "prefilter env vs bind group",
						layout: this.prefilterEnvVSBindGroupLayout,
						entries: [{
							binding: 0,
							resource: { buffer: vsBuffer }
						}]
					});
					pass.setPipeline(this.prefilterEnvPiepeline);
					pass.setBindGroup(0, fsBindGroup);
					pass.setBindGroup(1, fsUniformsBindGroup);
					pass.setVertexBuffer(0, this.cubeGPUVertexBuffer);
					pass.draw(36);
					pass.end();
				}
			}
			const commandBuffer = encoder.finish();
			this.device.queue.submit([commandBuffer]);
			this.device.queue.onSubmittedWorkDone().finally(() => {
				buffers.forEach((buffer) => {
					buffer.destroy();
				});
			});
		} else if (isWebGL2(this.gl)) {
			this.gl.useProgram(this.prefilterEnv.program);
			const prefilterCubemap = this.rendererData.prefilteredEnvMap[path] = this.gl.createTexture();
			this.gl.activeTexture(this.gl.TEXTURE1);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, prefilterCubemap);
			this.gl.texStorage2D(this.gl.TEXTURE_CUBE_MAP, MAX_ENV_MIP_LEVELS, this.gl.RGBA16F, ENV_PREFILTER_SIZE, ENV_PREFILTER_SIZE);
			for (let mip = 0; mip < MAX_ENV_MIP_LEVELS; ++mip) for (let i = 0; i < 6; ++i) {
				const size = ENV_PREFILTER_SIZE * .5 ** mip;
				const data = new Float32Array(size * size * 4);
				this.gl.texSubImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, mip, 0, 0, size, size, this.gl.RGBA, this.gl.FLOAT, data);
			}
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_R, this.gl.CLAMP_TO_EDGE);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
			this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexBuffer);
			this.gl.enableVertexAttribArray(this.prefilterEnv.attributes.aPos);
			this.gl.vertexAttribPointer(this.prefilterEnv.attributes.aPos, 3, this.gl.FLOAT, false, 0, 0);
			this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
			this.gl.uniformMatrix4fv(this.prefilterEnv.uniforms.uPMatrix, false, pMatrix);
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.rendererData.envTextures[path]);
			this.gl.uniform1i(this.prefilterEnv.uniforms.uEnvironmentMap, 0);
			for (let mip = 0; mip < MAX_ENV_MIP_LEVELS; ++mip) {
				const mipWidth = ENV_PREFILTER_SIZE * .5 ** mip;
				const mipHeight = ENV_PREFILTER_SIZE * .5 ** mip;
				this.gl.viewport(0, 0, mipWidth, mipHeight);
				const roughness = mip / (MAX_ENV_MIP_LEVELS - 1);
				this.gl.uniform1f(this.prefilterEnv.uniforms.uRoughness, roughness);
				for (let i = 0; i < 6; ++i) {
					this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, prefilterCubemap, mip);
					this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
					lookAt(mvMatrix, eye, center[i], up[i]);
					this.gl.uniformMatrix4fv(this.prefilterEnv.uniforms.uMVMatrix, false, mvMatrix);
					this.gl.drawArrays(this.gl.TRIANGLES, 0, 36);
				}
			}
			this.gl.activeTexture(this.gl.TEXTURE1);
			this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, null);
			this.gl.deleteFramebuffer(framebuffer);
		}
	}
	initShaderProgram(vertex, fragment, attributesDesc, uniformsDesc) {
		const vertexShader = getShader(this.gl, vertex, this.gl.VERTEX_SHADER);
		const fragmentShader = getShader(this.gl, fragment, this.gl.FRAGMENT_SHADER);
		const program = this.gl.createProgram();
		this.gl.attachShader(program, vertexShader);
		this.gl.attachShader(program, fragmentShader);
		this.gl.linkProgram(program);
		if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) throw new Error("Could not initialise shaders");
		const attributes = {};
		for (const name in attributesDesc) {
			attributes[name] = this.gl.getAttribLocation(program, name);
			if (attributes[name] < 0) throw new Error("Missing shader attribute location: " + name);
		}
		const uniforms = {};
		for (const name in uniformsDesc) {
			uniforms[name] = this.gl.getUniformLocation(program, name);
			if (!uniforms[name]) throw new Error("Missing shader uniform location: " + name);
		}
		return {
			program,
			vertexShader,
			fragmentShader,
			attributes,
			uniforms
		};
	}
	destroyShaderProgramObject(object) {
		if (!object) return;
		if (object.program) {
			if (object.vertexShader) {
				this.gl.detachShader(object.program, object.vertexShader);
				this.gl.deleteShader(object.vertexShader);
				object.vertexShader = null;
			}
			if (object.fragmentShader) {
				this.gl.detachShader(object.program, object.fragmentShader);
				this.gl.deleteShader(object.fragmentShader);
				object.fragmentShader = null;
			}
			this.gl.deleteProgram(object.program);
			object.program = null;
		}
	}
	initShaders() {
		if (this.shaderProgram) return;
		let vertexShaderSource;
		if (this.isHD) vertexShaderSource = isWebGL2(this.gl) ? vertexShaderHDHardwareSkinningNew : vertexShaderHDHardwareSkinningOld;
		else if (this.softwareSkinning) vertexShaderSource = sdSoftwareSkinning_vs_default;
		else vertexShaderSource = vertexShaderHardwareSkinning;
		let fragmentShaderSource;
		if (this.isHD) fragmentShaderSource = isWebGL2(this.gl) ? fragmentShaderHDNew : hdOld_fs_default;
		else fragmentShaderSource = sd_fs_default;
		const vertex = this.vertexShader = getShader(this.gl, vertexShaderSource, this.gl.VERTEX_SHADER);
		const fragment = this.fragmentShader = getShader(this.gl, fragmentShaderSource, this.gl.FRAGMENT_SHADER);
		const shaderProgram = this.shaderProgram = this.gl.createProgram();
		this.gl.attachShader(shaderProgram, vertex);
		this.gl.attachShader(shaderProgram, fragment);
		this.gl.linkProgram(shaderProgram);
		if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) alert("Could not initialise shaders");
		this.gl.useProgram(shaderProgram);
		this.shaderProgramLocations.vertexPositionAttribute = this.gl.getAttribLocation(shaderProgram, "aVertexPosition");
		this.shaderProgramLocations.normalsAttribute = this.gl.getAttribLocation(shaderProgram, "aNormal");
		this.shaderProgramLocations.textureCoordAttribute = this.gl.getAttribLocation(shaderProgram, "aTextureCoord");
		if (this.isHD) {
			this.shaderProgramLocations.skinAttribute = this.gl.getAttribLocation(shaderProgram, "aSkin");
			this.shaderProgramLocations.weightAttribute = this.gl.getAttribLocation(shaderProgram, "aBoneWeight");
			this.shaderProgramLocations.tangentAttribute = this.gl.getAttribLocation(shaderProgram, "aTangent");
		} else if (!this.softwareSkinning) this.shaderProgramLocations.groupAttribute = this.gl.getAttribLocation(shaderProgram, "aGroup");
		this.shaderProgramLocations.pMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uPMatrix");
		this.shaderProgramLocations.mvMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uMVMatrix");
		this.shaderProgramLocations.samplerUniform = this.gl.getUniformLocation(shaderProgram, "uSampler");
		this.shaderProgramLocations.replaceableColorUniform = this.gl.getUniformLocation(shaderProgram, "uReplaceableColor");
		if (this.isHD) {
			this.shaderProgramLocations.normalSamplerUniform = this.gl.getUniformLocation(shaderProgram, "uNormalSampler");
			this.shaderProgramLocations.ormSamplerUniform = this.gl.getUniformLocation(shaderProgram, "uOrmSampler");
			this.shaderProgramLocations.lightPosUniform = this.gl.getUniformLocation(shaderProgram, "uLightPos");
			this.shaderProgramLocations.lightColorUniform = this.gl.getUniformLocation(shaderProgram, "uLightColor");
			this.shaderProgramLocations.cameraPosUniform = this.gl.getUniformLocation(shaderProgram, "uCameraPos");
			this.shaderProgramLocations.shadowParamsUniform = this.gl.getUniformLocation(shaderProgram, "uShadowParams");
			this.shaderProgramLocations.shadowMapSamplerUniform = this.gl.getUniformLocation(shaderProgram, "uShadowMapSampler");
			this.shaderProgramLocations.shadowMapLightMatrixUniform = this.gl.getUniformLocation(shaderProgram, "uShadowMapLightMatrix");
			this.shaderProgramLocations.hasEnvUniform = this.gl.getUniformLocation(shaderProgram, "uHasEnv");
			this.shaderProgramLocations.irradianceMapUniform = this.gl.getUniformLocation(shaderProgram, "uIrradianceMap");
			this.shaderProgramLocations.prefilteredEnvUniform = this.gl.getUniformLocation(shaderProgram, "uPrefilteredEnv");
			this.shaderProgramLocations.brdfLUTUniform = this.gl.getUniformLocation(shaderProgram, "uBRDFLUT");
		} else this.shaderProgramLocations.replaceableTypeUniform = this.gl.getUniformLocation(shaderProgram, "uReplaceableType");
		this.shaderProgramLocations.discardAlphaLevelUniform = this.gl.getUniformLocation(shaderProgram, "uDiscardAlphaLevel");
		this.shaderProgramLocations.alphaUniform = this.gl.getUniformLocation(shaderProgram, "uAlpha");
		this.shaderProgramLocations.tVertexAnimUniform = this.gl.getUniformLocation(shaderProgram, "uTVertexAnim");
		this.shaderProgramLocations.wireframeUniform = this.gl.getUniformLocation(shaderProgram, "uWireframe");
		if (!this.softwareSkinning) {
			this.shaderProgramLocations.nodesMatricesAttributes = [];
			for (let i = 0; i < MAX_NODES; ++i) this.shaderProgramLocations.nodesMatricesAttributes[i] = this.gl.getUniformLocation(shaderProgram, `uNodesMatrices[${i}]`);
		}
		if (this.isHD && isWebGL2(this.gl)) {
			this.envToCubemap = this.initShaderProgram(envToCubemap_vs_default, envToCubemap_fs_default, { aPos: "aPos" }, {
				uPMatrix: "uPMatrix",
				uMVMatrix: "uMVMatrix",
				uEquirectangularMap: "uEquirectangularMap"
			});
			this.envSphere = this.initShaderProgram(env_vs_default, env_fs_default, { aPos: "aPos" }, {
				uPMatrix: "uPMatrix",
				uMVMatrix: "uMVMatrix",
				uEnvironmentMap: "uEnvironmentMap"
			});
			this.convoluteDiffuseEnv = this.initShaderProgram(convoluteEnvDiffuse_vs_default, convoluteEnvDiffuse_fs_default, { aPos: "aPos" }, {
				uPMatrix: "uPMatrix",
				uMVMatrix: "uMVMatrix",
				uEnvironmentMap: "uEnvironmentMap"
			});
			this.prefilterEnv = this.initShaderProgram(prefilterEnv_vs_default, prefilterEnv_fs_default, { aPos: "aPos" }, {
				uPMatrix: "uPMatrix",
				uMVMatrix: "uMVMatrix",
				uEnvironmentMap: "uEnvironmentMap",
				uRoughness: "uRoughness"
			});
			this.integrateBRDF = this.initShaderProgram(integrateBRDF_vs_default, integrateBRDF_fs_default, { aPos: "aPos" }, {});
		}
	}
	initGPUShaders() {
		if (this.gpuShaderModule) return;
		this.gpuShaderModule = this.device.createShaderModule({
			label: "main",
			code: this.isHD ? hdShader : sdShader
		});
		this.gpuDepthShaderModule = this.device.createShaderModule({
			label: "depth",
			code: depthShader
		});
		for (let i = 0; i < this.model.Textures.length; ++i) {
			const flags = this.model.Textures[i].Flags;
			const addressModeU = flags & TextureFlags.WrapWidth ? "repeat" : "clamp-to-edge";
			const addressModeV = flags & TextureFlags.WrapHeight ? "repeat" : "clamp-to-edge";
			this.rendererData.gpuSamplers[i] = this.device.createSampler({
				label: `texture sampler ${i}`,
				minFilter: "linear",
				magFilter: "linear",
				mipmapFilter: "linear",
				maxAnisotropy: 16,
				addressModeU,
				addressModeV
			});
		}
		this.rendererData.gpuDepthSampler = this.device.createSampler({
			label: "texture depth sampler",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge",
			compare: "less",
			minFilter: "nearest",
			magFilter: "nearest"
		});
		if (this.isHD) {
			this.envShaderModeule = this.device.createShaderModule({
				label: "env",
				code: env_default
			});
			this.envPiepeline = this.device.createRenderPipeline({
				label: "env",
				layout: "auto",
				vertex: {
					module: this.envShaderModeule,
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}]
				},
				fragment: {
					module: this.envShaderModeule,
					targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
				},
				depthStencil: {
					depthWriteEnabled: false,
					depthCompare: "always",
					format: "depth24plus"
				},
				multisample: { count: MULTISAMPLE }
			});
			this.envVSUniformsBuffer = this.device.createBuffer({
				label: "env vs uniforms",
				size: 128,
				usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
			});
			this.envVSBindGroupLayout = this.envPiepeline.getBindGroupLayout(0);
			this.envVSBindGroup = this.device.createBindGroup({
				label: "env vs bind group",
				layout: this.envVSBindGroupLayout,
				entries: [{
					binding: 0,
					resource: { buffer: this.envVSUniformsBuffer }
				}]
			});
			this.envSampler = this.device.createSampler({
				label: "env cube sampler",
				addressModeU: "clamp-to-edge",
				addressModeV: "clamp-to-edge",
				addressModeW: "clamp-to-edge",
				minFilter: "linear",
				magFilter: "linear"
			});
			this.envFSBindGroupLayout = this.envPiepeline.getBindGroupLayout(1);
			this.envToCubemapShaderModule = this.device.createShaderModule({
				label: "env to cubemap",
				code: envToCubemap_default
			});
			this.envToCubemapPiepeline = this.device.createRenderPipeline({
				label: "env to cubemap",
				layout: "auto",
				vertex: {
					module: this.envToCubemapShaderModule,
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}]
				},
				fragment: {
					module: this.envToCubemapShaderModule,
					targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
				}
			});
			this.envToCubemapVSBindGroupLayout = this.envToCubemapPiepeline.getBindGroupLayout(0);
			this.envToCubemapSampler = this.device.createSampler({
				label: "env to cubemap sampler",
				addressModeU: "clamp-to-edge",
				addressModeV: "clamp-to-edge",
				minFilter: "linear",
				magFilter: "linear"
			});
			this.envToCubemapFSBindGroupLayout = this.envToCubemapPiepeline.getBindGroupLayout(1);
			this.convoluteDiffuseEnvShaderModule = this.device.createShaderModule({
				label: "convolute diffuse",
				code: convoluteEnvDiffuse_default
			});
			this.convoluteDiffuseEnvPiepeline = this.device.createRenderPipeline({
				label: "convolute diffuse",
				layout: "auto",
				vertex: {
					module: this.convoluteDiffuseEnvShaderModule,
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}]
				},
				fragment: {
					module: this.convoluteDiffuseEnvShaderModule,
					targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
				}
			});
			this.convoluteDiffuseEnvVSBindGroupLayout = this.convoluteDiffuseEnvPiepeline.getBindGroupLayout(0);
			this.convoluteDiffuseEnvFSBindGroupLayout = this.convoluteDiffuseEnvPiepeline.getBindGroupLayout(1);
			this.convoluteDiffuseEnvSampler = this.device.createSampler({
				label: "convolute diffuse",
				addressModeU: "clamp-to-edge",
				addressModeV: "clamp-to-edge",
				minFilter: "linear",
				magFilter: "linear"
			});
			this.prefilterEnvShaderModule = this.device.createShaderModule({
				label: "prefilter env",
				code: prefilterEnv_default
			});
			this.prefilterEnvPiepeline = this.device.createRenderPipeline({
				label: "prefilter env",
				layout: "auto",
				vertex: {
					module: this.prefilterEnvShaderModule,
					buffers: [{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					}]
				},
				fragment: {
					module: this.prefilterEnvShaderModule,
					targets: [{ format: navigator.gpu.getPreferredCanvasFormat() }]
				}
			});
			this.prefilterEnvVSBindGroupLayout = this.prefilterEnvPiepeline.getBindGroupLayout(0);
			this.prefilterEnvFSBindGroupLayout = this.prefilterEnvPiepeline.getBindGroupLayout(1);
			this.prefilterEnvSampler = this.device.createSampler({
				label: "prefilter env",
				addressModeU: "clamp-to-edge",
				addressModeV: "clamp-to-edge",
				addressModeW: "clamp-to-edge",
				minFilter: "linear",
				magFilter: "linear"
			});
		}
	}
	createWireframeBuffer(index) {
		const faces = this.model.Geosets[index].Faces;
		const lines = new Uint16Array(faces.length * 2);
		for (let i = 0; i < faces.length; i += 3) {
			lines[i * 2] = faces[i];
			lines[i * 2 + 1] = faces[i + 1];
			lines[i * 2 + 2] = faces[i + 1];
			lines[i * 2 + 3] = faces[i + 2];
			lines[i * 2 + 4] = faces[i + 2];
			lines[i * 2 + 5] = faces[i];
		}
		this.wireframeIndexBuffer[index] = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.wireframeIndexBuffer[index]);
		this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, lines, this.gl.STATIC_DRAW);
	}
	createWireframeGPUBuffer(index) {
		const faces = this.model.Geosets[index].Faces;
		const lines = new Uint16Array(faces.length * 2);
		for (let i = 0; i < faces.length; i += 3) {
			lines[i * 2] = faces[i];
			lines[i * 2 + 1] = faces[i + 1];
			lines[i * 2 + 2] = faces[i + 1];
			lines[i * 2 + 3] = faces[i + 2];
			lines[i * 2 + 4] = faces[i + 2];
			lines[i * 2 + 5] = faces[i];
		}
		this.wireframeIndexGPUBuffer[index] = this.device.createBuffer({
			label: `wireframe ${index}`,
			size: lines.byteLength,
			usage: GPUBufferUsage.INDEX,
			mappedAtCreation: true
		});
		new Uint16Array(this.wireframeIndexGPUBuffer[index].getMappedRange(0, this.wireframeIndexGPUBuffer[index].size)).set(lines);
		this.wireframeIndexGPUBuffer[index].unmap();
	}
	initBuffers() {
		for (let i = 0; i < this.model.Geosets.length; ++i) {
			const geoset = this.model.Geosets[i];
			this.vertexBuffer[i] = this.gl.createBuffer();
			if (this.softwareSkinning) this.vertices[i] = new Float32Array(geoset.Vertices.length);
			else {
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer[i]);
				this.gl.bufferData(this.gl.ARRAY_BUFFER, geoset.Vertices, this.gl.STATIC_DRAW);
			}
			this.normalBuffer[i] = this.gl.createBuffer();
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer[i]);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, geoset.Normals, this.gl.STATIC_DRAW);
			this.texCoordBuffer[i] = this.gl.createBuffer();
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer[i]);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, geoset.TVertices[0], this.gl.STATIC_DRAW);
			if (this.isHD) {
				this.skinWeightBuffer[i] = this.gl.createBuffer();
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.skinWeightBuffer[i]);
				this.gl.bufferData(this.gl.ARRAY_BUFFER, geoset.SkinWeights, this.gl.STATIC_DRAW);
				this.tangentBuffer[i] = this.gl.createBuffer();
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.tangentBuffer[i]);
				this.gl.bufferData(this.gl.ARRAY_BUFFER, geoset.Tangents, this.gl.STATIC_DRAW);
			} else if (!this.softwareSkinning) {
				this.groupBuffer[i] = this.gl.createBuffer();
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.groupBuffer[i]);
				const buffer = new Uint16Array(geoset.VertexGroup.length * 4);
				for (let j = 0; j < buffer.length; j += 4) {
					const index = j / 4;
					const group = geoset.Groups[geoset.VertexGroup[index]];
					buffer[j] = group[0];
					buffer[j + 1] = group.length > 1 ? group[1] : MAX_NODES;
					buffer[j + 2] = group.length > 2 ? group[2] : MAX_NODES;
					buffer[j + 3] = group.length > 3 ? group[3] : MAX_NODES;
				}
				this.gl.bufferData(this.gl.ARRAY_BUFFER, buffer, this.gl.STATIC_DRAW);
			}
			this.indexBuffer[i] = this.gl.createBuffer();
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer[i]);
			this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, geoset.Faces, this.gl.STATIC_DRAW);
		}
	}
	createGPUPipeline(name, blend, depth, shaderModule = this.gpuShaderModule, extra = {}) {
		return this.device.createRenderPipeline({
			label: `pipeline ${name}`,
			layout: this.gpuPipelineLayout,
			vertex: {
				module: shaderModule,
				buffers: [
					{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 0,
							offset: 0,
							format: "float32x3"
						}]
					},
					{
						arrayStride: 12,
						attributes: [{
							shaderLocation: 1,
							offset: 0,
							format: "float32x3"
						}]
					},
					{
						arrayStride: 8,
						attributes: [{
							shaderLocation: 2,
							offset: 0,
							format: "float32x2"
						}]
					},
					...this.isHD ? [
						{
							arrayStride: 16,
							attributes: [{
								shaderLocation: 3,
								offset: 0,
								format: "float32x4"
							}]
						},
						{
							arrayStride: 8,
							attributes: [{
								shaderLocation: 4,
								offset: 0,
								format: "uint8x4"
							}]
						},
						{
							arrayStride: 8,
							attributes: [{
								shaderLocation: 5,
								offset: 4,
								format: "unorm8x4"
							}]
						}
					] : [{
						arrayStride: 4,
						attributes: [{
							shaderLocation: 3,
							offset: 0,
							format: "uint8x4"
						}]
					}]
				]
			},
			fragment: {
				module: shaderModule,
				targets: [{
					format: navigator.gpu.getPreferredCanvasFormat(),
					blend
				}]
			},
			depthStencil: depth,
			multisample: { count: MULTISAMPLE },
			...extra
		});
	}
	createGPUPipelineByLayer(filterMode, twoSided) {
		return this.createGPUPipeline(...GPU_LAYER_PROPS[filterMode], void 0, { primitive: { cullMode: twoSided ? "none" : "back" } });
	}
	getGPUPipeline(layer) {
		const filterMode = layer.FilterMode || 0;
		const twoSided = Boolean((layer.Shading || 0) & LayerShading.TwoSided);
		const key = `${filterMode}-${twoSided}`;
		if (!this.gpuPipelines[key]) this.gpuPipelines[key] = this.createGPUPipelineByLayer(filterMode, twoSided);
		return this.gpuPipelines[key];
	}
	initGPUPipeline() {
		this.vsBindGroupLayout = this.device.createBindGroupLayout({
			label: "vs bind group layout",
			entries: [{
				binding: 0,
				visibility: GPUShaderStage.VERTEX,
				buffer: {
					type: "uniform",
					hasDynamicOffset: false,
					minBindingSize: 128 + 64 * MAX_NODES
				}
			}]
		});
		this.fsBindGroupLayout = this.device.createBindGroupLayout({
			label: "fs bind group layout2",
			entries: this.isHD ? [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					buffer: {
						type: "uniform",
						hasDynamicOffset: false,
						minBindingSize: 192
					}
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				},
				{
					binding: 3,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 4,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				},
				{
					binding: 5,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 6,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				},
				{
					binding: 7,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "comparison" }
				},
				{
					binding: 8,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "depth",
						viewDimension: "2d",
						multisampled: false
					}
				},
				{
					binding: 9,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 10,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "cube",
						multisampled: false
					}
				},
				{
					binding: 11,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 12,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "cube",
						multisampled: false
					}
				},
				{
					binding: 13,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 14,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				}
			] : [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					buffer: {
						type: "uniform",
						hasDynamicOffset: false,
						minBindingSize: 80
					}
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" }
				},
				{
					binding: 2,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						sampleType: "float",
						viewDimension: "2d",
						multisampled: false
					}
				}
			]
		});
		this.gpuPipelineLayout = this.device.createPipelineLayout({
			label: "pipeline layout",
			bindGroupLayouts: [this.vsBindGroupLayout, this.fsBindGroupLayout]
		});
		this.gpuWireframePipeline = this.createGPUPipeline("wireframe", {
			color: {
				operation: "add",
				srcFactor: "src-alpha",
				dstFactor: "one-minus-src-alpha"
			},
			alpha: {
				operation: "add",
				srcFactor: "one",
				dstFactor: "one-minus-src-alpha"
			}
		}, {
			depthWriteEnabled: true,
			depthCompare: "less-equal",
			format: "depth24plus"
		}, void 0, { primitive: { topology: "line-list" } });
		if (this.isHD) this.gpuShadowPipeline = this.createGPUPipeline("shadow", void 0, {
			depthWriteEnabled: true,
			depthCompare: "less-equal",
			format: "depth32float"
		}, this.gpuDepthShaderModule, {
			fragment: {
				module: this.gpuDepthShaderModule,
				targets: []
			},
			multisample: { count: 1 }
		});
		this.gpuRenderPassDescriptor = {
			label: "basic renderPass",
			colorAttachments: [{
				view: null,
				clearValue: this.clearColor,
				loadOp: "clear",
				storeOp: "store"
			}]
		};
	}
	initGPUBuffers() {
		for (let i = 0; i < this.model.Geosets.length; ++i) {
			const geoset = this.model.Geosets[i];
			this.gpuVertexBuffer[i] = this.device.createBuffer({
				label: `vertex ${i}`,
				size: geoset.Vertices.byteLength,
				usage: GPUBufferUsage.VERTEX,
				mappedAtCreation: true
			});
			new Float32Array(this.gpuVertexBuffer[i].getMappedRange(0, this.gpuVertexBuffer[i].size)).set(geoset.Vertices);
			this.gpuVertexBuffer[i].unmap();
			this.gpuNormalBuffer[i] = this.device.createBuffer({
				label: `normal ${i}`,
				size: geoset.Normals.byteLength,
				usage: GPUBufferUsage.VERTEX,
				mappedAtCreation: true
			});
			new Float32Array(this.gpuNormalBuffer[i].getMappedRange(0, this.gpuNormalBuffer[i].size)).set(geoset.Normals);
			this.gpuNormalBuffer[i].unmap();
			this.gpuTexCoordBuffer[i] = this.device.createBuffer({
				label: `texCoord ${i}`,
				size: geoset.TVertices[0].byteLength,
				usage: GPUBufferUsage.VERTEX,
				mappedAtCreation: true
			});
			new Float32Array(this.gpuTexCoordBuffer[i].getMappedRange(0, this.gpuTexCoordBuffer[i].size)).set(geoset.TVertices[0]);
			this.gpuTexCoordBuffer[i].unmap();
			if (this.isHD) {
				this.gpuSkinWeightBuffer[i] = this.device.createBuffer({
					label: `SkinWeight ${i}`,
					size: geoset.SkinWeights.byteLength,
					usage: GPUBufferUsage.VERTEX,
					mappedAtCreation: true
				});
				new Uint8Array(this.gpuSkinWeightBuffer[i].getMappedRange(0, this.gpuSkinWeightBuffer[i].size)).set(geoset.SkinWeights);
				this.gpuSkinWeightBuffer[i].unmap();
				this.gpuTangentBuffer[i] = this.device.createBuffer({
					label: `Tangents ${i}`,
					size: geoset.Tangents.byteLength,
					usage: GPUBufferUsage.VERTEX,
					mappedAtCreation: true
				});
				new Float32Array(this.gpuTangentBuffer[i].getMappedRange(0, this.gpuTangentBuffer[i].size)).set(geoset.Tangents);
				this.gpuTangentBuffer[i].unmap();
			} else {
				const buffer = new Uint8Array(geoset.VertexGroup.length * 4);
				for (let j = 0; j < buffer.length; j += 4) {
					const index = j / 4;
					const group = geoset.Groups[geoset.VertexGroup[index]];
					buffer[j] = group[0];
					buffer[j + 1] = group.length > 1 ? group[1] : MAX_NODES;
					buffer[j + 2] = group.length > 2 ? group[2] : MAX_NODES;
					buffer[j + 3] = group.length > 3 ? group[3] : MAX_NODES;
				}
				this.gpuGroupBuffer[i] = this.device.createBuffer({
					label: `group ${i}`,
					size: 4 * geoset.VertexGroup.length,
					usage: GPUBufferUsage.VERTEX,
					mappedAtCreation: true
				});
				new Uint8Array(this.gpuGroupBuffer[i].getMappedRange(0, this.gpuGroupBuffer[i].size)).set(buffer);
				this.gpuGroupBuffer[i].unmap();
			}
			const size = Math.ceil(geoset.Faces.byteLength / 4) * 4;
			this.gpuIndexBuffer[i] = this.device.createBuffer({
				label: `index ${i}`,
				size: 2 * size,
				usage: GPUBufferUsage.INDEX,
				mappedAtCreation: true
			});
			new Uint16Array(this.gpuIndexBuffer[i].getMappedRange(0, size)).set(geoset.Faces);
			this.gpuIndexBuffer[i].unmap();
		}
	}
	initGPUUniformBuffers() {
		this.gpuVSUniformsBuffer = this.device.createBuffer({
			label: "vs uniforms",
			size: 128 + 64 * MAX_NODES,
			usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
		});
		this.gpuVSUniformsBindGroup = this.device.createBindGroup({
			label: "vs uniforms bind group",
			layout: this.vsBindGroupLayout,
			entries: [{
				binding: 0,
				resource: { buffer: this.gpuVSUniformsBuffer }
			}]
		});
	}
	initGPUMultisampleTexture() {
		this.gpuMultisampleTexture = this.device.createTexture({
			label: "multisample texutre",
			size: [this.canvas.width, this.canvas.height],
			format: navigator.gpu.getPreferredCanvasFormat(),
			usage: GPUTextureUsage.RENDER_ATTACHMENT,
			sampleCount: MULTISAMPLE
		});
	}
	initGPUDepthTexture() {
		this.gpuDepthTexture = this.device.createTexture({
			label: "depth texture",
			size: [this.canvas.width, this.canvas.height],
			format: "depth24plus",
			usage: GPUTextureUsage.RENDER_ATTACHMENT,
			sampleCount: MULTISAMPLE
		});
	}
	initGPUEmptyTexture() {
		const texture = this.rendererData.gpuEmptyTexture = this.device.createTexture({
			label: "empty texture",
			size: [1, 1],
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
		});
		this.device.queue.writeTexture({ texture }, new Uint8Array([
			255,
			255,
			255,
			255
		]), { bytesPerRow: 4 }, {
			width: 1,
			height: 1
		});
		this.rendererData.gpuEmptyCubeTexture = this.device.createTexture({
			label: "empty cube texture",
			size: [
				1,
				1,
				6
			],
			format: "rgba8unorm",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
		});
		this.rendererData.gpuDepthEmptyTexture = this.device.createTexture({
			label: "empty depth texture",
			size: [1, 1],
			format: "depth32float",
			usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
		});
	}
	initCube() {
		const data = new Float32Array([
			-.5,
			-.5,
			-.5,
			-.5,
			.5,
			-.5,
			.5,
			-.5,
			-.5,
			-.5,
			.5,
			-.5,
			.5,
			.5,
			-.5,
			.5,
			-.5,
			-.5,
			-.5,
			-.5,
			.5,
			.5,
			-.5,
			.5,
			-.5,
			.5,
			.5,
			-.5,
			.5,
			.5,
			.5,
			-.5,
			.5,
			.5,
			.5,
			.5,
			-.5,
			.5,
			-.5,
			-.5,
			.5,
			.5,
			.5,
			.5,
			-.5,
			-.5,
			.5,
			.5,
			.5,
			.5,
			.5,
			.5,
			.5,
			-.5,
			-.5,
			-.5,
			-.5,
			.5,
			-.5,
			-.5,
			-.5,
			-.5,
			.5,
			-.5,
			-.5,
			.5,
			.5,
			-.5,
			-.5,
			.5,
			-.5,
			.5,
			-.5,
			-.5,
			-.5,
			-.5,
			-.5,
			.5,
			-.5,
			.5,
			-.5,
			-.5,
			-.5,
			.5,
			-.5,
			.5,
			.5,
			-.5,
			.5,
			-.5,
			.5,
			-.5,
			-.5,
			.5,
			.5,
			-.5,
			.5,
			-.5,
			.5,
			.5,
			-.5,
			.5,
			.5,
			.5,
			-.5,
			.5,
			.5,
			.5
		]);
		if (this.device) {
			const vertex = this.cubeGPUVertexBuffer = this.device.createBuffer({
				label: "skeleton vertex",
				size: data.byteLength,
				usage: GPUBufferUsage.VERTEX,
				mappedAtCreation: true
			});
			new Float32Array(vertex.getMappedRange(0, vertex.size)).set(data);
			vertex.unmap();
		} else {
			this.cubeVertexBuffer = this.gl.createBuffer();
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.cubeVertexBuffer);
			this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
		}
	}
	initSquare() {
		this.squareVertexBuffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			-1,
			1,
			1,
			-1,
			1
		]), this.gl.STATIC_DRAW);
	}
	initBRDFLUT() {
		if (!isWebGL2(this.gl) || !this.isHD || !this.colorBufferFloatExt) return;
		this.brdfLUT = this.gl.createTexture();
		this.gl.activeTexture(this.gl.TEXTURE0);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.brdfLUT);
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RG16F, BRDF_LUT_SIZE, BRDF_LUT_SIZE, 0, this.gl.RG, this.gl.FLOAT, null);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
		this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
		const framebuffer = this.gl.createFramebuffer();
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
		this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.brdfLUT, 0);
		this.gl.useProgram(this.integrateBRDF.program);
		this.gl.viewport(0, 0, BRDF_LUT_SIZE, BRDF_LUT_SIZE);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexBuffer);
		this.gl.enableVertexAttribArray(this.integrateBRDF.attributes.aPos);
		this.gl.vertexAttribPointer(this.integrateBRDF.attributes.aPos, 2, this.gl.FLOAT, false, 0, 0);
		this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
		this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
		this.gl.deleteFramebuffer(framebuffer);
	}
	initGPUBRDFLUT() {
		const shaderModule = this.device.createShaderModule({
			label: "integrate brdf",
			code: integrateBRDF_default
		});
		this.gpuBrdfLUT = this.device.createTexture({
			label: "brdf",
			size: [BRDF_LUT_SIZE, BRDF_LUT_SIZE],
			format: "rg16float",
			usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
		});
		const square = new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			-1,
			1,
			1,
			-1,
			1
		]);
		const buffer = this.device.createBuffer({
			label: "brdf square",
			size: square.byteLength,
			usage: GPUBufferUsage.VERTEX,
			mappedAtCreation: true
		});
		new Float32Array(buffer.getMappedRange(0, buffer.size)).set(square);
		buffer.unmap();
		const encoder = this.device.createCommandEncoder({ label: "integrate brdf" });
		const pass = encoder.beginRenderPass({
			label: "integrate brdf",
			colorAttachments: [{
				view: this.gpuBrdfLUT.createView(),
				clearValue: [
					0,
					0,
					0,
					1
				],
				loadOp: "clear",
				storeOp: "store"
			}]
		});
		pass.setPipeline(this.device.createRenderPipeline({
			label: "integrate brdf",
			layout: "auto",
			vertex: {
				module: shaderModule,
				buffers: [{
					arrayStride: 8,
					attributes: [{
						shaderLocation: 0,
						offset: 0,
						format: "float32x2"
					}]
				}]
			},
			fragment: {
				module: shaderModule,
				targets: [{ format: "rg16float" }]
			}
		}));
		pass.setVertexBuffer(0, buffer);
		pass.draw(6);
		pass.end();
		const commandBuffer = encoder.finish();
		this.device.queue.submit([commandBuffer]);
		this.device.queue.onSubmittedWorkDone().finally(() => {
			buffer.destroy();
		});
		this.gpuBrdfSampler = this.device.createSampler({
			label: "brdf lut",
			addressModeU: "clamp-to-edge",
			addressModeV: "clamp-to-edge",
			minFilter: "linear",
			magFilter: "linear"
		});
	}
	updateGlobalSequences(delta) {
		for (let i = 0; i < this.rendererData.globalSequencesFrames.length; ++i) {
			this.rendererData.globalSequencesFrames[i] += delta;
			if (this.rendererData.globalSequencesFrames[i] > this.model.GlobalSequences[i]) this.rendererData.globalSequencesFrames[i] = 0;
		}
	}
	updateNode(node) {
		const translationRes = this.interp.vec3(translation, node.node.Translation);
		const rotationRes = this.interp.quat(rotation, node.node.Rotation);
		const scalingRes = this.interp.vec3(scaling, node.node.Scaling);
		if (!translationRes && !rotationRes && !scalingRes) identity(node.matrix);
		else if (translationRes && !rotationRes && !scalingRes) fromTranslation(node.matrix, translationRes);
		else if (!translationRes && rotationRes && !scalingRes) mat4fromRotationOrigin(node.matrix, rotationRes, node.node.PivotPoint);
		else fromRotationTranslationScaleOrigin(node.matrix, rotationRes || defaultRotation, translationRes || defaultTranslation, scalingRes || defaultScaling, node.node.PivotPoint);
		if (node.node.Parent || node.node.Parent === 0) mul(node.matrix, this.rendererData.nodes[node.node.Parent].matrix, node.matrix);
		const billboardedLock = node.node.Flags & NodeFlags.BillboardedLockX || node.node.Flags & NodeFlags.BillboardedLockY || node.node.Flags & NodeFlags.BillboardedLockZ;
		if (node.node.Flags & NodeFlags.Billboarded) {
			transformMat4(tempTransformedPivotPoint, node.node.PivotPoint, node.matrix);
			if (node.node.Parent || node.node.Parent === 0) {
				getRotation(tempParentRotationQuat, this.rendererData.nodes[node.node.Parent].matrix);
				invert(tempParentRotationQuat, tempParentRotationQuat);
				mat4fromRotationOrigin(tempParentRotationMat, tempParentRotationQuat, tempTransformedPivotPoint);
				mul(node.matrix, tempParentRotationMat, node.matrix);
			}
			mat4fromRotationOrigin(tempCameraMat, this.rendererData.cameraQuat, tempTransformedPivotPoint);
			mul(node.matrix, tempCameraMat, node.matrix);
		} else if (billboardedLock) {
			transformMat4(tempTransformedPivotPoint, node.node.PivotPoint, node.matrix);
			copy$2(tempAxis, node.node.PivotPoint);
			if (node.node.Flags & NodeFlags.BillboardedLockX) tempAxis[0] += 1;
			else if (node.node.Flags & NodeFlags.BillboardedLockY) tempAxis[1] += 1;
			else if (node.node.Flags & NodeFlags.BillboardedLockZ) tempAxis[2] += 1;
			transformMat4(tempAxis, tempAxis, node.matrix);
			sub(tempAxis, tempAxis, tempTransformedPivotPoint);
			set$2(tempXAxis, 1, 0, 0);
			add$2(tempXAxis, tempXAxis, node.node.PivotPoint);
			transformMat4(tempXAxis, tempXAxis, node.matrix);
			sub(tempXAxis, tempXAxis, tempTransformedPivotPoint);
			set$2(tempCameraVec, -1, 0, 0);
			transformQuat(tempCameraVec, tempCameraVec, this.rendererData.cameraQuat);
			cross(tempCross0, tempAxis, tempCameraVec);
			cross(tempCross1, tempAxis, tempCross0);
			normalize$2(tempCross1, tempCross1);
			rotationTo(tempLockQuat, tempXAxis, tempCross1);
			mat4fromRotationOrigin(tempLockMat, tempLockQuat, tempTransformedPivotPoint);
			mul(node.matrix, tempLockMat, node.matrix);
		}
		for (const child of node.childs) this.updateNode(child);
	}
	findAlpha(geosetId) {
		const geosetAnim = this.rendererData.geosetAnims[geosetId];
		if (!geosetAnim || geosetAnim.Alpha === void 0) return 1;
		if (typeof geosetAnim.Alpha === "number") return geosetAnim.Alpha;
		const interpRes = this.interp.num(geosetAnim.Alpha);
		if (interpRes === null) return 1;
		return interpRes;
	}
	getTexCoordMatrix(layer) {
		if (typeof layer.TVertexAnimId === "number") {
			const anim = this.rendererData.model.TextureAnims[layer.TVertexAnimId];
			const translationRes = this.interp.vec3(translation, anim.Translation);
			const rotationRes = this.interp.quat(rotation, anim.Rotation);
			const scalingRes = this.interp.vec3(scaling, anim.Scaling);
			fromRotationTranslationScale(texCoordMat4, rotationRes || defaultRotation, translationRes || defaultTranslation, scalingRes || defaultScaling);
			set$3(texCoordMat3, texCoordMat4[0], texCoordMat4[1], 0, texCoordMat4[4], texCoordMat4[5], 0, texCoordMat4[12], texCoordMat4[13], 0);
			return texCoordMat3;
		} else return identifyMat3;
	}
	getLayerAlpha(layer) {
		return this.interp.animVectorVal(layer.Alpha ?? 1, 1);
	}
	setLayerProps(layer, textureID, geosetAlpha) {
		const texture = this.model.Textures[textureID];
		if (layer.Shading & LayerShading.TwoSided) this.gl.disable(this.gl.CULL_FACE);
		else this.gl.enable(this.gl.CULL_FACE);
		this.gl.uniform1f(this.shaderProgramLocations.discardAlphaLevelUniform, getLayerDiscardAlphaLevel(layer.FilterMode));
		this.gl.uniform1f(this.shaderProgramLocations.alphaUniform, geosetAlpha * this.getLayerAlpha(layer));
		if (layer.FilterMode === FilterMode.None) {
			this.gl.disable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.depthMask(true);
		} else if (layer.FilterMode === FilterMode.Transparent) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(true);
		} else if (layer.FilterMode === FilterMode.Blend) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.Additive) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.AddAlpha) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.Modulate) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.ZERO, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (layer.FilterMode === FilterMode.Modulate2x) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.DST_COLOR, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		}
		if (texture.Image) {
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[texture.Image]);
			this.gl.uniform1i(this.shaderProgramLocations.samplerUniform, 0);
			this.gl.uniform1f(this.shaderProgramLocations.replaceableTypeUniform, 0);
		} else if (texture.ReplaceableId === 1 || texture.ReplaceableId === 2) {
			this.gl.uniform3fv(this.shaderProgramLocations.replaceableColorUniform, this.rendererData.teamColor);
			this.gl.uniform1f(this.shaderProgramLocations.replaceableTypeUniform, texture.ReplaceableId);
		}
		if (layer.Shading & LayerShading.NoDepthTest) this.gl.disable(this.gl.DEPTH_TEST);
		if (layer.Shading & LayerShading.NoDepthSet) this.gl.depthMask(false);
		this.gl.uniformMatrix3fv(this.shaderProgramLocations.tVertexAnimUniform, false, this.getTexCoordMatrix(layer));
	}
	setLayerPropsHD(materialID, layers) {
		const baseLayer = layers[0];
		const textures = this.rendererData.materialLayerTextureID[materialID];
		const normalTextres = this.rendererData.materialLayerNormalTextureID[materialID];
		const ormTextres = this.rendererData.materialLayerOrmTextureID[materialID];
		const diffuseTextureID = textures[0];
		const diffuseTexture = this.model.Textures[diffuseTextureID];
		const normalTextureID = baseLayer?.ShaderTypeId === 1 ? normalTextres[0] : textures[1];
		const normalTexture = this.model.Textures[normalTextureID];
		const ormTextureID = baseLayer?.ShaderTypeId === 1 ? ormTextres[0] : textures[2];
		const ormTexture = this.model.Textures[ormTextureID];
		if (baseLayer.Shading & LayerShading.TwoSided) this.gl.disable(this.gl.CULL_FACE);
		else this.gl.enable(this.gl.CULL_FACE);
		this.gl.uniform1f(this.shaderProgramLocations.discardAlphaLevelUniform, getLayerDiscardAlphaLevel(baseLayer.FilterMode));
		if (baseLayer.FilterMode === FilterMode.None) {
			this.gl.disable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.depthMask(true);
		} else if (baseLayer.FilterMode === FilterMode.Transparent) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(true);
		} else if (baseLayer.FilterMode === FilterMode.Blend) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.depthMask(false);
		} else if (baseLayer.FilterMode === FilterMode.Additive) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (baseLayer.FilterMode === FilterMode.AddAlpha) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (baseLayer.FilterMode === FilterMode.Modulate) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.ZERO, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		} else if (baseLayer.FilterMode === FilterMode.Modulate2x) {
			this.gl.enable(this.gl.BLEND);
			this.gl.enable(this.gl.DEPTH_TEST);
			this.gl.blendFuncSeparate(this.gl.DST_COLOR, this.gl.SRC_COLOR, this.gl.ZERO, this.gl.ONE);
			this.gl.depthMask(false);
		}
		this.gl.activeTexture(this.gl.TEXTURE0);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[diffuseTexture.Image]);
		this.gl.uniform1i(this.shaderProgramLocations.samplerUniform, 0);
		if (baseLayer.Shading & LayerShading.NoDepthTest) this.gl.disable(this.gl.DEPTH_TEST);
		if (baseLayer.Shading & LayerShading.NoDepthSet) this.gl.depthMask(false);
		if (typeof baseLayer.TVertexAnimId === "number") {
			const anim = this.rendererData.model.TextureAnims[baseLayer.TVertexAnimId];
			const translationRes = this.interp.vec3(translation, anim.Translation);
			const rotationRes = this.interp.quat(rotation, anim.Rotation);
			const scalingRes = this.interp.vec3(scaling, anim.Scaling);
			fromRotationTranslationScale(texCoordMat4, rotationRes || defaultRotation, translationRes || defaultTranslation, scalingRes || defaultScaling);
			set$3(texCoordMat3, texCoordMat4[0], texCoordMat4[1], 0, texCoordMat4[4], texCoordMat4[5], 0, texCoordMat4[12], texCoordMat4[13], 0);
			this.gl.uniformMatrix3fv(this.shaderProgramLocations.tVertexAnimUniform, false, texCoordMat3);
		} else this.gl.uniformMatrix3fv(this.shaderProgramLocations.tVertexAnimUniform, false, identifyMat3);
		this.gl.activeTexture(this.gl.TEXTURE1);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[normalTexture.Image]);
		this.gl.uniform1i(this.shaderProgramLocations.normalSamplerUniform, 1);
		this.gl.activeTexture(this.gl.TEXTURE2);
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.rendererData.textures[ormTexture.Image]);
		this.gl.uniform1i(this.shaderProgramLocations.ormSamplerUniform, 2);
		this.gl.uniform3fv(this.shaderProgramLocations.replaceableColorUniform, this.rendererData.teamColor);
	}
};
//#endregion
exports.ModelRenderer = ModelRenderer;
Object.defineProperty(exports, "blp", {
	enumerable: true,
	get: function() {
		return blpimage_exports;
	}
});
exports.createBLPImageDecoder = createBLPImageDecoder;
exports.decodeBLP = decode;
exports.generateMDL = generate;
exports.generateMDX = generate$1;
exports.getBLPImageData = getImageData;
Object.defineProperty(exports, "model", {
	enumerable: true,
	get: function() {
		return model_exports;
	}
});
exports.parseMDL = parse;
exports.parseMDX = parse$1;

//# sourceMappingURL=war3-model.cjs.map