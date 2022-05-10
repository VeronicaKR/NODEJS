//LEVEL 1 EXERCICE 1
(() => {console.log(1+2)}) ()

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
            throw new Error ('ERROR');
        }
    }
        info () {
            throw new Error ('Metodo Abstracto')
        }
    
}

class Persona extends Abstract {
    info (message){
        console.log(`THE MESSAGE:${message}`)
    }
}

let prueba1 = new Persona();
prueba1.info('HOLA');
prueba1.info('HELLO');
prueba1.info('GOOD')

const abstract = new Abstract()
