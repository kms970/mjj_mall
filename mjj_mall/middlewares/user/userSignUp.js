const mongodb = require("../../src/mongodbModule/mongoClientManager");

let userRouteController = {
    signUp: function (req, res, next) {
        var options = {
            'sort': ['memberIndex', 'desc']
        };
        mongodb.mongoSelectOne('seller', options).then(function (selectResult) {
            try {
                req.body.memberIndex = selectResult[0].memberIndex;
                req.body.memberIndex++;
            } catch (error) {
                req.body.memberIndex = 1;
            }
            //mongodb.mongoInsertOne('member',req.body);

            req.changeResponse = { response: "SUC" };
            next();
        }).catch(function (err) {
            console.log(err);
            return res.status(500).send({ response: 'FAILED', error: err }); //mongoDB 에러시
        });
    },

    // testAndroidGet: function (req, res) {
    //     // mongodb.mongoSelectMany('member',{"memberName":"테스터"},{sort:{"memberIndex":-1}}).then(function(selectResult){
    //     //     console.log(selectResult);
    //     //     //mongodb.mongoInsertOne('member',req.body);
    //     //     res.status(200).send({data:req.body});
    //     // }).catch(function(err){
    //     //     console.log(err);
    //     // });

    //     mongodb.mongoSelectAll('member').then(function (selectResult) {
    //         console.log(selectResult);
    //         res.status(200).send(selectResult);
    //     }).catch(function (err) {
    //         console.log(err);
    //     });
    // }
}

module.exports = userRouteController;