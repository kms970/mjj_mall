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
            if(result.err == undefined) {
                let token = await jwt.sign(result,'user');
                userDB.saveRefreshToken(token.refreshToken);
                return token;
            }
            else return result;
        }else if(codeName == 'company'){
            return companyDB.signIn(jsonObj);
        }
    }
}