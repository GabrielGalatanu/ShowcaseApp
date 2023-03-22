const express = require("express");
const app = express();
const fs = require("fs");

const multer = require("multer");
const path = require("path");
const upload = multer({ dest: "public/images" });

module.exports = app.post(
  "/create",
  upload.single("image"),
  async (req: any, res: any) => {
    try {
      const file = req.file;
      const extension = path.extname(file.originalname);

      const newPath = file.path + extension;

      //rename file
      fs.rename(file.path, newPath, (err: any) => {
        if (err) throw err;
      });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

export {};
