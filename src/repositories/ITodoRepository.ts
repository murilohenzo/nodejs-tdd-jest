import TodoDTO from "../dtos/TodoDTO";

export default interface ITodoRepository {
  create(todo: Omit<TodoDTO, "_id">): Promise<TodoDTO | undefined | null>;
  findAll(): Promise<TodoDTO[] | undefined | null>;
  findByTitle(title: string): Promise<TodoDTO | undefined | null>;
  findById(id: string): Promise<TodoDTO | undefined | null>;
  update(todo: Omit<TodoDTO, "_id">, done: boolean): Promise<TodoDTO | undefined | null>;
  delete(id: string): void;
}