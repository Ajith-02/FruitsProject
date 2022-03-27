// Mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Eat apple a day"
});


fruit.save()




// Native MongoDB Driver

// const { MongoClient } = require("mongodb");
// const assert = require("assert");
// const { start } = require("repl");

// // Replace the uri string with your MongoDB deployment's connection string.

// // const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";

// // Connection URL
// const url = "mongodb://localhost:27017";

// // Database Name
// const dbName = "fruitsDB"

// //Create a new MongoClient
// const client = new MongoClient(url);

// //Use connection method to connect to the server
// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Connect successfully to the server")

//     const db = client.db(dbName);
//     findDocuments(db, function(){
//         client.close();
//     })
    
// });

// const insertDocuments = function(db, callback){
//     //get the document collection
//     const collection = db.collection("fruits");
//     //insert some document
//     collection.insertMany([
//         {
//             name: "Apple",
//             score: 8,
//             review: "Great fruit"
//         },
//         {
//             name: "Orange",
//             score: 6,
//             review: "Kind sour"
//         },
//         {
//             name: "Banana",
//             score: 9,
//             review: "Great stuff"
//         }
//     ], function(err, result){
//         assert.equal(err, null);
//         // assert.equal(3, result.result.n);
//         // assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// };

const findDocuments = function(db, callback){
    //get the document collection
    const collection = db.collection("fruits");
    //find some documents
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err, null);
        console.log("found the following records");
        console.log(fruits);
        callback(fruits)
    })
}
