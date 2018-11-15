//Testing out how to find data in mongo database
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

console.log('Starting');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongDB server:\n', err);
    }
    console.log('Connected to MongoDB server');

    const db= client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id : new ObjectId('5be8c50e3ca04d783e139a25')},
    //     {$set: {completed : true}},
    //     {returnOriginal: false}
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {_id : new ObjectId("5bec3c4f56d1a2bc02b97a41")},
        {$set: {name: 'Stephanie Awesome'}, $inc: {age: 1}},
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });
    

    //client.close();
});