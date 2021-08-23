const TodoService = require('../services/TodoService');
const TodoRepository = require('../repositories/TodoRepository');
const TodoDTO = require('../dtos/TodoDTO');

class TodoController {
  async create(request, response, next) {

    try{
      const { title, done } = request.body;
      const todo = new TodoDTO(title, done);

      const todoRepository = new TodoRepository();
      const todoService = new TodoService(todoRepository);
      const createTodo = await todoService.create(todo);
      return response.status(201).json(createTodo);
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  }

  async findAll(request, response, next) {
    try {
      const todoRepository = new TodoRepository();
      const todoService = new TodoService(todoRepository);

      const todos = await todoService.findAll();

      return response.status(200).json(todos);
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  }

  async findById(request, response, next) {
    try {
      const { id } = request.params;

      const todoRepository = new TodoRepository();
      const todoService = new TodoService(todoRepository);

      const todo = await todoService.findById(id);
      return response.status(200).json(todo);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request, response, next) {
    try {
      const { id } = request.params;
      const { done } = request.body;

      const todoRepository = new TodoRepository();
      const todoService = new TodoService(todoRepository);

      const todo = await todoService.update(id, done);
      return response.status(200).json(todo);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request, response, next) {
    try{
      const { id } = request.params;

      const todoRepository = new TodoRepository();
      const todoService = new TodoService(todoRepository);

      await todoService.delete(id);
      return response.status(200).json({ message: "Deleted successfully"})
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = TodoController;