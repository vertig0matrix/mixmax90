// TODO delete unnecessary code / comments
// TODO create models folder
// TODO separate db initialiser from models
// TODO create models folder for document schema
// TODO create file for each schema
// TODO implement typescript


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


// const contentSchema = new Schema({
//   artists: [
//     [
//       {
//         artistProperty1: String,
//         artistProperty2: String,
//       },
//     ],
//   ],
//   href: String,
//   id: String,
//   name: String,
//   preview_url: String,
//   uri: String,
// });

// const collectionSchema = new Schema({
//   title: String,
//   content: [contentSchema],
// });

// const collectionModel = mongoose.model("collectionModel", collectionSchema);

// module.exports = collectionModel; 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  external_urls: {
    spotify: String,
  },
  href: String,
  id: String,
  name: String,
  type: String,
  uri: String,
});

const imageSchema = new Schema({
  height: Number,
  url: String,
  width: Number,
});

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

const topTracksSchema = new Schema({
  tracks: [trackSchema]
})

// const collectionSchema = new Schema({
//   collectionItem: {mixSchema}
// })

const topTracksModel = mongoose.model("Album", topTracksSchema);

module.exports = topTracksModel;

// const mongoose = require("mongoose");

// const artistSchema = new mongoose.Schema({
//   external_urls: {
//     spotify: {
//       type: String,
//       required: true,
//     },
//   },
//   href: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   uri: {
//     type: String,
//     required: true,
//   },
// });

// const artistsSchema = new mongoose.Schema({
//   artists: [artistSchema],
// });

// const Artists = mongoose.model("Artists", artistsSchema);

// module.exports = Artists;
