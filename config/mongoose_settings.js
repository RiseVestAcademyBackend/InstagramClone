const mongoose = require("mongoose")

mongoose.set("strictQuery", true) // not part of schema should not be queried

const mongoDB_URI = `mongodb+srv://baff:${process.env.PASSWORD}@cluster0.jf4g8cq.mongodb.net/<Tiffany>`

mongoose.connect(mongoDB_URI)

mongoose.connection.on("connected", () => {
    console.log("connected to Tiffany")
})

mongoose.connection.on("error", () => {
    console.log("error connecting to Tiffany")
})

