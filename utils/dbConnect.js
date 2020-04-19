const mongose = require('mongoose')

const connection = {}

const dbConnect = async () => {
  if (connection.isConnected) {
    return
  }

  const db = await mongose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })

  connection.isConnected = db.connections[0].readyState

  console.log(connection.isConnected)
}

module.exports = dbConnect
