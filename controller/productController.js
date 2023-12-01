const Product=require('../model/productModel');

exports.createProduct=async(req,res)=>{
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product= await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
};

exports.getAllProduct=async(req,res)=>{
    try{
        const product= await Product.find({});
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message:err.message})

    }
}


exports.getProductsById=async(req,res)=>{
    try{
        const {id}=req.params;
        const product= await Product.findById(id);
        res.status(200).json(product);
    }
    catch(err){
        console.log(err.message);
        const mess="Product Not found";
        if(err.message==null){
            
        }
        res.status(500).json({message:"mess"})

    }
}

exports.deleteById=async(req,res)=>{
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
}

exports.updateProductByid=async(req,res)=>{
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
}