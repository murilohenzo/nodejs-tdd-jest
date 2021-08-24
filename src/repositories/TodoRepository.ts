import TodoModel from "../models/TodoModel";
import TodoDTO from "../dtos/TodoDTO";
import ITodoRepository from "./ITodoRepository";

export default class TodoRepository implements ITodoRepository{
  async create(todo: Omit<TodoDTO, "_id">): Promise<TodoDTO | undefined> {
    return TodoModel.create(todo);
  }

  async findAll(): Promise<TodoDTO[] | undefined> {
    return TodoModel.find();
  }

  async findByTitle(title: string ): Promise<TodoDTO | undefined> {
    return TodoModel.findOne({ title });
  }

  async findById(id: string): Promise<TodoDTO | undefined> {
    return TodoModel.findById({ _id: id });
  }

  async update(id: string, done: boolean): Promise<TodoDTO | undefined> {
    return TodoModel.findOneAndUpdate({ _id: id }, { done: done });
  }

  async delete(id: string): Promise<void> {
    return TodoModel.deleteOne({ _id: id });
  }
}