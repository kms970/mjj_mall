const express = require('express');
const router = express.Router();

const controller = require('../middlewares/company/companySignUp');
const validation = require('../middlewares/company/companyValidation');

router.post('/sign-up',
    validation.companyValidation,
    controller.signUp,
    async (req, res) => {
        res.status(200).send({response:'SUC'});
    }
);

module.exports=router;