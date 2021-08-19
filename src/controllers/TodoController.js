const TodoService = require('../services/TodoService');
const TodoDTO = require('../dtos/TodoDTO');

class TodoController {
  async create(request, response, next) {
    const { title, done } = request.body;
    const todo = new TodoDTO(title, done);
    
    const todoService = new TodoService();
    const createTodo = await todoService.create(todo);
    return response.status(201).json(createTodo);
  };
}

module.exports = TodoController;