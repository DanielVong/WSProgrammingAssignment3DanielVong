const { trim, type } = require('jquery');
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { collection } = require('./assignment');

let User = mongoose.Schema({
    username:
    {
        type: String,
        default: "",
        trim: true,
        required: false  // Changed to false for OAuth users
    },
    // Remove the password field - passport-local-mongoose handles this automatically
    email:
    {
        type: String,
        default: "",
        trim: true,
        required: false  // Changed to false for OAuth users
    },
    displayName:
    {
        type: String,
        default: "",
        trim: true,
        required: false  // Changed to false for OAuth users
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true  // Fixed typo: was 'trusted', should be 'true'
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true  // Fixed typo: was 'trusted', should be 'true'
    },
    created:
    {
        type: Date,
        default: Date.now
    },
    updated:
    {
        type: Date,
        default: Date.now
    }
},
{
    collection: "user"
}
)

let options = ({ missingPasswordError: 'Wrong/Missing Password' });
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);