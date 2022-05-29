 //LEVEL 1 EXERCICE 1
let sum = (() => (1+2)) ()
console.log(sum)

//LEVEL 2 EXERCICE 1

let result = (nombre) => {
    let persona = {name: nombre }
    return persona
}
console.log(result('Veronica'))

//LEVEL 2 EXERCICE 2
class Name {
    constructor(name){
        this.name= name;
    }
    dirNom(){
        console.log(this.name)
    }
}

const nombre = new Name('Veronica')
nombre.dirNom() 

// LEVEL 3 EXERCICE 1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class Abstract {
    constructor (){
        if (this.constructor === Abstract){
            throw new Error ('ERROR CLASS ABSTRACT');
        }     
    }
        info () {
            throw new Error ('Metodo Abstracto')
        }
        sayHello (person){
            console.log(`HELLO ${person}`)
        }
    }

function create(person){
let greet = function(){
    Abstract.apply(this, arguments)
}

greet.prototype = Object.create(Abstract.prototype);
greet.prototype.constructor = greet;

greet.prototype.sayHello = function (){
    console.log(`HELLO ${person}`)
}
return greet
}
let finaly = create('Veronica')

finaly.prototype.sayHello()

console.log(finaly instanceof Abstract )









