/*let reponse= prompt("Pierre, Feuille, Ciseaux !").toLowerCase();
let choix = reponse
reponse = Math.random();

if(reponse<=0.3){
    document.write('<p>Pierre</p>')
}else if(reponse<=0.6){
    document.write('<p>Feuille</p>');
}else{
    document.write('<p>Ciseaux</p>');
}*/

//Début de correction


let joueur = prompt("Pierre, Papier, Ciseaux?");
console.log("Résultat joueur " + joueur);
let random = Math.random(); 
let computer;
let resultat;
if(random <= 0.33){
    computer = "pierre";
}else if(random <= 0.66){
    computer = "feuille";
}else{
    computer = "ciseaux";
}
console.log("resultat ordinateur " + computer);

//Fin de correction

if(joueur === computer){
    document.write("<h1>Egualité</h1>");
}else if((joueur === "pierre") && (computer === "feuille") || (joueur === "feuille") && (computer === "ciseaux") || (joueur === "ciseaux") && (computer === "pierre")){
    document.write("<h1>T'as perdu</h1>");
}else{
    document.write("<h1>Bravo t'as GAGNÉ</h1>");
}

//FIN de correction



                     //Début de correction
/*
// Déclaration de trois variables.
let computer;
let player;
let random;

// Récupération du choix du joueur.
player = prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');

// Récupération d'un nombre aléatoire entre 0 et 1 inclus.
random = Math.random();

//test du random
console.log(random);

if(random <= 0.33){
    computer = 'pierre';
}else if(random <= 0.66){
    computer = 'feuille';
}else{
    computer = 'ciseau';
}
document.write("<p>Choix de l'ordinateur : " + computer + '</p>');

if(computer == player){
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}else{
    // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

    switch(computer)
    {
        case 'ciseau':
            if(player == 'pierre'){
                document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
            }
            else // player == 'feuille'
            {
                document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
            }
        break;

        case 'feuille':
            if(player == 'pierre'){
                document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
            }else // player == 'ciseau'
            {
                document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
            }
        break;

        case 'pierre':
            if(player == 'feuille'){
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            }else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
        break;
    }
}*/