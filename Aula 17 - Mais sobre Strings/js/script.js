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
           // 01345678
let string = 'um texto';
string.concat('. Sobre Linus Manuel');
console.log(string.concat('. Sobre Linus Manuel'));
console.log(string.charAt(4));
console.log(string.charCodeAt(1));
console.log(string.indexOf('um'));

//Expressões regulares - rgx;
let otherString = 'O rato roeu a roupa do rei de roma';
console.log(otherString.replace(/r/g, 'L')); //Imitando o Cebolinha da turma da Monica heheh

//Pegando pedaços da string
console.log(otherString.slice(-3));

console.log(otherString.toLowerCase());
console.log(otherString.toUpperCase());


