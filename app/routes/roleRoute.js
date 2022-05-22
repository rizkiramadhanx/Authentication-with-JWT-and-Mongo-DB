import express from "express";
import { initialRole } from "../controllers/roleController.js";
import { isAdmin, verifyToken } from "../middlewares/authJWT.js";
import {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} from "../middlewares/verifySignUp.js";

const router = express.Router();

router.route("/admin").post([verifyToken, isAdmin], (req, res) => {
  res.status(200).json({ message: "anda sekarang admin" });
});

router.route("/user").post([verifyToken, isAdmin], (req, res) => {
  res.status(200).json({ message: "anda sekarang user" });
});

export default router;
