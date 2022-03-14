const express = require('express');
const router = express.Router();

const controller = require('./userRouteController');
const validation = require('./userValidation');

router.post('/sign-up', validation.userValidation, controller.signUp);
router.post('/test-url',controller.testAndroidGet);

module.exports=router;