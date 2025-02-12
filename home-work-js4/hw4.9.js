// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function any(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

any([
    {id: 1, name:'sasha',age:23},
    {id: 2, name:'misha',age:18},
    {id: 3, name:'max',age:34},
])