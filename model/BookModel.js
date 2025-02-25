// title: String, author: String/Author, genre/category: String/Genre, price: Number/float/double, ISBN: String, url: String

const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema.Types;

const bookSchema = new mongoose.Schema({
    title : ({
        type: String,
        required: true
    }),
    
    author : ({
        type: String,
        required: true
    }),
   
    genre : ({
        type: String,
        required: true
    }),

    price : ({
        type: Number,
        required: true
    }),

    ISBN : ({
        type: String,
        required: true
    }),

    url : ({
        type: String,
        required: true
    }),

    
})

const BookModel = mongoose.model("BookModel", bookSchema);