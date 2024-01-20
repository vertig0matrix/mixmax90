// TODO implement typescript
'use strict'

import mongoose, { Schema } from 'mongoose';
import trackSchema from './trackSchema.model'


const topTracksSchema = new Schema({
  tracks: [trackSchema]
})

const topTracksModel = mongoose.model("Album", topTracksSchema);

export default topTracksModel;
