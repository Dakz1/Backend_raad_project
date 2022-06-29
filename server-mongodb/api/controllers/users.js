const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.all;
  res.json(users);
});

/*
router.post("/", async (req, res) => {
  try {
    const user = await User.create(
      req.body.userName,
      req.body.email,
      req.body.name,
      req.body.password
    );
    res.json(user);
  } catch (err) {
    res.status(404).json({ err });
  }
});


router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const updatedUser = await user.update();
    res.json({ user: updatedUser });
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.destroy();
    res.status(204).json("User deleted");
  } catch (err) {
    res.status(500).json({ err });
  }
});
*/
module.exports = router;
