let arrayMin =(numbers) =>{
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}


console.log(arrayMin([ 5,77, -6, 55, -43, 12,]))