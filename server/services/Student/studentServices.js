const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../../models/Student');

async function hashPassword(plainPassword) {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	const hash = await bcrypt.hash(plainPassword, salt);
	return hash;
}

function generateToken(studentId) {
	const token = jwt.sign({ id: studentId }, process.env.JWT_SECRET_KEY, {
		expiresIn: '1h',
	});
	return token;
}

async function signupStudent(data) {
	const { email, password } = data;

	const existingStudent = await Student.findOne({ 'credentials.email': email });

	if (existingStudent) {
		throw new Error('An account with that email already exists');
	}

	const hashedPassword = await hashPassword(password);
	const student = new Student({
		...data,
		credentials: { email, password: hashedPassword },
	});

	await student.save();
	return generateToken(student._id);
}

async function signInStudent(email, password) {
	const student = await Student.findOne({ 'credentials.email': email });

	if (!student) {
		throw new Error('Student not found');
	}

	const passwordMatch = await bcrypt.compare(password, student.credentials.password);

	if (!passwordMatch) {
		throw new Error('Invalid password');
	}

	return generateToken(student._id);
}

async function updateStudentProfile(studentId, updatedProfile) {
	const updatedStudent = await Student.findByIdAndUpdate(studentId, { $set: updatedProfile }, { new: true });
	if (!updatedStudent) {
		throw new Error('Student not found');
	}
	return updatedStudent;
}

async function updateStudentPassword(studentId, currentPassword, newPassword) {
	const student = await Student.findById(studentId);

	if (!student) {
		throw new Error('Student not found');
	}

	const passwordMatch = await bcrypt.compare(currentPassword, student.credentials.password);

	if (!passwordMatch) {
		throw new Error('Current password is incorrect');
	}

	const hashedPassword = await hashPassword(newPassword);
	student.credentials.password = hashedPassword;
	await student.save();
}

module.exports = {
	signupStudent,
	signInStudent,
	updateStudentProfile,
	updateStudentPassword,
};
