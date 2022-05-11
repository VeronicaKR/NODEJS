//LEVEL 1 EXERCICE 1

function devolverPromesa(result){
    return new Promise(function(resolve,reject){
        
        if (result === 1){
            resolve ('TRUE')
        }else {
            reject('ERROR');
            }
    })
}

devolverPromesa().then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error);
});

devolverPromesa(1)