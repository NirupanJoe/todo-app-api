const express = require('express');
const controller = require('../controller/todosController');

const router = express.Router();

router.get('/', controller.listTodo).post('/', controller.createTodo);
router.delete('/:todo_id', controller.deleteTodo).put('/:todo_id', controller.updateTodo)
    .get('/:todo_id', controller.getTodo);

module.exports = router;
