import { DataTypes, Sequelize } from "sequelize";

const User = (sequelize: Sequelize) => {
  sequelize.define("User", {
    username: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

export default User;
