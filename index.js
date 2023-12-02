const express = require('express');
const app = express();
const Product = require('./model/productModel');
const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.ATLASS_PASS;
const dbname = process.env.DBNAME;
const username = process.env.MY_USERNAME;


app.set('view engine', 'ejs');
// for json middlewere
app.use(express.json());
// for form middle were
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 2000;
app.use('/', require('./routes/index'));


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.rmhow4g.mongodb.net/${dbname}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(PORT, console.log(`Server is running on port http://localhost/${PORT}`));


    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
