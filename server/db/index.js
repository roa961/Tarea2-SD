const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "10.5.0.10",
    database: "postgres",
    password: "postgres",
    port: 5432
});

module.exports = pool;

module.exports = {
    query: (text, parametros) => pool.query(text, parametros),
}