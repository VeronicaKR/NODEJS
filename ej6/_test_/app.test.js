const { sum, substrack, multiply, divide } = require('../app/app.js');

describe('calculadora', () => {
    test('sumar 1+1+1 da 3', () => {
        const resultado = sum(1, 1, 1)
        expect(resultado).toBe(3);
    });
    test('restar 4 - 2 - 1 da 1', () => {
        const resultado = substrack(4, 2, 1)
        expect(resultado).toBe(1);
    });
    test('multiplicar 2 * 2 * 2 da 8', () => {
        const resultado = multiply(2, 2, 2)
        expect(resultado).toBe(8)
    })
    test('dividir 10 entre 2 entre 2 da 2.5', () => {
        const resultado = divide(10, 2, 2)
        expect(resultado).toBe(2.5)
    })
})
















