import ITodoRepository from "../repositories/ITodoRepository";
import TodoDTO from "../dtos/TodoDTO";
const AppError = require('../errors/AppError');


export default class TodoService {
  private _todoRepository: ITodoRepository;
  constructor(_todoRepository) {
    this._todoRepository = _todoRepository;
  }

  async create(todo: TodoDTO): Promise<TodoDTO | undefined> {
    const checkTodoExists = await this._todoRepository.findByTitle(todo.title);
    if (checkTodoExists) {
      throw new AppError('Todo already exists'); 
    }
    return this._todoRepository.create(todo);
  } 

  async findAll(): Promise<TodoDTO[] | undefined> {
    const todos = await this._todoRepository.findAll();
    if (todos.length > 0) {
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
      console.log(done)
      const updatedTodo = await this._todoRepository.update(id, done);
      console.log(updatedTodo);
      return updatedTodo;
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