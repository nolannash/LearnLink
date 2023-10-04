const mongoose = require("mongoose");
const BaseQuestion = require("./BaseQuestion");

const MultipleBlanksSchema = new mongoose.Schema({
  texts: [String],
  blanks: [String],
});

module.exports = BaseQuestion.discriminator(
  "MultipleBlanks",
  MultipleBlanksSchema
);
