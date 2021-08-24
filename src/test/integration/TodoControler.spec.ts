// const request = require('supertest');
// const app = require('../../server');
// const TodoDTOBuilder = require('../builder/TodoDTOBuilder');

// const endpointURL = process.env.URL;

// describe(endpointURL, () => {

//   it('POST' + endpointURL, async () => {
//     const createdTodoDTOBuilder = new TodoDTOBuilder("Integration test");

//     const response = await request(app)
//       .post(endpointURL)
//       .send(createdTodoDTOBuilder);
//       expect(response.statusCode).toBe(201);
//       expect(response.body).toHaveProperty('title');
//       expect(response.body).toHaveProperty('done');
//       expect(response.body.title).toBe(createdTodoDTOBuilder.title);
//       expect(response.body.done).toBe(createdTodoDTOBuilder.done);
//   });
// })