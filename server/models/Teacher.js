const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
<<<<<<< Updated upstream
    name: String,
    age: Number,
    bio: String,
    credentials: {
        email: {
            type: String,
            unique: true,
        },
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
=======
	name: String,
	age: Number,
	credentials: {
		email: {
			type: String,
			unique: true,
		},
		password: String,
	},
	school: String,
	students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
	subjects: [String],
	classrooms: [
		{
			className: String,
			students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
			pendingStudents: [
				{
					student1: '',
				},
			],
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
>>>>>>> Stashed changes
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
