var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.1.152:27017/mjj';

let mongoModule = {
    /**
     * choose collection, find all data
     * 
     * @param {String} collectionName - Input name of th collection
     * @returns Promise
     * 
     * @author KMS
     * @since 22-02-27
     * 
     */
    mongoSelectAll:function(collectionName){
        return new Promise(function(resolve,reject){
            let data = new Array();
            MongoClient.connect(url, async function(err, database){
                if(err) {
                    console.log(err);
                    reject(err);
                }
                else{
                    var cursor = database.db('mjj').collection(collectionName).find();
            
                    await cursor.forEach(function(doc){
                        data.push(doc);
                    });
                }
                database.close();
                resolve(data);
            });
        }); 
    },
        /**
     * choose collection, find all data
     * 
     * @param {String} collectionName - Input name of th collection
     * @returns Promise
     * 
     * @author KMS
     * @since 22-02-27
     * 
     */
        mongoSelectOne:function(collectionName){
            return new Promise(function(resolve,reject){
                let data = new Array();
                MongoClient.connect(url, async function(err, database){
                    if(err) {
                        console.log(err);
                        reject(err);
                    }
                    else{
                        var cursor = database.db('mjj').collection(collectionName).find();
                
                        await cursor.forEach(function(doc){
                            data.push(doc);
                        });
                    }
                    database.close();
                    resolve(data);
                });
            }); 
        },
    /**
     * Insert Data of Collection Only One
     * 
     * @param {String} collectionName 
     * @param {Object} jsonObj 
     * 
     * @author KMS
     * @since 22-02-27
     */
    mongoInsertOne:function(collectionName, jsonObj){
        MongoClient.connect(url, function(err, database){
            if(err) console.log(err);
            else{
                database.db('mjj').collection(collectionName).insertOne(jsonObj, function(err,res){
                    if(err) {
                        console.log(err);
                    }else{
                        console.log('1 Document Insert');
                    }
                    database.close();
                })
            }
        })
    },
    /**
     * Insert Data of Collection Many
     * 
     * @param {String} collectionName 
     * @param {ObjectArray} jsonObj 
     * 
     * @author KMS
     * @since 22-02-27
     */
    mongoInsertMany:function(collectionName, jsonObj){
        MongoClient.connect(url, function(err, database){
            if(err) console.log(err);
            else{
                database.db('mjj').collection(collectionName).insertMany(jsonObj, function(err,res){
                    if(err) {
                        console.log(err);
                    }else{
                        console.log('Documents Insert');
                    }
                    database.close();
                })
            }
        })
    },
}

module.exports = mongoModule