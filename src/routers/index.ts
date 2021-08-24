require('../database');

const express = require('express');
const routers = express.Router();

const TodoController = require('../controllers/TodoController');

const todoController = new TodoController();

routers.post('/todos', async (req, res, next) => {
  await todoController.create(req, res, next)
});

routers.get('/todos', async (req, res, next) => {
  await todoController.findAll(req, res, next)
});

routers.get('/todos/:id', async (req, res, next) => {
  await todoController.findById(req, res, next)
});

routers.patch('/todos/:id', async (req, res, next) => {
  await todoController.update(req, res, next)
});

routers.delete('/todos/:id', async (req, res, next) => {
  await todoController.delete(req, res, next)
});


module.exports = routers;