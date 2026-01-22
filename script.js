
var A_Tableau = new Array(); 

var I_min = -10 ; 
var I_max = 40;

function NombreAleatoire(I_min, I_max) {
  return Math.random() * (I_max - I_min) + I_min;
}

for (let i = 0; i < 20 ; i++) {
  A_Tableau.push(Math.floor(NombreAleatoire(I_min, I_max)));
}

function NombreAleatoireDansLeTableau(A_Tableau){
  var ouais = Math.floor(Math.random() * A_Tableau.length);
  var rValue = A_Tableau[ouais];
  return rValue;
}

console.log(A_Tableau);

const log = document.getElementById("temperature").textContent;
document.getElementById("temperature").textContent = NombreAleatoireDansLeTableau(A_Tableau);