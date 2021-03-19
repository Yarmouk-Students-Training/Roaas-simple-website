const fs = require ('fs');
/*
fs.readFile('./docs/blog.txt ',(err , data) => 
if (err)
{console.log(err);}{
    console.log(data);  
}



);
*/
//fs.writeFile('./docs/blog.txt', 'hello ,world',()=> {
  //  console.log('file was written');
//});
//fs.writeFile('./docs/blog1.txt', 'hello ,world',()=> {
  //  console.log('file was written');
//});
/*
fs.mkdir('./assets', (err)=>{
if (err) {console.log(err);}
console.log('folder created');

    
})
*/
if (fs.existsSync('./docs/deleteme.txt ')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err) {
            console.log(err);
        }
console.log('file deleted');
    })
}