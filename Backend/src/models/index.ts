import { dbConfig } from "../../db.config.js";

import { Sequelize, Dialect } from "Sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect as Dialect,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.user = require("./user.model.ts")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);

export { db };
