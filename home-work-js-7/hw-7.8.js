// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince{
    constructor(name, age, CinderellaShoe) {
        this.name = name;
        this.age = age;
        this.CinderellaShoe = CinderellaShoe;
    }
}
const cinderellas =[
    new Cinderella('Popeluska',27,39 ),
    new Cinderella('Popeluska',28,39 ),
    new Cinderella('Popeluska',24,39 ),
    new Cinderella('Popeluska',30,40 ),
    new Cinderella('Popeluska',35,38 ),
    new Cinderella('Popeluska',19,36 ),
    new Cinderella('Popeluska',23,37 ),
    new Cinderella('Popeluska',25,38 ),
    new Cinderella('Popeluska',26,39 ),
    new Cinderella('Popeluska',28,37 ),
];
const prince = new Prince('Charls',24,36)
const princeWife =cinderellas.find(cinderella =>cinderella.footSize ===prince.CinderellaShoe)
console.log(princeWife)