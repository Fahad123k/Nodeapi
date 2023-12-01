const express= require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('userhome');
})

router.get('/profile',(req,res)=>{
    res.render('userprofile');
})

router.get('/signin',(req,res)=>{
    res.render('signin');
})
router.get('/logout',(req,res)=>{
    res.render('logout');
})

module.exports = router;