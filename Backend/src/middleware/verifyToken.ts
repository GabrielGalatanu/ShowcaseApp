const jwt = require("jsonwebtoken");
import { authConfig } from "../../auth.config";

const verifyToken = (req: any, res: any, next: any) => {
  try {
    if (!req.headers["authorization"]) {
      return res.status(403).send({ message: "No token provided!" });
    }

    let token = req.headers["authorization"].split(" ")[1];

    jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.userId = decoded.id;
      next();
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const authJwt = {
  verifyToken,
};

module.exports = authJwt;
