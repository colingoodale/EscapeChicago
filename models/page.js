const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  _id: { type: Number },
  imageURL: { type: String },
  paragraph: { type: String },
  itemCheck: { type: String },
  itemId: { type: Number },
  options: [{ text: String, id: Number }]
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
