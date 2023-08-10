import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import AuthorRouter from "./router/authorRouter"
import BlogRouter from "./router/blogRouter"

const app = express()
const databaseUri = "mongodb://localhost:27017/learnPopulate"
const port = 3000

mongoose.set("strictQuery" , false);

mongoose
    .connect(databaseUri)
    .then(() => {
        console.log(`Connected to database at : ${databaseUri}`);
        
        //Listen express server
        app.listen(port,()=>{
            console.log(`Server is listening on port: ${port}`);
            
        })
    }).catch((err) => {
        console.log(`Database connection failded with error : ${err}`);
        
    });


    app.use(bodyParser.json())
    app.use(function (req, res, next) {
        res.set("Access-Control-Allow-Origin", "*")
        res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS")
        res.set("Access-Control-Allow-Headers", "Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,Content-Type, Date, X-Api-Version, x-access-token")

        next()
    })
    app.use("/api/author",AuthorRouter)
    app.use("/api/blog",BlogRouter)
