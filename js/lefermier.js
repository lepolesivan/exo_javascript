let poulet= parseInt(prompt("Combien de poulet t'as?"));
let vache= parseInt(prompt("Combien de vache t'as?"));
let chevaux= parseInt(prompt("Combien de chevaux t'as?"));

let patteDEpoulet= 2;
let quadripede= 4;

function calcule(a,b){
   return a*b;
}

console.log(calcule(poulet, patteDEpoulet));
console.log(calcule(vache, quadripede));
console.log(calcule(chevaux,quadripede));

document.write(`<p>Il y a ${calcule(poulet, patteDEpoulet)} pattes de poulets, ${calcule(vache, quadripede)} pattes de vaches ${calcule(chevaux,quadripede)} pattes de chevaux </p>`);

//Correction

/*
function nbAnimaux(poulets, vaches, chevaux){
   return poulets + vaches + chevaux;
}

function nbPattes(nbPoulets, nbVaches, nbChevaux){
   return nbPoulets * 2 + (nbVaches + nbChevaux) * 4;
}

let userPoulets = parseInt(prompt('vous avez combien de poulets?'));
let userVaches = parseInt(prompt('vous avez combien de vaches?'));
let userChevaux = parseInt(prompt('vous avez combien de chevaux?'));

let resultNbanimaux = nbAnimaux(userPoulets, userVaches, userChevaux);
let resultNbpattes = nbPattes(userPoulets, userVaches, userChevaux);
document.write(`<p> Vous avez ${resultNbanimaux} animaux et ${resultNbpattes} pattes </p>`)*/