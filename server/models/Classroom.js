const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
    //class = "main subject" --> math
    className: String,
    subject: String,
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    classroomKey: String, // Auto-generated 5-character key
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    lessons: [ //sub-topic like "division"
        {
            assignmentName: String,
            topic: String, 
            assignedOn: Date, //true when started, if stdStartDate + duration <= assigned assignment_availabe to student or similar functionality
            startDate: Date,
            endDate: Date, //when student starts assignment
            duration: Float, // estimated time needed to complete assignment
            questions: [
                {
                    //"the division assignments"
                    questionTypeId: Number,
                    quetions: [],
                    answers: [],
                    maxAttempts: Number,
                    question_details: String,

                    // array of questions / array of answers --> question type + question objects
                    // todo make into an array of question schemas once connected properly

                    //question controller that determines "layout" of question based on numerical type 
                    //clasroom controller to auto generate(on creation) and then one change key(for teacher)
                },
            ],
        },
    ],
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
