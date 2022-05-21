import express from "express";
import { initialRole } from "../controllers/roleController.js";
import checkDuplicateUsernameOrEmail from "../middlewares/verifySignUp.js";

const router = express.Router();

router.route("/initial").post(checkDuplicateUsernameOrEmail, initialRole);

export default router;
