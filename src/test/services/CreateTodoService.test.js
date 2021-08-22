const FakeTodoRepository = require('../fakes/FakeTodoRepository');
const TodoService = require('../../services/TodoService');
const TodoDTOBuilder = require('../builder/TodoDTOBuilder');

let todoDTOBuilder;
describe("CreateTodo", () => {
  beforeEach(() => {
    todoDTOBuilder = new TodoDTOBuilder().builderDTO();
  })

  it("should create a new Todo", async () => {
    const fakeTodoRepository = new FakeTodoRepository();
    const todoService = new TodoService(fakeTodoRepository);
    const todo = await todoService.create(todoDTOBuilder);

    expect(todo).toHaveProperty('id');
  });
});