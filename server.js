var bodyParser = require('body-parser');
const express = require('express')
const app = express()
const path = require('path')

const userrouter = require('./routes/api/users')
const loginrouter = require('./routes/api/login')
const adminrouter = require('./routes/api/admin')

app.use(('/uploads'), express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
 })



app.use('/user', userrouter)
app.use('/login', loginrouter)
app.use('/admin', adminrouter)

app.use(function (req, res, next) {
    var err = createError(404)
    next(err)
})
app.listen(3000, function () {
    console.log(`Example app listening on port 3000!`)
})






//login เเบ่งส่วน auth
//save token to db**