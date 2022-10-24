const Pool = require("pg").Pool;

const pool = new Pool({
    user: postgres,
    host: "172.18.0.2",
    database: postgres,
    password: postgres,
    port: 5432
});

module.exports = pool;

module.exports = {
    query: (text, parametros) => pool.query(text, parametros),
}