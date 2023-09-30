const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  //class = "main subject" --> math
  className: String,
  subject: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  classroomKey: String, // Auto-generated 5-character key
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  lessons: [
    //sub-topic like "division"
    {
      assignmentName: String,
      topic: String,
      assignedOn: Date, //true when started, if stdStartDate + duration <= assigned assignment_availabe to student or similar functionality
      startDate: Date,
      endDate: Date, //when student starts assignment
      duration: Number, // estimated time needed to complete assignment
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

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;

// todo : classroom controllers --> students and teachers both need
// todo : problem controllers --> student and teacher + numerical sort/index for type determination
// todo : double check problem models + imports
// todo : student join class, teacher approve student to join class
// todo: AI integration

// classroom.addToRoster , classroom.createRoom, classroom.requestAccess(student requests to be added to roster), classroom.updateRoom, classroom.grantAccess, classroom.makeLesson(need lessson/question controllers)

// classRosterController: roster.addToRoster, roster.approveForRoster, roster.removeFromRoster, roster.viewRoster

//lessonController -- lesson.create, lesson.update, lesson.view, lesson.delete, lesson.unlock, lesson.addToSchedule, lesson.removeFromSchedule, lesson.addQuestion(connected to question controller --> lesson.question.update),

//questionController --  question.update, question.delete, question.add, question.view, question.start, question.lock, question.hint(AI here), question.submit
