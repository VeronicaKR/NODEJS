//LEVEL  2 EX 2
//Crea un mock que comprovi les crides al constructor de la classe 
//Persona i al seu mètode decirNombre en l'exercici
const {Name} = require('./class')

jest.mock('./class');

beforeEach(() =>{
    Name.mockClear()
})

 test('verificar si crida al constructor', ()=>{
    const result = new Name();
    expect(Name).toHaveBeenCalledTimes(1);
}) 

test('verificar si llama al metodo', ()=>{
    const result = new Name();
    expect(Name).toHaveBeenCalledTimes(1);
    result.dirNom();
   expect(result.dirNom).toHaveBeenCalledTimes(1)
})


