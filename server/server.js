const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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

		// Require your models here
		require('./models/Student');
		require('./models/Teacher');
		require('./models/Classroom/Classroom');

		// Initialize Passport and set up strategies
		const cookieParser = require('cookie-parser');
		const passport = require('./middlewares/passport');
		app.use(cookieParser());
		app.use(passport.initialize());

		// API Routes
		// const classroomRoutes = require('./routes/classroom');
		const studentRoutes = require('./routes/student');
		const teacherRoutes = require('./routes/teacher');
		const classroomRoutes = require('./routes/classroom');
		const debugRoutes = require('./routes/debug');

		// app.use('/api/v1/classroom', classroomRoutes);
		app.use('/api/v1/student', studentRoutes);
		app.use('/api/v1/teacher', teacherRoutes);
		app.use('/api/v1/classroom', classroomRoutes);
		app.use('/api/v1/debug', debugRoutes);

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
