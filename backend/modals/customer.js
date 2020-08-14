const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true
    }
},{timestamps:true})

const Customer = mongoose.model('customer' , customerSchema);

module.exports = Customer ;