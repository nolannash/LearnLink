const BaseQuestion = require("../models/questions/BaseQuestion"); // Make sure to adjust the path
const { getAIResponse } = require('../../ai/gpt');

exports.createQuestion = async (req, res) => {
  try {
    const newQuestion = new BaseQuestion(req.body);
    await newQuestion.save();
    res.status(201).json({
      status: "success",
      data: {
        question: newQuestion,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.requestHelp = async (req, res, questionId, studentInput, studentProfile) => {
  try {
      // Get the question based on questionId
      const question = await BaseQuestion.findById(questionId);

      if (!question) {
          return res.status(404).json({ error: 'Question not found' });
      }

      // Customize the system message based on the student's profile and the app's goal
      const systemMessage = `You are a patient teacher providing assistance to a student with ${studentProfile} to help with the following ${question.type} question: "${question.text}"`;

      // Extract the maximum hint attempts from the question data
      const maxHintAttempts = question.maxHintAttempts || 3; // Default to 3 if not specified

      // Initialize variables for tracking attempts and messages
      let currentAttempt = 0;
      const messages = [];

      // Loop through attempts
      while (currentAttempt < maxHintAttempts - 1) {
          // Create a message for the student's input (requesting a hint)
          messages.push({ role: 'user', content: `Give me a hint for attempt ${currentAttempt + 1}` });

          // Create a message for GPT's response (providing a hint)
          const hint = await getAIResponse([...messages, { role: 'assistant', content: systemMessage }]);
          messages.push({ role: 'assistant', content: hint });

          // Increment the attempt
          currentAttempt++;
      }

      // On the last attempt, reword the question
      messages.push({ role: 'user', content: 'Please reword the question in a simpler manner.' });
      messages.push({ role: 'assistant', content: await getAIResponse([...messages, { role: 'assistant', content: systemMessage }]) });

      // Send the AI responses back to the student
      res.json({ aiResponses: messages.map((msg) => msg.content) });
  } catch (error) {
      res.status(400).json({
          status: 'fail',
          message: error.message,
      });
  }
};
