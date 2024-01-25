"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePlaylist = exports.getPlaylist = void 0;
const generatedPlaylistModel_models_1 = __importDefault(require("../models/generatedPlaylistModel.models"));
function getPlaylist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newTopTracks = yield generatedPlaylistModel_models_1.default.find({});
            res.status(200).send(newTopTracks);
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    });
}
exports.getPlaylist = getPlaylist;
;
function savePlaylist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tracks = req.body;
            console.log(tracks);
            yield generatedPlaylistModel_models_1.default.create({ tracks }); // {tracks:[...]}
            console.log('saved in the db 📩');
            res.status(201).json({ msg: 'tracks added' });
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    });
}
exports.savePlaylist = savePlaylist;
;
