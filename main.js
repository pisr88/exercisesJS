
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
