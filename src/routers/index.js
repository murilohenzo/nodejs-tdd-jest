require('../database');

const express = require('express');
const routers = express.Router();

const TodoController = require('../controllers/TodoController');

const todoController = new TodoController();

routers.post('/todos', async (req, res, next) => {
  await todoController.create(req, res, next)
});


module.exports = routers;