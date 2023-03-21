const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
import { authConfig } from "../../auth.config";
const { verifySignUp } = require("../middleware");
const jwt = require("jsonwebtoken");

import { db } from "../models";
const User = db.user;

module.exports = app.post("/login", async (req: any, res: any) => {
  try {
    console.log("login");
    console.log(req.body);

    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!user) return res.status(404).send({ message: "User Not found." });

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid)
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });

    let token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user.id,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = app.post(
  "/register",
  [verifySignUp.checkDuplicateEmail],
  async (req: any, res: any) => {
    try {
      console.log('register');
      console.log(req.body);

      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });

      await user.save((err: any) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
          return;
        }
      });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
);

export {};
