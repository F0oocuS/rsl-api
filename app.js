const express = require('express');

const database = require('./util/database');

const app = express();

database.sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch(error => console.log(error));
