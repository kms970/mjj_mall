const userDB = require('../models/user');

module.exports = {
    searchId : async (jsonObj, codeName)=>{
        if(codeName == 'user'){
            let result = await userDB.findId(jsonObj);
            if(result.err == undefined){
                
            }else{
                
            }
        }else if(codeName == 'company'){

        }
    }
}