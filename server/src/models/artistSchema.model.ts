'use strict';
import { Schema } from 'mongoose';

export interface Artist {
    external_urls: {
        spotify: string,
    },
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string,
};

const artistSchema: Schema = new Schema<Artist>({
    external_urls: {
        spotify: { type: String },
    },
    href: { type: String },
    id: { type: String },
    name: { type: String },
    type: { type: String },
    uri: { type: String },
});

export default artistSchema;
