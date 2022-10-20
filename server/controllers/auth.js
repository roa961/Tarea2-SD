
exports.AgenteExt = async (req, res) => {
    const { coord } = req.body
    
}

exports.RegistrarCarrito = async (req, res) => {
    const {nombre, apellido, rut, correo, patente, premium} = req.body
    return res.status(201).json({
        nombre: nombre,
        apellido: apellido,
        rut: rut,
        correo: correo,
        n_patente: patente,
        es_premium: premium
    })

}
exports.RegistroVenta = async (req, res) => {
    const {cliente, n_sopaipillas, hora, stock_restante, ubicacion} =  req.body
    return res.status(201).json({
        cliente: cliente,
        n_sopaipillas: n_sopaipillas,
        hora: hora,
        stock_restante: stock_restante,
        ubicacion: ubicacion,
    })
}