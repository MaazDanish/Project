const express = require('express');
const cors = require('cors');

const app = express();
const sequelize = require('./model/reviews');
const router = require('./routes/routes');

app.use(cors());
app.use(express.json());

app.use('/',router);

sequelize.sync()
	.then(res => {
		app.listen(4000);
	})
	.catch(err => console.log(err));