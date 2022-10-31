const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "postgres",
    database: "postgres",
    password: "postgres",
    port: 5432
});

module.exports = pool;

module.exports = {
    query: (text, parametros) => pool.query(text, parametros),
}