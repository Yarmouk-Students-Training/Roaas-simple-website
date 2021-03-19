
const readStream = fs.creatReadStream('./docs/blog3.txt');
readStream.on('data ', (chunk)=> {
  console.log ('----NEWCHUNK-----');
  console.log(chunk);

});