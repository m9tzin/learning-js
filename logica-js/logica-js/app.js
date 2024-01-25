//alert, let, prompt
alert("Seja bem vindo ao jogo do número secreto!");
let numeroMaximo = prompt(
  "Insira o numero máximo para adivinhar qual é o número secreto:"
);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // [1,2,...,numeroMaximo]

let numeroEscolhido;
let tentativas = 1;

//while
while (numeroEscolhido != numeroSecreto) {
  numeroEscolhido = prompt(`Escolha um número de 1 a ${numeroMaximo}`);

  //if, else, else if
  if (numeroEscolhido == numeroSecreto) {
    break; // saída do while
  } else {
    if (numeroSecreto < numeroEscolhido) {
      alert("O número secreto é menor que " + numeroEscolhido);
    } else {
      alert("O número secreto é maior que " + numeroEscolhido);
    }
  }
  tentativas++;
}

// Operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert("Parabéns, você acertou o número secreto!");
alert("Seu total de tentativas foram " + tentativas + " " + palavraTentativa);
