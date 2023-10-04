const mongoose = require('mongoose');
const BaseQuestionSchema = require('../Questions/BaseQuestion').schema;

const lessonSchema = new mongoose.Schema({
	assignmentName: { type: String, required: true },
	topic: { type: String, required: true },
	assignedOn: { type: Date, default: Date.now },
	startDate: { type: Date, required: false },
	endDate: { type: Date, required: false },
	duration: { type: Number, required: false },
	questions: [BaseQuestionSchema], // Embed questions directly
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
