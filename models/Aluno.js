
const moongoose = require('mongoose')

const schema = moongoose.Schema({
    nome: String,
    turma: {
        type: String,
        enum: ["A", "B", "C", 'D', "E"]
    },
    notas: [{
        type: Number,
        min: [0, 'Não pode haver nota menor que 0'],
        max: [10, 'Não pode haver nota maior que 10'],
    }],
    media: Number
    
})

const Aluno = moongoose.model('Aluno', schema)


module.exports = Aluno