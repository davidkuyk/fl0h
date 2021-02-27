const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: {type: String, required: true},
    date: {type: Date, required: true},
    category: { type: String, required: false},
}, {collection: 'tasks'});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;