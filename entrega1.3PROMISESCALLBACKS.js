//LEVEL 1 EXERCICE 1
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
isEven(3,callback)  

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
        let existEmployee = employees.find(element => {
            if (element.id === param){
                return element
            }}) 
            if (existEmployee){
                resolve(existEmployee)
            }else{
                reject('THIS EMPLOYEE NOT EXIST')
            }
        }      
    )}
       

let employe = getEmploye(2)

employe.then(function(employe){
    console.log(employe);
}).catch(function(error){
    console.log(error);
});
 console.log(employe)
// LEVEL 2 EXERCICE 2

let getSalary = (employe) => {
    return new Promise ((resolve,reject)=> {
        let salaryEmployee
        salaries.find(element =>{
            if(element.id === employe.id){
                salaryEmployee = element.salary
            }
        })
        if (salaryEmployee){
            resolve(salaryEmployee)
        }else {
            reject('NOT EXIST')
        }
    })
}

let salary = getSalary(salaries[0])

salary.then(function(salaryEmployee){
    console.log(salaryEmployee);
    }).catch(function(error){
        console.log(error)
    })

// LEVEL 2 EXERCICE 3

getEmploye(2)
.then((object)=>{
    console.log(object.name)
    getSalary(object)
.then((salary)=>{
    console.log(salary)
}).catch((error)=>{
    console.log(error)
})
})

//LEVEL 3

getEmploye(5)
.then((object)=>{
    console.log(object.name)
    return getSalary(object)
}).then((salary)=>{
    console.log(salary)
}).catch((error)=>{
    console.log(error)
})



module.exports = {getEmploye, getSalary}
