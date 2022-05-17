//ımports
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const cors = require('cors')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

//middlewares(isteklerin geldiği geçtiğiyer)
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

require('./db/db')

app.use('/products', productRouter)
app.use('/user', userRouter)





module.exports = app