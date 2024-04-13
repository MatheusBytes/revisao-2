const express = require('express')
const AlunoController = require('../controllers/alunoController')

const router = express.Router()

router.get('/', function(req,res){
    res.json({})
})


router.get('/alunos', (req,res) => AlunoController.getAll(req,res))
router.post('/alunos', (req,res) => AlunoController.create(req,res))

router.post('/alunos/aprovados', (req,res) => AlunoController.getAprovados(req,res))
router.post('/alunos/reprovados', (req,res) => AlunoController.getReprovados(req,res))
router.post('/alunos/recuperacao', (req,res) => AlunoController.getRecuperacao(req,res))


router.delete('/alunos', (req,res) => AlunoController.delete(req,res))
router.put('/alunos', (req,res) => AlunoController.update(req,res))
// router.put('/alunos/:origem/:destino', (req,res) => AlunoController.delete(req,res))





module.exports = router