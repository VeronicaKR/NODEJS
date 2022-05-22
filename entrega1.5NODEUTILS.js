//LEVEL 1 EXERCICES
var fs = require('fs');
var archiver = require('archiver')
let CryptoJS = require('Crypto-JS');
const { enc } = require('crypto-js/core');
let key = 'R2d2'
let iv = 'R2d2'
key =  CryptoJS.enc.Utf8.parse(key)
iv = CryptoJS.enc.Utf8.parse(iv);
var output = fs.createWriteStream('./'+ Date.now()+'.zip');
var archive = archiver('zip')
archive.pipe(output); 

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
archive.append(fs.createReadStream('./nuevo.txt'),{name:'nuevoZip.txt'});
archive.directory('./VNode', 'archivo')
archive.finalize();
}

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

//encriptar el archivo codificado en hexadecimal 
 function ex2() {
     function encrypted(){
    fs.readFile('text-hexadecimal.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        } else {
                let text3 = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            text3 = text3.toString()
            console.log(text3) 
            fs.writeFile('./text-hexadecimal.txt', text3, function (err) {
                if (err) {
                    return console.log(err);
                }console.log('encriptado hexadecimal')
            })
        }})
    } encrypted()
         }
//encriptar el archivo codificado a base 64 
function encryptedB(){
  fs.readFile('texto2-base64.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        } else {
            let CryptoJS = require('crypto-js')
            let key = 'R2d2'
            let iv = 'R2d2'
            key = CryptoJS.enc.Utf8.parse(key);
            iv = CryptoJS.enc.Utf8.parse(iv);
            let text4 = CryptoJS.AES.encrypt(data, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
            text4 = text4.toString()
            console.log(text4)
            fs.writeFile('texto2-base64.txt', text4, function (err) {
                if (err) {
                    return console.log(err);
                }console.log('encriptado base64')
                
            });
        }
    })  
}encryptedB() 

function ex3(){
 function desencriptarHexadecimal(){
    fs.readFile('./text-hexadecimal.txt', 'utf8', function(err,data){
        if(err){
            return console.log(err)
        } else {
            console.log(data)
        let decrypted = CryptoJS.AES.decrypt(data, key,{
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7})
        let textdecrypt = decrypted.toString(CryptoJS.enc.Utf8);
        console.log('desencriptado hexadecimal: '+ textdecrypt)

        let buff = new Buffer.from(textdecrypt, 'hex');

        let texto5 = buff.toString('utf8')
     
        fs.writeFile('resulthex.txt', texto5, function (err) {
            if (err) {
                return console.log(err);
            }console.log(texto5)
       });
    }})

}desencriptarHexadecimal()

function desencriptarBase64(){
    fs.readFile('./texto2-base64.txt', 'utf8', function(err,data){
        if(err){
            return console.log(err)
        } else {
            console.log(data)
    let decryptedb = CryptoJS.AES.decrypt(data, key,{
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    let textdecryptedb = decryptedb.toString(CryptoJS.enc.Utf8)
    console.log('desencriptado base64 ' + textdecryptedb)
    let buff = new Buffer.from(textdecryptedb, 'base64');

    let texto6 = buff.toString('utf8')
 
    fs.writeFile('resultb.txt', texto6, function (err) {
        if (err) {
            return console.log(err);
        }console.log(texto6)
   });
  
 }}) 
}desencriptarBase64()
}



write()
read()
compress()
hello()
showDirectory()
ex1()
//ex2()
//ex3()