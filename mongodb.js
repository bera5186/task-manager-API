// const mongoDB = require('mongodb')
// const mongoClient = mongoDB.MongoClient
// const ObjectID = mongoDB.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
   
    const db = client.db(dbName)

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID('5d63f4010257812acc113b8a')

    }, {
        $set: {
            name: 'Rahul Bera'
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})
