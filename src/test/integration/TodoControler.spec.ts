import request from 'supertest';
import app from '../../app';
import TodoDTOBuilder from '../builder/TodoDTOBuilder';

const endpointURL = "/todos"

describe("Create Todo Controller", () => {

  it('should be able to create a new todo', async () => {
    const createdTodoDTOBuilder = new TodoDTOBuilder("Integration test 5");

    const response = await request(app)
      .post(endpointURL)
      .send(createdTodoDTOBuilder);
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('_id');
      expect(response.body.title).toBe(createdTodoDTOBuilder.title);
      expect(response.body.done).toBe(createdTodoDTOBuilder.done);
  });
})