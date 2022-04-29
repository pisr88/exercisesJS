
const arr = [[3,21,7],[61,79,101,120],[133,149]]

const isNumberInArrayofArrays = (number, array) => {
let log = false
arr.forEach(el =>{ 
    if (el.indexOf(number) !== -1){
        log = true

    } 
})
console.log(log);
}

isNumberInArrayofArrays(0, arr)
isNumberInArrayofArrays(21, arr)
isNumberInArrayofArrays(221, arr)

const day = new Date().toLocaleDateString('pl', { weekday:"long"})
const hours = new Date().toLocaleTimeString()

console.log(`Today is : ${day}`);
console.log(`Current time is :  ${hours}`);