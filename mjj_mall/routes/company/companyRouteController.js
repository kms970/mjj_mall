const mongodb = require("../../src/mongodbModule/mongoClientManager");

// RSA 와 AES 공부
// REST API 보안 공부

const regExpId = /^admin|^administrator|^root/gi;
const regExpName = /^admin|^administrator|^root/gi;

let companyRouteController = {
    "signUp":function(req,res){
        console.log(req.body);
       // mongodb.mongoInsertOne('seller',req.body);
        let isExistId = Object.keys(req.body).includes('companyId'); //companyId 키값 존재하는지 확인
        let isExistName = Object.keys(req.body).includes('companyName');
        try {
            if(regExpId.test(req.body.companyId)){
                res.status(400).send({"response":"FAILED","error":"Can not use this ID"}); //사용불가 companyId로 회원가입 요청시
            }else if(!isExistId){
                res.status(400).send({"response":"FAILED","error":"No propety Id"}); //companyId property가 존재하지 않을시
            }else if(regExpName.test(req.body.companyName)){
                res.status(400).send({"response":"FAILED","error":"Can not use this Name"}); //사용불가 companyName으로 회원가입 요청시
            }else if(!isExistName){
                res.status(400).send({"response":"FAILED","error":"No propety Name"}); //companyName property가 존재하지 않을시
            }else{
                var options = {
                    'sort':['companyIndex','desc']
                };
                mongodb.mongoSelectOne('seller',{}, options).then(function(selectResult){
                    console.log(selectResult);
                    try {
                        req.body.companyIndex=selectResult[0].companyIndex;
                        req.body.companyIndex++;
                    } catch (error) {
                        req.body.companyIndex=1;
                    }
                    //mongodb.mongoInsertOne('seller',req.body);
                    
                    res.status(200).send({"response":'OK'});
                }).catch(function(err){
                    console.log(err);
                    res.status(500).send({"response":'FAILED',"error":err}); //mongoDB 에러시
                });
            }
        } catch (error) {
            res.status(400).send({"response":"FAILED","error":error})
        }
    },

    "testAndroidGet":function(req,res){
        // mongodb.mongoSelectMany('company',{"companyName":"테스터"},{sort:{"companyIndex":-1}}).then(function(selectResult){
        //     console.log(selectResult);
        //     //mongodb.mongoInsertOne('company',req.body);
        //     res.status(200).send({data:req.body});
        // }).catch(function(err){
        //     console.log(err);
        // });

        mongodb.mongoSelectAll('company').then(function(selectResult){
            console.log(selectResult);
            res.status(200).send(selectResult);
        }).catch(function(err){
            console.log(err);
        });
    }
}

module.exports=companyRouteController;