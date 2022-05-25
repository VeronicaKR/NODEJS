const { getEmployeSalary, multiply2, total } = require('../../entrega1.4ASYNCAWAIT')


/* //ASYNC AWAIT LEVEL 1 EX 1
describe('funcion asincrona con dos funciones', () => {
    test('retorna un nombre y un salario de un empleado', async () => {
        const result = await getEmployeSalary(2);
        expect(result).toEqual('el empleado Bill Gates gana 1000')
    })

  
})

//ASYNC AWAIT LEVEL 2 EX 1
describe('funciones asincronas', () => {
    test('retorna el doble del numero informado despues de dos segundos', async () => {
        jest.setTimeout(2000); () => {
            const result = multiply2(4);
            expect(result).toBe(16)
        }
    })
})

describe('funcion con varios calculos internos ', () => {
    test('retorna el doble del numero informado despues de dos segundos', async () => {
        jest.setTimeout(2000); () => {
            const result = total(1, 2, 3);
            expect(result).toBe(12)
        }
    })
}) */

//JEST FAKE TIMERS ASYNC/AWAIT LEVEL 2 EX1

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe ('jestfaketimers', ()=> {
    test('retorna el doble del numero informado despues de dos segundos', async () => {
        jest.useFakeTimers({advanceTimers: true});
        const result = multiply2(2)
        expect(result).toBe(4)
        const callback = jest.fn();
        multiply2(callback);
        //expect(setTimeout).toHaveBeenCalledTimes(1);
        //expect(setTimeout).toHaveBeenLastCalledWith(expect(multiply2(2)), 1000);
        //jest.runOnlyPendingTimers();
        //expect(callback).toBeCalled();
        })
        })

    
