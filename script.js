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