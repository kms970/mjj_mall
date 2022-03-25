const userDB = require('../models/user');
const maskingFunc = require('../customUtils/masking/masking');

module.exports = {
    searchId : async (jsonObj, codeName)=>{
        if(codeName == 'user'){
            let result = await userDB.findId(jsonObj);
            if(result.err == undefined){
                let maskingStr = maskingFunc.id(result.memberId);
                return {resultId:maskingStr};
            }else{
                
            }
        }else if(codeName == 'company'){

        }
    }
}