let mongoose = require("mongoose")

//Creates model for the object
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