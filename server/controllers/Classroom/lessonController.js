const Lesson = require('../models/Lesson');

exports.createLesson = async (req, res) => {
	try {
		const newLesson = new Lesson(req.body);
		await newLesson.save();
		res.status(201).json({
			status: 'success',
			data: {
				lesson: newLesson,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.createQuestionInLesson = async (req, res) => {
	try {
		const lessonId = req.params.lessonId; // assuming you pass the lesson ID in the URL
		const newQuestion = new BaseQuestion(req.body);
		await newQuestion.save();

		const lesson = await Lesson.findById(lessonId);
		lesson.questions.push(newQuestion._id);
		await lesson.save();

		res.status(201).json({
			status: 'success',
			data: {
				question: newQuestion,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};
