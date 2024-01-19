// TODO fix: server overload issue on get 
// TODO implement typescript
// TODO feature: logic to delete saved mixtape

const TopTracks = require("../models/topTracksModel.models");


async function getPlaylist (req, res) {
  try {
    const newTopTracks = await TopTracks.find({}) // {tracks:tracks}
    res.status(200).send(newTopTracks)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

async function savePlaylist (req, res) {
  try {
    const tracks = req.body;
    await TopTracks.create({ tracks })
    console.log('saved in the db')
    res.status(201).json({ msg: 'tracks added' });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = { savePlaylist, getPlaylist };

