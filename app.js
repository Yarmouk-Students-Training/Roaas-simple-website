const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const { sequelize } = require('./models');
const user = require('./models/user');
const { Router } = require('express');
const route=require('./route')
const app = express();
app.use(express.json())

app.get('/api' , (req, res)=> {
  res.json({
    message: 'welcome to the api '
  });

});

app.post('/api/post' , verifyToken , (req,res) => {
  jwt.verify(req.token , 'secretky' , (err , authData) => {

    if(err) {
      res.sendStatus(403);
    } else {
  
  res.json({
    message:'post created',
    authData
  });
}
  });
});
app.post('/api/login' ,async (req, res) => {
 // const user = {
    //userid:1,
    //name: 'ruba',
    //email: 'ruba@gmail.com',
    
 // }

 const {email , password}=req.body

 const user = await User.findOne ({where:{email,password}})
 if (!user){
   return res.json({message: ' invalide'})
 }

 else{
  const accesstoken = await jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20m'})
  const refreshtoken = await jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '20d'})

  await refreshToken.create ({refreshtoken:refresh_token, Userid})
   return res.send({accesstoken , refresh_token })
 }

  //jwt.sign({user: user} , 'secretkey' , (err , token) => {
    //res.json({
      //token: token
   // });
  //});

});


function verifyToken(req, res, next) { 
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader  !== 'undefined')
   {
    const bearer = bearerHeader .split(' ');
    const bearerToken  = bearer[1];
    req.token = bearerToken ;
   if (bearerToken){
     jwt.verify(bearerToken , process.env.ACCESS_TOKEN_SECRET , (err , user)=>{
       if (err){
         return res.json ({message:'invalide '})
       }
      req.Userid = Userid.Userid 
     })
   }
    next();
  } 
  else {
    res.sendStatus(403);
  }
}



app.get('/api/post',verifyToken, async (req , res)=>{

  const user =req.Userid
  const post = await Post.findAll({where:{Userid:user}
  })
  return res.send (post)
  } )
  
  app.post('/api/refresh', async (req , res, next )=>{
    const {refresh_token} = req.body
    const refreshtokenn= await refreshToken.findOne({
      where:{refreshtoken:refresh_token}
  
    })
    if (!refreshtokenn){
      return res.send({message:'invalide '})
    }
    else {
      jwt.verify(refreshtokenn , process.env.REFRESH_TOKEN_SECRET , (err , Userid)=>{
        if (err){
          return res.send({message:'invalide '})
        }
        else {  const accesstoken =  jwt.sign({Userid}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20m'}
        )
        return res.send ({ accesstoken})   
        }
      } ) 
    }
  })
  app.lis

app.listen({ port: 8081}, async () => {
  console.log('Server up on http://localhost:8081')
  await sequelize.sync({force : true})
  
  console.log('Database Connected!')
})

app.use ('/',route)