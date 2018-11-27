const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var UserId= '5bee549482fb04f9aee0701f';

if (!ObjectID.isValid(UserId)) {
    console.log('Invalid User ID')
} else {
    User.findById(UserId).then((user) => {
        if (!user) {
            return console.log('Id not found');
        }  console.log('User:', user)
    }).catch((e) => console.log(e));
}
// var id = '5bf5a6f0162f674caa70ca1f11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not Valid');
// } else {
//     Todo.findById(id).then((todo) => {
//         if (!todo) {
//             return console.log('Id not found'); 
//         }    console.log('Todo by ID:', todo);
//     }).catch((e) => console.log(e));
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:',todo);
// });

