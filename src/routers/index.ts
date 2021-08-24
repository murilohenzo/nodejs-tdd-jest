require('../database');

import express, { Response, Request, NextFunction } from 'express';
const routers = express.Router();

const TodoController = require('../controllers/TodoController');

const todoController = new TodoController();

routers.post('/todos', async (request: Request, response: Response, next: NextFunction) => {
  await todoController.create(request, response, next)
});

routers.get('/todos', async (request: Request, response: Response, next: NextFunction) => {
  await todoController.findAll(request, response, next)
});

routers.get('/todos/:id', async (request: Request, response: Response, next: NextFunction) => {
  await todoController.findById(request, response, next)
});

routers.patch('/todos/:id', async (request: Request, response: Response, next: NextFunction) => {
  await todoController.update(request, response, next)
});

routers.delete('/todos/:id', async (request: Request, response: Response, next: NextFunction) => {
  await todoController.delete(request, response, next)
});


module.exports = routers;