import { uuid } from "uuidv4";
import TodoModel from '../../models/TodoModel';
import TodoDTO from "../../dtos/TodoDTO";
import ITodoRepository from "repositories/ITodoRepository";
export default class FakeTodoRepository implements ITodoRepository {
  private todos: TodoDTO[] = [];

  async create(todo: TodoDTO): Promise<TodoDTO> {
    const createdTodo = new TodoModel();

      Object.assign(createdTodo, { _id: uuid() }, todo);
      this.todos.push(createdTodo);
      return createdTodo;
  }

  findAll(): Promise<TodoDTO[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<TodoDTO | undefined> {
    throw new Error("Method not implemented.");
  }
  update(id: string, done: boolean): Promise<TodoDTO | undefined> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findByTitle(title: string) {
    const existsTodo = this.todos.find(todo => todo.title === title);
    return existsTodo;
  }
}