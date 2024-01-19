const { Schema } = require('mongoose');

const albumSchema = require('./albumSchema.model');
const artistSchema = require('./artistSchema.model');

const trackSchema = new Schema({
    album: { albumSchema },
    artists: [artistSchema],
    disc_number: Number,
    duration_ms: Number,
    explicit: Boolean,
    external_ids: {
        isrc: String,
    },
    external_urls: {
        spotify: String,
    },
    href: String,
    id: String,
    is_local: Boolean,
    is_playable: Boolean,
    name: String,
    popularity: Number,
    preview_url: String,
    track_number: Number,
    type: String,
    uri: String,
})

module.exports = trackSchema;