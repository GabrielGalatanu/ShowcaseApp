import express from "express";
const cors = require("cors");
const app = express();
const port = 3002;

app.use(express.json());

//disable cors
app.use(cors());

const user = require("./endpoints/user");

app.use("/user", user);

app.post("/", (req: any, res: any) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
