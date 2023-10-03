const mongoose = require('mongoose');
const BaseQuestion = require('./BaseQuestion');

const OrderItemsSchema = new mongoose.Schema({
	items: [String],
});

module.exports = BaseQuestion.discriminator('OrderItems', OrderItemsSchema);
