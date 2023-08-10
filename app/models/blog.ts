import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author" 
    },
    body: String
})
const Blog = mongoose.model("Blog",BlogSchema)
export default Blog