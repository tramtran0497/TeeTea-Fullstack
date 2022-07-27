const express = require("express");
const News = require("../models/News");
const router = new express.Router();
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.get("/news", async (req, res) => {
  try {
    const news = await News.find();
    res.send(news);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/news/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    res.send(news);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post(
  "/news",
  [auth, adminAuth],
  upload.single("image"),
  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      const news = new News({
        ...req.body,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      });
      await news.save();
      res.send(news);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

router.put(
  "/news/:id",
  [auth, adminAuth],
  upload.single("image"),
  async (req, res) => {
    const { id } = req.params;
    const updateList = Object.keys(req.body);
    const allowUpdate = ["title", "subtitle"];

    const isValidOperation = updateList.every((update) =>
      allowUpdate.includes(update)
    );
    if (!isValidOperation) return res.status(400).send("Invalid updates!");
    try {
      let news = await News.findById(id);
      if (news.cloudinary_id) {
        await cloudinary.uploader.destroy(news.cloudinary_id);
      }
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }

      const changedNews = {
        title: req.body.title || news.title,
        subtitle: req.body.subtitle || news.subtitle,
        image: result?.secure_url || news.image,
        cloudinary_id: result?.public_id || news.cloudinary_id,
      };
      news = await News.findByIdAndUpdate(req.params.id, changedNews, {
        new: true,
      });

      await news.save();
      res.send(news);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
);

router.delete("/news/:id", [auth, adminAuth], async (req, res) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    if (news.cloudinary_id) {
      await cloudinary.uploader.destroy(news.cloudinary_id);
    }
    await news.remove();
    res.send("Delete news");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
