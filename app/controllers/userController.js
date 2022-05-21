import mongoose from "mongoose";
import Role from "../models/Role.js";
import User from "../models/User.js";

export const addUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  const idRole = await Role.findOne({ name: role });

  const user = await User.create({
    username,
    email,
    password,
    roles: [idRole],
  });

  res.json({ message: "data telah ditambahkan" });
};
