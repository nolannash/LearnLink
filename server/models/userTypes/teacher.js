const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    lessons: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
        },
    ],
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student', 
        },
    ],
});

module.exports = mongoose.model('Teacher', teacherSchema);