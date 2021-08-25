import { Request, Response, NextFunction } from "express";
import TodoDTO from "../dtos/TodoDTO";
import TodoRepository from "../repositories/TodoRepository";
import TodoService from "../services/TodoService";

class TodoController {
  async create(request: Request, response: Response, next: NextFunction): Promise<Response> {
    try{
      const { title, done }: TodoDTO = request.body;

      const todoService = new TodoService(TodoRepository);

      const createTodo = await todoService.create({title, done});
      return response.status(201).json(createTodo);
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  }

  async findAll(request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const todoService = new TodoService(TodoRepository);

      const todos = await todoService.findAll();

      return response.status(200).json(todos);
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  }

  async findById(request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = request.params;

      const todoService = new TodoService(TodoRepository);

      const todo = await todoService.findById(id);
      return response.status(200).json(todo);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response, next: NextFunction): Promise<Response> {
    try {
      const { id } = request.params;
      const { done } = request.body;

      const todoService = new TodoService(TodoRepository);

      const todo = await todoService.update(id, done);
      return response.status(200).json(todo);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response, next: NextFunction): Promise<Response> {
    try{
      const { id } = request.params;

      const todoService = new TodoService(TodoRepository);

      await todoService.delete(id);
      return response.status(200).json({ message: "Deleted successfully"})
    } catch(err){
      return response.status(400).json({ error: err.message });
    }
  }
}

module.exports = TodoController;