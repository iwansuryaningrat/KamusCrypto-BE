// MongoDB Connection
import connect from "../db.connect.service.js";
connect();

// Import Seeder
import seedPlans from "./plans.seeder.js";
import seedTestimoni from "./testimoni.seeder.js";
import seedTeams from "./teams.seeder.js";
import seedNews from "./blog.seeder.js";

// Run Seeder
const plansSeeder = await seedPlans();
console.log(plansSeeder);
const testimoniSeeder = await seedTestimoni();
console.log(testimoniSeeder);
const teamsSeeder = await seedTeams();
console.log(teamsSeeder);
const newsSeeder = await seedNews();
console.log(newsSeeder);

//   end task
process.exit();
