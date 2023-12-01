const express= require('express');
const router=express.Router();
const HomeController= require('../controller/homeController')

router.get('/',HomeController.home);
router.use('/user',require('./user'));

module.exports = router;