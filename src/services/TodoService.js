class TodoService {
  constructor(TodoRepository) {
    this.TodoRepository = TodoRepository;
  }

  async create(TodoDTO) {
    const _todoRepository = new this.TodoRepository();
    const checkTodoExists = await _todoRepository.findTodoByTitle(TodoDTO);
    if (checkTodoExists) {
      throw new Error('Todo already exists');
    } else {
      const createdTodo = await _todoRepository.create(TodoDTO);
      return createdTodo;
    }
  }
}


module.exports = TodoService;