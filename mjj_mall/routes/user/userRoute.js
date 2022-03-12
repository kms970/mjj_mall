const express = require('express');
const router = express.Router();

const controller = require('./userRouteController');
const validation = require('../../src/validationModule/userValidation')

router.post('/sign-up', validation.isPossible, controller.signUp);
router.post('/test-url',controller.testAndroidGet);

module.exports=router;