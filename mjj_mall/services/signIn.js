const userDB = require('../models/user');
const companyDB = require('../models/company');

const jwt = require('../customUtils/jwtModule/jwt');

module.exports = {
    /**
     * [codeName = collectionName]
     * [user = member]
     * [company = seller]
     * 
     * @param {Object} jsonObj 
     * @param {String} codeName 
     * @returns 
     */
    signIn : async(jsonObj, codeName)=>{
        if(codeName == 'user'){
            let result = await userDB.signIn(jsonObj);
            if(result.err == undefined) return jwt.sign(result,'user');
            else return result;
        }else if(codeName == 'company'){
            return companyDB.signIn(jsonObj);
        }
    }
}