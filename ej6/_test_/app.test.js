const {sum,substrack,multiply,divide} = require('../app/app.js');

const {getEmployeSalary, multiply2, total} = require('../../entrega1.4ASYNCAWAIT')

test('sumar 1+1+1 da 3', ()=> {
    const resultado = sum(1,1,1)
expect(resultado).toBe(3);
});
test ('restar 4 - 2 - 1 da 1', ()=>{
    const resultado = substrack(4,2,1)
expect(resultado).toBe(1);
});
test ('multiplicar 2 * 2 * 2 da 8', ()=>{
    const resultado = multiply(2,2,2)
expect(resultado).toBe(8)
    })
test ('dividir 10 entre 2 entre 2 da 2.5', ()=>{
    const resultado = divide(10,2,2)
expect(resultado).toBe(2.5)
    })

//ASYNC AWAIT LEVEL 1 EX 1
  test ('retorna un nombre y un salario de un empleado', async ()=>{
    const result = await getEmployeSalary(2);  
    expect(result).toEqual('el empleado Bill Gates gana 1000')
  })

  test ('retorna un nombre y un salario de un empleado', async ()=>{
    const result = await getEmployeSalary(4);  
    expect(result).toBe('el empleado Bill Gates gana 1000')
  })

//ASYNC AWAIT LEVEL 2 EX 1
test ('retorna el doble del numero informado despues de dos segundos', async ()=>{
    jest.setTimeout(2000); () => {
        const result = multiply2(4);  
        expect(result).toBe(16) 
    }
    })

test ('retorna el doble del numero informado despues de dos segundos', async ()=>{
    jest.setTimeout(2000); () => {
        const result = total(1,2,3);  
        expect(result).toBe(12) 
    }
    })













