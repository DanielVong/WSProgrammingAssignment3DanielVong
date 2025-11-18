let mongoose = require("mongoose")

//CREATE A MODEL
let assignmentModel = mongoose.Schema(
    {
        name:String, 
        deadline:String,
        weight:Number,
        complete:Boolean
    },
    {
        collection: "assignments"
    }
);
module.exports = mongoose.model('Assignment',assignmentModel);