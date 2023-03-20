const mongoose = require('mongoose')

const ResultadoEleicao = mongoose.model('resultadoEleicao', {
    email:{type: String, required: true},
    voto:{type: String, required: true},
    hash: {type:String, required:false}
})

module.exports = ResultadoEleicao