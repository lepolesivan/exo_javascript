let nb1=2, nb2=4, nb3=0;

if (nb1 > nb2){
    nb1 = nb3 * 2;
}else{
    nb1++;
    if(nb2 > nb3){
        nb1 = nb1 + nb3 *3;
    }else{
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}
console.log(nb1)
console.log(nb2)
console.log(nb3)