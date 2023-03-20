module.exports = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define(
    "user",
    {
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return User;
};
