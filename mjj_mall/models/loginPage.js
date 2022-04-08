const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = loginPage;

/**
 * signUp user
 * 
 * @param {Object} jsonObj 
 * @param {String} collectionName
 * 
 * @returns 
 */
loginPage.signUp = async (jsonObj,collectionName) => {

    let result = new Object();

    var indexOptions = {
        'sort': ['index', 'desc']
    };

    if(collectionName == 'member'){
        var queryOptions = {
            memberId: jsonObj.memberId
        };
    }else if(collectionName == 'company'){
        var queryOptions = {
            companyId: jsonObj.companyId
        };
    }else {
        result.response = "FAILED";
        result.error = "CollectionName is not exist!";
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
 * @param {String} collectionName
 * 
 * @returns 
 */
loginPage.signIn = async (jsonObj,collectionName) => {

    let result = new Object();

    if(collectionName == 'member'){
        var options = {
            memberId: jsonObj.memberId,
            memberPwd: jsonObj.memberPwd
        }
    }else if(collectionName == 'company'){
        var options = {
            //todo Make signIn option for company
        };
    }else {
        result.response = "FAILED";
        result.error = "CollectionName is not exist!";
        return result;
    }

    await mongodb.mongoSelectOne(collectionName, options).then((selectResult) => {
        result.index = selectResult.index;
        if(collectionName == 'member'){
            result.memberBirth = selectResult.memberBirth;
        }else if(collectionName == 'company'){
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
 * @param {String} collectionName
 * 
 * @returns 
 */
loginPage.findId = async (jsonObj,collectionName) => {
    
    let result = new Object();
    
    if(collectionName == 'member'){
        var options = {
            memberBirth: jsonObj.memberBirth,
            memberEmail: jsonObj.memberEmail
        }
    }else if(collectionName == 'company'){
        var options = {
           //todo : Make option for company
        }
    }else {
        result.response = "FAILED";
        result.error = "CollectionName is not exist!";
        return result;
    }

    await mongodb.mongoSelectOne(collectionName, options).then((selectResult) => {
        if(collectionName == 'member'){
            result.memberId = selectResult.memberId;
        }else if(collectionName == 'company'){
            //todo Make signIn result for company
        }
    }).catch((err) => {
        result.err = err;
    });

    return result;
}
