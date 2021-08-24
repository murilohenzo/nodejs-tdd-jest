import { uuid } from "uuidv4";
import TodoModel from '../../models/TodoModel';
import TodoDTO from "../../dtos/TodoDTO";
export default class FakeTodoRepository {
  private todos: TodoDTO[] = [];

  async create(todoDTOBuilder) {
    const todo = new TodoModel();

    if (todoDTOBuilder && todoDTOBuilder.title) {
      Object.assign(todo, { _id: uuid() }, todoDTOBuilder);
      this.todos.push(todo);
      return todo;
    }
  }

  async findByTitle(title: string) {
    const existsTodo = this.todos.find(todo => todo.title === title);
    return existsTodo;
  }
}