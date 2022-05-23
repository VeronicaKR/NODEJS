const Calculator = require('../app/app.js');
const {it, expect} = require("@jest/globals");
const {employees, salaries,getEmployeSalary} = require('C:/Users/formacio/Desktop/VNode/Sprint1-1/entrega1.4ASYNCAWAIT.js')

describe('TESTING DE CALCULATOR',()=>{
    const calculator = new Calculator;
    it('sumar 1+1+1 da 3', ()=> {
        const resultado = calculator.sum(1,1,1)
    expect(resultado).toBe(3);
});
    it ('restar 4 - 2 - 1 da 1', ()=>{
        const resultado = calculator.rest(4,2,1)
    expect(resultado).toBe(1);
});
    it ('multiplicar 2 * 2 * 2 da 8', ()=>{
        const resultado = calculator.multiply(2,2,2)
        expect(resultado).toBe(8)
    })
    it ('dividir 10 entre 2 entre 2 da 2.5', ()=>{
        const resultado = calculator.split(10,2,2)
        expect(resultado).toBe(2.5)
    })
})

describe('TESTING DE GETEMPLOYESALARY', ()=>{
  test ('retorna un nombre y un salario de un empleado', ()=>{
      expect(getEmployeSalary(employees.name,salaries.salary)).toBe(console.log('Bill Gates', 1000))
  })
})













