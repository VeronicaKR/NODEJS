/* //LEVEL 1 EXERCICE 1
const frutas = [{
    fruit: 'manzana',
    color: 'verde',
    },{
        fruit:'fresa',
        color:'rojo'
    }]
    
function getDatos (){
    return new Promise ((resolve,reject)=> {
        if (frutas.length>1){
            resolve ('MAYOR QUE UNO')
        }else if (frutas.length<1){
            reject('MENOR DE UNO');
            }
    });
}

const ok = getDatos()

ok.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
});

function getDatosInc (){
    return new Promise ((resolve,reject) =>{
    if (frutas[0].color==='rojo'){
        resolve ('COLOR ROJO')
    }else if (frutas[0].color==='verde'){
        reject('COLOR VERDE');
        }
    });
}
const noOk = getDatosInc()
noOk.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
});

//LEVEL 1 EXERCICE 2

function callback(param){
    console.log(param)
}

let isEven = (element,callback) => {
    if (element %2 === 0){
        callback('EVEN')
    } else {
        callback('ODD')}
}

isEven(2,callback)
isEven(3,callback)  */

//LEVEL 2 EXERCICE 1

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


let getEmploye = (param) => {
    return new Promise ((resolve,reject)=> {
        let exist = employees.find(element => {
            if (element.id === param){
                return element
            }}) 
            console.log(exist)
           if (exist){
                resolve('THIS EMPLOYEE EXIST')
            }else{
                reject('THIS EMPLOYEE NOT EXIST')
            }
        }      
    )}
       

let employe = getEmploye(5)

employe.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
});
 


