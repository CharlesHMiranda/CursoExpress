const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./router/userRoute')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: true}))

userRoute(app)

app.get('/', (req, res) => res.send('Ola mundo pela Express!'))

app.listen(port, () => console.log('Api rodando na porta 3000'))