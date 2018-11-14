//Testing out how to find data in mongo database
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongDB server:\n', err);
    }
    console.log('Connected to MongoDB server');
    
    const db= client.db('TodoApp')

    //find all items in database 
    // db.collection('Todos').find().toArray().then( (docs) => {
    //     console.log('Todos:\n',JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });


    // find items with query passed to the find() command
    // in this case it is finding all the todos that have not beem completed
    // and displaying them
    // db.collection('Todos').find({completed : false} ).toArray().then( (docs) => {
    //     console.log('Todos:\n',JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
 
     // query by ID
    // db.collection('Todos').find(
    //     {_id: new ObjectId("5be8c5515db188784d6b6331") 
    // }).toArray().then( (docs) => {
    //     console.log('Todos:\n',JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // Count items in database 
    // db.collection('Todos').find().count().then( (count) => {
    //     console.log('Number of Todos: ',count);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
  
    // count the number of users with name Rodney
    db.collection('Users').find({name: 'Rodney'}).count().then( (count) => {
        console.log('Number of Todos: ',count);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    //client.close();
});