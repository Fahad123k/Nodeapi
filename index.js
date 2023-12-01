const express= require('express');
const app= express();
const Product=require('./model/productModel');
const mongoose =require('mongoose');
require('dotenv').config();

const password = process.env.ATLASS_PASS;
const dbname= process.env.DBNAME;
const username=process.env.MY_USERNAME;

console.log('password URL:', password);
console.log('dbname Key:', dbname);
console.log('username Key:', username);
app.set('view engine','ejs');
// for json middlewere
app.use(express.json());
// for form middle were
app.use(express.urlencoded({extended:false}));

const PORT=process.env.PORT || 2000;
app.use('/',require('./routes/index'));
// delete by id
app.delete('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:`Can not find product id:${id}`})
        }
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:err.message})

    }
})

// update by put method
app.put('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404).json({message:`Can not find product id:${id}`})
        }
        const updateProduct=await Product.findById(id)
        res.status(200).json(updateProduct);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:err.message})

    }
})

app.get('/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:err.message})

    }
})
app.get('/product',async(req,res)=>{
    try{
        const product= await Product.find({});
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:err.message})

    }
})

app.post('/product',async(req,res)=>{
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product= await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.rmhow4g.mongodb.net/${dbname}?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT,console.log(`Server is running on port http://localhost/${PORT}`));


  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
