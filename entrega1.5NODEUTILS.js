//LEVEL 1 EXERCICES
var fs = require('fs');
//var archiver = require('archiver')
//var output = fs.createWriteStream('./'+ Date.now()+'.zip');
//var archive = archiver('zip')
//archive.pipe(output); 
/*
//PHRASE
fs.writeFile('nuevo.txt', 'Hello world\nGoodbye\n', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('archivo creado')
});

//MESSAGE
fs.readFile('nuevo.txt', 'utf8', function(err,data){
    if(err){
        return console.log(err)
    }console.log(data)
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
//LEVEL 2 EXERCICE 2
const {spawn} = require('child_process');
const { stdout, stderr } = require('process');
const ls = spawn('dir', [], {shell:true});
ls.stdout.on('data', data=> {docu
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
})   */

// LEVEL 3 EXERCICE 1
function ex1() {
    //codificar y crear el archivo inicial a hexadecimal
    fs.readFile('nuevo.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        } else {
            let text = ''
            for (i = 0; i < data.length; i++) {
                //console.log(data+'1')
                text += data.charCodeAt(i).toString(16)
            } console.log(text)
            fs.writeFile('text-hexadecimal.txt', text, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            fs.writeFile('text-hexadecimal.txt', text, function (err) {
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
//ex1()

//encriptar el archivo codificado en hexadecimal 
 function ex2() {
    fs.readFile('text-hexadecimal.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        } else {
            let CryptoJS = require('Crypto-JS')
            let key = 'R2d2'
            let iv = 'R2d2'
            key =  CryptoJS.enc.Utf8.parse(key)
            iv = CryptoJS.enc.Utf8.parse(iv);
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
                function desencriptarHexadecimal(){
                    let decrypted = CryptoJS.AES.decrypt(text3, key,{
                        iv: iv,
                        mode: CryptoJS.mode.CBC,
                        padding: CryptoJS.pad.Pkcs7
                    });
                    decrypted = CryptoJS.enc.Utf8.stringify(text3)
                   };
                   // desencriptarHexadecimal()
        }
    ) 
        }})
//encriptar el archivo codificado a base 64 

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

 }


ex2()






