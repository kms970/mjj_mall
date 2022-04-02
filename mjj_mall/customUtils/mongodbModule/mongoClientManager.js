var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://58.227.231.54:50002/mjj';
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
    mongoSelectAll: function (collectionName) {
        return new Promise(function (resolve, reject) {
            let data = new Array();
            MongoClient.connect(url, async function (err, database) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    var cursor = database.db('mjj').collection(collectionName).find();
                    await cursor.forEach(function (doc) {
                        data.push(doc);
                    });

                    database.close();
                    resolve(data);
                }
            });
        });
    },
    /**
     * choose collection, find Many Data
     * 
     * ex) options = {"limit": 20,"skip": 10,"sort": "collectionName"}
     * 
     * @param {String} collectionName
     * @param {Object} queryObj - If find all column, input "{}", you want to get {ColumnName:ColumnData}
     * @param {Object} optionsObj - If find all data, input "{}"
     *  
     * @returns Promise
     * 
     * @author KMS
     * @since 22-02-28
     * 
     */
    mongoSelectMany: function (collectionName, queryObj, optionsObj) {
        return new Promise(function (resolve, reject) {
            let data = new Array();
            MongoClient.connect(url, async function (err, database) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    var cursor = database.db('mjj').collection(collectionName).find(queryObj, optionsObj);

                    await cursor.forEach(function (doc) {
                        data.push(doc);
                    });

                    database.close();
                    resolve(data);
                }
            });
        });
    },
    /**
 * choose collection, find Only One Data
 * 
 * ex) options = {"limit": 20,"skip": 10,"sort": "collectionName"}
 * 
 * @param {String} collectionName
 * @param {Object} queryObj - If find all column, input "{}", you want to get {ColumnName:ColumnData}
 * @param {Object} optionsObj - If find all data, input "{}"
 * 
 * @returns Promise
 * 
 * @author KMS
 * @since 22-03-03
 * 
 */
    mongoSelectOne: function (collectionName, queryObj, optionsObj) {
        return new Promise(function (resolve, reject) {
            MongoClient.connect(url, async function (err, database) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    var res_arr = new Array();
                    var result = database.db('mjj').collection(collectionName).find(queryObj, optionsObj).limit(1);
                    await result.forEach((doc) => { res_arr.push(doc) });
                    resolve(res_arr[0]);
                }
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
    mongoInsertOne: function (collectionName, jsonObj) {
        MongoClient.connect(url, function (err, database) {
            if (err) console.log(err);
            else {
                database.db('mjj').collection(collectionName).insertOne(jsonObj, function (err, res) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(collectionName + ' 1 Document Insert');
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
    mongoInsertMany: function (collectionName, jsonObj) {
        MongoClient.connect(url, function (err, database) {
            if (err) console.log(err);
            else {
                database.db('mjj').collection(collectionName).insertMany(jsonObj, function (err, res) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(collectionName + ' Documents Insert');
                    }
                    database.close();
                })
            }
        })
    },
    /**
     * Update Data of Collection one
     * 
     * @param {String} collectionName 
     * @param {Object} queryObj 
     * @param {Object} jsonObj 
     * 
     * @author PJH
     * @since 22-03-22
     */
    mongoFindOneAndUpdate: (collectionName, queryObj, jsonObj) => {
        MongoClient.connect(url, (err, database) => {
            if (err) console.log(err);
            else {
                 database.db('mjj').collection(collectionName).findOneAndUpdate(queryObj,jsonObj,{new:true,upsert: true}).then(updateDocument=>{
                    if(updateDocument.value!==null){
                         console.log(`Successfully updated document : ${updateDocument}`);
                    }else{
                         console.log("No document matches the provided query. And update!");
                    }
                    database.close();
                 }).catch(err => console.log(`Failed to find and update document : ${err}`));
//                 /*
//                 todo : options에 {}가 아닌 필요 옵션 넣을수있게
//                 ex : {new: true, upsert: true}
//                 필요이유 : SignIn 에서 값이 존재 하지 않을경우 Insert 할수있는 옵션 필요
//                 */
            }
        })
    },
}

module.exports = mongoModule