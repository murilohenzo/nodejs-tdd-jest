const TodoService = require('../services/TodoService');
const TodoRepository = require('../repositories/TodoRepository');
const TodoDTO = require('../dtos/TodoDTO');

class TodoController {
  async create(request, response, next) {

    try{
      const { title, done } = request.body;
      const todo = new TodoDTO(title, done);

      const todoService = new TodoService(TodoRepository);
      const createTodo = await todoService.create(todo);
      return response.status(201).json(createTodo);
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  };
}

module.exports = TodoController;