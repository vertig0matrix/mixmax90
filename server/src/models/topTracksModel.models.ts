// TODO implement typescript
'use strict'

import mongoose, { Schema } from 'mongoose';
import trackSchema, { Track } from './trackSchema.model'

export interface TopTracks {
  _id: string,
  tracks: Track[],
  __v: number
}

export const topTracksSchema: Schema = new Schema<TopTracks>({
  tracks: [trackSchema]
})

const topTracksModel = mongoose.model<TopTracks>("Album", topTracksSchema);

export default topTracksModel;
