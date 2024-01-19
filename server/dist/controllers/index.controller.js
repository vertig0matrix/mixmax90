"use strict";
// TODO fix: server overload issue on get 
// TODO implement typescript
// TODO feature: logic to delete saved mixtape
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TopTracks = require("../models/topTracksModel.models");
function getPlaylist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newTopTracks = yield TopTracks.find({}); // {tracks:tracks}
            res.status(200).send(newTopTracks);
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    });
}
;
function savePlaylist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tracks = req.body;
            yield TopTracks.create({ tracks });
            console.log('saved in the db');
            res.status(201).json({ msg: 'tracks added' });
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    });
}
;
module.exports = { savePlaylist, getPlaylist };
