"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema } = require('mongoose');
const imageSchema = new Schema({
    height: Number,
    url: String,
    width: Number,
});
module.exports = imageSchema;
