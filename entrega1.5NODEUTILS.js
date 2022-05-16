var fs = require('fs');
var archiver = require('archiver')
var output = fs.createWriteStream('./'+ Date.now()+'.zip');
var archive = archiver('zip')
archive.pipe(output);


fs.writeFile('nuevo.txt', 'Hello world\nGoodbye\n', function(err){
    if (err){
        return console.log(err);
    }
    console.log('archivo creado')
});

fs.readFile('nuevo.txt', 'utf8', function(err,data){
    if(err){
        return console.log(err)
    }
    console.log(data)
})


archive.append(fs.createReadStream('./nuevo.txt'),{name:'nuevoZip.text'});

archive.directory('./VNode', 'archivo')

archive.finalize();

//LEVEL2 EXERCICE 1

function sayHello() {console.log('Hola')}
let hello = setInterval(sayHello,2000);

clearInterval(hello)

//LEVEL 2 EXERCICE 2





