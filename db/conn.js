const moongoose = require('mongoose')

async function main(){

    try {
        await moongoose.connect(`mongodb+srv://${process.env.nome}:${process.env.password}@cluster0.a8m21zc.mongodb.net/?retryWrites=true&w=majority`)
        console.log('banco ok');
    } catch (error) {
        console.log('Erro' + error);
        
    }

}

module.exports = main