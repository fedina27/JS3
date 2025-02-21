// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт
//     буде мати функції,які в нього були до цього моменту.

function copyObjkt(objkt){
    if (objkt){
        let functions =[];
        for (const key in objkt){
            if (typeof objkt[key] === 'function'){
                const functionClone =objkt[key].bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions)
        const cloneObj = JSON.parse(JSON.stringify(objkt));
        for (const i of functions){
            cloneObj[i.key]=i.functionClone
        }
        console.log(cloneObj)
        return cloneObj


    }
    throw new Error('404 Not found')
}
copyObjkt({id:34,name:'Gladiator',f (){},func(){}})
