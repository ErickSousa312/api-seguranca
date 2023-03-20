const cors = require('cors')
const routes = require('express').Router()
const Eleicao = require('../Controllers/EleicaoController')
routes.use(cors())

routes.post('/', (req,res)=>{
    res.json({msg:"ta rodando pai"})
    console.log("hi")
})

// Rota Eleicao
routes.post('/Eleicao', Eleicao.post)
routes.get('/Eleicao', Eleicao.get)


module.exports = routes