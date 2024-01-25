// TODO implement typescript
// TODO feature: logic to delete saved mixtape
import { Request, Response } from 'express'
import generatedPlaylistModel from '../models/generatedPlaylistModel.models'
import db from '../index.model'

export async function getPlaylist(req: Request, res: Response): Promise<void> {
  try {
    const newTopTracks = await generatedPlaylistModel.find({})
    res.status(200).send(newTopTracks)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export async function savePlaylist(req: Request, res: Response): Promise<void> {
  try {
    const tracks = req.body;
<<<<<<< HEAD
    console.log(tracks)
    await generatedPlaylistModel.create({ tracks }) // {tracks:[...]}
=======
    await topTracksModel.create({ tracks })
>>>>>>> parent of 1d5d8ce (fix: track schema to include album)
    console.log('saved in the db 📩')
    res.status(201).json({ msg: 'tracks added' });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

