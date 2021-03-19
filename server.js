const http = require ('http');
const fs = require ('fs');
const server = http.createServer((req , res)=>
{
    //loadsh
    const server = _.random(0.20)
    console.log(num);

    const greet =_ .once(() =>{
        console.log('hi');
    });
    greet();
    greet();
    console.log(req.url , req.method);
    res.setHeader ('Content-Type','text/html');
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html' 
           res.statusCode=200;
            break;


            case '/about': 
            path += 'about.html';
            res.statusCode=200;
            break ;

            case '/about-me': 
            
            res.statusCode=301;
            res.setHeader('location', '/about');
            res.end();
            break ;

            defaul :
            path += '404.html';
            res.statusCode=404; 
            break;

    }

   fs.readFile(path , (err , data)=>
   {
       if (err){console.log(err);
    res.end();}
    else {
       res.statusCode=200; 
       res.write(data);
        res.end(data);

    }
   })
      

});
server.listen(8081,'localhost',()=>{
    console.log('listening for request on port 3000');
});

