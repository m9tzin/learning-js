alert('Boas vindas ao nosso site!');

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 1000;

let mensagemErro = 'Erro! Preencha todos os campos.';
alert(mensagemErro);

let Nome = prompt('Qual o seu nome?');
let Idade = prompt('Qual a sua idade?');

if (Idade >= 18){
    alert('Pode tirar a habilitação');
}