const mongodb = require("../../src/mongodbModule/mongoClientManager");

const regExp = /^admin|^administrator|^root/gi;

let userRouteController = {
    "signUp":function(req,res){
        let isExistId = Object.keys(req.body).includes('memberId'); //memberId 키값 존재하는지 확인
        try {
            if(regExp.test(req.body.memberId)){
                res.status(400).send({"response":"FAILED","error":"Can not use this ID"}); //사용불가 memberId로 회원가입 요청시
            }else if(!isExistId){
                res.status(400).send({"response":"FAILED","error":"No propety by Id"}); //memberId property가 존재하지 않을시
            }else{
                mongodb.mongoSelectOne('member',{sort:{"memberIndex":-1}}).then(function(selectResult){
                    try {
                        req.body.memberIndex=selectResult.memberIndex++;
                    } catch (error) {
                        req.body.memberIndex=1;
                    }
                    //mongodb.mongoInsertOne('member',req.body);
                    
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
        // mongodb.mongoSelectMany('member',{"memberName":"테스터"},{sort:{"memberIndex":-1}}).then(function(selectResult){
        //     console.log(selectResult);
        //     //mongodb.mongoInsertOne('member',req.body);
        //     res.status(200).send({data:req.body});
        // }).catch(function(err){
        //     console.log(err);
        // });

        mongodb.mongoSelectAll('member').then(function(selectResult){
            console.log(selectResult);
            res.status(200).send(selectResult);
        }).catch(function(err){
            console.log(err);
        });
    }
}

module.exports=userRouteController;