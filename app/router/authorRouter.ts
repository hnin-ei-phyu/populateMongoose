import AuthorController from "../controller/authorController";
import express from "express"
const router = express.Router()
const authorController = new AuthorController()

router.get("/get-author/:id",authorController.get)
router.post("/create-author",authorController.create)

export default router