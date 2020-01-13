'use strict'

const fibonacci = () => {
    var indices = [];
    let F = 0;
    let i = 1;
    while (F < 350) {
        F = Math.round(((((1+Math.sqrt(5))/2)**i) - (((1-Math.sqrt(5))/2)**i))/(Math.sqrt(5)));
        indices.push(F)
        i++;
    }
    return indices
}

const isFibonnaci = (num) => {
    let Lista = fibonacci(); 
    var estaNaLista = [];
    if (Lista.indexOf(num) != -1) {
        estaNaLista = true;
    } else {
        estaNaLista = false;
    }
    return estaNaLista;
}
console.log(isFibonnaci(5));

module.exports = {
    fibonacci,
    isFibonnaci
}
