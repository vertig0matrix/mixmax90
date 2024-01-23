require("dotenv").config();
const mongoose = require("mongoose");
const topTracksModel = require("./models/topTracksModel.models");

describe("DB Connection", () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(process.env.MONGO_URL)
    });
    afterAll(async () => {
        await connection.close();
    });

    test('Insert a Playlist', async () => {

        const playlist = db.collection('playlist')
        const mockTrack = {
            tracks: [
                {
                    name: 'This is a new track',
                },
            ],
            _id: 'some-user-id'
        };
        console.log(playlist)
        await db.insertOne(mockTrack);
        const insertedTrack = await playlist.findOne({ _id: 'some-user-id' });
        console.log(savedTopTrack);
        expect(insertedTrack).toBe(mockTrack);
    });
});