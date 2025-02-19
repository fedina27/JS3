// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Constructor {

    constructor(model, producer, yearOfGraduation, maximumSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.yearOfGraduation = yearOfGraduation;
        this.maximumSpeed = maximumSpeed;
        this.engineVolume = engineVolume;
    }
    drive  () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    };
    info () {
        for (const key in this){
            console.log(key , this[key]);
        }

    };
    increaseMaxSpeed  (newSpeed) {
        if (newSpeed > 0) this.maximumSpeed = this.maximumSpeed +newSpeed;
    };
    changeYear (newValue) {
        if (newValue > 1815) this.newValue = newValue;
    };
    addDriver (driver) {
        if (driver) this.driver = driver;
    };

  }

const car =new Constructor('Timeline',255 , 2010 ,250,'is powered by a 2.0-lite',)
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(210);
car.changeYear(2012);
car.addDriver({});
console.log(car)


