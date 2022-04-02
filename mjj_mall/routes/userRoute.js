const express = require('express');
const router = express.Router();

const controller = require('../middlewares/user/userSignUp');
const validation = require('../middlewares/user/userValidation');
const mongoTest = require('../customUtils/mongodbModule/mongoClientManager');

const loginTest = require('../services/signIn');
const findId = require('../services/findId');

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


router.post('/test-url', async(req,res)=>{
    var queryOptions = {
        memberId: req.body.memberId
    };
    let upsertOption = {
        new : false,
        upsert :false,
    };
    if(typeof req.body.memberId !=='string'){
        return res.status(400).send({err: 'invalid memberId'});
    }
    else{
        mongoTest.mongoFindOneAndUpdate('member',queryOptions, {$set : {memberId : 'test002'}},upsertOption);
        return res.status(200).send({reponse : 'SUC'});
    }
});
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