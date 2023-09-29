const MultipleChoice = require('./multipleChoiceModel');
const FillInTheBlanks = require('./fillInTheBlanksModel');
const DragAndDrop = require('./dragAndDropModel');

module.exports = {
	MultipleChoice,
	FillInTheBlanks,
	DragAndDrop,
};

// IMPORT: const { MultipleChoice, FillInTheBlanks, DragAndDrop } = require('./path-to-questions-folder');
// you wont need to path to the specific model, just the questions folder
