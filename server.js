
const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// mongoose.connect("mongodb://localost:27017/member",{useNewUrlParser: true, useUnifiedTopology: true}, function checkDb(error){
//     if(error){
//         console.log('Error connecting to the database');
//     }
//     else{
//         console.log('Successfuly connected to the database');
//     }
// });

mongoose.connect('mongodb://127.0.0.1:27017/member')
  .then(() => console.log('Connected!'));

app.listen(9001, function check(error){
    if(error)
    console.log('port error');
    else
    console.log('Started');
})
app.use(express.json());