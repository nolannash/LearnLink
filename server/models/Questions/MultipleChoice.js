const mongoose = require('mongoose');

const multipleChoiceSchema = new mongoose.Schema({
	type: {
		type: String,
		default: 'multipleChoice',
	},
	questionText: String,
	options: [
		{
			text: String,
			isCorrect: Boolean,
		},
	],
	imageUrl: String,
});

const MultipleChoice = mongoose.model('MultipleChoice', multipleChoiceSchema);

module.exports = MultipleChoice;
