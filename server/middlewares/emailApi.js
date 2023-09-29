// Import necessary modules and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use bodyParser to parse JSON request bodies
app.use(bodyParser.json());

// Define a custom middleware for email preparation
app.use('/sendEmail', (req, res, next) => {
	// Extract email data from the request body
	const { subject, emails, sender, content } = req.body;

	// Create an emailData object
	const emailData = {
		personalizations: emails.map((email) => ({
			to: [{ email }],
			subject,
		})),
		from: {
			email: sender,
		},
		content: content.map((item) => ({
			type: 'text/plain',
			value: item,
		})),
	};

	// Attach the emailData to the request object for use in routes
	req.emailData = emailData;

	// Continue to the next middleware or route
	next();
});

let example = {
	emails: ['test1@email.com', 'test2@email.com', 'test3@email.com'],
	subject: 'Test email',
	sender: 'me@email.com',
	content: [
		{
			type: 'text/plain',
			value: 'Hello world!',
		},
		{
			type: 'text/html',
			value: '<p>Hello world!</p>',
		},
	],
};
