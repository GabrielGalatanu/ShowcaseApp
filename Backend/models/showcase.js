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
      site: DataTypes.STRING(2024),
      brief_description: DataTypes.STRING(2024),
      image_path: DataTypes.STRING(2024),
      hidden: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Showcase",
    }
  );
  return Showcase;
};
