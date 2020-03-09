require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors');

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true })
const db= mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json())
app.use(cors());

const subscribersRouter= require('./routes/subscribers.js')
app.use('/subscribers', subscribersRouter)

const admissionsRouter = require('./routes/admissions.js')
app.use('/admissions',admissionsRouter)

app.listen(3000, () => console.log("Server Started") )
