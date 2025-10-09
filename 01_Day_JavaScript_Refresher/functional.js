const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//1
products.forEach((product) => console.log(product.price))

//2

products.forEach(function(p) {
    const n = Number(String(p.price).trim());
    if (Number.isFinite(n)) {
        console.log(`The price of ${p.product} is ${n} euros.`);
    } else {
        console.log(`The price of ${p.product} is unknown.`);
    }
});


//3
let result = 0
products.forEach((p) => result += Number(p.price))
console.log(result)


//4

const withPrice = products.filter((p) => Number.isFinite(p.price))
console.log(withPrice)


//5 method chaining

const total = products
    .map(({ price }) => Number(String(price).trim())) // => số hoặc NaN
    .filter(Number.isFinite) // loại NaN, Infinity
    .reduce((sum, n) => sum + n, 0); // cộng dồn

console.log(total); // 27


const totalReduce = products.reduce((acc, cur) => acc.price + cur.price)
console.log(totalReduce)