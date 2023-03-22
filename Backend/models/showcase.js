"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Showcase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Showcase.init(
    {
      user_id: DataTypes.INTEGER,
      site: DataTypes.STRING,
      brief_description: DataTypes.STRING,
      image_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Showcase",
    }
  );
  return Showcase;
};
