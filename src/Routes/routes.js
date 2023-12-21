const cors = require('cors')
const routes = require('express').Router()
const Eleicao = require('../Controllers/EleicaoController')
const Voto = require('../Controllers/ResultadoController')
const Cont = require("../Controllers/ContVoto")

routes.use(cors())

routes.get('/', (req,res)=>{
    res.json({msg:"ta rodando pai"})
    console.log("hi")
})

// Rota Eleicao
routes.post('/Eleicao', Eleicao.post)
routes.get('/Eleicao', Eleicao.get)
routes.get('/Eleicao/:name', Eleicao.getName)

//Rota Voto
routes.post('/Voto', Voto.post)
routes.get('/Voto', Voto.get)
routes.get('/Voto/:name', Voto.getName)

//Rota contagem votos
routes.post('/countVoto', Cont.post)

module.exports = routes