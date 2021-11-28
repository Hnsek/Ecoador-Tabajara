const express = require('express')
const app = express()


//Definição das permissões
app.use((req,res,next) => {

    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST')
    next()
})

//Definição do formato da requisição permitida
app.use(express.json())


// Rota principal
app.post('/', (req,res) => {
    
    const corpoRequisicao = req.body

    console.log(corpoRequisicao)

    res.status(200).json(corpoRequisicao)

})

const porta = 3000

app.listen(porta,console.log("servidor rodando"))