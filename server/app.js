import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import "./utils/dbConnect.js"

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  try {
    res.status(200).json({msg:"Hello World"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})
