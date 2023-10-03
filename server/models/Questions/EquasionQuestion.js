const mongoose = require('mongoose');
const BaseQuestion = require('./BaseQuestion');

const EquationSchema = new mongoose.Schema({
	equation: String,
	answer: Number,
	steps: [[String]], // An array of arrays to hold multiple equations and their respective answers
});

module.exports = BaseQuestion.discriminator('Equation', EquationSchema);
