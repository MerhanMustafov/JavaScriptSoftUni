const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = require("./");

module.exports = (app) => {
	return new Promise((resolve, reject) => {
		mongoose.connect(DB_CONNECTION_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const db = mongoose.connection;

		db.on("error", (err) => {
			console.log(`DB connection error`, err.message);
			reject();
		});

		db.once("open", () => {
			console.log(`DB connected on ${DB_CONNECTION_STRING}`);
			resolve();
		});
	});
};
