
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
  for (let i = 0; i < 19 ; i++) {
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

var I_i = 0;
const LATEMP = document.getElementById('temperature2');
var A_TableauCopie= new Array();

function beauTableau(TABLEAU){
  var S_Rendu = "";
  for (let i = 0; i < TABLEAU.length ; i++) {
    S_Rendu = S_Rendu + TABLEAU[i] + " dégrés, " ;
  }
  return S_Rendu;
  }

setInterval(function() {
  document.getElementById("temperature2").textContent = A_Tableau[I_i] + " dégrés";
  A_TableauCopie[I_i] = A_Tableau[I_i] ;
  document.getElementById("historique").textContent = beauTableau(A_TableauCopie);
  if (A_Tableau[I_i] < 0){
  LATEMP.classList.add('bleu');
  LATEMP.classList.remove('orange'); 
  LATEMP.classList.remove('vert');
  LATEMP.classList.remove('rouge');
  document.getElementById("PetitePhrase").innerHTML = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !"; 
  document.getElementById("PetitePhrase").classList.remove('hidden');
}
else if (A_Tableau[I_i] < 20){
  LATEMP.classList.add('vert');
  LATEMP.classList.remove('bleu');
  LATEMP.classList.remove('orange');
  LATEMP.classList.remove('rouge');
  //document.getElementById("PetitePhrase").innerHTML = " "; 
  document.getElementById("PetitePhrase").classList.add('hidden');
}
else if (A_Tableau[I_i] < 30){
  LATEMP.classList.add('orange');
  LATEMP.classList.remove('bleu');
  LATEMP.classList.remove('vert');
  LATEMP.classList.remove('rouge');
  //document.getElementById("PetitePhrase").innerHTML = " "; 
  document.getElementById("PetitePhrase").classList.add('hidden');
}
else {
  LATEMP.classList.add('rouge');
  LATEMP.classList.remove('bleu'); 
  LATEMP.classList.remove('vert');
  LATEMP.classList.remove('orange'); 
  document.getElementById("PetitePhrase").innerHTML = "Caliente ! Vamos a la playa, ho hoho hoho !!"; 
  document.getElementById("PetitePhrase").classList.remove('hidden');
}
I_i++ ; 
}, 8000);

// Ne gérer qu'un seul tablist : si vous avez plusieurs listes d'onglets
// (elles peuvent même être imbriquées), il faut appliquer ce code à chacune
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll(':scope > [role="tab"]');

// Ajouter un gestionnaire d'événement click à chaque onglet
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabs);
});

// Activer la navigation par flèches entre les onglets de la liste
let tabFocus = 0;

tabList.addEventListener("keydown", (e) => {
  // Aller à droite
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    tabs[tabFocus].setAttribute("tabindex", -1);
    if (e.key === "ArrowRight") {
      tabFocus++;
      // Si on est à la fin, revenir au début
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
      // Aller à gauche
    } else if (e.key === "ArrowLeft") {
      tabFocus--;
      // Si on est au début, aller à la fin
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
});

function changeTabs(e) {
  const targetTab = e.target;
  const tabList = targetTab.parentNode;
  const tabGroup = tabList.parentNode;

  // Retirer tous les onglets actuellement sélectionnés
  tabList
      .querySelectorAll(':scope > [aria-selected="true"]')
      .forEach((t) => t.setAttribute("aria-selected", false));

  // Définir cet onglet comme sélectionné
  targetTab.setAttribute("aria-selected", true);

  // Masquer tous les panneaux d'onglet
  tabGroup
      .querySelectorAll(':scope > [role="tabpanel"]')
      .forEach((p) => p.setAttribute("hidden", true));

  // Afficher le panneau sélectionné
  tabGroup
      .querySelector(`#${targetTab.getAttribute("aria-controls")}`)
      .removeAttribute("hidden");
}
