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

export default mongoose.model('Todo', TodoSchema);