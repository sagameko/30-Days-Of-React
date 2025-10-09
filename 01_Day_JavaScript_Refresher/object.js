// How to get values out of an object. Using . follow by the name of the key

// Object method, there are method that can be implant into the object and it called object method

const dog = {
    name: 'Mike',
    age: 2,
    breed: 'Husky',
    ownerName: 'Jack',
    getString: function() {
        return `${this.name} belongs to ${this.ownerName}`;
    }
}

console.log(dog.getString());

// try to add new key to an object

const person = {
    fisrtName: 'Ha Duong',
    lastName: 'Nguyen',
    age: 24,
    country: 'Vietname',
    city: 'Ha Noi',
    skills: ['HTML', 'CSS', 'JS', 'Node', 'MongoDB', ' Python', 'R'],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

person.nationality = 'Vietnamese'
    // we can just add it in simply by . new key and then set the value to that key

const copyPerson = Object.assign(person)
console.log(Object.entries(copyPerson))