import { container } from "tsyringe";

import ITodoRepository from "../repositories/ITodoRepository";
import TodoRepository from "../repositories/TodoRepository";

container.registerSingleton<ITodoRepository>(
  "TodoRepository",
  TodoRepository
)