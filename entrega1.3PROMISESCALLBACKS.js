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

