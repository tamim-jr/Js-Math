let result;
let num1 = 45;
let num2 = 5;

result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = num1 % num2;

console.log(result);


value = Math.PI
console.log(value);

value = Math.E;
console.log(value);

value = Math.round(2.5);
console.log(value);

value = Math.round(2.4);
console.log(value);

value = Math.ceil(2.1);
console.log(value);

value = Math.floor(2.1);
console.log(value);

value = Math.sqrt(64);
console.log(value);

//min max

value = Math.min(2, 6, 8, 10, 1);
console.log(value);

value = Math.max(45, 100, 2, 8);
console.log(value);

//Love calculator
 
value = Math.random() * 100;
value = Math.round(value) + 1;
// value = Math.round(value) + 1; here we show the real number mean 100 can be show
console.log(value);


let firstPerson = prompt("What is your Name");
let partnerName = prompt("what is your partner name");

let lovePer = Math.random() * 100;
lovePer = Math.floor(lovePer) + 1;

alert(firstPerson + " and" + partnerName + "'s Love Percent is " + lovePer + "%");

