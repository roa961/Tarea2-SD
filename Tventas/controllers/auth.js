const db = require('../db')
const { Diarias } = require('../ventasDiarias')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

exports.ventas = async (req, res) => {
    await Diarias()
    try {
        await sleep(1000)
        const { rows } = await db.query('select patente as patente_dueño, count(*) as total_ventas, avg(n_sopaipillas) as promedio_de_sopaipillas, count(distinct cliente) as clientes_totales from ventas group by patente;')
        return res.status(200).json({
            Resumen_Diario: rows
        })
    }
    catch (error) {
        console.log(error.message)
    }
}
exports.diarios = async (req, res) => {


}