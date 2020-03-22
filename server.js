require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))
