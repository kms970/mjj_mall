const userDB = require('../models/user');
const companyDB = require('../models/company');

module.exports = {
    /**
     * [codeName = collectionName]
     * [user]
     * [company]
     * 
     * @param {Object} jsonObj 
     * @param {String} codeName 
     * @returns 
     */
    signUp : async(jsonObj, codeName)=>{
        if(codeName == 'user'){
            return userDB.signUp(jsonObj);
        }else if(codeName == 'company'){
            return companyDB.signUp(jsonObj);
        }
    }
}