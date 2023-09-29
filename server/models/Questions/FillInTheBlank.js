const mongoose = require('mongoose');

const fillInTheBlanksSchema = new mongoose.Schema({
	type: {
		type: String,
		default: 'fillInTheBlanks',
	},
	questionText: String,
	correctAnswer: String,
});

const FillInTheBlanks = mongoose.model('FillInTheBlanks', fillInTheBlanksSchema);

module.exports = FillInTheBlanks;
