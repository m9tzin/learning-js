let title = document.querySelector("h1");
title.innerHTML = "Hora do Desafio";

function clicarBotao() {
  console.log("O botão foi clicado!");
}

function clicarAlerta() {
  console.log("Eu amo JS.");
}

function clicarPrompt() {
  let city = prompt("Nome de uma cidade do Brasil?");
  alert(`Estive em ${city} e lembrei de você.`);
}

function soma() {
  let numero1 = parseInt(prompt("Insira um número:"));
  let numero2 = parseInt(prompt("Insira outro número"));
  let soma = numero1 + numero2;

  alert(`O valor da soma é ${soma}.`);
}
