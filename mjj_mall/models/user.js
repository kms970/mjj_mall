const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = {
    signUp : async (jsonObj)=>{
        var options = {
            'sort': ['memberIndex', 'desc']
        }

        let result = new Object();

        await mongodb.mongoSelectOne('member', options).then(function (selectResult) {
            try {
                jsonObj.memberIndex = selectResult[0].memberIndex;
                jsonObj.memberIndex++;
            } catch (error) {
                jsonObj.memberIndex = 1;
            }
            //mongodb.mongoInsertOne('member',jsonObj);

            result.response = "SUC";
        }).catch(function (err) { //mongoDB 에러시
            result.response = "FAILED";
            result.error = err;
        });

        return result;
    }
}