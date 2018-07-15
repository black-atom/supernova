require('dotenv').config({ path: process.env.DOTENV_PATH });
const Express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = Express();

/** middlewares */
app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
