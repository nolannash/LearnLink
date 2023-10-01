const classroomService = require('../../services/Classroom/classroomServices');

exports.createClassroom = async (req, res) => {
	try {
		const newClassroom = await classroomService.createClassroom(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				classroom: newClassroom,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

exports.addLesson = async (req, res) => {
	try {
		const updatedClassroom = await classroomService.addLessonToClassroom(req.params.classroomId, req.body.lessonId);
		res.status(200).json({
			status: 'success',
			data: {
				classroom: updatedClassroom,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};
