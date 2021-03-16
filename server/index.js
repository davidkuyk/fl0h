const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5000/', 'https://fast-cove-93268.herokuapp.com/'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  key: 'userId',
  secret: 'StealThisSecret!',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24
  }
}));

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build"));
  res.status(404).json({
        error : {
          message : err.message
        }
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"), function(err) {
    if (err) {
      res.status(500).send(err.message)
    }
  })
})

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('MongoDB database connection established.');
})

app.listen(PORT, function () {
  console.error(`Node dev server: listening on port ${PORT}`);
});