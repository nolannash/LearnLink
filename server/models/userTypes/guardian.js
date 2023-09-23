const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuardianSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    },
  // Add parent-specific fields here
});

module.exports = mongoose.model('Guardian', GuardianSchema);
