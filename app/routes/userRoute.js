import express from "express";
import { signIn, signOut, signUp } from "../controllers/authController.js";
import { addUser } from "../controllers/userController.js";
import {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} from "../middlewares/verifySignUp.js";

const router = express.Router();

router.route("/addUser").post(addUser);
router.route("/signUp").post(checkRolesExisted, signUp);
router.route("/signIn").post(signIn);
router.route("/signOut").get(signOut);

export default router;
