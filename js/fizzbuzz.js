for(let nb= 1; nb < 100; nb++){
    console.log(nb);
    if(nb % 3 == 0){
        console.log("Fizz")
    }
    if(nb % 5 == 0){
        console.log("Buzz")
    }
    if((nb % 3 == 0)&&(nb % 5 == 0)){
        document.write(`<p style='color: blue'> ${nb} FizzBuzz</p>`)
    }
}

// correction:


/*for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        document.write("<p style='color:blue'>" + i + " fizzbuzz </p>");
    } else if(i % 5 === 0) {
        document.write("<p style='color:red'>" + i +"  buzz </p>");
    }else if(i % 3 === 0){
        document.write("<p style='color:pink'>" + i +"  buzz </p>");
    }else{
        document.write("<p>" + i + "</p>");
    }
}*/