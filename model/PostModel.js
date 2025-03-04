const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    

    content : ({
        type : String,
        required : true
    }),

    image : ({
        type :  String,
        required : true
    }),

    likes:[{type:ObjectId,ref:"User"}],

    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
    
},{timestamps:true})


