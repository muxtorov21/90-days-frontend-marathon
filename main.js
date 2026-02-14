// 1-mashq: Hoisting tushunish
// console.log(a);
// var a = 5;

// 2-mashq: Scope farqi
// if (true) {
//   var x = "Men hamma joydaman";
//   let y = "Men faqat shu blokdaman";
// }
// console.log(x);
// console.log(y); // Bu yerda nima sodir bo'ladi?

// hullas bu o'zgaruvchidan keyin chaqirilsa consolega chiqadi
let a = 5
console.log(a)

if (true) {
	var x = 'Men hamma joydaman'
	let y = 'Men faqat shu blokdaman'
	// hullas bu shu blok ichida chaqirilsa consolega chiqadi
	console.log(y)
}
console.log(x)
// hullas bu blok ichida ham tashida ham chaqirilsa consolega chiqadi

// 1-mashq: Hoisting jumboqlari
// Quyidagi kodlar konsolga nima chiqaradi? (Kodni ishlatishdan oldin o'zing taxmin qil):
// a
console.log(x)
var x = 5
// b

let y = 10
console.log(y)

sayHello()
function sayHello() {
	console.log('Salom, dasturchi!')
}

// 1-mashq
// a - undifinded
// b - uninitialized
// c - salom dasturchi

// 2-mashq: Scope (Ko'rinish sohasi)
// Ushbu kod ishga tushsa, natija nima bo'ladi va nima uchun?
let age = 20

if (true) {
	let age = 25
	var name = 'Asadbek'
	console.log('Blok ichida age:', age)
}

console.log('Blok tashqarisida age:', age)
console.log('Blok tashqarisida name:', name)

// 2-mashq
// 1-console.log
// Blok ichida age: 25
// 2-console.log
// Blok tashqarisida age: 20
// 3-console.log
// Blok tashqarisida name: Asadbek

// chunki if ichdagi let age faqat blok ichiga ta'sir qiladi
// tashqi let tashqariga globalga tasir qiladi
// if ichidagi var name block ichiga ham tashiga ham sakrab o'taveradi

// 3-mashq: Closure orqali Summa

function createAdder(n) {
	return function (b) {
		return n + b
	}
}

const addFive = createAdder(5)
console.log(addFive(10)) // Natija: 15 chiqishi kerak
console.log(addFive(2)) // Natija: 7 chiqishi kerak

// 4-mashq: "Shooters" muammosini tuzatish
// Esdami, darsda hamma shooterlar 10 chiqaradigan bo'lib qolgan edi? O'sha kodni var o'rniga let ishlatib to'g'irla. let har bir sikl uchun alohida scope yaratishini isbotla.
// function makeArmy() {
//   let shooters = [];

//   for (let i = 0; i < 10; i++) { // Mana shu yerda let ishlatib ko'r
//     let shooter = function() {
//       console.log(i);
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();
// army[0](); // 0 chiqishi kerak
// army[5](); // 5 chiqishi kerak

function makeArmy() {
	let shooters = []

	let i = 0
	while (i < 10) {
		let j = i
		let shooter = function () {
			// shooter function
			alert(j) // should show its number
		}
		shooters.push(shooter)
		i++
	}

	return shooters
}

let army = makeArmy()

// Now the code works correctly
army[0]() // 0
army[5]() // 5
