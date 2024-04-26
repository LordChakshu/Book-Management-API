const { Router } = require('express');
const authController=require('../controller/authController');

const router=Router();

//endpoint for register/signup 
router.post('/register', authController.register);
//endpoint for login 
router.post('/login', authController.login);

module.exports = router;