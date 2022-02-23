let IndexRouteController = {
    "testAndroidPost":function(req,res){
        console.log(req);
        res.status(200).send('POST OK');
    },
    "testAndroidGet":function(req,res){
        console.log(req);
        res.status(200).send('GET OK');
    }
}

module.exports=IndexRouteController;