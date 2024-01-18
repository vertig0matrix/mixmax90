// TODO  delete commented code
// TODO create contoller folder and routes folder
// TODO separate routes and controller logic 
// TODO logic to delete saved mixtape
// TODO implement typescript

const TopTracks = require("./models/topTracksModel.models");

async function addTopTracks(req, res) {
  try {
    const tracks = req.body;
    await TopTracks.create({tracks}) // {tracks:tracks}
     res.status(201).json({msg:'tracks added'});
  } catch (error) {
     console.error(error);
     res.status(500).send("Internal Server Error");
    }
}  
  
async function getTopTracks(req, res) {
  try {
    console.log("in get");
    // const tracks = res.body;
    
    // const newTopTracks = await TopTracks.find({ tracks }) // {tracks:tracks}
    const newTopTracks = await TopTracks.find({ }) // {tracks:tracks}
    res.send(newTopTracks)
    console.log('in getTop',newTopTracks)
    res.status(201)
    // res.status(201).json({msg:'tracks added'});
  } catch (error) {
     console.error(error);
     res.status(500).send("Internal Server Error");
    }
}  
  
async function reloadTopTracks() {
    try {
      //clicking 'reload' overwrites current mix collection
    } catch (error) {
    console.error(err);
    res.status(500).send("Internal Server Error");    
  }
}

async function addToCollection(req, res) {
  try {
    console.log("in post");
    const { title, contents } = req.body;
    const newItem = await Collection.create({
      title,
      contents,
    });
    res.status(201).send(newItem);
  } catch (err) {
    console.log(err);
    res.status(500); //<-server error>
  }
}


module.exports = { addTopTracks, getTopTracks, addToCollection };

