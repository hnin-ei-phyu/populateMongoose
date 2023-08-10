import express from "express"
import BlogController from "../controller/blogController"
const router = express.Router()
const blogController = new BlogController()

router.get("/get-blog/:id",blogController.get)
router.post("/create-blog",blogController.create)

export default router