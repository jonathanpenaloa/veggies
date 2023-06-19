/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const Veggie = require('./Models/Veggie')
const Fruit = require('./Models/Fruit.js');
const cors = require("cors")

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
        let databaseResponse = await Veggie.find();
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
});

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
        let databaseResponse = await Veggie.create(req.body);
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
    
})

app.put('/fruits/:idOfFruit/:newName', async (req, res) => {
    try {
        const idOfFruit = req.params.idOfFruit;
        const newName= req.params.newName;
 
        let databaseResponse = await Fruit.findByIdAndUpdate(idOfFruit, {name: newName})
        res.send(databaseResponse)
    }
    catch (err) {
        res.status(404).send(err.message)
    }
    
})

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

