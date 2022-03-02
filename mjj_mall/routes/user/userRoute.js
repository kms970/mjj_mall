const express = require('express');
const router = express.Router();

const controller = require('./userRouteController');

router.post('/user/sign-up',controller.signUp);
router.get('/test_url',controller.testAndroidGet);

module.exports=router;