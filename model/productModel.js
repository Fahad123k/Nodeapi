const mongoose=require('mongoose');
// first create product schema
const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter Valid Product Name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            
        },
        image:{
            type:String,
            required:true
        },
      
    
    },
    {
        timestamp:true
       }
)

// now create model of product
const Product=mongoose.model('Product',productSchema);
module.exports=Product;