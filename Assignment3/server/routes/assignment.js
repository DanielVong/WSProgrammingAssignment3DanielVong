let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

let Assignment = require('../models/assignment');


//Read functionality
router.get('/',async(req,res,next)=>{
    try
    {
        const AssignmentList = await Assignment.find();
        res.render('Assignments/list',{
            title:'Assignments',
            AssignmentList:AssignmentList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignments/list',{
            error:'Error on server'
        })
    }
})