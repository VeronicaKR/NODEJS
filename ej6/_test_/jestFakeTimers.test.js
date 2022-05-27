//JEST FAKE TIMERS ASYNC/AWAIT LEVEL 2 EX1
const { multiply,} = require('../../entrega1.4ASYNCAWAIT')

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe ('jestfaketimers', ()=> {
    test('retorna el doble del numero informado despues de dos segundos', async () => {
        multiply(2)
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),2000);
        })
    })