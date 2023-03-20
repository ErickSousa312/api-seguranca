const Eleicao = require('../models/Eleicao')

class EleicaoController{
    async post(req,res){
        try {
            const{nomeEleicao, opcoes}=req.body
            const eleicao = {
                nomeEleicao,
                opcoes
            }
            await Eleicao.create(eleicao)
            res.status(201).json({msg:"Eleição criada com sucesso"})
        } catch (error) {
            res.status(500).json({msg:"Eleição não foi criada com sucesso"})
        }
    }
    async get(req,res){
        try {
            const eleicao = await Eleicao.find()
            res.status(201).json(eleicao)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
    async deleteId (req,res){
        const id = req.parms.id
        const eleicao = await Eleicao.findOne({_id:id})
        if (!eleicao) {
            res.status(422).json({ message: "Id não encontrado!" })
            return
        }
        try {
            await Eleicao.deleteOne({ _id: id })
            res.status(201).json({ msg: "Úsuario deletado" })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = new EleicaoController();