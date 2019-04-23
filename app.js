const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');

const app = express();

app.use(session({secret: 'sessionSecret'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);

module.exports = app;