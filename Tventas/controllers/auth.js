const db = require('../db')
const {Diarias} = require('../ventasDiarias')


exports.ventas = async (req, res) => {
    try {
        const { rows } = await db.query('select patente as patente_dueño, count(*) as total_ventas, avg(n_sopaipillas) as promedio_de_sopaipillas, count(distinct cliente) as clientes_totales from ventas group by patente;')
        return res.status(200).json({
            Resumen_Diario: rows
        })
    }
    catch (error) {
        console.log(error.message)
    }
}
exports.diarios = async (req, res) =>{
    Diarias()

}