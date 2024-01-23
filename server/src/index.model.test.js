require("dotenv").config();
const mongoose = require("mongoose");
const { topTracksSchema } = require("./models/topTracksModel.models");

describe("DB Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL)
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Insert and Find a Playlist', async () => {
        const playlist = mongoose.model('playlist', topTracksSchema)
        const mockTrack = {
            tracks: [
                {
                    name: 'This is a new track',
                },
            ],
            _id: "65aebd32e1b9220bf42a831b"
        };
        console.log(playlist)
        await playlist.create(mockTrack);
        const insertedTrack = await playlist.findOne({ _id: "65aebd32e1b9220bf42a831b" });
        console.log(insertedTrack.tracks[0].name);
        expect(insertedTrack.tracks[0].name).toBe(mockTrack.tracks[0].name);
    });
});