const validationCheck = require('../../src/validationModule/validation');

module.exports ={
    userValidation : async(req,res,next) =>{
        let checkResult = await validationCheck.isPossible({id: req.body.memberId, name: req.body.memberName});
        if(checkResult.customResponse == 'FAILED'){
            res.status(400).json(checkResult);
        }else next();
    }
}