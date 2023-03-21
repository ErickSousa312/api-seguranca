const cors = require('cors')
const routes = require('express').Router()
const Eleicao = require('../Controllers/EleicaoController')
const Voto = require('../Controllers/ResultadoController')
routes.use(cors())

routes.post('/', (req,res)=>{
    res.json({msg:"ta rodando pai"})
    console.log("hi")
})

// Rota Eleicao
routes.post('/Eleicao', Eleicao.post)
routes.get('/Eleicao', Eleicao.get)

//Rota Voto
routes.post('/Voto', Voto.post)
routes.get('/Voto', Voto.get)

module.exports = routes