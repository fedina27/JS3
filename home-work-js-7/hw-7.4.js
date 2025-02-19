// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client01(id, name, surname , email, phone, order ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;

}
let clients01 = [

    new Client01('1', 'Darina', 'Typikal', 'darina@gmail.com', '+380634562888',[{ product:'carrot',product2:'potato'}]),
    new Client01('2', 'Anna', 'Nandes', 'anna@gmail.com', '+380634565777',[{ product:'fanta',product2:'batat'}]),
    new Client01('3', 'Marina', 'Dyrides', 'marina@gmail.com', '+380637355322',[{ product:'cola',product2:'banana'}]),
    new Client01('4', 'Arina', 'Jolire', 'arina@gmail.com', '+380636993321',[{ product:'sprite',product2:'potato'}]),
    new Client01('5', 'Kristina', 'Dior', 'kristina@gmail.com', '+380631232411',[{ product:'chicken',product2:'fried potato'}]),
    new Client01('6', 'Olya', 'Sambuka', 'olya@gmail.com', '+380638799500',[{ product:'ananas',product2:'peach'}]),
    new Client01('7', 'Inna', 'Tekila', 'inna@gmail.com', '+380632331313',[{ product:'kokos',product2:'water'}]),
    new Client01('8', 'Katya', 'Sbambuka', 'katya@gmail.com', '+380638799766',[{ product:'durian',product2:'orange'}]),
    new Client01('9', 'Julia', 'Fernandes', 'julia@gmail.com', '+380635242117',[{ product:'injir',product2:'mandarin'}]),
    new Client01('10', 'Yana', 'Martini', 'yana@gmail.com', '+38063857466',[{ product:'dragon fruit',product2:'baklajan'}]),
]
console.log(clients01)

// class Client11{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
//  }
//
// let clients = [
//
//     new Client11('1', 'Darina', 'Typikal', 'darina@gmail.com', '+380634562888',[{ product:'chicken'},{product:'fried potato'},{product:'banana'},{product:'peach'}]),
//     new Client11('2', 'Anna', 'Nandes', 'anna@gmail.com', '+380634565777',[{ product:'fanta'},{product:'carrot'},{product:'banana'},{product:'batat'}]),
//     new Client11('3', 'Marina', 'Dyrides', 'marina@gmail.com', '+380637355322',[{ product:'cola'},{product:'banana'}]),
//     new Client11('4', 'Arina', 'Jolire', 'arina@gmail.com', '+380636993321',[{ product:'sprite'},{product:'banana'}]),
//     new Client11('5', 'Kristina', 'Dior', 'kristina@gmail.com', '+380631232411',[{product:'potato'}]),
//     new Client11('6', 'Olya', 'Sambuka', 'olya@gmail.com', '+380638799500',[{ product:'ananas'},{product:'peach'}]),
//     new Client11('7', 'Inna', 'Tekila', 'inna@gmail.com', '+380632331313',[{ product:'kokos'},{product:'water'}]),
//     new Client11('8', 'Katya', 'Sbambuka', 'katya@gmail.com', '+380638799766',[{ product:'durian'},{product:'fried potato'},{product:'mandarin'},{product:'orange'},{product:'banana'}]),
//     new Client11('9', 'Julia', 'Fernandes', 'julia@gmail.com', '+380635242117',[{ product:'injir'},{product:'orange'},{product:'mandarin'}]),
//     new Client11('10', 'Yana', 'Martini', 'yana@gmail.com', '+38063857466',[{ product:'dragon fruit'},{product:'baklajan'}]),
//     ]
// console.log(clients)