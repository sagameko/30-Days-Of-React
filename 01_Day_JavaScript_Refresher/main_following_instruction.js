const number = [0, 1, 2, 3, 4, 10, 15]
const fruit = ['apple', 'banana', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cucumber', 'Carrot', 'Onion']
const animalProduct = ['milk', 'meat', 'butter', 'yorgurt']
const countries = ['Vietnam', 'England', 'Singapore', 'China', 'Cambodia', 'Thailand']


console.log('Numbers:', number)
console.log('Fruits', fruit)
console.log('Vegetables:', vegetables)
console.log('Animal Product:', animalProduct)
console.log('Countries:', countries)
console.log('Number of countries: ', countries.length)

const arr1 = [
    'Nguyen Ha Duong',
    24,
    true,
    { country: 'Vietnam', city: "Ha Noi" },
    { skills: ['coding', 'badminton', 'Thai', 'English'] },
]

console.log(arr1)


let js = 'JavaScript'
const charInJavaScripts = js.split('')

console.log(charInJavaScripts)

let companiesStrings = 'Facebook, Google, Microsoft, Apple, Oracle, Amazon'
const companies = companiesStrings.split(',')

console.log(companies)

let text = 'I am trying to learn how to program with react. Hopefully I can master it within 30days.... Or may be faster if possible!'
const char = text.split(' ')

console.log(char)

// Accessing array items using index

const fruits = ['banana', 'apple', 'mango', 'melon']
let firstFruit = fruits[0]

console.log(fruits[2])

// Print the last fruit from the list

let lastFruit = fruits[fruits.length - 1]
console.log(lastFruit)

// Methods to manipulate array

const arr = Array()
console.log(arr)

const xValues = Array(8).fill('X')
console.log(xValues)


// Concat array using concat

const firstList = [1, 2, 3]
const secondList = [3, 4, 5]

const thirdList = firstList.concat(secondList)

console.log(thirdList)

// Another example to concat array

const veg1 = ['apple', 'lemon']
const veg2 = ['potato', 'tomato']

const vegCombine = veg1.concat(veg2)
console.log(vegCombine)

// Getting the length of the array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numbers.length)

// Getting index of an element in an array

console.log(numbers.indexOf(4)) //Thi index of is used to check what is the index of the array

// Slice array elements

const number_slice = [1, 2, 3, 4, 5, 6]

console.log(number_slice.slice(0, 1))