const userDB = require('../models/user');

module.exports = {
    searchId : async (jsonObj, codeName)=>{
        console.log(jsonObj);
        if(codeName == 'user'){
            let result = await userDB.findId(jsonObj);
            console.log(result);
            if(result.err == undefined){
                let str = result.memberId.substr(0,3)+result.memberId.substr(4,result.memberId.length).replaceAll(/^[A-Za-z0-9+]*$/g,'*');
                console.log(str);
            }else{
                
            }
        }else if(codeName == 'company'){

        }
    }
}