class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async create(todoDTO) {
    const checkTodoExists = await this.todoRepository.findTodoByTitle(todoDTO);
    if (checkTodoExists) {
      throw new Error('Todo already exists');
    } else {
      return this.todoRepository.create(todoDTO);;
    }
  }

  async findAll() {
    const todos = await this.todoRepository.findAll();
    if (todos.length > 0) {
      return todos;
    } else {
      throw new Error('Not exists todos');
    }
  }

  async findById(id) {
    const todo = await this.todoRepository.findById(id);
    if (todo) {
      return todo;
    } else {
      throw new Error('Todo not exists');
    }
  }

  async update(id, done) {
    const todo = await this.todoRepository.findById(id);
    todo.done = done;

    await todo.save();
    if (todo) {
      return todo;
    } else {
      throw new Error('Todo not exists');
    }
  }

  async delete(id) {
    const checkTodoExists = await this.todoRepository.findById(id);
    if (checkTodoExists) {
      return this.todoRepository.delete(id);
    } else {
      throw new Error('Todo not exists');
    }
  }
}


module.exports = TodoService;