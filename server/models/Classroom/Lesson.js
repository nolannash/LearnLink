const mongoose = require("mongoose");
const BaseQuestionSchema = require("../Questions/BaseQuestion").schema;

const lessonSchema = new mongoose.Schema({
  assignmentName: { type: String, required: true },
  topic: { type: String, required: true },
  assignedOn: { type: Date, default: Date.now },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  questions: [BaseQuestionSchema], // Embed questions directly
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
