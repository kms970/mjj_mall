const mongoose = require("mongoose");

let schemaObj = {
    member:mongoose.Schema({
        a:Number
    }),
}

module.exports = schemaObj;