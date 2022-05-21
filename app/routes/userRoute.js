import express from "express";
import { addUser } from "../controllers/userController.js";

const router = express.Router();

router.route("/addUser").post(addUser);

export default router;
