// MongoDB Connection
import connect from "../db.connect.service.js";
connect();

// Import Seeder
import usersSeederFunction from "./users.seeder.js";
import deleteAll from "./delete.seeder.js";
import seedPlans from "./plans.seeder.js";
import seedTestimoni from "./testimoni.seeder.js";

// Run Seeder
// const userSeeder = await usersSeederFunction();
// console.log(userSeeder);
// const deleteAllSeeder = await deleteAll();
// console.log(deleteAllSeeder);
// const plansSeeder = await seedPlans();
// console.log(plansSeeder);
const testimoniSeeder = await seedTestimoni();
console.log(testimoniSeeder);

//   end task
process.exit();
