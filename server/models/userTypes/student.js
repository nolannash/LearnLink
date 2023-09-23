const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    },
  // Add student-specific fields here
});

module.exports = mongoose.model('Student', StudentSchema);
