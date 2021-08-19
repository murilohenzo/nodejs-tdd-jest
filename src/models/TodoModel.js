const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
  },
  done: {
    type: 'boolean',
    required: true,
  }
});

module.exports = mongoose.model('Todo', TodoSchema);