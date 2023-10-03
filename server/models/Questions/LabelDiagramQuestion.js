const mongoose = require("mongoose");
const BaseQuestion = require("./BaseQuestion");

const LabelDiagramSchema = new mongoose.Schema({
  imageLink: String,
  labels: [[mongoose.Schema.Types.Mixed]],
});

module.exports = BaseQuestion.discriminator("LabelDiagram", LabelDiagramSchema);
