const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    },
  // Add teacher-specific fields here
});

module.exports = mongoose.model('Teacher', TeacherSchema);
