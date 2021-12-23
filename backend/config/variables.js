const path = require("path");

// import .env variables
require("dotenv-safe").config({
	path: path.join(__dirname, "../.env"),
	sample: path.join(__dirname, "../.env.example"),
});

module.exports = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
};
