var mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/todoapi');

mongoose.Promise = Promise;



module.exports.Todo = require("./todo");