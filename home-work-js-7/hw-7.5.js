// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function Client(id, name, surname , email, phone, order ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;

}
let clients1 = [

    new Client('1', 'Darina', 'Typikal', 'darina@gmail.com', '+380634562888',[{ product:'chicken'},{product:'fried potato'},{product:'banana'},{product:'peach'}]),
    new Client('2', 'Anna', 'Nandes', 'anna@gmail.com', '+380634565777',[{ product:'fanta'},{product:'carrot'},{product:'banana'},{product:'batat'}]),
    new Client('3', 'Marina', 'Dyrides', 'marina@gmail.com', '+380637355322',[{ product:'cola'},{product:'banana'}]),
    new Client('4', 'Arina', 'Jolire', 'arina@gmail.com', '+380636993321',[{ product:'sprite'},{product:'banana'}]),
    new Client('5', 'Kristina', 'Dior', 'kristina@gmail.com', '+380631232411',[{product:'potato'}]),
    new Client('6', 'Olya', 'Sambuka', 'olya@gmail.com', '+380638799500',[{ product:'ananas'},{product:'peach'}]),
    new Client('7', 'Inna', 'Tekila', 'inna@gmail.com', '+380632331313',[{ product:'kokos'},{product:'water'}]),
    new Client('8', 'Katya', 'Sbambuka', 'katya@gmail.com', '+380638799766',[{ product:'durian'},{product:'fried potato'},{product:'mandarin'},{product:'orange'},{product:'banana'}]),
    new Client('9', 'Julia', 'Fernandes', 'julia@gmail.com', '+380635242117',[{ product:'injir'},{product:'orange'},{product:'mandarin'}]),
    new Client('10', 'Yana', 'Martini', 'yana@gmail.com', '+38063857466',[{ product:'dragon fruit'},{product:'baklajan'}]),
]
console.log(clients1.sort((a, b) => a.order.length- b.order.length))