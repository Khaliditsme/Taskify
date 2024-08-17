
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  }
});

const TaskModel = mongoose.model('todos',TaskSchema);
// the collection 'todos' is attached with the schema -  TaskSchema

module.exports = TaskModel