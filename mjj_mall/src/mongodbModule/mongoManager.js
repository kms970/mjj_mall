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
     * @author KMS
     * @param {String} collectionName
     * @param {JSON} jsonObj 
     */
    DataInsertOne:function(collectionName, jsonObj){
        db.collection(collectionName).insertOne(jsonObj);
    },
    /**
     * Insert DB Many
     * @author KMS
     * @param {String} collectionName
     * @param {JSON} jsonObj 
     */
    DataInsertMany:function(collectionName, jsonObj){
        db.collection(collectionName).insertMany(jsonObj);
    }
}

module.exports = mongoHelper