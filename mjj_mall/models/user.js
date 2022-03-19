const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = {
    signUp: async (jsonObj) => {
        var indexOptions = {
            'sort': ['memberIndex', 'desc']
        };

        var queryOptions = {
            memberId: jsonObj.memberId
        };

        let result = new Object();

        // await mongodb.mongoSelectOne('member', {}, indexOptions).then(function (selectResult) {
        //     try {
        //         jsonObj.memberIndex = selectResult[0].memberIndex;
        //         jsonObj.memberIndex++;
        //     } catch (error) {
        //         jsonObj.memberIndex = 1;
        //     }
        // }).catch(function (err) { //mongoDB 에러시
        //     result.response = "FAILED";
        //     result.error = err;
        // });

        await mongodb.mongoSelectOne('member',queryOptions,{}).then(function(selectResult){
            if(selectResult.length != 0){
                result.response = "FAILED";
            }else{
                mongodb.mongoInsertOne('member', jsonObj);
                result.response = "SUC";
            }
        }).catch(function (err) { //mongoDB 에러시
            result.response = "FAILED";
            result.error = err;
        });

        return result;
    },
    signIn: async (jsonObj) => {
        var options = {
            memberId: jsonObj.memberId,
            memberPwd: jsonObj.memberPwd
        }
        let result = new Object();

        await mongodb.mongoSelectOne('member', options).then(function (selectResult) {
            result.memberIndex = selectResult[0].memberIndex;
            result.memberBirth = selectResult[0].memberBirth;
            result.err = null;
        }).catch(function (err) { //mongoDB 에러시
            result.err = err;
        });

        return result;
    }
}