const db = require("../database/dbConfig");
module.exports = {insert, find, findById, findBy}

function findBy(filter) {
  return db('users')
    .where(filter);
}
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

