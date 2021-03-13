require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port = 4444

// Setup Routes
const indexRoutes = require("../src/routes/index.routes")
const adminRoutes = require("../src/routes/admin.routes")

// View engine setup
app.set('view engine', 'pug')
app.set('views', 'views')

// Connect DB
mongoose.connect(process.env.DATABASE_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Database'))

// Setup body parse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Run router
app.use(indexRoutes)
app.use('/admin', adminRoutes)

app.listen(port, () => {
    console.log(`Server listening ${port}`)
})