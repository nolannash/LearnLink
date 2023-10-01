const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const mongo_uri = process.env.MONGO_URI;

// MongoDB Atlas connection using environment variables
mongoose
	.connect(mongo_uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB Connected');

		// Initialize Passport and set up strategies
		app.use(passport.initialize());

		// Require your models here
		require('./models/Student');
		require('./models/Teacher');
		require('./models/Classroom/Classroom');

		// API Routes

		const classroomRoutes = require('./routes/classroom');
		const studentRoutes = require('./routes/student');
		const teacherRoutes = require('./routes/teacher');

		app.use('/api/v1/classroom', classroomRoutes);
		app.use('/api/v1/student', studentRoutes);
		app.use('/api/v1/teacher', teacherRoutes);

		// Start the server
		const port = process.env.PORT || 5000;
		app.listen(port, () => console.log(`Server running on port ${port}`));
	})
	.catch((err) => console.log(err));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
	console.error(`Unhandled Rejection: ${err}`);
	process.exit(1);
});
