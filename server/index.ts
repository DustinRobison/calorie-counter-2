import * as dotenv from "dotenv";
import db from "./src/db";
import app from "./src/app/app";
dotenv.config({ path: __dirname + "/../local.env" });
const port = process.env.SERVER_PORT;

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await db.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(db);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  console.log(`Starting Calorie-Counter-2 server on port ${port}...`);
  app.listen(port, () => {
    console.log(
      `Calorie-Counter-2 server application is running on port ${port}.`
    );
  });
}

init();
