const countries = ['Vietnam', 'Australia', 'Thailand', 'Cambodia', 'Lao']

const longCountries = countries.reduce((acc, cur) => acc + cur)

console.log(longCountries)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce((acc, cur) => acc + cur, 20)
console.log(sum)

const wordToSay = ['Hi', 'this', 'is', 'Nguyen', 'Ha', 'Duong']
const sentence = wordToSay.reduce((acc, cur) => acc + ' ' + cur)

console.log(sentence)

const multiplyValues = [1, 3, 5, 6, 7, 8]
const double = multiplyValues.map((value) => value * 2)

console.log(double)
double.forEach((number) => console.log(number))


//find

const names = ['Jack', 'Duong', 'Ai', 'Phuong', 'MeHang']
const found = names.find((name) => name === 'Duong')

console.log(found)