import TodoModel from "../models/TodoModel";
import TodoDTO from "../dtos/TodoDTO";
import ITodoRepository from "./ITodoRepository";

import { Document } from "mongoose";
interface TodoDTOWithDocumentProps extends Document {
  id?: string;
  title: string;
  done: boolean;
}

class TodoRepository implements ITodoRepository{
  async create(todo: Omit<TodoDTO, "_id">): Promise<TodoDTO | undefined> {
    return TodoModel.create(todo);
  }

  async findAll(): Promise<TodoDTO[] | undefined> {
    return TodoModel.find();
  }

  async findByTitle(title: string ): Promise<TodoDTO | undefined | null> {
    return TodoModel.findOne({ title });
  }

  async findById(id: string): Promise<TodoDTO | undefined | null> {
    return TodoModel.findById({ _id: id });
  }

  async update(todo: Omit<TodoDTOWithDocumentProps, "_id">, done: boolean): Promise<TodoDTO | undefined | null> {
    todo.done = done;
    return await todo.save();
  }

  async delete(id: string) {
    return TodoModel.deleteOne({ _id: id });
  }
}

export default new TodoRepository();