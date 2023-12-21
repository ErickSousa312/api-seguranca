//define parâmetros para conectar no banco de dados
require('dotenv').config()
const mongoose = require('mongoose')
const app = require('../app')

mongoose.set("strictQuery", true)

const user = 'ericksousa312'
const password = 'mssg170877'
const url = `mongodb://192.168.100.133:27018/`

async function startDB(){
    mongoose.set("strictQuery", true)
    await mongoose.connect(
        url
    )
    .then(
        console.log('Conectado ao MongoBD!'),
        app.listen(3002)
    )
    .catch(
        error=>console.log(error)
    )
}

module.exports = startDB;
