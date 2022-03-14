const express = require('express');
const router = express.Router();

const controller = require('../middlewares/user/userSignUp');
const validation = require('../middlewares/user/userValidation');

router.post('/sign-up',
    validation.userValidation,
    controller.signUp,
    async (req, res) => {
        res.status(200).send(req.changeResponse);
    }
);

//router.post('/test-url', controller.testAndroidGet);

module.exports = router;