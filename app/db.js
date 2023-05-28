const Pool = require('pg').Pool
const pool = new Pool({
      user: "postgres",
      password: "123456",
      host: "database",
      database: "e_menu"
});

module.exports = pool;