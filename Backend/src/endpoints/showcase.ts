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
      if (!req.file || !req.body.site || !req.body.briefDescription) {
        res.sendStatus(400);
        return;
      }

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
      let showcases = await Showcase.findAll({
        where: {
          user_id: req.userId,
        },
      });

      res.status(200).send(showcases);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

module.exports = app.put(
  "/update",
  authJwt.verifyToken,
  upload.single("image"),
  async (req: any, res: any) => {
    try {
      if (
        !req.body.showcaseId ||
        !req.body.site ||
        !req.body.briefDescription
      ) {
        res.sendStatus(400);
        return;
      }

      const showcase = await Showcase.findOne({
        where: {
          id: req.body.showcaseId,
          user_id: req.userId,
        },
      });

      if (!showcase) {
        res.sendStatus(404);
        return;
      }

      if (req.file && typeof req.file !== "string") {
        fs.unlink("public" + showcase.image_path, (err: any) => {
          if (err) throw err;
        });

        const file = req.file;
        const extension = path.extname(file.originalname);

        const newPath = file.path + extension;

        fs.rename(file.path, newPath, (err: any) => {
          if (err) throw err;
        });

        showcase.image_path = newPath.replace(/\\/g, "/").replace("public", "");
      }

      showcase.site = req.body.site;
      showcase.brief_description = req.body.briefDescription;

      await showcase.save();

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

export {};
