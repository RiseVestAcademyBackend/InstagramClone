const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    username : ({
        type: String,
        required: true
    }),
    
    name : ({
        type: String,
        required: true
    }),

    email : ({
        type: String,
        required: true
    }),
    
    password_hash : ({
        type: String,
        required: true
    }),

    

    pic : ({
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/"
    }),
    
    followers:[{type:ObjectId,ref:"User"}],
    
    following:[{type:ObjectId,ref:"User"}]
})