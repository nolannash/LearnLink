const Classroom = require('../../models/Classroom/Classroom');

// 1. Create Classroom
const createClassroom = async (data) => {
	const newClassroom = new Classroom(data);
	await newClassroom.save();
	return newClassroom;
};

// 2. Update Classroom
const updateClassroom = async (id, data) => {
	const updatedClassroom = await Classroom.findByIdAndUpdate(id, data, {
		new: true,
		runValidators: true,
	});
	return updatedClassroom;
};

// 3. Delete Classroom
const deleteClassroom = async (id) => {
	await Classroom.findByIdAndDelete(id);
};

// 4. Get Classroom
const getClassroom = async (id) => {
	const classroom = await Classroom.findById(id);
	return classroom;
};

// 5. List Classrooms
const listClassrooms = async (query = {}) => {
	const classrooms = await Classroom.find(query);
	return classrooms;
};

// 6. Add Student to Classroom
const addStudentToClassroom = async (classroomId, studentId) => {
	const classroom = await Classroom.findById(classroomId);
	classroom.students.push(studentId);
	await classroom.save();
	return classroom;
};

// 7. Remove Student from Classroom
const removeStudentFromClassroom = async (classroomId, studentId) => {
	const classroom = await Classroom.findById(classroomId);
	classroom.students.pull(studentId);
	await classroom.save();
	return classroom;
};

// 8. Add Lesson to Classroom
const addLessonToClassroom = async (classroomId, lessonId) => {
	const classroom = await Classroom.findById(classroomId);
	classroom.lessons.push(lessonId);
	await classroom.save();
	return classroom;
};

// 9. Remove Lesson from Classroom
const removeLessonFromClassroom = async (classroomId, lessonId) => {
	const classroom = await Classroom.findById(classroomId);
	classroom.lessons.pull(lessonId);
	await classroom.save();
	return classroom;
};

// Exports
module.exports = {
	createClassroom,
	updateClassroom,
	deleteClassroom,
	getClassroom,
	listClassrooms,
	addStudentToClassroom,
	removeStudentFromClassroom,
	addLessonToClassroom,
	removeLessonFromClassroom,
};
