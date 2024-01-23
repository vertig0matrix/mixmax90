require("dotenv").config();
const mongoose = require("mongoose");
const topTracksModel = require("./models/topTracksModel.models");

describe("DB Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL)
    });
    test('Insert a Playlist', async () => {
        const topTrackData = {
            tracks: [
                {
                    name: 'This is a new track',
                },
            ],
        };
        const savedTopTrack = await topTracksModel.default.create(topTrackData);
        console.log(savedTopTrack);
        expect(savedTopTrack.tracks[0].name).toBe('This is a new track');
    });
    afterAll(() => {
        mongoose.disconnect();
    });
});