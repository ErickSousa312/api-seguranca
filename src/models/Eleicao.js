const mongoose = require('mongoose')

const Eleicoes = mongoose.model('eleicoes',{
    nomeEleicao: {type:String, required: true},
    opcoes: [{
        chave: { type: String, required: true },
        valor: { type: Number, required: true }
    }],
    hash:{type:String, required: true},
})

module.exports = Eleicoes