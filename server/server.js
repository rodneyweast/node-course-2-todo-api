// server for todo list
global.__basedir = __dirname;
var {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/12345678

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //Validate id if good return it
    if (!ObjectID.isValid(id)) {
            return res.status(404).send();
        } 
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send(); 
        }    
        res.send({ todo })
    }).catch((e) => {
        res.send(400);
    });       
});

app.listen(port, () => {
    console.log('Started on port ',port);
});

module.exports = {app};