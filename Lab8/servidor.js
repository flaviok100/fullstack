var http = require('http');
var express = require ('express');
var app = express();
var bodyParser = require("body-parser")

app.use(express.static('./public'));
var server = http.createServer(app);
server.listen(3000);
console.log("Servidor rodando...");

// exemplo de get e post
app.get('/inicio', function(requisicao, resposta){
    resposta.redirect('indexx.html')
})

app.post('/inicio', function(requisicao, resposta){
    resposta.redirect('indexx.html')    
})

app.get('/cadastrar', function(requisicao,resposta){
    let nome = requisicao.query.nome;
    let email = requisicao.query.email;
    let senha = requisicao.query.senha;
    let nascimento = requisicao.query.nascimento;

    console.log(nome,email,senha);

    resposta.render('resposta.ejs',
        {mensagem: "usuario casdatrado com sucesso", usuaior: nome, loguin:email })
})

app.post('/cadastrar', function(requisicao,resposta){
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;
    let nascimento = requisicao.body.nascimento;

    console.log(nome,email,senha);
})

app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.get('/for_ejs', function(requisicao, resposta){
    let num = requisicao.query.num;
    resposta.render('exemplo_for_ejs', )
})