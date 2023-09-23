const mongoose = require('mongoose');


const guardianSchema = new mongoose.Schema({
    // Properties specific to guardians
    children: [
      {
          student: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Student', // Reference to the Student model
          },
          relationship: {
              type: String, // Relationship to the student (e.g., "parent", "guardian")
          },
      },
  ],
});

module.exports = mongoose.model('Guardian', guardianSchema);
