import Blog from "../models/blog";

class BlogController{
    async get(req: any, res: any){
        const blogId:string = req.params.id 
        try {
            let blog = await Blog.findOne({_id:blogId})
            if(!blog){
                res.status(404).json({msg: "Author Not Found!"})
            }
            res.status(200).json(blog)
        } catch (error) {
            res.status(500).json({msg: "Server Error"})
        }
    }

    async create(req: any, res: any){
        const blogDoc: any = req.body
        try {
            let blog = new Blog(blogDoc)
            await blog.save()
            res.status(200).json(blog)
        } catch (error) {
            res.status(500).json({msg: "Server Error !"})
        }
    }
}
export default BlogController