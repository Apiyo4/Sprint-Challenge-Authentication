const db = require("../database/dbConfig");
const Users = require("./usersModel");

beforeEach(async () => {
  await db("users").truncate();
});

describe("UsersModel", () => {
  it("Uses testing environment for DB_ENV", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
 
});
