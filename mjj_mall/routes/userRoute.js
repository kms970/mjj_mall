const express = require('express');
const router = express.Router();

const controller = require('../middlewares/user/userSignUp');
const validation = require('../middlewares/user/userValidation');

const loginTest = require('../services/signIn');

router.post('/sign-up',
    validation.userValidation,
    controller.signUp,
    async (req, res) => {
        res.status(200).send({response:'SUC'});
    }
);

router.post('/sign-in', 
async(req,res)=>{
    let result = await loginTest.signIn(req.body,'user');
    
    console.log(result);

    if(result.error == null){
        res.status(200).send(result);
    }else{
        res.status(401).send(result);
    }
});

//router.post('/test-url', controller.testAndroidGet);

module.exports = router;