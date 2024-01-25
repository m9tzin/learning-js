function calculoIMC(altura, peso) {
  let valorIMC = peso / (altura * altura);
  return valorIMC;
}
console.log(calculoIMC(1.71, 61));

function calcularFatorial(numero) {
  if (numero == 0 || numero == 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(calcularFatorial(5));

function conversaoMoeda(valor) {
  let valorReal = valor * 4.8;
  return valorReal;
}

console.log(conversaoMoeda(5));

function perimetro(altura, largura) {
  let area = altura * largura;
  console.log(area);
  let perimetro = 2 * (altura + largura);
  console.log(perimetro);
}

perimetro(2, 3);

function areaPerimetroCircular(raio) {
  let area = 3.14 * raio * raio;
  let perimetro = 2 * 3.14 * raio;
  console.log(area);
  console.log(perimetro);
}

areaPerimetroCircular(4);

function tabuada(numero){
  for(let i=0; i<=10;i++){
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

tabuada(9);