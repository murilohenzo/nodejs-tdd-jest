const TodoModel = require('../models/TodoModel');
class TodoRepository {
  async create(todo) {
    return TodoModel.create(todo);
  }

  async findAll() {
    return TodoModel.find();
  }

  async findTodoByTitle({ title }) {
    return TodoModel.findOne({ title });
  }

  async findById(id) {
    return TodoModel.findById({ _id: id });
  }

  async update(id, done) {
    return TodoModel.findOneAndUpdate(id, done);
  }

  async delete(id) {
    return TodoModel.deleteOne({ _id: id });
  }

}

module.exports = TodoRepository;