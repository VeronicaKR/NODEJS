//LEVEL 1 EXERCICES
var fs = require('fs');
const zlib = require('zlib')
let key = 'R2d2'
let iv = 'R2d2'

//PHRASE
function write(){
fs.writeFile('nuevo.txt', 'Hello world', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('archivo creado')
});
}

//MESSAGE
function read (){
fs.readFile('nuevo.txt', 'utf8', function(err,data){
    if(err){
        return console.log(err)
    }console.log(data)
}) 
}

//COMPRESSED
function compress(){
fs.createReadStream('./nuevo.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./nuevo.txt.gz'))
};

//LEVEL2 EXERCICE 1
function hello(){
function sayHello() {console.log('Hola')}
let hello = setInterval(sayHello,1000);

setTimeout(function(){
    clearInterval(hello)},8000
) 
}
//LEVEL 2 EXERCICE 2
function showDirectory(){
    var os = require('os');
    let operatingSystem = os.type()
    console.log(operatingSystem)
    
    if (operatingSystem === 'Linux'){
        const {spawn} = require('child_process');
        const ls = spawn('ls',{cwd:'/Users',shell:true});
        
        ls.stdout.on('data', data=> {
            console.log(`stdout: ${data}`);
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
    }
    if(operatingSystem ==='Windows_NT'){
    const {spawn} = require('child_process');
    const dir = spawn('dir',{cwd:'C:/Users',shell:true});
    
    dir.stdout.on('data', data=> {
        console.log(`stdout: ${data}`);
    })
    dir.stderr.on('data', data => {
        console.log(`stderr: ${data}`)
    })
    dir.on('error', (error) => {
        console.log(`error: ${error.message}`)
    })
    dir.on('close', code =>{
        console.log(`${code}`)
    })   
    }
    }

// LEVEL 3 EXERCICE 1
function ex1() {
     //codificar y crear el archivo inicial a hexadecimal
    fs.readFile('./nuevo.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        } else {
            let text = ''
            for (i = 0; i < data.length; i++) {
                //console.log(data+'1')
                text += data.charCodeAt(i).toString(16)
            } console.log(text)
         fs.writeFile('./text-hexadecimal.txt', text, function (err) {
                if (err) {
                    return console.log(err);
                }console.log('archivo creado')
            });
        }
    }) 


//codificar y crear el archivo inicial a base64
 fs.readFile('nuevo.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err)
    } else {
        let buff = new Buffer.from(data);
        let texto2 = buff.toString('base64')

        fs.writeFile('texto2-base64.txt', texto2, function (err) {
            if (err) {
                return console.log(err);
            }console.log('archivo creado')
        });console.log(texto2)
    }
}) 
}





//write()
//read()
//compress()
//hello()
//showDirectory()
//ex1()
