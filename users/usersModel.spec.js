const db = require("../database/dbConfig");
const Users = require("./usersModel");

beforeEach(async () => {
    await db('users').truncate()
  })

describe("UsersModel", () => {
  it("Uses testing environment for DB_ENV", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    it("inserts 2 users", async () => {
      await Users.insert({ username: "admin1", password: "1234" });
      await Users.insert({ username: "admin2", password: "1234" });
      const users = await db("users");
      expect(users).not.toHaveLength(1);
    });
    it("ensures user inserted exists", async () => {
      const user = await Users.insert({
        username: "admin1",
        password: "1234"
      });
      expect(user).toMatchObject({
        username: "admin1",
        password: "1234"
      });
    });
  });
  describe('find()', ()=>{
    it('retruns all data in database', async()=>{
       await Users.insert({username:'admin1', password:"1234"})
       await Users.insert({username:'admin2', password:"1234"})
       const users = await Users.find()
       expect(users).toHaveLength(2);
    })
    it("inserts 2 users", async () => {
        await Users.insert({ username: "admin1", password: "1234" });
        await Users.insert({ username: "admin2", password: "1234" });
        const users = await db("users");
        expect(users).not.toHaveLength(1);
      });
})
});
