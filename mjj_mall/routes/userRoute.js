const express = require('express');
const router = express.Router();
const cors = require('cors');

const controller = require('../middlewares/user/userSignUp');
const validation = require('../middlewares/user/userValidation');

const loginTest = require('../services/signIn');
const findId = require('../services/findId');

const testJwt = require('../customUtils/jwtModule/jwt');

router.post('/sign-up',
    validation.userValidation,
    controller.signUp,
    async (req, res) => {
        res.status(200).send({response:'SUC'});
    }
);

//보내는 데이터: 토큰, status(200), 개인인지 판매자인지
router.post('/sign-in', 
async(req,res)=>{
    let result = await loginTest.signIn(req.body,'user');

    if(result.err == null){
        res.status(200).send(result);
    }else{
        res.status(401).send(result);
    }
});

router.get('/test-login', cors(), async(req,res)=>{
    console.log(req.headers);
    let tokenType = req.headers.authorization.split(' ')[0];
    let token = req.headers.authorization.split(' ')[1];
    if(tokenType == 'Bearer'){
        let verifiedToken = await testJwt.verify(token);
        console.log(verifiedToken);
    }
    res.status(200).send('ok');
})

router.post('/findId', 
async(req,res)=>{
    let result = await findId.searchId(req.body,'user');
    try {
        if(result.resultId){
            res.status(200).send(result);
        }else if(result.err){
            res.status(401).send(result);
        }
    } catch (error) {
        res.status(401).send(result);
    }
});

//router.post('/test-url', controller.testAndroidGet);

module.exports = router;