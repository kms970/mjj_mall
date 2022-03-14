const express = require('express');
const router = express.Router();

const controller = require('../middlewares/company/companySignUp');
const validation = require('../middlewares/company/companyValidation');

router.post('/sign-up',validation.companyValidation, controller.signUp);
router.post('/test-url',controller.testAndroidGet);

module.exports=router;