const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = auth;
/**
* save refreshToken and data
* 
* @param {String} refreshToken -> refreshToken
* @param {Object} jsonObj -> data
*/
auth.saveRefreshToken = async (refreshToken, jsonObj, collectionName) => {
    let queryOptions = {
        index: jsonObj.index,
        memberBirth: jsonObj.memberBirth
    };

    jsonObj.token = refreshToken;

    let upsertOption = {
        upsert: true,
        new: false
    }
    mongodb.mongoFindOneAndUpdate('refreshToken', queryOptions, { $set: jsonObj }, upsertOption);
}