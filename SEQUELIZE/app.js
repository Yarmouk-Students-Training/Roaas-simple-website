const express = require('express')
const { sequelize } = require('./models')
const app = express()
app.use(express.json())

app.listen({ port: 1000}, async () => {
  console.log('Server up on http://localhost:1000')
  await sequelize.sync({force : true})
  
  console.log('Database Connected!')
})