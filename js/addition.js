let nb1= parseInt(prompt("Ecris un nombre"));
console.log(nb1)
let nb2= parseInt(prompt("Ecris un nombre"));
console.log(nb2)

function addition(a, b){
  return a+b;
}

console.log(addition(nb1, nb2));


// Correction

/*
function addition ( nb1, nb2) {
    let somme = nb1 + nb2;
    return somme;
}
let result = addition(1,2);
console.log( result);

let userNb1 = parseInt(prompt("donne moi un nombre "));
let userNb2 = parseInt(prompt("donne moi un second nombre")) ;
let resultUser = addition(userNb1, userNb2);
document.write("<p>Le résultat de " + userNb1 + " + " + userNb2 + " = " + resultUser + "</p>");
document.write(<p>Le résultat de ${userNb1} + ${userNb2} = ${resultUser} </p>);*/