const mongodb = require("../customUtils/mongodbModule/mongoClientManager");

module.exports = {
    signUp : async (jsonObj)=>{
        var indexOptions = {
            'sort': ['companyIndex', 'desc']
        }

        var queryOptions = {
            companyId: jsonObj.companyId
        };

        let result = new Object();

        await mongodb.mongoSelectOne('seller', {}, indexOptions).then(function (selectResult) {
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

        await mongodb.mongoSelectOne('seller',queryOptions,{}).then(function(selectResult){
            if(selectResult.length != 0){
                result.response = "FAILED";
            }else{
                mongodb.mongoInsertOne('seller', jsonObj);
                result.response = "SUC";
            }
        }).catch(function (err) { //mongoDB 에러시
            result.response = "FAILED";
            result.error = err;
        });

        return result;
    },
}