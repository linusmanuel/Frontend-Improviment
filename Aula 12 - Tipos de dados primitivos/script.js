/* 
  String, number, undefined, null, boolean, symbol
*/
const nome = 'Luiz'; //String
const nome1 = "Luiz" //string
const nome2 = `Luiz`; //string
const num1 = 10; //number 
const num2 = 10.52; //number
let sobreNomeAluno; //undefined -> não aponta pra nenhum local na memória
const aprovado = false; //Boolean = True, false (tipo lógico)

const a = [1, 2, 3];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);