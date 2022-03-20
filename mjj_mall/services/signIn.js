const userDB = require('../models/user');
const companyDB = require('../models/company');

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
            return userDB.signIn(jsonObj);
        }else if(codeName == 'company'){
            return companyDB.signIn(jsonObj);
        }
    }
}