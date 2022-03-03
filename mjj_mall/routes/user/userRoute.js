const express = require('express');
const router = express.Router();

const controller = require('./userRouteController');

router.post('/sign-up',controller.signUp);
router.post('/test-url',controller.testAndroidGet);

module.exports=router;