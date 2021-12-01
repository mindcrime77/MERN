const express = require('express')
const app = express()
const { db } = require('./db')
const routes = require('./routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv/config')
db()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/', routes)

app.listen(process.env.PORT || 5000, () => console.log(`listening...${process.env.PORT}`))