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
                reject (new Error('THIS EMPLOYEE NOT EXIST'))
            }
        })}
              
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
            reject(new Error('NOT EXIST'))
        }
    })
}

 //LEVEL 1 EXERCICE 1

    async function getEmployeSalary (id){
        let employee = await getEmploye(id);
        console.log(employee.name);
        let salary = await getSalary(employee);
            console.log(salary)
        }
    
        getEmployeSalary(2)

// LEVEL 1 EXERCICE 2

function one (){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve (console.log('FUNCTION ONE'));
        },2000);
    });
}

async function resultOne (){
    const result = await one();
    return result
}

resultOne() 

//LEVEL 2 EXERCICE 1

//FUNCTION SIN PROMISE (primera parte del ejercicio)
/* function multiply (number){
    setTimeout(()=>{
        let result = number *2
        console.log(result) 
    },2000)
}
 */
function multiply (number){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve (number *2)
        },2000)  
        })
    }

async function total (num1,num2,num3){
    const first = await multiply(num1);
    const second = await multiply(num2);
    const third = await multiply(num3);
    let sum = first+second+third
    console.log(sum)
}

total(1,2,3)

// LEVEL 3
getEmployeSalary(5).catch(err=>console.log(err.message))
getEmployeSalary('a').catch(err=>console.log(err))
getSalary(5).catch(err=>console.log(err))
getSalary('b').catch(err=>console.log(err))
getEmploye(5).catch(err=>console.log(err.code))
getEmploye('b').catch(err=>console.log(err.stack))