const {
	BaseQuestion,
	EquasionQuestion,
	ImageSelectQuestion,
	LabelDiagramQuestion,
	MatchItemsQuestion,
	MultipleBlanksQuestion,
	MultipleChoiceQuestion,
	OrderItemsQuestion,
	TrueFalseQuestion,
} = require('../../models/Questions');

// Create and Validate Question
const createAndValidateQuestion = async (data) => {
	let QuestionModel;

	switch (data.type) {
		case 'ImageSelect':
			QuestionModel = ImageSelectQuestion;
			break;
		case 'LabelDiagram':
			QuestionModel = LabelDiagramQuestion;
			break;
		case 'MatchItems':
			QuestionModel = MatchItemsQuestion;
			break;
		case 'MultipleBlanks':
			QuestionModel = MultipleBlanksQuestion;
			break;
		case 'MultipleChoice':
			QuestionModel = MultipleChoiceQuestion;
			break;
		case 'OrderItems':
			QuestionModel = OrderItemsQuestion;
			break;
		case 'TrueFalse':
			QuestionModel = TrueFalseQuestion;
			break;
		case 'Equasion':
			QuestionModel = EquasionQuestion;
			break;
		// ... add other case statements for other question types
		default:
			QuestionModel = BaseQuestion;
	}

	const newQuestion = new QuestionModel(data);

	// Validate the question
	const validationError = newQuestion.validateSync();
	if (validationError) {
		throw new Error('Validation failed');
	}

	return newQuestion.toObject(); // Return the plain JavaScript object
};

// 2. Update Question
const updateQuestion = async (id, data) => {
	const updatedQuestion = await BaseQuestion.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	});
	return updatedQuestion;
};

// 3. Delete Question
const deleteQuestion = async (id) => {
	await BaseQuestion.findByIdAndDelete(id);
};

// 4. Get Question
const getQuestion = async (id) => {
	const question = await BaseQuestion.findById(id);
	return question;
};

// 5. List Questions
const listQuestions = async (query = {}) => {
	const questions = await BaseQuestion.find(query);
	return questions;
};

const hydrateQuestions = (questions) => {
	return questions.map((questionData) => {
		let QuestionModel;

		switch (questionData.type) {
			case 'ImageSelect':
				QuestionModel = ImageSelectQuestion;
				break;
			case 'LabelDiagram':
				QuestionModel = LabelDiagramQuestion;
				break;
			case 'MatchItems':
				QuestionModel = MatchItemsQuestion;
				break;
			case 'MultipleBlanks':
				QuestionModel = MultipleBlanksQuestion;
				break;
			case 'MultipleChoice':
				QuestionModel = MultipleChoiceQuestion;
				break;
			case 'OrderItems':
				QuestionModel = OrderItemsQuestion;
				break;
			case 'TrueFalse':
				QuestionModel = TrueFalseQuestion;
				break;
			case 'Equasion':
				QuestionModel = EquasionQuestion;
				break;
			default:
				QuestionModel = BaseQuestion;
		}

		return new QuestionModel(questionData);
	});
};

module.exports = {
	hydrateQuestions,
	createAndValidateQuestion,
	updateQuestion,
	deleteQuestion,
	getQuestion,
	listQuestions,
};
