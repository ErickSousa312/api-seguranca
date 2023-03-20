const ResultadoEleicao = require('../models/Resultadoeleicao')

class ResultadoController {
    async post (req,res){
        try {
            const {email, voto, hash} = req.body
            const Voto = {
                email,
                voto,
                hash
            }
            await ResultadoEleicao.create(Voto),
            res.status(201).json({msg:"Voto Registrado"})
        } catch (error){
            res.status(500).json({msg: error})
        }
    }
    async get(req, res){
        try {
            const voto = await ResultadoEleicao.find()
            if(!voto){
                res.status(500).json({msg:"Não existe Votos registrados"})
            }
            res.status(201).json(voto)
        } catch (error) {
            res.status(500).json({msg: error})
        }
    }
}

module.exports = new ResultadoController();