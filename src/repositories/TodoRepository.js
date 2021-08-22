const TodoModel = require('../models/TodoModel');
class TodoRepository {
  async create(todo) {
    return await TodoModel.create(todo);
  }

  async findAll() {
    return await TodoModel.find();
  }

  async findTodoByTitle({ title }) {
    return await TodoModel.findOne({ title });
  }

  async findById(id) {
    return await TodoModel.findById({ _id: id });
  }

  async update(id, done) {
    return await TodoModel.findOneAndUpdate(id, done);
  }

  async delete(id) {
    return await TodoModel.deleteOne({ _id: id });
  }

}

module.exports = TodoRepository;