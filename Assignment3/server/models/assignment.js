let mongoose = require("mongoose")

//CREATE A MODEL
let assignmentModel = mongoose.Schema(
    {
        course:String,
        name:String, 
        weight:Number,
        due:String
    },
    {
        collection: "assignments"
    }
);
module.exports = mongoose.model('Assignment',assignmentModel);