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


