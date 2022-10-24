const express = require("express")
const app = express()
const Routes = require('./routes/auth')
const {Diarias} = require('./ventasDiarias')

app.use(express.json())
app.use('/api', Routes)
let port = 8012

const appRun = () => {
    try {
        app.listen(port, () => {
            console.log('Servidor ventas ejecutándose en el puerto ' + port)
        })
    }
    catch(error){
        console.log(`Error: ${error.message}`)
    }
}

appRun()

