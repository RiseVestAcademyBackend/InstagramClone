const  mongoose  = require("mongoose")
const requireLogin = require("../middleware/requireLogin")
const Post = mongoose.model("Post")

// all post -- feed

router.get("/test", (req,res,next) => {
    
    mongoose.set("strictQuery", true) // not part of schema should not be queried

    const mongoDB_URI = `mongodb+srv://baff:${process.env.PASSWORD}@cluster0.jf4g8cq.mongodb.net/<Tiffany>`

    mongoose.connect(mongoDB_URI)

    mongoose.connection.on("connected", () => {
        console.log("connected to Tiffany")
    })

    mongoose.connection.on("error", () => {
        console.log("error connecting to Tiffany")
    })
    


})



router.get("/all", requireLogin , (req, res, next) => {
    Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt")
    .then(
        (posts) => {
            res.json({posts})
        })
    .catch( err => {
        console.log(err)
    })
})

// my own post

router.get("/mypost", requireLogin, (req,res,next) => {
    Post.find({postedBy: req.user._id})
    .populate("PostedBy", "_id name")
    .then( mypost => {
        res.json({mypost})
    })
    .catch (err => console.log(err))
})

// post -> create, delete, update, read
router.post("/posts", requireLogin, (req,res)=> {
    const {title, body, pic} = req.body 
    if (!title || !body || !pic) {
        return res.status(422).json({error: "Something is missing"})
    }

    req.user.password = undefined

    const post = new Post({
        content : {title, body},
        image: pic,
        comments,
        likes,
        postedBy :  req.user
    })

    post.save()
    .then( result => {
        res.json({post:result})
    })
    .catch( err => console.log(err))
})