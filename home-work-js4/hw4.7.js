// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить
// його через document.write
function someLi(text, arr) {
    document.write('<ul>');
    for (let i = 0; i < arr; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}


someLi('some text', 10)
