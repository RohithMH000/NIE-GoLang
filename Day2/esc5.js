var age = 18;
let Age;
Age = 19;
const personAge = 18;

let car =
{
    brand : "tata",
    model : "Punch"
};
console.log(car);

carBrand = car.brand;
console.log(carBrand);

let even = [2,4,5,8,10];
console.log(even[2]);
even.push(23);
console.log(even);
even.pop();
console.log(even);

const number = [1,2,3,4,5,6,7];
const squared = number.map(numi=> numi*numi );
console.log(squared);

function sum(a,b)
{
    return a+b;
}

console.log(sum(3,4));

var  add = (a,b) => a+b ;

console.log(add(5,4));

const cube = (a) => a*a*a*a;
console.log(cube(2));

const greet = (personName) => ("hello bro" + personName);
console.log(greet(" santhosh"));


const mo2 = Numbers.filter(num => num%2 == 0);
console.log(mo2);
const Numbers = [1,2,3,4,5,6];
const sumofnumbers = Numbers.reduce((temp,present)=> temp + present,0);
console.log(sumofnumbers);