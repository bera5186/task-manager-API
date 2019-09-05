const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true, 
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password" ' )
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age should be positive')
            }
        }
    }
})

// const u = new User({
//     name: 'Mi k e',
//     email: 'myEWE@gmail.com',
//     password: 'phf654645ord1234'
// })

// u.save().then(() => {
//     console.log(u)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const t = new Task({
    description: 'create an app'
})

t.save().then(() => {
    console.log(t)
}).catch((error) => {
    console.log(error)
})

