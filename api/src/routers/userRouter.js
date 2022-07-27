const express = require("express");
const User = require("../models/User");
const router = new express.Router();
const auth = require("../middlewares/auth");
const sendWelcomeNewbie = require("../email/welcomeNewbie");
const multer = require("multer");
const sharp = require("sharp");
const informDeleteAccount = require("../email/InformDeleteAccount");
const adminAuth = require("../middlewares/adminAuth");

// Setup upload images
const upload = multer({
  // Image can not over 1MB
  limits: {
    fileSize: 1500000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(new Error("Please upload file with extension jpeg, png, jpg"));
    }
    cb(undefined, true);
  },
});

// Post user avatar
router.post(
  "/user/username/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    // config image with size and type image png
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send("Uploaded your avatar!");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// Get an avatar without auth
router.get("/user/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error("It seems your user is invalid or you have no an image!");
    }
    // setting content type images/png
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.put(
  "/user/username/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    try {
      // find an user
      const user = await User.findById(req.user._id);
      // delete the old avatar
      // user.avatar = undefined
      // // update the new one
      // const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer();
      // user.avatar = buffer
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

router.delete("/user/username/avatar", auth, async (req, res) => {
  try {
    req.user.avatar = undefined;
    await req.user.save();
    res.send("Successfully Delete Avatar!");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// I did not place auth and adminAuth yet!!
router.get("/users", [auth, adminAuth], async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/user/username", auth, async (req, res) => {
  try {
    const user = await User.findOne(req.user._id);
    res.send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    sendWelcomeNewbie(user.email, user.name);

    res.send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { password, email } = req.body;
  try {
    // from findByCredentials() return user
    const user = await User.findByCredentials(email, password);
    // create token
    const token = await user.createAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send("Log out");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.put("/user/username", auth, async (req, res) => {
  const updateList = Object.keys(req.body);
  const allowUpdate = [
    "name",
    "email",
    "password",
    "phoneNumber",
    "address",
    "DOB",
  ];

  const isValidOperation = updateList.every((update) =>
    allowUpdate.includes(update)
  );
  if (!isValidOperation) return res.status(400).send("Invalid updates!");
  try {
    updateList.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete("/user/username", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    // informDeleteAccount(req.user.email, req.user.name)
    res.send("Successful deleted!");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
