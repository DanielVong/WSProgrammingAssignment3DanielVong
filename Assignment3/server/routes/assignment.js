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

// Get route for displaying the add page- Create operation
router.get('/add',async(req,res,next)=>{
 try
    {
        res.render('Assignments/add',{
            title:'Add Assignment'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignments/add',{
            error:'Error on server'
        })
    }
})
// Post route for processing the add page- Create operation
router.post('/add',async(req,res,next)=>{
     try
    {
        let newAssignment = Assignment({
            "course":req.body.course,
            "name":req.body.name,
            "weight":req.body.weight,
            "due":req.body.due
        })
        Assignment.create(newAssignment).then(()=>{
            res.redirect('/assignments')
        });
    }
    catch(err)
    {
        console.error(err);
        res.render('Assignments/add',{
            error:'Error on server'
        });
        
    }
})
// Get route for displaying the edit page- Update operation
router.get('/edit/:id',async(req,res,next)=>{
    try{
            const id = req.params.id;
            const assignmentToEdit = await Assignment.findById(id)
            res.render("Assignments/edit",
                {
                    title:'Edit Assignment',
                    Assignment: assignmentToEdit
                }
            )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})
// Post route for processing the add page- Update operation
router.post('/edit/:id',async(req,res,next)=>{
    try{
            let id = req.params.id;
            let updateAssignment = Assignment({
                "_id":id,
                "course":req.body.course,
                "name":req.body.name,
                "weight":req.body.weight,
                "due":req.body.due
            })
            Assignment.findByIdAndUpdate(id,updateAssignment).then(()=>{
                res.redirect("/assignments")
            })
    }
    catch(err){
        console.log(err);
        next(err);
    }
})
// Get route for performing delete operation- Delete operation
router.get('/delete/:id',async(req,res,next)=>{
    try{
            let id = req.params.id;
            Assignment.deleteOne({_id:id}).then(()=>{
                res.redirect("/assignments")
            })
    }
    catch(err){
        console.log(err);
        next(err);
    }
})
module.exports = router;
