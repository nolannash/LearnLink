const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String, // should this just be username?
    age: Number,
    role: String, // do we need this as we only have student/teacher now, and they have separate models
    credentials: {
        username: String,
        password: String,
    },
    grade: String,
    school: String, // do we need a school class?
    disabilities: [
        {
            disablity: '',
            accomodation: '',
        }
    ], 
    classes: [
        {
            className: String,
            OverallMetrics: {},
            assignments: [
                {
                    assignmentName: String,
                    attempts: Number,
                    score: Number,
                    // Add other assignment-related fields here
                },
            ],
        },
    ],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
