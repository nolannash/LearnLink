const mongoose = require('mongoose');

const dragAndDropSchema = new mongoose.Schema({
	type: {
		type: String,
		default: 'dragAndDrop',
	},
	instruction: String,
	items: [
		{
			text: String,
			correctPosition: Number,
		},
	],
	dropzones: [String],
});

const DragAndDrop = mongoose.model('DragAndDrop', dragAndDropSchema);

module.exports = DragAndDrop;
