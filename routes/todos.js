var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");


router.get('/', helpers.getTodos);

router.post('/', helpers.createTodo );

router.get('/:todoId', helpers.getTodo);

router.put('/:todoId', helpers.updateTodo)

router.delete('/:todoId', helpers.deleteTodo)

module.exports =router;