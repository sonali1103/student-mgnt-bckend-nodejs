const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/student_system';
mongoose.connect(url,{useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('mongo connected successfully')
    }
    else{
        console.log(JSON.stringify(err, undefined,2));
    }
})
module.exports = mongoose;