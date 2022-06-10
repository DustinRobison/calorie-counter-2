import { DataTypes, Sequelize } from "sequelize";

const Food = (sequelize: Sequelize) => {
  sequelize.define("Food", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUID,
    },
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      references: {
        model: "Users",
        key: "username",
      },
    },
  });
};

export default Food;
