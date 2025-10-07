let age = prompt('Enter your age:')
    /*
    if (age < 18) {
        console.log('You are left with ', 18 - age, ' years to drive')
    } else {
        console.log ('You are old enough to drive!')
    }
    */

// 2 Comparing your age with my age

const myAge = 24;

if (age < myAge) {
    console.log("Your are ", myAge - age, " years younger than me!")
} else if (age > myAge) {
    console.log("Your are ", age - myAge, " years older than me!")
} else {
    console.log("We are sharing the same age!")
}


// 3 Comparing a and b:

let a = 10
let b = 12

if (a > b) {
    console.log('a is greater than b!')
} else if (b > a) {
    console.log('a is less than b!')
} else {
    console.log('a and b are equal to ech other!')
}

// 3.1 ternary operater

const result = a > b ? console.log('a is greater than b') : console.log("a is less than b")

// 4. Even or odd number

let number = prompt("Enter your number:")

if (number % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

const result1 = number % 2 === 0 ? "Even" : "Odd"
console.log(result1)