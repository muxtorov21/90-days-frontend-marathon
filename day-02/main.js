// Data Types
// 1 number
let number = 21
console.log(typeof number)
// 2 string
let string = 'Asadbek'
console.log(typeof string)
// 3 boolean
let boolean = true
console.log(typeof boolean)
// 4 undefinded
let hero
console.log(typeof hero)
// 5 null
let play = null
console.log(typeof play)
// 6 bigint
let bignum = 100000000000n
console.log(typeof bignum)
// 7 symbol
let sym = Symbol('hi')
console.log(typeof sym)
// 8 object
let me = {
	name: 'Asadbek',
	age: 22,
	job: 'Student',
	isMarrid: false,
}
console.log(me)
console.log(typeof me)

me.city = 'tashkent'
delete me.isMarrid

// let raqamlar = [1, 2, 3, 4, 5, 6];
// let juftSonlar = raqamlar.filter(num => num % 2 === 0);
// console.log("Juftlar:", juftSonlar); // [2, 4, 6]
// let kvadratlar = raqamlar.map(num => num * num);
// console.log("Kvadratlar:", kvadratlar); // [1, 4, 9, 16, 25, 36]
// raqamlar.push(7);
// console.log("Yangi holat:", raqamlar);

let numbers = [1, 2, 3, 4, 5, 6]

let numbersJuft = numbers.filter(num => num % 2 === 0)
console.log(numbersJuft)

let kvadrat = numbers.map(num => num * num)
console.log(kvadrat)

numbers.push(7)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.shift()
console.log(numbers)

numbers.unshift(1)
console.log(numbers)

numbers.splice(0, 3, 515)
console.log(numbers)
