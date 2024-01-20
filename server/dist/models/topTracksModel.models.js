"use strict";
// TODO implement typescript
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trackSchema = require("./trackSchema.model");
const topTracksSchema = new Schema({
    tracks: [trackSchema]
});
const topTracksModel = mongoose.model("Album", topTracksSchema);
module.exports = topTracksModel;
