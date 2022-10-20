const express = require("express")
const app = express()
const Routes = require('./routes/auth')

app.use(express.json())
app.use('/api', Routes)
let port = 3002

const appRun = () => {
    try {
        app.listen(port, () => {
            console.log('Servidor ejecutándose en el puerto ' + port)
        })
    }
    catch(error){
        console.log(`Error: ${error.message}`)
    }
}

appRun()

