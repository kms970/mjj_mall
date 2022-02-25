var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.1.152:27017/mjj';

MongoClient.connect(url, function(err, database){
    if(err) console.log(err);

        var cursor = database.db('mjj').collection('member').find();

        console.log(cursor);

        cursor.forEach(function(doc){
            console.log(doc);
        })
});