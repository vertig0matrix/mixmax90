'use strict'

import { Schema } from 'mongoose';

export interface Image {
    height: number,
    url: string,
    width: number,
}
const imageSchema = new Schema <Image> ({
    height: {type: Number},
    url: {type: String},
    width: {type: Number},
});

export default imageSchema;