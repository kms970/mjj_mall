const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = loginPage;

function loginPage(){};

/**
 * signUp user
 * 
 * @param {Object} jsonObj 
 * @param {String} codeName
 * 
 * @returns 
 */
loginPage.prototype.signUp = async (jsonObj,codeName) => {

    let result = new Object();
    let collectionName = '';

    var indexOptions = {
        'sort': ['index', 'desc']
    };

    if(codeName == 'user'){
        var queryOptions = {
            memberId: jsonObj.memberId
        };
        collectionName = 'member';
    }else if(codeName == 'company'){
        var queryOptions = {
            companyId: jsonObj.companyId
        };
        collectionName = 'seller';
    }else {
        result.response = "FAILED";
        result.error = "codeName is not exist!";
        return result;
    }

    await mongodb.mongoSelectOne(collectionName, {}, indexOptions).then(function (selectResult) {
        try {
            jsonObj.index = selectResult.index;
            jsonObj.index++;
        } catch (error) {
            jsonObj.index = 1;
        }
    }).catch(function (err) { //mongoDB 에러시
        result.response = "FAILED";
        result.error = err;
    });

    await mongodb.mongoSelectOne(collectionName, queryOptions, {}).then(function (selectResult) {
        if (selectResult.length != 0) {
            result.response = "FAILED";
        } else {
            mongodb.mongoInsertOne(collectionName, jsonObj);
            result.response = "SUC";
        }
    }).catch(function (err) { //mongoDB 에러시
        result.response = "FAILED";
        result.error = err;
    });

    return result;
};

/**
 * signIn user
 * 
 * @param {Object} jsonObj 
 * @param {String} codeName
 * 
 * @returns 
 */
loginPage.prototype.signIn = async (jsonObj,codeName) => {

    let result = new Object();
    let collectionName = '';

    if(codeName == 'user'){
        var options = {
            memberId: jsonObj.memberId,
            memberPwd: jsonObj.memberPwd
        }
        collectionName = 'member';
    }else if(codeName == 'company'){
        var options = {
            //todo Make signIn option for company
        };
        collectionName = 'seller';
    }else {
        result.response = "FAILED";
        result.error = "codeName is not exist!";
        return result;
    }

    await mongodb.mongoSelectOne(collectionName, options).then((selectResult) => {
        result.index = selectResult.index;
        if(codeName == 'user'){
            result.memberBirth = selectResult.memberBirth;
        }else if(codeName == 'company'){
            //todo Make signIn result for company
        }
        
    }).catch(function (err) { //mongoDB 에러시
        result.err = err;
    });

    return result;
};
/**
 * find Id
 * 
 * @param {Object} jsonObj 
 * @param {String} codeName
 * 
 * @returns 
 */
loginPage.prototype.findId = async (jsonObj,codeName) => {
    
    let result = new Object();
    let collectionName = '';
    
    if(codeName == 'user'){
        var options = {
            memberBirth: jsonObj.memberBirth,
            memberEmail: jsonObj.memberEmail
        }
        collectionName = 'member';
    }else if(codeName == 'company'){
        var options = {
           //todo : Make option for company
        }
        collectionName = 'seller';
    }else {
        result.response = "FAILED";
        result.error = "codeName is not exist!";
        return result;
    }

    await mongodb.mongoSelectOne(collectionName, options).then((selectResult) => {
        if(codeName == 'user'){
            result.memberId = selectResult.memberId;
        }else if(codeName == 'company'){
            //todo Make signIn result for company
        }
    }).catch((err) => {
        result.err = err;
    });

    return result;
}
