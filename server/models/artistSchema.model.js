const artistSchema = new Schema({
    external_urls: {
        spotify: String,
    },
    href: String,
    id: String,
    name: String,
    type: String,
    uri: String,
});

module.exports = Artist;
