import { uuid } from "uuidv4";
import TodoModel from '../../models/TodoModel';
import TodoDTO from "../../dtos/TodoDTO";
import ITodoRepository from "repositories/ITodoRepository";
export default class FakeTodoRepository implements ITodoRepository {
  private todos: TodoDTO[] = [];

  async create(todo: TodoDTO): Promise<TodoDTO | null | undefined> {
    const createdTodo = new TodoModel();

      Object.assign(createdTodo, { _id: uuid() }, todo);
      this.todos.push(createdTodo);
      return createdTodo;
  }

  findAll(): Promise<TodoDTO[] | null | undefined> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<TodoDTO | null | undefined> {
    throw new Error("Method not implemented.");
  }
  update(todo: Omit<TodoDTO, "_id">, done: boolean): Promise<TodoDTO | null | undefined> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }

  async findByTitle(title: string) {
    const existsTodo = this.todos.find(todo => todo.title === title);
    return existsTodo;
  }
}