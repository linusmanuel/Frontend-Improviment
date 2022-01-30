/* 
  João Lino Adão Manuel tem 21 anos, pesa 72 Kg 
  tem 1.80m de altura e seu IMC é de 22.9256;
*/
const fullName = 'João Lino Adão Manuel';
const age = 22;
const weight = 72;
const hight = 1.80;
let imc = weight / (hight * hight); // peso / (altura * altura)
let birthYear = 2022 - age;

console.log(
  `${fullName}, tem ${age} anos, pesa ${weight} kg
 tem ${hight} de altura e seu IMC é de ${imc},
 ${fullName}, nasceu em ${birthYear}
`);
