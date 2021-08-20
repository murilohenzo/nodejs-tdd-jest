const TodoModel = require('../models/TodoModel');
class TodoRepository {
  async create(Todo) {
    return await TodoModel.create(Todo);
  }

  async findTodoByTitle({ title }) {
    return await TodoModel.findOne({ title });
  }

}

module.exports = TodoRepository;