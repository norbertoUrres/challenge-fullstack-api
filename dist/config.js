"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'covid-check',
    MONGO_USER: process.env.MONGO_USER || 'nurres',
    MONGO_PASS: process.env.MONGO_PASS || '5PSwvEEl7UyN91ZG',
    PORT: process.env.PORT || 3000
};
