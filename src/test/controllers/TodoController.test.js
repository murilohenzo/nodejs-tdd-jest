const TodoModel = require('../../models/TodoModel');
const TodoController = require('../../controllers/TodoController');
const TodoDTOBuilder = require('../builder/TodoDTOBuilder');

const createConnection = require('../../database');

const httpMocks = require('node-mocks-http');

TodoModel.create = jest.fn();

let request, response, next, todoController, createdTodoDTOBuilder;

beforeAll(async () => {
  await createConnection;
})

beforeEach(() => {
  request = httpMocks.createRequest();
  response = httpMocks.createResponse();
  next = null;
})

describe('Create todo', () => {

  beforeEach(() => {
    todoController = new TodoController();
    createdTodoDTOBuilder = new TodoDTOBuilder().builderDTO();
    request.body = createdTodoDTOBuilder;
  });

  it('should be able to create a new Todo', async () => {    
    expect(typeof todoController.create).toBe('function');
    
    TodoModel.create.mockReturnValue(createdTodoDTOBuilder);
    const todo = await todoController.create(request, response, next);
    expect(todo._getJSONData()).toHaveProperty("done");
  });

  it('should call the create Todo', async () => {

    await todoController.create(request, response, next);
    expect(TodoModel.create).toBeCalledWith(createdTodoDTOBuilder);
  });

  it('should return 201 response code', async () => {

    const todo = await todoController.create(request, response, next);
    expect(todo.statusCode).toBe(201);
    expect(todo._isEndCalled).toBeTruthy();
  });

  it('should return json body in response', async () => {
    TodoModel.create.mockReturnValue(createdTodoDTOBuilder);
    const todo = await todoController.create(request, response, next);
    expect(todo._getJSONData()).toEqual(createdTodoDTOBuilder);
  });
})