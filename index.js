// OOP
// JS Advanced

const axios = require("axios")
class Dog {
    constructor(_name, _age, _color) {
        this.name = _name;
        this.age = _age;
        this.color = _color
    }
}

function DogFn(_name, _age, _color) {
    this.name = _name;
    this.age = _age;
    this.color = _color
    this.address = {
        city: "rlz",
        street: "bla"
    }
}

const dog1 = new Dog("jen", 9, "black")
const dog2 = new DogFn("mike", 8, "white")
console.log(dog1, dog2)

const dog3 = dog1;
dog3.age = 10;

console.log("dog3", dog3)
console.log("dog1", dog1)

const dog4 = { ...dog3 }
dog4.age = 5;

console.log("dog4", dog4)
console.log("dog3", dog3)

// async await
// Object

const dogs = [new DogFn("jen", 9, "black"), new DogFn("mike", 8, "white")]
const newDogsArray = JSON.parse(JSON.stringify(dogs))
console.log(dogs[0])
// dogs[0].address.city = "ashdod"
dogs.push(1)
console.log(newDogsArray)


console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
const test = dogs[0];
const test2 = { ...test }
// const test2 = JSON.parse(JSON.stringify(test))
test.age = 999;
test.address.city = "ashdod";
console.log(test2)


console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")


// map, filter, reduce, 
const ages = dogs.map(dog => dog.age)
const youngDogs = dogs.filter(dog => dog.age < 10)
console.log(youngDogs)


const cars =
    [{
        manufacturer: 'Porsche',
        model: '911',
        price: 135000,
        wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
        img: '2004_Porsche_911_Carrera_type_997.jpg'
    }, {
        manufacturer: 'Nissan',
        model: 'GT-R',
        price: 80000,
        wiki: 'http://en.wikipedia.org/wiki/Nissan_Gt-r',
        img: '250px-Nissan_GT-R.jpg'
    }, {
        manufacturer: 'BMW',
        model: 'M3',
        price: 60500,
        wiki: 'http://en.wikipedia.org/wiki/Bmw_m3',
        img: '250px-BMW_M3_E92.jpg'
    },
    {
        manufacturer: 'BMW',
        model: 'M5',
        price: 70500,
        wiki: 'http://en.wikipedia.org/wiki/Bmw_m3',
        img: '250px-BMW_M3_E92.jpg'
    }, {
        manufacturer: 'Audi',
        model: 'S5',
        price: 53000,
        wiki: 'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
        img: '250px-Audi_S5.jpg'
    }, {
        manufacturer: 'Audi',
        model: 'TT',
        price: 40000,
        wiki: 'http://en.wikipedia.org/wiki/Audi_TT',
        img: '250px-2007_Audi_TT_Coupe.jpg'
    }
    ]



const carsObj = cars.reduce((cRes, currentCar) => {
    const { manufacturer } = currentCar;
    const carFound = cRes[manufacturer];
    return carFound ?
        { ...cRes, [manufacturer]: [...carFound, currentCar] }
        : { ...cRes, [manufacturer]: [currentCar] }
    // if (carsResult[manufacturer]) {
    //     carsResult[manufacturer].push(currentCar)
    // } else {
    //     carsResult[manufacturer] = [currentCar]
    // }
    // return carsResult

}, {})

console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")
console.log("#####################")

console.log("result", carsObj)

console.log(cars.map(car => car.manufacturer))
console.log(Object.keys(carsObj))




async function getFromServer() {
    console.log(944);
    const result = await axios.get("http://mako.co.il")
    console.log(953);
}

async function getFromServer2() {
    console.log(955);
    const result = await axios.get("http://mako.co.il")
    console.log(933);
}

console.log(8888)
getFromServer2()
getFromServer()
console.log(1111)

// 8888 V => 955 V => 933 => 944 => 953 => 1111 Dorin
// 8888 V => 955 V => 944 => 11111 => 933 => 955 Gal + Dorin
