const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName:  { 
        type: String,
        required: [true, "First name must be entered"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: { 
        type: String,
        required: [true, "Last name must be entered"],
        minlength: [2, "Last name must be at least 2 characters long"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);