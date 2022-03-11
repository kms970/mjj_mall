const regExpId = /^admin|^administrator|^root/gi;
const regExpName = /^admin|^administrator|^root/gi;

module.exports={
    isPossible : async(req, res, next)=>{
        console.log(req.body);
        let isExistId = Object.keys(req.body).includes('memberId'); //memberId 키값 존재하는지 확인
        let isExistName = Object.keys(req.body).includes('memberName');

        if(regExpId.test(req.body.memberId)){
            res.status(400).send({"response":"FAILED","error":"Can not use this ID"}); //사용불가 memberId로 회원가입 요청시
        }else if(!isExistId){
            res.status(400).send({"response":"FAILED","error":"No propety Id"}); //memberId property가 존재하지 않을시
        }else if(regExpName.test(req.body.memberName)){
            res.status(400).send({"response":"FAILED","error":"No propety Name"}); //memberName property가 존재하지 않을시
        }else if(!isExistName){
            res.status(400).send({"response":"FAILED","error":"No propety by Name"}); //memberName property가 존재하지 않을시
        } else next();
    }
}