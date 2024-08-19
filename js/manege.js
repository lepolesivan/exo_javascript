let demande= parseInt(prompt("Combien de tour de manège tu veux faire?"));

let tour=0;
while(tour<demande){
    tour++;
    document.write("<p>Vous avez fais " + tour + " tour de manège.</p>")
}

for (let i = 1; i <= 10; i++){
    document.write("<p style='color:red'> c'est la tour de manége n° " + i + "</p>");
}

let question = parseInt(prompt("combien de tour voulez vous faire?"));
let compteur = 0;
while(compteur < question){
    compteur++;
    document.write("<p style='color:green'> c'est la tour de manége n° " + compteur + "</p>");
}

let nbTour = parseInt(prompt("combien de tour voulez vous faire?"));
for(let compte=1; compte <= nbTour; compte++){
    document.write("<p style='color:pink'> c'est la tour de manége n° " + compte+ "</p>");
}