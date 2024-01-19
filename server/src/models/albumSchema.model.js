const { Schema } = require('mongoose');

const imageSchema = require('./imageSchema.model');
const artistSchema = require('./artistSchema.model');

const albumSchema = new Schema({
    album_type: String,
    artists: [artistSchema],
    external_urls: {
        spotify: String,
    },
    href: String,
    id: String,
    images: [imageSchema],
    is_playable: Boolean,
    name: String,
    release_date: String,
    release_date_precision: String,
    total_tracks: Number,
    type: String,
    uri: String,
})

module.exports = albumSchema;