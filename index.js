const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('./databaseConnect')
var studentController = require('./controller/studentController');

var app = express();
app.use(bodyParser.json())

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log("server started on port " + port);
})
app.use('/students', studentController);