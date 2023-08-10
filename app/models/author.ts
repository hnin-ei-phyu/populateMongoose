import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    name: String,
    email: String,
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
})

const Author = mongoose.model("Author",AuthorSchema)
export default Author