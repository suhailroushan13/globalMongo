import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Importing User APIs

import userApi from "./controllers/users/index.js";
import adminApi from "./controllers/admins/index.js";

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello  Server" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// User APIS
// app.use("/basic", basicApi);
app.use("/user", userApi);
app.use("/admin", adminApi);

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
