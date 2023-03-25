module.exports = (sequelize: any, Sequelize: any) => {
  const Showcase = sequelize.define(
    "Showcase",
    {
      user_id: {
        type: Sequelize.INTEGER,
      },
      site: {
        type: Sequelize.STRING,
      },
      brief_description: {
        type: Sequelize.STRING,
      },
      image_path: {
        type: Sequelize.STRING,
      },
      hidden: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return Showcase;
};
