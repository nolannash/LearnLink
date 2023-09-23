const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  disability:{
    name: String,
    requirements:{
    },
  }

});

module.exports = mongoose.model('Student', studentSchema);
