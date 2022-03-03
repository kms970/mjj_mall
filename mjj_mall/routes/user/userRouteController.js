const mongodb = require("../../src/mongodbModule/mongoClientManager");

let userRouteController = {
    "signUp":function(req,res){
        console.log(req);
        mongodb.mongoInsertOne('member',req.body);
        res.status(200).send('OK');
    },
    "testAndroidGet":function(req,res){
        console.log(req);
        res.status(200).send('GET OK');
    }
}

module.exports=userRouteController;