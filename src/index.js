'use strict'
const fibonacci = () => {
    let indices = [0,1]
    let i = 1;
    while (indices[i] <= 350) {
        i++;
        indices.push(indices[i-2]+indices[i-1]);
    }
    return indices
}

const isFibonnaci = (num) => {
    const Lista = fibonacci(); 
    return Lista.indexOf(num) >= 0
}

module.exports = {
    fibonacci,
    isFibonnaci
}