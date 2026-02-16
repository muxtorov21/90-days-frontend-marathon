let functions = 'Function Declaration Arrow Function Function Expression'
console.log(functions)

let calc = function (a, operation, b) {
	if (operation === '+') return a + b
	if (operation === '-') return a - b
	if (operation === '*') return a * b
	if (operation === '/') return a / b
}
console.log(calc(5, '*', 5))

let numbers = [2, 5, 8, 7, 9, 15, 22, 48]
function maxNum(maxNumber) {
	let max = maxNumber[0]

	maxNumber.forEach(num => {
		if (num > max) {
			max = num
		}
	})
	return max
}
console.log(maxNum(numbers))

let maxNumber = Math.max(...numbers)
console.log(maxNumber)

let man = {
	name: 'Abdullox',
	age: 22,
	job: 'Student',
}
const userCheck = man => {
	if (man.age >= 18) {
		return 'Hush kelibsiz ' + man.name
	} else {
		return 'Ruxsat yo`q uka '
	}
}
console.log(userCheck(man))

let number = [1, 2, 3, 4, 5]
function miscellany(arr) {
	return arr.reduce((acc, curr) => acc + curr, 0)
}
console.log(miscellany(number))
