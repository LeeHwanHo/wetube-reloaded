import express from "express";
import { remove, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/remove", remove);
userRouter.get("/edit", edit);

export default userRouter;