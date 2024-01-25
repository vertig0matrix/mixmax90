// TODO implement typescript
'use strict'

import mongoose, { Schema } from 'mongoose';
import trackSchema, { Track } from './trackSchema.model'

export interface GeneratedPlaylist {
  _id: string,
  name: string
  tracks: Track[],
  __v: number
}

export const generatedPlaylistSchema: Schema = new Schema<GeneratedPlaylist>({
  tracks: [trackSchema]
})

const generatedPlaylistModel = mongoose.model<GeneratedPlaylist>("Generated Playlists", generatedPlaylistSchema);

export default generatedPlaylistModel;
