const mongoose = require("mongoose");
const BaseQuestion = require("./BaseQuestion");

const ImageSelectSchema = new mongoose.Schema({
  prompt: String,
  images: [String],
});

module.exports = BaseQuestion.discriminator("ImageSelect", ImageSelectSchema);
