const express = require('express');

const database = require('./util/database');

const heroRouter = require('./routes/hero.route');
const factionRouter = require('./routes/faction.route');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
});

app.use('/api/hero', heroRouter);
app.use('/api/faction', factionRouter);

app.use((error, req, res, next) => {
	console.log(error);

	const status = error.statusCode || 500;
	res.status(status).json(error);
});

database.sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch(error => console.log(error));
