const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Create a new user
app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Create a new task
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Fetch all Users
app.get('/users', async (req, res) => {
    
    try {
        let users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Fetch single User
app.get('/users/:id', async (req,res) => {
    const _id = req.params.id

    try {
        let users = await User.findById(_id)
        res.send(users)
    } catch (e) {
        res.status(404).send()
    }
})

// Fetching all Tasks
app.get('/tasks', async (req, res) => {

    try {
        let task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

// Fetching single task
app.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id

    try {
        let task = await Task.findById(_id)
        res.send(task)
    } catch (e) {
        res.status(404).send()
    }
})

app.listen(port, () => {
    console.log('Running on Port '+ port)
})