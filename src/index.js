const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Create a new user
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.satus(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Create a new task
app.post('/task', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Fetch all Users
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Fetch single User
app.get('/users/:id', (req,res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        res.send(user)
    }).catch((e) => {
        res.status(404).send()
    })
})


app.listen(port, () => {
    console.log('Running on Port '+ port)
})