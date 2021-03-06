
const { getEmployeSalary, total,multiply} = require('../../entrega1.4ASYNCAWAIT')

//ASYNC AWAIT LEVEL 1 EX 1
describe('funcion asincrona con dos funciones', () => {
    test('retorna un nombre y un salario de un empleado', async () => {
        const result = await getEmployeSalary(2);
        expect(result).toEqual('el empleado Bill Gates gana 1000')
    })
})

//ASYNC AWAIT LEVEL 2 EX 1

describe('funcion que retorna el dobe', ()=>
    test('promise que retorna el doble',() => {
        multiply(2).then(result => {
            expect(result).toBe(4)
        })
    }))

describe('funcion con varios calculos internos ', () => {
    test('retorna el doble del numero informado despues de dos segundos', async () => {
        jest.setTimeout(2000); () => {
            const result = total(1, 2, 3);
            expect(result).toBe(12)
        }
    })
}) 



    
