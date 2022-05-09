//EX1
/*
function hello(name){
console.log(`Hola ${name}`)
}

hello('Veronica')

// EX2.1
const name = 'Veronica';
const firstSurname = 'Matarin';
const secondSurname = 'Martinez';

console.log(`My name is ${name}, my first surname is ${firstSurname} and my second surname is ${secondSurname} `)

//EX2.2
function years(age){
    return age
}
console.log(`I am ${years(age)} years old`)

//EX3
let array = []
    
function calculate(){
     for(let i=0; i<10; i++){
    console.log(i)}} 

for (let i=0; i<10; i++){
    array.push(calculate())
}
console.log(array)
*/
//EX4

const name = 'Veronica'
let result = (function (name){
   console.log(name) 
}) ();
 console.log(result)




