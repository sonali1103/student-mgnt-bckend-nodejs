var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    firstName : {type : String, required: true},
    lastName :  {type : String, required:true},
    email : {type : String, required: true},
    mobileNumber : {type : Number, required: true}
}) 


module.exports = mongoose.model('StudentList', studentSchema);
