var { json } = require('body-parser');
var express = require('express')
var cros = require('cors')
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var Student = require('../models/students')
const app = express()
app.use(express.json())

app.use(cros())
app.options('*', cros()) 

//find all students
router.get('/', async (req,res)=>{
    try{
        const students = await Student.find()
        res.json(students)
    }
    catch(err){res.send('error' + err);}
    
})

//insert student
router.post('/',async (req,res)=>{
    var newStudent = new Student( {
        firstName :  req.body.firstName,       
        lastName : req.body.lastName,
        mobileNumber : req.body.mobileNumber,
        email : req.body.email
    })
    try{
       const student = await newStudent.save();
       res.json(student);
    }
    catch(err){
        res.send(err);
    }
})

//find by student id
router.get('/:id', async (req,res)=>{
    try{    
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with given id");
        const student = await  Student.findById(req.params.id)
        res.send(student)
    }
    catch(err){
        res.send(err)
    }  
})

//find and update student
router.put('/:id',async (req,res)=>{
    try{
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with given id");
        const student = await Student.findById(req.params.id)
        if(student){
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.email = req.body.email;
            student.mobileNumber = req.body.mobileNumber;
            await student.save();
            res.send(student);
        }
        res.send(null);
    }
    catch(err){
        res.send(err);
    }
})

//delete student
router.delete('/:id',async (req,res)=>{
    try{
        await Student.findOneAndDelete({_id: req.params.id}).exec();
        return res.status(200).json("Succesfully Deleted");
    }
    catch(err){
        res.status(404).json(err);
    }
})

module.exports = router;