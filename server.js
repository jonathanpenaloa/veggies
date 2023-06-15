/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const Veggies = require('./Models/Veggies')
const Fruit = require('./Models/Fruit.js');
const cors = require("cors")
// now I can use process.env.VARIABLE_NAME
// when my server starts, I want to connect to my database
require('./config/database.js')
const app = express();
app.use(express.json());

app.use(cors())


// GET DATA
app.get('/fruits', async (req, res) => {
    try {
        let databaseResponse = await Fruit.find();
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
});

app.get('/veggies', async (req, res) => {
    try {
        let databaseResponse = await Veggies.find();
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
});



// CREATE DATA
app.post('/fruits', async (req, res) => {
    try {
        console.log(req.body);
        let databaseResponse = await Fruit.create(req.body);
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
})

app.post('/create_veggies', async (req, res) => {
    console.log(req.body);
    try {
        let databaseResponse = await Veggies.create(req.body);
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
    
})


// UPDATE DATA
app.put('/fruits/:idOfFruit/:newName', async (req, res) => {
    // step 1 - get information from request (params, queries, req.body)
    try {
        const idOfFruit = req.params.idOfFruit;
        const newName= req.params.newName;
        // step 2 use information to make an update request to collection
        let databaseResponse = await Fruit.findByIdAndUpdate(idOfFruit, {name: newName})
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
    
})

// DELETE DATA
app.delete('/fruits/:idOfFruit', async (req, res) => {
    try {
        const idOfFruit = req.params.idOfFruit;
        let databaseResponse = await Fruit.findByIdAndDelete(idOfFruit)
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
    
})


app.listen(4001, () => {
    console.log("listening on 4001")
})

