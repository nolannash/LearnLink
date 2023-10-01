const mongoose = require('mongoose');
const BaseQuestion = require('./BaseQuestion'); // Import the base schema

const TrueFalseSchema = new mongoose.Schema({
	question: String,
	answer: Boolean,
});

// Create and export the model
module.exports = BaseQuestion.discriminator('TrueFalse', TrueFalseSchema);
