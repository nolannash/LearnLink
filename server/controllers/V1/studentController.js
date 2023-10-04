const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const Student = require("../models/Student");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

function hashPassword(plainPassword) {
  return new Promise((resolve, reject) => {
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        return reject(err);
      }

      bcrypt.hash(plainPassword, salt, (err, hash) => {
        if (err) {
          return reject(err);
        }

        resolve(hash);
      });
    });
  });
}

function generateToken(studentId) {
  // sourcery skip: inline-immediately-returned-variable
  const token = jwt.sign({ id: studentId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
  return token;
}

// Student sign-up
exports.signupStudent = async (req, res) => {
  try {
    const { name, age, email, password, grade, school } = req.body;

    // Check if a student with the same email already exists
    const existingStudent = await Student.findOne({
      "credentials.email": email,
    });

    if (existingStudent) {
      return res
        .status(400)
        .json({ error: "An account with that email already exists" });
    }

    const hashedPassword = await hashPassword(password);

    // Create a new student document
    const student = new Student({
      name,
      age,
      credentials: { email, password: hashedPassword },
      grade,
      school,
    });

    // Save the new student to the database
    await student.save();

    // Generate a JWT token for the newly registered student
    const token = generateToken(student._id);

    // Return the token to the client
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Student sign-in
exports.signInStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the student exists
    const student = await Student.findOne({ "credentials.email": email });

    if (!student) {
      return res.status(400).json({ error: "Student not found" });
    }

    // Check if the provided password matches the hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      student.credentials.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token for the authenticated student
    const token = generateToken(student._id);

    // Return the token to the client
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { name, age, grade, school, disabilities } = req.body;

    const updatedProfile = {};

    if (name) {
      updatedProfile.name = name;
    }
    if (age) {
      updatedProfile.age = age;
    }
    if (grade) {
      updatedProfile.grade = grade;
    }
    if (school) {
      updatedProfile.school = school;
    }

    if (disabilities) {
      // Assuming disabilities is an array of objects with disability and accommodation
      updatedProfile.disabilities = disabilities;
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $set: updatedProfile },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateStudentPassword = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { currentPassword, newPassword } = req.body;

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Check if the current password matches the hashed password
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      student.credentials.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    // Hash and update the new password
    const hashedPassword = await hashPassword(newPassword);
    student.credentials.password = hashedPassword;
    await student.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
