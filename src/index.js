'use strict'
const fibonacci = () => {
    let indices = [1,1]
    let i = 1;
    while (indices[i] <= 350) {
        i++;
        indices.push(indices[i-2]+indices[i-1]);
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