const mongoose = require('mongoose');
const BaseQuestion = require('./BaseQuestion'); // Import the base schema

const MultipleChoiceSchema = new mongoose.Schema({
	question: String,
	answer: mongoose.Schema.Types.Mixed,
	options: [String],
});

// Create and export the model
module.exports = BaseQuestion.discriminator('MultipleChoice', MultipleChoiceSchema);
