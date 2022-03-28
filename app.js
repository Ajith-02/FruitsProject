// Mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [1, "Please check your data entry, name not given"]
  },

  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  // name: "Apple",
  rating: 10,
  review: "Eat ",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("People", personSchema);

const mango = new Fruit({
  name: "Mango",
  rating: 9,
  review: "Great fruit"
})
mango.save();

Person.updateMany({name: "Ajith"}, {favouriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  }else {
    console.log("fruit added");
  }
})


// const person = new Person({
//   name: "Jack",
//   age: 27,
//   favouriteFruit: pineapple
// });
// person.save()

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 7,
//     review: "super"
// });
// const orange = new Fruit({
//     name: "Orange",
//     score: 7,
//     review: "super"
// });
// const banana = new Fruit({
//     name: "Banana",
//     score: 7,
//     review: "super"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved the fruits to fruitsDB");
//     }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);
    // mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "6240cf30352c93a314081464" },
//   { name: "Papaya" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("updated");
//     }
//   }
// );

// Fruit.deleteOne({_id: "6240cf5d443b2b82509c4776"}, function (err) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Deleted");
//         }
//       })

      Fruit.deleteMany({name: "Banana"}, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Deleted");
        }
      })











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

// const findDocuments = function (db, callback) {
//   //get the document collection
//   const collection = db.collection("fruits");
//   //find some documents
//   collection.find({}).toArray(function (err, fruits) {
//     assert.equal(err, null);
//     console.log("found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
