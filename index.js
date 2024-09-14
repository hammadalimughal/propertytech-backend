require('./db')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const Student = require('./schema/Student')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function (req, res) {

})

app.post('/register-student', async function (req, res) {
    const { id, name, age, gender, contact } = req.body
    const student = await Student.create({ id, name, age, gender, contact })
    console.log('student',student)
    res.json({
        success: true,
        student
    })
})

app.listen(8000, () => {
    console.log('App is listening on PORT 8000')
})