const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: { type: Number },
    name: { type: String },
    imageURL: { type: String },
    desc: { type: String },
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;