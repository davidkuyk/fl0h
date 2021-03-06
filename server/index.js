const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
//app.use(express.static(path.resolve(__dirname, '../react-ui/public')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('MongoDB database connection established.');
})

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});