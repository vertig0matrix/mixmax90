'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const albumSchema_model_1 = __importDefault(require("./albumSchema.model"));
const artistSchema_model_1 = __importDefault(require("./artistSchema.model"));
const trackSchema = new mongoose_1.Schema({
    album: { type: albumSchema_model_1.default },
    artists: { type: [artistSchema_model_1.default] },
    disc_number: { type: Number },
    duration_ms: { type: Number },
    explicit: { type: Boolean },
    external_ids: {
        isrc: { type: String },
    },
    external_urls: {
        spotify: { type: String },
    },
    href: { type: String },
    id: { type: String },
    is_local: { type: Boolean },
    is_playable: { type: Boolean },
    name: { type: String },
    popularity: { type: Number },
    preview_url: { type: String },
    track_number: { type: Number },
    type: { type: String },
    uri: { type: String },
});
exports.default = trackSchema;
