const { uuid } = require('uuidv4');
const TodoModel = require('../../models/TodoModel');

class FakeTodoRepository {
  constructor(todos = []) {
    this.todos = todos;
  }

  create(TodoDTOBuilder) {
    const todo = new TodoModel();

    Object.assign(todo, { id: uuid() }, TodoDTOBuilder);
    this.todos.push(todo);

    return todo;
  }

  findTodoByTitle(TodoDTOBuilder) {
    const existsTodo = this.todos.find(todo => todo.title === TodoDTOBuilder.title);
    return existsTodo;
  }
}

module.exports = FakeTodoRepository;