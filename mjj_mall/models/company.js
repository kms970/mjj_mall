const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = {
    signUp : async (jsonObj)=>{
        var options = {
            'sort': ['companyIndex', 'desc']
        }

        let result = new Object();

        await mongodb.mongoSelectOne('seller', options).then(function (selectResult) {
            try {
                jsonObj.companyIndex = selectResult[0].companyIndex;
                jsonObj.companyIndex++;
            } catch (error) {
                jsonObj.companyIndex = 1;
            }
            //mongodb.mongoInsertOne('seller',jsonObj);

            result.response = "SUC";
        }).catch(function (err) { //mongoDB 에러시
            result.response = "FAILED";
            result.error = err;
        });

        return result;
    }
}