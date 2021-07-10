"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const covidCheckSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    country: {
        type: String,
        require: true,
        trim: true
    },
    dna: [{
            type: String,
            require: true,
            trim: true
        }],
    result: String
}, {
    timestamps: true
});
exports.default = mongoose_1.model('covidCheckSchema', covidCheckSchema);
