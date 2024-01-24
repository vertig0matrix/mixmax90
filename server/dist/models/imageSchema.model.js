'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    height: { type: Number },
    url: { type: String },
    width: { type: Number },
});
exports.default = imageSchema;
