const express = require("express");
const routes = require("./api/routes/index");
const variables = require("./config/variables.js");
const cors = require("cors");

let app = express();
app.use(
	cors({
		credentials: true,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
		origin: true,
	})
);
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	next();
});
app.use(express.json());
app.use(routes);

app.listen(variables.port, () => console.log("server started on port", variables.port, variables.env));
