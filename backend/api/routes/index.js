const express = require("express");
const formRoute = require("./form.route");

const router = express.Router();

const defaultRoutes = [
	{
		path: "/",
		route: formRoute,
	},
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

module.exports = router;
