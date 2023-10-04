const classroomService = require("../../services/Classroom/classroomServices");

exports.createClassroom = async (req, res) => {
	try {
		const teacherId = req.user._id; // Assuming you have access to the teacher's ID from authentication
		const newClassroomData = {
		className: req.body.className,
		subject: req.body.subject,
		teacher: teacherId, // Insert the teacher's ID
		classroomKey: req.body.classroomKey, // You can generate a unique key here
		};

		const newClassroom = await classroomService.createClassroom(newClassroomData);
		res.status(201).json({
		status: 'success',
		data: {
			classroom: newClassroom,
		},
	});
	} catch (err) {
	res.status(400).json({
		status: 'fail',
		message: { error: err },
		});
	}
};

exports.addLesson = async (req, res) => {
	try {
		const classroomId = req.params.classroomId;
		const lessonId = req.body.lessonId;

	  // Add the lesson to the classroom
	  const updatedClassroom = await classroomService.addLessonToClassroom(classroomId, lessonId);
  
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
	  const classroomId = req.params.classroomId;
	  const studentId = req.body.studentId;
  
	  // Add the student to the classroom
	  const updatedClassroom = await classroomService.addStudentToClassroom(classroomId, studentId);
  
	  // Add the classroom to the teacher's classrooms
	  const teacherId = req.user._id; // Assuming you have access to the teacher's ID from authentication
	  await teacherService.addClassroomToTeacher(teacherId, classroomId);
  
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
		const updatedClassroom = await classroomService.removeStudentFromClassroom(
			req.params.classroomId,
			req.body.studentId
		);
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
