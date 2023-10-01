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

exports.updateClassroom = async (req, res) => {
	try {
		const updatedClassroom = await classroomService.updateClassroom(req.params.classroomId, req.body);
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

exports.deleteClassroom = async (req, res) => {
	try {
		await classroomService.deleteClassroom(req.params.classroomId);
		res.status(204).json(); // No content on success
		} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
			});
		}
	};

exports.getClassroom = async (req, res) => {
	try {
		const classroom = await classroomService.getClassroom(req.params.classroomId);
		res.status(200).json({
			status: 'success',
			data: {
			classroom,
			},
		});
		} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
		}
	};

exports.listClassrooms = async (req, res) => {
	try {
		const classrooms = await classroomService.listClassrooms(req.query);
		res.status(200).json({
			status: 'success',
			data: {
			classrooms,
			},
		});
		} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
		}
	};

exports.addStudentToClassroom = async (req, res) => {
	try {
		const updatedClassroom = await classroomService.addStudentToClassroom(req.params.classroomId, req.body.studentId);
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

exports.removeStudentFromClassroom = async (req, res) => {
	try {
		const updatedClassroom = await classroomService.removeStudentFromClassroom(req.params.classroomId, req.body.studentId);
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