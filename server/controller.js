const Collection = require("./models");

async function getCollection(req, res) {
  try {
    const collection = await Collection.find();
    res.status(200).json(collection);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

async function addToCollection(req, res) {
  try {
    console.log("in post");
    const { title, contents } = req.body;
    const newItem = await Collection.create({
      title,
      contents,
    });
    res.status(201).send(newItem);
  } catch (err) {
    console.log(err);
    res.status(500); //<-server error>
  }
}

async function updateItem() {}

async function deleteItem() {}

module.exports = { getCollection, addToCollection, deleteItem, updateItem };
