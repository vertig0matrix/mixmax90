require("dotenv").config();
const mongoose = require("mongoose");
const topTracksModel = require("./models/topTracksModel.models");

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL)
    });

    test("Retrieve article by Id", async () => {
        const id = "5ff2454f94eeee0a7acb5c30";
        const topTracks = await topTracksModel.default.find({});
        console.log(topTracks[0].tracks[0].name);
        expect(topTracks[0].tracks[0].name).toBe("This is another post example");
    });

    test('Insert a Playlist', async () => {
        const topTrackData = {
            tracks: [
                {
                    name: 'This is a new track',
                },
            ],
        };
        const newTopTrack = new topTracksModel.default(topTrackData);
        const savedTopTrack = await newTopTrack.save();
        expect(savedTopTrack.tracks[0].name).toBe('This is a new track');

        afterAll(() => {
            mongoose.disconnect();
        });
    });


});