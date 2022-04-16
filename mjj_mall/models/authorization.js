const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = auth;
/**
* save refreshToken and data
* 
* @param {String} refreshToken -> refreshToken
* @param {Object} jsonObj -> data
* @param {String} codeName
*
*/
auth.saveRefreshToken = async (refreshToken, jsonObj, codeName) => {
    if(codeName == 'user'){
        var queryOptions = {
            index: jsonObj.index,
            memberBirth: jsonObj.memberBirth
        };
    }else if(codeName == 'comapany'){
        //todo : Make saveRefreshToken option
    }else{
        return "FAILED";
    }


    jsonObj.token = refreshToken;

    let upsertOption = {
        upsert: true,
        new: false
    }
    mongodb.mongoFindOneAndUpdate('refreshToken', queryOptions, { $set: jsonObj }, upsertOption);
}