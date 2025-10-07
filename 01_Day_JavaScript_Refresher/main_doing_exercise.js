// 1. Declar an emty array

const arr = Array()

// 2. Declare an array with more than  5 numbers of elements

const array = Array(5)
console.log(array)

// 2.1 Declare the array with 5 specific numbers

const array1 = Array(5).fill(1)
console.log(array1)

// 3. Find the length of the array

console.log(array1.length)

// 4. Get the first item, middle item and the last item of the array

// 4.1 first item

console.log(array1[0])

// 4.2 midlde item

const middleIndex = Math.floor(array1.length / 2)
console.log(array1[middleIndex])

// 4.3 Last item

const lastItem = array1.length - 1
console.log(array1[lastItem])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Nguyen Ha Duong', 24, ['sagameko@gmail.com', 'nguyenduongha2000@gmail.com'], 1.4, '27']


// 6. companies

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log

console.log(itCompanies)

// 8. Print the number  of companies in the array

console.log(itCompanies.length)

// 9. Print the first, middle, and last comapnies in the list
// 9.1 first index

const firstIndex = 0
console.log(itCompanies[firstIndex])

// 9.2 middle index

const middleIndex1 = Math.floor(itCompanies.length / 2)
console.log(itCompanies[middleIndex])

// 9.3 last index

const lastIndex = itCompanies.length - 1
console.log(itCompanies[lastIndex])

// 10. Print out each companies

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// 11. Change the companies name to uppercase one by one and print them out

for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i] = itCompanies[i].toUpperCase(); // <-- assign it back
    console.log(itCompanies[i]);
}

// 12 Print the array like as a sentence
const sentence = `${itCompanies.slice(0, -1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`;
console.log(sentence);


// 13. Check if a certain company exists in the itCompanies array. If it exist return the company, else  return a company is not found

// let choose Facebook for this task

const company = 'FACEBOOK'

if (itCompanies.includes(company)) {
    console.log(company + ' is in the list')
} else {
    console.log('not found')
}

// 14. Filter out companies whihc have more than one o without the filter method

let result = []; // store companies with >1 'o'

for (let i = 0; i < itCompanies.length; i++) {
    const company = itCompanies[i];
    let count = 0;

    // count how many 'o' are in this company name
    for (let j = 0; j < company.length; j++) {
        if (company[j].toLowerCase() === 'o') {
            count++;
        }
    }

    // if more than one 'o', add it to the result
    if (count > 1) {
        result.push(company);
    }
}

console.log(result); // ✅ ['Facebook', 'Google', 'Microsoft']

// 15. Sort the array using the sort() methods:

const sorted = itCompanies.sort()

console.log(sorted)

// 16. Reverse the array using the reverse() method

const reversed = itCompanies.reverse()
console.log(reversed)

// 17. slice out the first 3 companies from the array:

const firstThree = itCompanies.slice(0, 3)
console.log(firstThree)

// 18. slice out the lsat 3 companies from the array: 

const lastThree = itCompanies.slice(-3, -1)
console.log(lastThree)

// 19. slice out the middle companies from the array:

const middleCompanies = itCompanies.slice(1, -1)
console.log(middleCompanies)

// 20. remove the first companies or companies from the array:

itCompanies.shift()
console.log(itCompanies)

// 21. Remove the midlde companies from the array:

const middleIndex12 = Math.floor(itCompanies.length / 2);
itCompanies.splice(middleIndex12, 1); // remove 1 element at middleIndex
console.log(itCompanies);

// 22. Remove the last IT  company from the array:

itCompanies.pop()
console.log(itCompanies)

// 23. Remove all IT companies

itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)