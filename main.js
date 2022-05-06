
// const arr = [[3,21,7],[61,79,101,120],[133,149]]

// const isNumberInArrayofArrays = (number, array) => {
// let log = false
// arr.forEach(el =>{ 
//     if (el.indexOf(number) !== -1){
//         log = true

//     } 
// })
// console.log(log);
// }

// isNumberInArrayofArrays(0, arr)
// isNumberInArrayofArrays(21, arr)
// isNumberInArrayofArrays(221, arr)

// ===
// const day = new Date().toLocaleDateString('pl', { weekday:"long"})
// const hours = new Date().toLocaleTimeString()

// console.log(`Today is : ${day}`);
// console.log(`Current time is :  ${hours}`);

// const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
// ===
// const evenNumbers = numbers.filter(el => el%2 ===0)

// console.log(evenNumbers);
// ===
// const person = { name: "Jill", age: 25, hobby: "sports" }
// function sayHello (name) {
//     console.log(`Hello! ${name.name ? name.name:''}`);
// }
// sayHello(person)
// ===

// const students = ["John", "Bill", "Emma", "Stella", "Rob"]

// console.log(students[Math.floor(Math.random()*students.length)]);


// 4.
// const paragraph  = document.querySelector('p')
// let text = 'w3resource   '
// let newText = text
// let letter = ''



// setInterval(()=>{
//     paragraph.textContent = newText + letter
//     letter = letter + newText.substring(0, 1)
//     newText = newText.substring(1, newText.length)
//     if(newText === ''){
//         newText = text
//         letter = ''
//     }
// },200)


// ===============
// 5.
// ===============

// const arry =[]
// let text = '4#2'
// let newText = ''

// for(let i = 0; i<10;i++){

//     newText = text.replace('#',i)
//     let newNumber = parseInt(newText)
//     if(newNumber % 3 === 0){
//         arry.push(newNumber)
//     }
// }
// console.log(arry);

// =====
// // 6
// // =====

// let number = '12345'
// let arr = number.split('')
// const newArr = []
// if(arr.length%2===0){

// for(let i = 1;i<arr.length; i = i+2){
//     let x = arr[i-1]
//     let y = arr[i]
//     newArr.push(y,x)
// }
// console.log(...newArr);
// }