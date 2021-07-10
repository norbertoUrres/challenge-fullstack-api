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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const covidCheckCtrl = __importStar(require("./CovidCheck.controller"));
router.get('/covid/checks', covidCheckCtrl.getChecks);
router.get('/covid/checks/:id', covidCheckCtrl.getCheck);
router.get('/covid/search', covidCheckCtrl.searchChecks);
router.get('/covid/countries', covidCheckCtrl.getCountries);
router.post('/covid/checks', covidCheckCtrl.createCheck);
router.put('/covid/checks/:id', covidCheckCtrl.updateCheck);
router.delete('/covid/checks/:id', covidCheckCtrl.deleteCheck);
router.get('/covid/stats', covidCheckCtrl.getStats);
exports.default = router;
