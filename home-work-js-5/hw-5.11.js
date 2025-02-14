let sum=(a) =>{
    let summa =0;
    for (const item of a) {
        summa = summa+item;

    }
    return summa;
}
console.log(sum([19,2,7]))