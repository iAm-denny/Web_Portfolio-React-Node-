const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let feedbackSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    message : {
        type:String,
        required:true
    }
},{timestamps:true})

const Feedback = mongoose.model('feedback' , feedbackSchema);
module.exports = Feedback ;