const express = require("express");
const app = express();

import { db } from "../models";

const User = db.user;

module.exports = app.post("/login", (req: any, res: any) => {
  console.log("login");
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = app.post("/register", (req: any, res: any) => {
  console.log("register");
  console.log(req.body);

  const user = new User({
    password: "12345",
    email: "test@test.com",
  });

  user.save((err: any) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
  });

  res.sendStatus(200);
});

export {};
