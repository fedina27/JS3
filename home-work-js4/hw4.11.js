// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(a){
    let summa =0;
    for (const item of a) {
        summa = summa+item;

    }
    return summa;
}
console.log(sum([19,2,7]))