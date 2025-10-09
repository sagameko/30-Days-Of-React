// 1. Creating an emty object and name it dog

const dog = {}

// 2. Print the dog object in the console
console.log(dog)

// 3. add name, leg, color, age, and barkperperties for the dog object. The bark property is a method which return woof woof

dog.names = 'Mick'
dog.leg = 4
dog.color = 'Brown'
dog.age = 3
dog.bark = function() {
    return 'woof woof'
}

// 4. Get name, legs, color, age and bark value from the dog object

console.log(dog.names)
console.log(dog.leg)
console.log(dog.age)
console.log(dog.bark())

// 5. set the new properties for the dog object: breed, get Doginfo

dog.breed = 'Husky'
dog.getDogInfo = function() {
    let statement = `${this.names} is a dog with ${this.leg}, currently ${this.age} years old. Mike makes the sound '${this.bark()}' when it bark.`
    return statement
}

console.log(dog.breed)
console.log(dog.getDogInfo())


// Level 2:

// 1. Find the person who has many skills in the users object.

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


// 1) Person(s) with the most skills
const entries = Object.entries(users);
const maxSkillCount = Math.max(...entries.map(([_, u]) => u.skills.length));
const mostSkilled = entries
    .filter(([_, u]) => u.skills.length === maxSkillCount)
    .map(([name]) => name);

console.log('Most skilled count:', maxSkillCount);
console.log('Most skilled user(s):', mostSkilled);

// 2) Count logged-in users
const loggedInCount = entries.filter(([_, u]) => u.isLoggedIn).length;
console.log('Logged in users:', loggedInCount);

// 3) Count users with >= 50 points
const fiftyPlusCount = entries.filter(([_, u]) => u.points >= 50).length;
console.log('Users with >= 50 points:', fiftyPlusCount);

// 4) Find MERN stack developers (MongoDB, Express, React, Node)
// (Normalize 'Node' vs 'Node.js')
const required = ['mongodb', 'express', 'react', 'node'];
const mernDevs = entries
    .filter(([_, u]) => {
        const have = u.skills.map(s => s.toLowerCase().replace(/\./g, ''));
        return required.every(req => have.includes(req));
    })
    .map(([name]) => name);

console.log('MERN developers:', mernDevs);

// 5) Add *your* name without mutating original
// (Change "Duong" and details as you wish)
const newUsers = {
    ...users,
    Duong: {
        email: 'duong@example.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 24,
        isLoggedIn: true,
        points: 60
    }
};
console.log('Added Duong? (original unchanged):', !!users.Duong, '-> newUsers has Duong:', !!newUsers.Duong);

// 6) Get all keys of users object
const userKeys = Object.keys(users);
console.log('User keys:', userKeys);

// 7) Get all values of users object
const userValues = Object.values(users);
console.log('User values (first 2 for brevity):', userValues.slice(0, 2), '... total:', userValues.length);

// 8) Countries task
// If you have a `countries` object/array like in the 30DaysOfJS exercises, this will print name, capital, population, languages.
// Example structure (uncomment if you don’t already have one):
/*
const countries = [
  { name: 'Finland', capital: 'Helsinki', population: 5536146, languages: ['Finnish', 'Swedish'] },
  { name: 'Australia', capital: 'Canberra', population: 26700000, languages: ['English'] },
];
*/

function printCountriesSummary(countries) {
    if (!countries) {
        console.log('No `countries` variable found. Provide your countries data to print the summary.');
        return;
    }
    countries.forEach(c => {
        const langs = Array.isArray(c.languages) ? c.languages.join(', ') : String(c.languages);
        console.log(`Country: ${c.name} | Capital: ${c.capital} | Population: ${c.population} | Languages: ${langs}`);
    });
}

// Call this if you have `countries` defined:
// printCountriesSummary(countries);