require('dotenv').config()

const express = require('express')
const path = require('path')
const nodeMailer = require('nodemailer')

const app = express()

app.use(express.json())

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'))

  app.get('*', (req, res) => {
    console.log('a')
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))

app.post('*', (req, res) => {
  console.log('app.post1')
  console.log(req.body)

  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: process.env.EMAIL1,
      pass: process.env.PASSWORD1
    }
  })

  let mailOptions = {
    // should be replaced with real recipient's account
    to: process.env.EMAIL2,
    subject: req.body.subject,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
  })

  res.writeHead(301, { Location: 'index.html' })
  res.end()
})
