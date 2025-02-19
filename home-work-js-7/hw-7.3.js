// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let users3 = [

    new User('10', 'Darina', 'Typikal', 'darina@gmail.com', '+380634562888'),
    new User('12', 'Anna', 'Nandes', 'anna@gmail.com', '+380634565777'),
    new User('23', 'Marina', 'Dyrides', 'marina@gmail.com', '+380637355322'),
    new User('4', 'Arina', 'Jolire', 'arina@gmail.com', '+380636993321'),
    new User('5', 'Kristina', 'Dior', 'kristina@gmail.com', '+380631232411'),
    new User('63', 'Olya', 'Sambuka', 'olya@gmail.com', '+380638799500'),
    new User('7', 'Inna', 'Tekila', 'inna@gmail.com', '+380632331313'),
    new User('48', 'Katya', 'Sbambuka', 'katya@gmail.com', '+380638799766'),
    new User('19', 'Julia', 'Fernandes', 'julia@gmail.com', '+380635242117'),
    new User('1', 'Yana', 'Martini', 'yana@gmail.com', '+38063857466'),
]

console.log(users3.sort((a, b) => a.id- b.id))