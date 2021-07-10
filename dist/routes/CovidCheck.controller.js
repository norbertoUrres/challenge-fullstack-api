"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountries = exports.searchChecks = exports.getStats = exports.deleteCheck = exports.updateCheck = exports.createCheck = exports.getCheck = exports.getChecks = void 0;
const CovidCheckHelper = __importStar(require("./CovidCheck.helper"));
const CovidCheck_1 = __importDefault(require("./CovidCheck"));
const getChecks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aCovidChecks = yield CovidCheck_1.default.find();
    res.json(aCovidChecks);
});
exports.getChecks = getChecks;
const getCheck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oCovidCheck = yield CovidCheck_1.default.findById(req.params.id);
    if (!oCovidCheck)
        return res.status(204).json();
    res.json(oCovidCheck);
});
exports.getCheck = getCheck;
const createCheck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oCovidCheck = new CovidCheck_1.default(req.body);
    oCovidCheck.result = CovidCheckHelper.getDnaResult(oCovidCheck.dna);
    const oNewCovidCheck = yield oCovidCheck.save();
    res.json(oNewCovidCheck);
});
exports.createCheck = createCheck;
const updateCheck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oCovidCheck = yield CovidCheck_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!oCovidCheck)
        return res.status(204).json();
    res.json(oCovidCheck);
});
exports.updateCheck = updateCheck;
const deleteCheck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const oCovidCheck = yield CovidCheck_1.default.findByIdAndDelete(req.params.id);
    if (!oCovidCheck)
        return res.status(204).json();
    res.json(oCovidCheck);
});
exports.deleteCheck = deleteCheck;
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const iHealthyChecks = yield CovidCheck_1.default.countDocuments({ result: 'Sano' });
    const iInfectedChecks = yield CovidCheck_1.default.countDocuments({ result: 'Infectado' });
    const iImmuneChecks = yield CovidCheck_1.default.countDocuments({ result: 'Inmune' });
    res.json({
        healthy: iHealthyChecks,
        infected: iInfectedChecks,
        immune: iImmuneChecks
    });
});
exports.getStats = getStats;
const searchChecks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aCovidChecks = yield CovidCheck_1.default.find().where(req.query.key).all([req.query.value]);
    res.json(aCovidChecks);
});
exports.searchChecks = searchChecks;
const getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aCountries = yield CovidCheck_1.default.find().distinct('country');
    res.json(aCountries);
});
exports.getCountries = getCountries;
