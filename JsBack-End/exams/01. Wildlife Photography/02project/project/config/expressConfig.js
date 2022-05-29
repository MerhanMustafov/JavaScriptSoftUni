const hbs = require("express-handlebars");
const express = require("express");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
	app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultLayout: "main" }));
	app.set("view engine", ".hbs");

	app.use("/static", express.static("static"));
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.log(">>>", req.method, ">>>", req.url);
			if (req.user) {
				console.log(
					`Known user ${req.user.firstName} ${req.user.lastName}`
				);
			}
		}
		next();
	});
};

// const hbs = require("express-handlebars");
// const express = require("express");
// const cookieParser = require("cookie-parser");

// module.exports = (app) => {
// 	app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultValue: "main" }));
// 	app.set("view engine", ".hbs");

// 	app.use("/static", express.static("static"));
// 	app.use(express.urlencoded({ extended: true }));
// 	app.use(cookieParser());

// 	app.use((req, res, next) => {
// 		if (!req.url.includes("/favicon")) {
// 			console.log(">>>", req.method, ">>>", req.url);
// 			if (req.user) {
// 				console.log(
// 					`Known user ${req.user.firstName} ${req.user.lastName}`
// 				);
// 			}
// 		}
// 		next();
// 	});
// };
