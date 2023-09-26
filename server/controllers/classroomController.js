const Classroom = require('../models/Classroom');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

// Function to create a classroom
exports.createClassroom = async (req, res) => {
    try {
    // Extract necessary data from the request
    const { teacherId, className } = req.body;

    // Find the teacher by ID (assuming teacherId is provided in the request)
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
        return res.status(404).json({ error: 'Teacher not found' });
    }

    // Create the classroom with teacher association
    const classroom = new Classroom({
        teacher: teacher._id,
        className,
      students: [], // Initialize with an empty array of students
      assignments: [], // Initialize with an empty array of assignments
    });

    // Save the classroom to the database
    await classroom.save();

    // Add the classroom reference to the teacher's classrooms array
    teacher.classrooms.push(classroom._id);
    await teacher.save();

    return res.status(201).json(classroom);
    } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to add a student to a classroom
exports.addStudentToClassroom = async (req, res) => {
    try {
    // Extract necessary data from the request
    const { classroomId, studentId } = req.body;

    // Find the classroom by ID (assuming classroomId is provided in the request)
    const classroom = await Classroom.findById(classroomId);

    if (!classroom) {
        return res.status(404).json({ error: 'Classroom not found' });
    }

    // Find the student by ID (assuming studentId is provided in the request)
    const student = await Student.findById(studentId);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    // Add the student to the classroom's students array
    classroom.students.push(student._id);
    await classroom.save();

    return res.status(200).json(classroom);
    } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to create an assignment in a classroom
exports.createAssignment = async (req, res) => {
    try {
    // Extract necessary data from the request
    const { classroomId, assignment } = req.body;

    // Find the classroom by ID (assuming classroomId is provided in the request)
    const classroom = await Classroom.findById(classroomId);

    if (!classroom) {
        return res.status(404).json({ error: 'Classroom not found' });
    }

    // Add the assignment to the classroom's assignments array
    classroom.assignments.push(assignment);
    await classroom.save();

    return res.status(200).json(classroom);
    } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
    }
};
