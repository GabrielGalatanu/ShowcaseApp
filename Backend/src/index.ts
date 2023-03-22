import express from "express";
const cors = require("cors");
const app = express();
const port = 3002;
var path = require("path");

app.use(express.json());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use(express.static(path.resolve("./public")));

//disable cors
app.use(cors());

const user = require("./endpoints/user");
const showcase = require("./endpoints/showcase");

app.use("/user", user);
app.use("/showcase", showcase);

app.post("/", (req: any, res: any) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
