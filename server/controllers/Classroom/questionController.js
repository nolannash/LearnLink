const BaseQuestion = require("../models/questions/BaseQuestion"); // Make sure to adjust the path

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
