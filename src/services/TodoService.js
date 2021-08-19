const TodoRepository = require('../repositories/TodoRepository');
const TodoModel = require('../models/TodoModel');

class TodoService {
  async create(TodoDTO) {
    const todoRepository = new TodoRepository();

    const createdTodo = await todoRepository.create(TodoModel, TodoDTO);
    return createdTodo;
  }
}

module.exports = TodoService;