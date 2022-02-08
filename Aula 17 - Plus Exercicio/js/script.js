/* 
  Função concat();
  ""     charAt(); 
  ""     charCodeAt();
  ""     indexOf(); 
  ""     lastIndexOf(); 
  ""     toLowerCase();
  ""     toUpperCase();
  Operador mais como concatenador de valores;
*/
const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `Seu nome é: ${nome}<br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br/>`;
document.body.innerHTML += `Qual o primeiro índice da LETRA (A) do seu nome?: ${nome.indexOf('a')}`;



