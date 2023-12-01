const express= require("express");
const router=express.Router();
const Product=require('../model/productModel');
const mongoose =require('mongoose');
const productController=require('../controller/productController');


// delete by id

router.delete('/:id',productController.deleteById)

// update by put method
router.put('/:id',productController.updateProductByid)

router.get('/:id',productController.getProductsById)
router.get('',productController.getAllProduct)

router.post('',productController.createProduct)

module.exports=router;