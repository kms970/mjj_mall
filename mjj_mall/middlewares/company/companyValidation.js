const validationCheck = require('../../customUtils/validationModule/validation');

module.exports ={
    companyValidation : async(req,res,next) =>{
        let checkResult = await validationCheck.isPossible({id: req.body.companyId, name: req.body.companyName});
        if(checkResult.customResponse == 'FAILED'){
            res.status(400).json(checkResult);
        }else next();
    }
}