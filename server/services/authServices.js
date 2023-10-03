const jwt = require('jsonwebtoken');

// Convert Unix timestamp to human-readable date/time
const convertUnixToDate = (timestamp) => new Date(timestamp * 1000).toLocaleString();

// Decode JWT
const decodeJwt = (token) => {
	try {
		// Verify and decode token
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

		// Convert timestamps to human-readable format
		if (decoded.iat) decoded.iat_date = convertUnixToDate(decoded.iat);
		if (decoded.exp) decoded.exp_date = convertUnixToDate(decoded.exp);

		return { decoded };
	} catch (err) {
		return { error: 'Invalid token', err };
	}
};

module.exports = {
	decodeJwt,
};
