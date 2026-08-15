const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    profileImage:{
        type:String,
        default:"/images/default-user.png"
    },

    bio:{
        type:String,
        default:""
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("User", userSchema);