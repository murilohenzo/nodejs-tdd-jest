import TodoDTO from "../dtos/TodoDTO";

export default interface ITodoRepository {
  create(todo: Omit<TodoDTO, "_id">): Promise<TodoDTO | undefined>;
  findAll(): Promise<TodoDTO[] | undefined>;
  findByTitle(title: string): Promise<TodoDTO | undefined>;
  findById(id: string): Promise<TodoDTO | undefined>;
  update(id: string, done: boolean): Promise<TodoDTO | undefined>;
  delete(id: string): Promise<void>;
}