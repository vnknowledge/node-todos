const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');
const setupController = require('./api/controllers/setupController');
const todoController = require('./api/controllers/todoController');

let app = express();
let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('view engine', 'ejs');

// db info
mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});