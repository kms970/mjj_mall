const mongodb = require("../../src/mongodbModule/mongoClientManager");

const regExpId = /^admin|^administrator|^root/gi;
const regExpName = /^admin|^administrator|^root/gi;

let companyRouteController = {
    signUp: function (req, res) {
        try {
            var options = {
                'sort': ['companyIndex', 'desc']
            };
            mongodb.mongoSelectOne('seller', {}, options).then(function (selectResult) {
                console.log(selectResult);
                try {
                    req.body.companyIndex = selectResult[0].companyIndex;
                    req.body.companyIndex++;
                } catch (error) {
                    req.body.companyIndex = 1;
                }
                //mongodb.mongoInsertOne('seller',req.body);

                res.status(200).send({ "response": 'OK' });
            }).catch(function (err) {
                console.log(err);
                res.status(500).send({ "response": 'FAILED', "error": err }); //mongoDB 에러시
            });
        } catch (error) {
            res.status(400).send({ "response": "FAILED", "error": error })
        }
    },

    testAndroidGet: function (req, res) {
        mongodb.mongoSelectMany('company', { "companyName": "테스터" }, { sort: { "companyIndex": -1 } }).then(function (selectResult) {
            console.log(selectResult);
            //mongodb.mongoInsertOne('company',req.body);
            res.status(200).send({ data: req.body });
        }).catch(function (err) {
            console.log(err);
        });

        mongodb.mongoSelectAll('company').then(function (selectResult) {
            console.log(selectResult);
            res.status(200).send(selectResult);
        }).catch(function (err) {
            console.log(err);
        });
    }
}

module.exports = companyRouteController;