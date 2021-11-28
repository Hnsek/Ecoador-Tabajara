//Biblioteca para input de informações
const readline = require('readline');

//Bibliotecas para conexão com API's
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


//Configuração do "leitor"
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Realização da pergunta
leitor.question("Qual frase mandar para o servidor?\n\n",async (mensagem) => {
    

    //Configuração da requisição
    const data = {
        method:'POST',
        body:JSON.stringify({mensagem:mensagem}),
        headers: {'Content-Type': 'application/json'}
    }

    try{

        //Efatuação e armazenamento da requisição
        const resultado = await fetch('http://localhost:3000',data)
        
        //Armazenamento do corpo da requisição 
        const corpo_requisicao = await resultado.json()
        
        console.log(`Resposta do servidor: ${corpo_requisicao.mensagem}`)
    
    }
    catch
    {
        console.log("Não foi possível se conectar ao servidor")    
    }
   
    
    leitor.close();
});