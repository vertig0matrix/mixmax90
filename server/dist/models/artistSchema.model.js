'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const artistSchema = new mongoose_1.Schema({
    external_urls: {
        spotify: { type: String },
    },
    href: { type: String },
    id: { type: String },
    name: { type: String },
    type: { type: String },
    uri: { type: String },
});
exports.default = { artistSchema };
