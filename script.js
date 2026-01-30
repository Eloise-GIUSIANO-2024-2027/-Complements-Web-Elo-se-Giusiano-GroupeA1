
var A_Tableau = new Array(); 

var I_min = -10 ; 
var I_max = 40;

function NombreAleatoire(I_min, I_max) {
  return Math.random() * (I_max - I_min) + I_min;
}

function NombreAleatoireDansLeTableau(A_Tableau){
  var ouais = Math.floor(Math.random() * A_Tableau.length);
  var rValue = A_Tableau[ouais];
  return rValue;
}

function Interval(){
  for (let i = 0; i < 20 ; i++) {
  document.getElementById("temperature2").textContent = A_Tableau[i];
}
}

for (let i = 0; i < 20 ; i++) {
  A_Tableau.push(Math.floor(NombreAleatoire(I_min, I_max)));
}

console.log(A_Tableau);

const log = document.getElementById("temperature").textContent;
var nombre_fixe = NombreAleatoireDansLeTableau(A_Tableau)
document.getElementById("temperature").textContent = nombre_fixe;

var I_i = 0
const LATEMP = document.getElementById('temperature2');

setInterval(function() {
  document.getElementById("temperature2").textContent = A_Tableau[I_i];  
  if (A_Tableau[I_i] < 0){
  LATEMP.classList.add('bleu');
  LATEMP.classList.remove('orange'); 
  LATEMP.classList.remove('vert');
  LATEMP.classList.remove('rouge');
}
else if (A_Tableau[I_i] < 20){
  LATEMP.classList.add('vert');
  LATEMP.classList.remove('bleu');
  LATEMP.classList.remove('orange');
  LATEMP.classList.remove('rouge');
}
else if (A_Tableau[I_i] < 30){
  LATEMP.classList.add('orange');
  LATEMP.classList.remove('bleu');
  LATEMP.classList.remove('vert');
  LATEMP.classList.remove('rouge');
}
else {
  LATEMP.classList.add('rouge');
  LATEMP.classList.remove('bleu'); 
  LATEMP.classList.remove('vert');
  LATEMP.classList.remove('orange'); 
}
I_i++ ; 
}, 2000);

