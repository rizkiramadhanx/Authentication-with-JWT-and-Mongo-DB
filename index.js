import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import dotenv from "dotenv";
import connectDB from "./app/config/db.js";
import seeder from "./app/seeder/index.js";

import RoleRoutes from "./app/routes/roleRoute.js";
import UserRoutes from "./app/routes/userRoute.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "rizki",
    secret: "COOKIE_RAHASIA",
    httpOnly: true,
  })
);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

seeder();

app.use("/api/role", RoleRoutes);
app.use("/api/user", UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello bro !");
});
