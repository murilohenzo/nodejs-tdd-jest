const FakeTodoRepository = require('../fakes/FakeTodoRepository');
const TodoService = require('../../services/TodoService');
const TodoDTOBuilder = require('../builder/TodoDTOBuilder');

let todoService
describe("CreateTodo", () => {
  beforeEach(() => {
    const fakeTodoRepository = new FakeTodoRepository();
    todoService = new TodoService(fakeTodoRepository);
  })

  it("should create a new Todo", async () => {
    const todo = await todoService.create(new TodoDTOBuilder("Unit test").builderDTO());

    expect(todo).toHaveProperty('_id');
  });

  it("should not be able to create a new user with same email from another", async () => {
    const todo =  await todoService.create(new TodoDTOBuilder("Study React").builderDTO());
    const todo2 = await todoService.create(new TodoDTOBuilder("Study React").builderDTO());

    expect(
      "a"
    ).toBE(Error);
  });
});