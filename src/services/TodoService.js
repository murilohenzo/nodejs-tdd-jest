class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async create(TodoDTO) {
    const checkTodoExists = await this.todoRepository.findTodoByTitle(TodoDTO);
    if (checkTodoExists) {
      throw new Error('Todo already exists');
    } else {
      const createdTodo = await this.todoRepository.create(TodoDTO);
      return createdTodo;
    }
  }
}


module.exports = TodoService;