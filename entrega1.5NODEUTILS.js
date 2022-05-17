/* //LEVEL 1 EXERCICES

var fs = require('fs');
var archiver = require('archiver')
var output = fs.createWriteStream('./'+ Date.now()+'.zip');
var archive = archiver('zip')
archive.pipe(output); 

//PHRASE
fs.writeFile('nuevo.txt', 'Hello world\nGoodbye\n', function(err){
    if (err){
        return console.log(err);
    }
    console.log('archivo creado')
});
//MESSAGE
fs.readFile('nuevo.txt', 'utf8', function(err,data){
    if(err){
        return console.log(err)
    }
    console.log(data)
})

//COMPRESSED
archive.append(fs.createReadStream('./nuevo.txt'),{name:'nuevoZip.txt'});

archive.directory('./VNode', 'archivo')

archive.finalize();

//LEVEL2 EXERCICE 1

function sayHello() {console.log('Hola')}
let hello = setInterval(sayHello,1000);

setTimeout(function(){
    clearInterval(hello)},8000
) 
*/

//LEVEL 2 EXERCICE 2

const {spawn} = require('child_process');
const { stdout, stderr } = require('process');
const ls = spawn('dir', [], {shell:true});
ls.stdout.on('data', data=> {
    console.log(`stodout: ${data}`);
})
ls.stderr.on('data', data => {
    console.log(`stderr: ${data}`)
})
ls.on('error', (error) => {
    console.log(`error: ${error.message}`)
})
ls.on('close', code =>{
    console.log(`${code}`)
})   

// LEVEL 3 EXERCICE 1
//comentar todo el ejercicio e ir descomentando ejercicio a ejercicio
/* function createTwoFiles(){
var fs = require('fs');
fs.writeFile('nuevo.txt', 'Hello world', function(err){
    if (err){
        return console.log(err);
    }
    console.log('archivo creado')
});
const path = './nuevo.txt'

let text

try {
    if (fs.existsSync(path)){
        console.log('existe')
        fs.readFile('nuevo.txt', 'utf8', function(err,data){
            if(err){
                return console.log(err)
            }
           console.log(data)
           text = data.split('').reduce((a, b)=> a.concat(Number(b.charCodeAt(0).toString(16)), ''))
           console.log(text)
            })
  }
}catch(error){
    console.log(error)
}
}

createTwoFiles() */
0