// server for todo list
global.__basedir = __dirname;
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

console.log('before use bodyPaser');
app.use(bodyParser.json());

console.log('after use bodyPaser');

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    console.log(req.body);
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

