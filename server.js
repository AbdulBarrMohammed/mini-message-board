const express = require("express")
const app = express()

app.set('view engine', "ejs")

app.use(express.urlencoded({ extended: true }));



const newRouter = require('./routes/new')
const indexRouter = require('./routes/index')

app.use('/new', newRouter)
app.use('/', indexRouter)
app.use(express.static(__dirname + '/views'));

app.listen(5900)
