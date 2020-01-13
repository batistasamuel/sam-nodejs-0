'use strict'

const fibonacci = () => {
    const indices = [];
    let F = 0;
    let i = 1;
    while (F <= 350) {
        F = Math.round(((((1+Math.sqrt(5))/2)**i) - (((1-Math.sqrt(5))/2)**i))/(Math.sqrt(5)));
        indices.push(F)
        i++;
    }
    return indices
}

const isFibonnaci = (num) => {
    const Lista = fibonacci(); 
    let result = 0;
    let estaNaLista = [
        true,
        false
    ];
    if (Lista.indexOf(num) != -1) {
        result = estaNaLista[0];
    } else {
        result = estaNaLista[1];
    }
    return result;
}


module.exports = {
    fibonacci,
    isFibonnaci
}