const now = new Date()

const year = now.getFullYear()
const day = now.getDate()
const hour = now.getHours()
const minute = now.getMinutes()
const month = now.getMonth()
const second = now.getSeconds()

const formatedDate = `${year} - ${month+1} - ${day}`
const formatedHour = `${hour}:${minute}:${second}`

console.log(`Current date: ${formatedDate}`)
console.log(`Current time: ${formatedHour}`)