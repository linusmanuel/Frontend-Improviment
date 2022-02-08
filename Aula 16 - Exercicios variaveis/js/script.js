let varA, varB, varC, varAux;
varA = 'A';
varB = 'B';
varC = 'C';

//Trocando valores
// varAux = varA;
// varA = varB;
// varB = varC;
// varC = varAux;

//Tentando com array
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
