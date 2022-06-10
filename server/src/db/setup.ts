import db from "./index";
import { v4 as uuidv4 } from "uuid";

async function reset() {
  console.log(
    "Will rewrite the SQLite example database, adding some dummy data."
  );

  await db.sync({ force: true });

  await db.models.User.bulkCreate([
    { username: "jack-sparrow" },
    { username: "white-beard" },
    { username: "black-beard" },
    { username: "brown-beard" },
  ]);

  await db.models.Food.bulkCreate([
    { id: uuidv4(), name: "taco", calories: 300, username: "jack-sparrow" },
    {
      id: uuidv4(),
      name: "hamburger",
      calories: 600,
      username: "jack-sparrow",
    },
  ]);

  console.log("Done!");
}

reset();
