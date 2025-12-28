const { Pool } = require("pg");

async function connect() {
  if (global.connection) {
    return global.connection;
  }

  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
  });

  // Testa a conexão
  const client = await pool.connect();
  console.log("Conexão criada!");
  const res = await client.query("SELECT NOW()");
  console.log(res.rows[0]);
  client.release(); 

  global.connection = pool;
  return pool;
}

module.exports = { connect };
