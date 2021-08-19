const express = require('express');
const routers = express.Router();

require('../database');

const TodoController = require('../controllers/todo.controller');

const todoController = new TodoController();

routers.post('/todos', async (req, res, next) => {
  await todoController.create(req, res, next)
});


module.exports = routers;