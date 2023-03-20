const mongoose = require('mongoose')

const Eleicoes = mongoose.model('eleicoes',{
    nomeEleicao: {type:String, required: true},
    opcoes: {type:[String], required: true},
    
})

module.exports = Eleicoes