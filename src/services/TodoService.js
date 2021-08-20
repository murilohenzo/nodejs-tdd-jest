const TodoRepository = require('../repositories/TodoRepository');
class TodoService {
  async create(TodoDTO) {
    const todoRepository = new TodoRepository();

    const checkTodoExists = await todoRepository.findTodoByTitle(TodoDTO);
    if (checkTodoExists) {
      throw new Error('Todo already exists');
    } else {
      const createdTodo = await todoRepository.create(TodoDTO);
      return createdTodo;
    }
  }
}


module.exports = TodoService;