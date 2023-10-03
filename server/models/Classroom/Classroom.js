const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  className: { type: String, required: true },
  subject: { type: String, required: true },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  classroomKey: { type: String, required: true }, // auto-generate this (unique string of 3 random simple words for accessability)
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson", // Reference to the lesson model
    },
  ],
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
