const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    age: Number,
    role: String,
    credentials: {
        username: String,
        password: String,
    },
    school: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    subjects: [String],
    classrooms: [
        {
            className: String,
            students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
            pendingStudents: [{
                student1: '',
            }],
            assignments: [
                {
                    assignmentName: String,
                    due: String, // Change to a Date type if needed
                    questions: [
                        {
                            question: String,
                            type: String,
                            answer: String,
                            maxAttempts: Number,
                            difficulty: Number,
                            // Add other question-related fields here
                        },
                    ],
                },
            ],
        },
    ],
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
