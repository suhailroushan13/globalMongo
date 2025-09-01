import express from "express";

const router = express.Router();

router.get("/getalluser", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello  Server" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/adduser", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello  Server" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.put("/updateuser", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello  Server" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/deleteUser", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello  Server" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});


export default router