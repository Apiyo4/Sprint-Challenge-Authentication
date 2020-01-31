const db = require("../database/dbConfig");
const Users = require("./usersModel");

describe("UsersModel", () => {
  it("Uses testing environment for DB_ENV", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
