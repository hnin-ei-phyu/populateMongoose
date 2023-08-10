import Author from "../models/author";

class AuthorController{
    async get(req:any , res: any){
        const authorId: string = req.params.id 
        try {
            let author = await Author.findOne({_id: authorId})
            if(!author){
                res.status(404).json({msg: "Author Not Found!"})
            }
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json({msg: "Server Error"})
        }
    }

    async create(req: any, res: any){
        const authorDoc = req.body
        try {
            let author = new Author(authorDoc)
            await author.save()
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json({msg: "Server Error !"})
        }
    }
}
export default AuthorController