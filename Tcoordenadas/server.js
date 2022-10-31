const express = require("express")
const app = express()
const Routes = require('./routes/auth')
const { coord } = require("./coords")

app.use(express.json())
app.use('/api', Routes)
let port = 8010

const appRun = () => {
    try {
        app.listen(port, () => {
            console.log('Servidor coordenadas ejecutándose en el puerto ' + port)
        })
        
    }
    catch(error){
        console.log(`Error: ${error.message}`)
    }
}

appRun()

