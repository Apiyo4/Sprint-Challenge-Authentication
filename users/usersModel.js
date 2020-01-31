const db = require("../database/dbConfig");
async function insert(user) {
  const [id] = await db("users").insert(user);
  return db("users")
    .where({ id })
    .first();
}
function find(){
    return db("users");
  }
module.exports = {insert, find}