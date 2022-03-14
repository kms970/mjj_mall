const express = require('express');
const router = express.Router();

const controller = require('./companyRouteController');
const validation = require('./companyValidation');

router.post('/sign-up',validation.companyValidation, controller.signUp);
router.post('/test-url',controller.testAndroidGet);

module.exports=router;