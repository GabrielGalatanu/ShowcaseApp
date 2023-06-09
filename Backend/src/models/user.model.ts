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
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return User;
};
