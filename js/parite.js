let question;

for (var i = parseInt(prompt(question)); i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
        document.write("<p style='border: 1px solid; background-color: lightgray'> " + i + " est pair</p>")
    }
    if(i % 2 !== 0){
        console.log( i + " est impaire");
        document.write("<p style='border: 1px solid; background-color: lightgray'> " + i + " est impair</p>")
    }
} 