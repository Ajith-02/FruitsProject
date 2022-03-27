const { MongoClient } = require("mongodb");
const assert = require("assert");
const { start } = require("repl");

// Replace the uri string with your MongoDB deployment's connection string.

// const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "fruitsDB"

//Create a new MongoClient
const client = new MongoClient(url);

//Use connection method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connect successfully to the server")

    const db = client.db(dbName);
    insertDocuments(db, function(){
        client.close();
    })
    
});

const insertDocuments = function(db, callback){
    //get the document collection
    const collection = db.collection("fruits");
    //insert some document
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kind sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff"
        }
    ], function(err, result){
        assert.equal(err, null);
        // assert.equal(3, result.result.n);
        // assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    })
}



















// async function run() {
//   try {
//     await client.connect();

//     const database = client.db('fruitsDB');
//     const fruits = database.collection('fruits');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const fruit = await fruits.findOne(query);

//     console.log(fruit);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);