'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const imageSchema_model_1 = __importDefault(require("./imageSchema.model"));
const artistSchema_model_1 = __importDefault(require("./artistSchema.model"));
const albumSchema = new mongoose_1.Schema({
    album_type: { type: String },
    artists: { type: [artistSchema_model_1.default] },
    external_urls: {
        spotify: { type: String },
    },
    href: { type: String },
    id: { type: String },
    images: { type: [imageSchema_model_1.default] },
    is_playable: { type: Boolean },
    name: { type: String },
    release_date: { type: String },
    release_date_precision: { type: String },
    total_tracks: { type: Number },
    type: { type: String },
    uri: { type: String },
});
exports.default = albumSchema;
