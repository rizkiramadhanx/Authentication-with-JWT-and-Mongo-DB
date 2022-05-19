import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.json({ message: "Hello bro !" });
});
