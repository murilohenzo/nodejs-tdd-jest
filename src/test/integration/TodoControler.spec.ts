import request from 'supertest';
import app from '../../server';
import TodoDTOBuilder from '../builder/TodoDTOBuilder';

const endpointURL = "/todos"

describe(endpointURL, () => {

  it('POST' + endpointURL, async () => {
    const createdTodoDTOBuilder = new TodoDTOBuilder("Integration test 4");

    const response = await request(app)
      .post(endpointURL)
      .send(createdTodoDTOBuilder);
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('done');
      expect(response.body.title).toBe(createdTodoDTOBuilder.title);
      expect(response.body.done).toBe(createdTodoDTOBuilder.done);
  });
})