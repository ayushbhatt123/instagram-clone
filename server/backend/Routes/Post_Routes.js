import express from "express";
import Middleware from "../Middleware/Middleware.js";
import  { getPosts, createPosts, addLike, addComment, getPostsById} from "../Controllers/Post_Controller.js";

const router = express.Router();

router.post("/", Middleware,  createPosts);
router.get("/", getPosts);
router.get("/post/:id", getPostsById);
router.patch("/like/:id", addLike);
router.patch("/comment/:id", addComment);

export default router;