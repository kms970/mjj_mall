const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs')
const path = require('path')
const static = require('serve-static');
const mongoDB = require('./src/mongodbModule/mongoClientManager');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

/*
let result = function(res){
	console.log('===========');
	console.log(res);
}

mongoDB.mongoSelectMany('member',{"a":"1"},{}).then(result).catch(function(err){
	console.log(err);
});

mongoDB.mongoInsertMany('member',[{'a':'456'},{'a':'678'}]);

Select Many Example
let queryObj = {"a":"1"};
let optionObj = {
	sort: {"a":-1}, // -1 = desc
	projection: {_id:0,"a":1} // _id 출력X , a 출력O
}
mongoDB.mongoSelectMany(collectionName, )
*/

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


// public 폴더와 upload 폴더 경로
app.use('/public', static(path.join(__dirname, 'views')));

const server = app.listen(process.env.PORT || 50001, () => {
	const port = server.address().port

	console.log(`Example app listening at http://localhost:${port}`)
});

//view router
const testRouter = require('./routes/test/testRoute');
app.use('/', testRouter);
//css or link
app.use(express.static(__dirname + '/views'));