const express = require('express')

//const { sequelize} = require('./models');
const { post , comment , friends , user ,reaction , sequelize } = require('./models')
const route = express()
route.use(express.json())

route.post('/users',async(req, res) => {
    const {name , email , role } = req.body

    try{
        const user = await User.create({Userid , name , email , role
        })
        return res.json(user)

    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

route.get('/users', async (req, res) => {
    try {
      const users = await User.findAll()
  
      return res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  route.get('/users/:Userid', async (req, res) => {
    const Userid = req.params.Userid
    try {
      const user = await User.findOne({
        where: { Userid},
        include: 'posts',
      })
  
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  route.put('/users',async(req,res) =>{
    
    const{Userid,name,email,role} =req.body
    try{
    
    const user =await User.findOne(Userid)
    user.name = name
    user.email= email
    user.role = role
    
    
    await user.save()
    return res.json(user)
   
    }catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something wrong'})
    }
    
   }),


   route.delete('/user/:Userid',async(req,res)=>{
    const Userid = req.params.Userid
    try{
    const user = await User.findOne({where: { Userid: Userid}})
    await user.destroy()
    return res.json({message: 'user delete'})
    } catch (err){
    console.log(err)
    return res.status(500).json({error:'somthing went wrong'})
    }
   })


   route.post('/post', async(req,res) =>{
    const {Userid,postid,content} = req.body
    
    try{
    const post = await Post.create({Userid,postid,content})
   
    return res.json(post)
    }
    catch(err) {
    console.log(err)
    return res.status(300).json(err)
    }
   })

   route.get('/post',async(req,res) =>{
    try{
    const post =await Post.findAll()
    
    return res.json(post)
    } catch(err){ 
    return res.status(300).json({error: 'something went wrong'})
   
    }
   })


   route.get('/post/:postid', async (req,res ) =>{
    const postid = req.params.postid
    try{
    const post = await Post.findOne({ where : { postid } })
    return res.json(post)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'somthing wrong'})
    }
   })


   route.put('/post',async(req,res) =>{
    const{postid,Userid,content} =req.body
    try{
    console.log(Post.toString())
    const post =await Post.findOne({where:{postid}})

    post.content = content
    await post.save()
    return res.json(post)
   
    }
    catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something wrong'})
    }
    
   }),

   route.delete('/post/:postid',async(req,res)=>{
    const postid = req.params.postid
    try{
    const post = await Post.findOne({where: { userid: userid}})
    await post.destroy()
    return res.json({message: 'post delete'})
    } catch (err){
    console.log(err)
    return res.status(500).json({error:'somthing went wrong'})
    }
   })


   route.post('/comments', async(req,res) =>{
    const {postid,date,content, commentid , Userid} = req.body
    
    try{
    const comment = await comment.create({postid,date,content, commentid , Userid})
   
    return res.json(comment)
    }
    catch(err) {
    console.log(err)
    return res.status(300).json(err)
    }
   }),

   route.get('/comments',async(req,res) =>{
    try{
    const comments =await comment.findAll()
    
    return res.json(comments)
    } catch(err){ 
    return res.status(300).json({error: 'something went wrong'})
   
    }
   }),


   route.get('/comments/:commentid', async (req,res ) =>{
    const commentid = req.params.commentid
    try{
    
    const comment = await comment.findOne({ where : { commentid } })
    return res.json(comment)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'somthing wrong'})
    }
   })
   

   route.put('/comments',async(req,res) =>{
    const{postid,date,content, commentid , Userid} =req.body
    try{
    const comment =await comment.findByPk(commentid)
    comment.date = date
    comment.content = content
    await comment.save()
    return res.json(comment)
   
    }catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something wrong'})
    }
    
   }),

   route.delete('/comment/:commentid',async(req,res)=>{
    const commentid = req.params.id
    try{
    const comment = await comment.findOne({where: { commentid: commentid}})
    await comment.destroy()
    return res.json({message: 'Comment delete'})
    } catch (err){
    console.log(err)
    return res.status(500).json({error:'somthing went wrong'})
    }
   })


   route.post('/reactions', async(req,res) =>{
    const {postid,type,Userid} = req.body
    
    try{
    const reaction = await reaction.create({postid,type,Userid})
   
    return res.json(reaction)
    }
    catch(err) {
    console.log(err)
    return res.status(300).json(err)
    }
   }),


   route.get('/reactions',async(req,res) =>{
    try{
    const reactions =await reaction.findAll()
    
    return res.json(reactions)
    } catch(err){ 
    return res.status(300).json({error: 'something went wrong'})
   
    }
   }),


   route.get('/reactions/:reactionid', async (req,res ) =>{
    const reactionid = req.params.reactionid
    try{
    
    const reaction = await reaction.findOne({ where : { reactionid } })
    return res.json(reaction)
    } 
    catch (err) {
    console.log(err)
    return res.status(500).json({error: 'somthing wrong'})
    }
   })

   route.put('/reactions',async(req,res) =>{
    const{ Userid, type , reactionid , postid} =req.body
    try{
    const reaction =await reaction.findOne({where:{reactionid}})
    reaction.type =type
    await reaction.save()
    return res.json(reaction)
   
    }catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something wrong'})
    }
    
   }),

   route.delete('/reactions/:reactionid',async(req,res)=>{
    const reactionid = req.params.reactionid
    try{
    const reaction = await reaction.findOne({where: { reactionid}})
    await reaction.destroy()
    return res.json({message: 'Reaction delete!!'})
    } catch (err){
    console.log(err)
    return res.status(500).json({error:'somthing went wrong'})
    }
   })


   route.post('/friends', async (req, res) => {
    const { Userid,friendsid ,accept,reject}=req.body
  
    try {
    
      const friends = await Friends.create({Userid,friendsid ,accept,reject 
    })
      return res.json(friends)
    }
     catch (err) {
     console.log(err)
     return res.status(500).json(err)
    }
  })


  route.get('/friends', async (req , res) => {
    try {
      const friends = await Friends.findAll()
  
      return res.json(friends)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  route.get('/friends/:friendsid', async (req, res) => {
    const friendsid = req.params.friendsid
    try {
      const friends = await Friends.findOne({ where: { friendsid },
        include: 'posts',
      })
  
      return res.json(friends)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })



  
route.listen({ port:1000}, async () =>{
    console.log('Server up on http://localhost:1000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})