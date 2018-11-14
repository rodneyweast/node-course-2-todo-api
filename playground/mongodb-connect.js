const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongDB server:\n', err);
    }
    console.log('Connected to MongoDB server');
    const db= client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Run Electricity to studio',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Users').insertOne({
        name: 'Rodney East',
        age: 60,
        location: 'Bolingbrook, IL 60440'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});