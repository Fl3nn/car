//susirinkti vartotojo input
//susikuriam car klase
//nusipiesiam auto ir finish line
//nustatom kiekvieno auto greiti
//judinam(move) kiekviena auto
//tikrinam win case scenario
//pridedam winner text
//pridedam info text

let nunberOfCars = 0;
let distance = 0;

function getUserInput() {
    do {
        nunberOfCars = +prompt("Kiek masinu?", "5");
    } while (!isPositiveInteger(nunberOfCars));

    do {
        distance = +prompt("Atstumas?", "100");
    } while (!isPositiveInteger(distance));
}

function isPositiveInteger(input) {
    return Number.isInteger(input)&& input > 0;
}

getUserInput();

console.log(nunberOfCars);
console.log(distance);

class Car {
    constructor(id){
        this.id = id;
        this.distance = 0;
        this.speed = 0;
    }

    accelerate(howMuch) {
        this.speed += howMuch;
    }

    slowDown(howMuch) {
        this.speed -= howMuch;
        if (this.speed < 0) this.speed = 0;
    }

    move() {
        this.distance += this.speed;
    }
}