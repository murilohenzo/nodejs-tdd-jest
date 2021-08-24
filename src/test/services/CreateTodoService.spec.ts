import TodoDTOBuilder from "../builder/TodoDTOBuilder";
import FakeTodoRepository from "../fakes/FakeTodoRepository";
import TodoService from "../../services/TodoService";
import AppError from "../../errors/AppError";

describe("CreateTodo", () => {

  it("should create a new Todo", async () => {
    const fakeTodoRepository = new FakeTodoRepository();
    const createTodo = new TodoService(fakeTodoRepository);

    const todo = await createTodo.create(new TodoDTOBuilder("Unit test"));

    expect(todo).toHaveProperty('_id');
  });

  it("should not be able to create a new todo with same title from another", async () => {
    const fakeTodoRepository = new FakeTodoRepository();
    const createTodo = new TodoService(fakeTodoRepository);
    
    const todoDTOBuilder = new TodoDTOBuilder("Unit test");

    expect(async () => {
      await createTodo.create(todoDTOBuilder);
      await createTodo.create(todoDTOBuilder);
      console.log(await createTodo.create(todoDTOBuilder))
    }).rejects.toBeInstanceOf(AppError);
  });
});