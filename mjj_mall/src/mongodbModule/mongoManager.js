const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://192.168.1.152:27017/mjj",
)

const db = mongoose.connection;

const handleOpen = () =>console.log("Connected DB");
const handleError = error => console.log("Error on DB Connection:\n" + error);

db.once("open",handleOpen);
db.on("error",handleError);

let mongoHelper = {
    /**
     * Insert DB OnlyOne
     * 
     * @param {String} collectionName
     * @param {JSON} jsonObj 
     * 
     * @author KMS
     * @since 22-02-24
     */
    DataInsertOne:function(collectionName, jsonObj){
        db.collection(collectionName).insertOne(jsonObj,function(err,doc){
            if(err)throw err;
        });
    },
    /**
     * Insert DB Many
     * 
     * @param {String} collectionName
     * @param {JSON} jsonObj 
     * 
     * @author KMS
     * @since 22-02-24
     */
    DataInsertMany:function(collectionName, jsonObj){
        db.collection(collectionName).insertMany(jsonObj,function(err,doc){
            throw err;
        });
    },

    /**
     * 
     * @param {*} collectionName 
     * @param {*} selectWhere 
     * @param {*} columnName 
     * @param {*} callback 
     */
    DataSelect:async function(schemaName, collectionName, selectWhere, columnName, callback){
        // if(selectWhere) {
        //     console.log('aaa');
        //     db.model(collectionName,schemaName).find(selectWhere,async function(err,res){
        //         if(err) console.log(err);
        //         else {
        //             console.log(res);
        //             return Promise.resolve(callback(res));
        //         }
        //     });
        // }else if(columnName){
        //     console.log('bbb');
        //     db.model(collectionName,schemaName).find(columnName,async function(err,res){
        //         if(err) console.log(err);
        //         else {
        //             console.log(res);
        //             return Promise.resolve(callback(res));
        //         }
        //     });
        // }else if(columnName&&selectWhere){
        //     console.log('ccc');
        //     db.model(collectionName,schemaName).find(selectWhere,columnName,async function(err,res){
        //         if(err) console.log(err);
        //         else {
        //             console.log(res);
        //             return Promise.resolve(callback(res));
        //         }
        //     });
        // }else if(!columnName&&!selectWhere){
        //     db.model(collectionName,schemaName).find().exec(function(err,res){
        //         if(err) console.log(err);
        //         else {
        //             console.log(res);
        //             return Promise.resolve(callback(res));
        //         }
        //     });
        // }
        let cursor = db.collection(collectionName).find();
        cursor.each(function(err,doc){
            console.log(doc);
        })
    }
}

module.exports = mongoHelper