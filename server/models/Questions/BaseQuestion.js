const mongoose = require("mongoose");

// Options for the base schema
const baseOptions = {
  discriminatorKey: "type", // This will be the field name for storing the question type
  collection: "questions", // The name of our collection
};

// Define the base schema
const BaseQuestionSchema = new mongoose.Schema(
  {
    maxAttempts: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    questionDetails: { type: String, required: true },
  },
  baseOptions
);

// Create the base model
const BaseQuestion = mongoose.model("BaseQuestion", BaseQuestionSchema);

// Export the base model
module.exports = BaseQuestion;
