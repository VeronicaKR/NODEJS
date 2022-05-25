const { getEmploye, getSalary } = require('../../entrega1.3PROMISESCALLBACKS.js')


//PROMISES & CALLBACKS LEVEL 2 EX 3
describe('test sobre promesas encadenadas', () => {
    test('retorna el nombre y el salario', async () => {
        return getEmploye(2).then(object => {
            expect(object.name).toBe('Bill Gates')
            getSalary(2).then(salary => {
                expect(salary).toBe(1000)
            })
        })
    })
})
