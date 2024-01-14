// const mongoose = require("mongoose");

// const collectionSchema = new mongoose.Schema({
//   title: String,
//   contents: [],
//   // date: Date,
//   // venue: String,
// });

// const collectionModel = mongoose.model("collection", collectionSchema);

// module.exports = collectionModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const trackSchema = new Schema({
//   artists: [
//     [
//       {
//         // Define artist properties here
//       },
//     ],
//   ],
//   href: String,
//   id: String,
//   name: String,
//   preview_url: String,
//   uri: String,
// });

const contentSchema = new Schema({
  artists: [
    [
      {
        artistProperty1: String,
        artistProperty2: String,
      },
    ],
  ],
  href: String,
  id: String,
  name: String,
  preview_url: String,
  uri: String,
});

const collectionSchema = new Schema({
  title: String,
  content: [contentSchema],
});

const collectionModel = mongoose.model("collectionModel", collectionSchema);

module.exports = collectionModel;
