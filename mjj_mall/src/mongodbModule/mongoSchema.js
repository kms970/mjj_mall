const mongoose = require("mongoose");

let schemaObj = {
    member:new mongoose.Schema({
        'a':String
    }),
}

module.exports = schemaObj;