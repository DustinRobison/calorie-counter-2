import db from "./index";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

async function reset() {
  console.log(
    "Will rewrite the SQLite example database, adding some dummy data."
  );

  await db.sync({ force: true });

  const usersBaseData = [
    {
      username: "jack-sparrow",
      password: "letmein",
      // salt: crypto.lib.WordArray.random(128 / 8),
    },
    {
      username: "white-beard",
      password: "letmein",
    },
    {
      username: "black-beard",
      password: "letmein",
    },
    {
      username: "brown-beard",
      password: "letmein",
    },
  ];

  const usersSecured = usersBaseData.map(({ username, password }) => {
    const salt = crypto.randomBytes(16);
    return {
      id: uuidv4(),
      username,
      salt,
      hashed_password: crypto.pbkdf2Sync("letmein", salt, 310000, 32, "sha256"),
    };
  });

  await db.models.User.bulkCreate(usersSecured);

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
