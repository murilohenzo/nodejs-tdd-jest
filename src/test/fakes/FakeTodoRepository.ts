const { uuid } = require('uuidv4');
const TodoModel = require('../../models/TodoModel');
class FakeTodoRepository {
  constructor(todos = []) {
    this.todos = todos;
  }

  async create(todoDTOBuilder) {
    const todo = new TodoModel();

    if (todoDTOBuilder && todoDTOBuilder.title) {
      Object.assign(todo, { _id: uuid() }, todoDTOBuilder);
      this.todos.push(todo);
      return todo;
    }
  }

  async findTodoByTitle(todoDTOBuilder) {
    const existsTodo = this.todos.find(todo => todo.title === todoDTOBuilder.title);
    return existsTodo;
  }
}

module.exports = FakeTodoRepository;