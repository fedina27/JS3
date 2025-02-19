// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Constructor1(model, producer, yearOfGraduation, maximumSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.yearOfGraduation = yearOfGraduation;
    this.maximumSpeed = maximumSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
            console.log(`їдемо зі швидкістю ${maximumSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this){
            console.log(key , this[key]);
        }

    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maximumSpeed = this.maximumSpeed +newSpeed;
    };
    this.changeYear = function (newValue) {
        if (newValue > 1815) this.newValue = newValue;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };

}
const car1 =new Constructor1('Timeline',255 , 2012 ,250,'is powered by a 2.0-lite',)
console.log(car1);

car1.drive();
car1.info();
car1.increaseMaxSpeed(210);
car1.changeYear(2012);
car1.addDriver({});
console.log(car1)