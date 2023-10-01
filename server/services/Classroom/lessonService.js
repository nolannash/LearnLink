const Lesson = require('../../models/Classroom/Lesson');

// 1. Create Lesson
const createLesson = async (data) => {
	const newLesson = new Lesson(data);
	await newLesson.save();
	return newLesson;
};

// 2. Update Lesson
const updateLesson = async (id, data) => {
	const updatedLesson = await Lesson.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	});
	return updatedLesson;
};

// 3. Delete Lesson
const deleteLesson = async (id) => {
	await Lesson.findByIdAndDelete(id);
};

// 4. Get Lesson
const getLesson = async (id) => {
	const lesson = await Lesson.findById(id).populate('questions');
	return lesson;
};

// 5. List Lessons
const listLessons = async (query = {}) => {
	const lessons = await Lesson.find(query).populate('questions');
	return lessons;
};

// 6. Add Question to Lesson
const addQuestionToLesson = async (lessonId, questionData) => {
	const lesson = await Lesson.findById(lessonId);
	lesson.questions.push(questionData);
	await lesson.save();
	return lesson;
};

// 7. Remove Question from Lesson
const removeQuestionFromLesson = async (lessonId, questionId) => {
	const lesson = await Lesson.findById(lessonId);
	lesson.questions.pull(questionId);
	await lesson.save();
	return lesson;
};

// Exports
module.exports = {
	createLesson,
	updateLesson,
	deleteLesson,
	getLesson,
	listLessons,
	addQuestionToLesson,
	removeQuestionFromLesson,
};
