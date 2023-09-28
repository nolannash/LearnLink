const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    role: String, // do we need this as we only have student/teacher now, and they have separate models
    credentials: {
        email: {
            type: String,
            unique: true,},
        password: String,
    },
    grade: String,
    school: String, // do we need a school class?
    disabilities: [
        {
            disablity: String,
            accomodation: String, //should this be a Dropdown select or text field?
        }
    ], 
    classes: [
        {
            className: String,
            classKey: String,
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
