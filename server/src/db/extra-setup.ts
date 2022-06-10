import { Sequelize } from "sequelize";

export function applyExtraSetup(sequelize: Sequelize) {
  const { User, Food } = sequelize.models;

  User.hasMany(Food);
}
