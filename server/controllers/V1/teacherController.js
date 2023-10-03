const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const Teacher = require("../models/Teacher");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Function to generate salt and hash a password
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

function generateToken(teacherId) {
  const token = jwt.sign({ id: teacherId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h", // Token expires in 1 hour, you can adjust this as needed
  });
  return token;
}

// Teacher sign-up
exports.signupTeacher = async (req, res) => {
  try {
    const { name, age, email, password, school } = req.body;
    console.log(req.body);
    // Check if a teacher with the same email already exists
    const existingTeacher = await Teacher.findOne({
      "credentials.email": email,
    });

    if (existingTeacher) {
      return res
        .status(400)
        .json({ error: "An account with that email already exists" });
    }
    console.log(password);
    const hashedPassword = await hashPassword(password);

    // Create a new teacher document
    const teacher = new Teacher({
      name,
      age, // optional -- remove(?)
      credentials: { email, password: hashedPassword },
      school,
    });

    // Save the new teacher to the database
    await teacher.save();

    // Generate a JWT token for the newly registered teacher
    const token = generateToken(teacher._id);

    // Return the token to the client
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Teacher sign-in
exports.signInTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the teacher exists
    const teacher = await Teacher.findOne({ "credentials.email": email });

    if (!teacher) {
      return res.status(400).json({ error: "Teacher not found" });
    }

    // Check if the provided password matches the hashed password
    const passwordMatch = await bcrypt.compare(
      password,
      teacher.credentials.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token for the authenticated teacher
    const token = generateToken(teacher._id);

    // Return the token to the client
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//update teacher details
exports.updateTeacherDetails = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { password, bio, subjects, school } = req.body;

    // Fetch the teacher document
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    // Update fields if provided
    if (password) {
      const hashedPassword = await hashPassword(password);
      teacher.credentials.password = hashedPassword;
    }
    if (bio) {
      teacher.bio = bio;
    }
    if (subjects) {
      teacher.subjects = subjects;
    }
    if (school) {
      teacher.school = school;
    }

    // Save the updated teacher document
    await teacher.save();

    res.status(200).json({ message: "Teacher details updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.searchTeachers = async (req, res) => {
  try {
    const { query } = req.query;
    // Implement your search logic here, for example, using regular expressions
    const teachers = await Teacher.find({
      name: { $regex: query, $options: "i" },
    });

    res.status(200).json(teachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// View an individual teacher's profile as a student
exports.viewTeacherProfile = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    // You may want to filter which fields are visible to students
    const profile = {
      name: teacher.name,
      bio: teacher.bio,
      school: teacher.school,
      subjects: teacher.subjects,
    };

    res.status(200).json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// View the teacher's own account
exports.viewOwnAccount = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    // In this case, you may want to return the entire teacher profile
    res.status(200).json(teacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update teacher profile
exports.updateTeacherProfile = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { bio, subjects, school } = req.body;

    // Fetch the teacher document
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    // Update profile fields if provided
    if (bio) {
      teacher.bio = bio;
    }
    if (subjects) {
      teacher.subjects = subjects;
    }
    if (school) {
      teacher.school = school;
    }

    // Save the updated teacher document
    await teacher.save();

    res.status(200).json({ message: "Teacher profile updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updateTeacherPassword = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const { currentPassword, newPassword } = req.body;

    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    // Check if the current password matches the hashed password
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      teacher.credentials.password
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
