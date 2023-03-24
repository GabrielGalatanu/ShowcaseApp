const express = require("express");
const app = express();
const fs = require("fs");

const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "public/images" });

import { db } from "../models";
const Showcase = db.showcase;
const { authJwt } = require("../middleware");

module.exports = app.post(
  "/create",
  authJwt.verifyToken,
  upload.single("image"),
  async (req: any, res: any) => {
    try {
      const file = req.file;
      const extension = path.extname(file.originalname);

      const newPath = file.path + extension;

      fs.rename(file.path, newPath, (err: any) => {
        if (err) throw err;
      });

      await Showcase.create({
        user_id: req.userId,
        site: req.body.site,
        image_path: newPath.replace(/\\/g, "/").replace("public", ""),
        brief_description: req.body.briefDescription,
      });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

module.exports = app.get("/getAll", async (req: any, res: any) => {
  try {
    let showcases = await Showcase.findAll();

    res.status(200).send(showcases);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = app.get(
  "/getUserShowcases",
  authJwt.verifyToken,
  async (req: any, res: any) => {
    try {
      console.log('aici');
      console.log(req.userId);

      let showcases = await Showcase.findAll({
        where: {
          user_id: req.userId,
        },
      });

      console.log(showcases);

      res.status(200).send(showcases);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

export {};
