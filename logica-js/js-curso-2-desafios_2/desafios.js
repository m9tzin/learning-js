function helloWorld() {
  console.log("Olá mundo");
}

helloWorld();

function helloName(name) {
  console.log(`Olá ${name}!`);
}

helloName("Ronaldo");

function dobroNumero(numero) {
  return numero * 2;
}

let resultDobro = dobroNumero(10);
console.log(resultDobro);

function media(a, b, c) {
  return (a + b + c) / 3;
}

let mediaNumeros = media(1,2,3);
console.log(mediaNumeros);


function maior(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let maiorNumero = maior(2,5);
console.log(maiorNumero);

function quadrado(a) {
  return a * a;
}

let quadradoNumero = quadrado(2);
console.log(quadradoNumero);
