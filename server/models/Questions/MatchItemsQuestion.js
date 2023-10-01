const mongoose = require('mongoose');
const BaseQuestion = require('./BaseQuestion');

const MatchItemsSchema = new mongoose.Schema({
	pairs: [[String]],
});

module.exports = BaseQuestion.discriminator('MatchItems', MatchItemsSchema);
