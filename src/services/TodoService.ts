import ITodoRepository from "../repositories/ITodoRepository";
import TodoDTO from "../dtos/TodoDTO";
import AppError from "../errors/AppError";

export default class TodoService {
  constructor(private _todoRepository: ITodoRepository) {
    this._todoRepository = _todoRepository;
  }

  async create(todo: TodoDTO): Promise<TodoDTO | undefined | null> {
    const checkTodoExists = await this._todoRepository.findByTitle(todo.title);
    if (checkTodoExists) {
      throw new AppError("Todo already exists");
    }
    return this._todoRepository.create(todo);
  } 

  async findAll(): Promise<TodoDTO[] | undefined> {
    const todos = await this._todoRepository.findAll();
    if (todos && todos.length > 0) {
      return todos;
    } else {
      throw new Error('Not exists todos');
    }
  }

  async findById(id: string): Promise<TodoDTO | undefined> {
    const todoFound = await this._todoRepository.findById(id);
    if (todoFound) {
      return todoFound;
    } else {
      throw new Error('Todo not exists');
    }
  }

  async update(id: string, done: boolean): Promise<TodoDTO | undefined> {
    const todoFound = await this._todoRepository.findById(id);
    if (todoFound) {
      await this._todoRepository.update(todoFound, done);
      return todoFound;
    } else {
      throw new Error('Todo not exists');
    }
  }

  async delete(id: string): Promise<void> {
    const checkTodoExists = await this._todoRepository.findById(id);
    if (checkTodoExists) {
      return this._todoRepository.delete(id);
    } else {
      throw new Error('Todo not exists');
    }
  }
}