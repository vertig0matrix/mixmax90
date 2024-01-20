'use strict';

import { Schema } from 'mongoose';
import albumSchema, { Album } from './albumSchema.model';
import artistSchema, { Artist } from './artistSchema.model';

interface Track {
    album: Album,
    artists: Artist[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: {
        isrc: string,
    },
    external_urls: {
        spotify: string,
    },
    href: string,
    id: string,
    is_local: boolean,
    is_playable: boolean,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
}

const trackSchema = new Schema({
    album: { albumSchema },
    artists: [artistSchema],
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
})

export default trackSchema;