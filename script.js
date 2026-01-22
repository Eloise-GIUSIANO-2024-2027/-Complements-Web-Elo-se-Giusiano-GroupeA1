
var A_Tableau = new Array(20); 

var I_min = -10 ; 
var I_max = 40;

function NombreAleatoire(I_min, I_max) {
  return Math.random() * (I_max - I_min) + I_min;
}

for (let i = 0; i < 20 ; i++) {
  A_Tableau.push(Math.floor(NombreAleatoire(I_min, I_max)));
}

console.log(A_Tableau)
