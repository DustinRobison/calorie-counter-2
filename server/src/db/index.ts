import { Sequelize } from "sequelize";

import { applyExtraSetup } from "./extra-setup";
import User from "./models/user.model";
import Food from "./models/food.model";

const db = new Sequelize({
  dialect: "sqlite",
  storage: __dirname + "/../../../db/calorie-counter-2-db.sqlite",
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [User, Food];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(db);
}

applyExtraSetup(db);

// We export the sequelize connection instance to be used around our app.
export default db;
