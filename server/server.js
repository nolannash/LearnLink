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
const mongo_uri = process.env.MONGO_URI
console.log(mongo_uri);
// console.log('process.env:', process.env);
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
    require('./middlewares/passport')(passport);

    // ... Other app setup code ...

    // API Routes
    const authRoutes = require('./routes/auth');
    const userRoutes = require('./routes/user');
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);

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
