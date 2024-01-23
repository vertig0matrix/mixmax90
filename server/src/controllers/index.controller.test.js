require("dotenv").config();
const express = require('express')
const { default: router } = require('../router');
const request = require('supertest');
const { default: topTracksModel } = require('../models/topTracksModel.models')
const mongoose = require("mongoose");



describe("Integration test", () => {
    const app = express();
    app.use(express.json());
    app.use(router);

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL);
    });
    afterEach(async () => {
        // await topTracksModel.deleteMany()
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("it should save a track to the database", async () => {
        const mockTrack = {
            tracks: [
                {
                    name: 'This is a new track',
                },
            ],
            _id: "65aebd32e1b9220bf42a831b"
        };
        await request(app).post('/toptracks').send(mockTrack)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        const track = await topTracksModel.find()

        console.log(track.body)
        console.log(track[0].tracks)
        console.log(track[0].tracks[0])
        console.log(track[0].tracks[0].name)
        console.log(track[0].tracks[0].artists)
        expect(track[0].tracks[0].name).toBe(mockTrack.tracks[0].name);
    });
});