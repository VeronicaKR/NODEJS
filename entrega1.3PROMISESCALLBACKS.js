//LEVEL 1 EXERCICE 1
let result = 1
function devolverPromesa(result){
    return new Promise(function(resolve,reject){
        
        if (result === 1){
            resolve ('TRUE')
        }else {
            reject('ERROR');
            }
    })
}
devolverPromesa(2)