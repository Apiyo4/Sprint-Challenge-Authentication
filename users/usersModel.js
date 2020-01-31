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

  function findById(id){
    return db('users').where({id}).first();
  } 
module.exports = {insert, find, findById}