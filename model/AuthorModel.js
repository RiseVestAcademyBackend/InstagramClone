// first_name: String, family_name: String, date_of_birth: Date, profile_url: String, summary: String

const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types;

const authorSchema = new mongoose.Schema({
    first_name : ({
        type: String,
        required: true
    }),
    family_name : ({
        type: String,
        required: true
    }),
    date_of_birth : ({
        type: Date,
        required: true
    }),
    profile_url : ({
        type: String,
        required: true
    }),
    profile_summary : ({
        type: String,
        required: true
    }),
}) 

const Author = mongoose.model("Author", authorSchema);