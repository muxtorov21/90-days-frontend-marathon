let product1 = {
	name: 'banana',
	price: 20000,
	amount: 5,
	discount: true,
}
let product2 = {
	name: 'apple',
	price: 10000,
	amount: 5,
	discount: true,
}
let product3 = {
	name: 'melon',
	price: 30000,
	amount: 5,
	discount: true,
}

let basket = []

basket.push(product1)
basket.push(product2)
basket.push(product3)
console.log(basket)

let upPrice = basket.filter(item => item.price > 10000)
console.log(upPrice)

let upPersent = basket.map(item => {
	return { ...item, price: item.price * 1.1 }
})
console.log(upPersent)

basket.forEach(item => delete item.discount)
console.log(basket)
