/* Apparently, Heroku uses express to serve your Angular application, which means that you have to install it yourself. It's strange that Heroku can't just serve your application for you.*/
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/dist/bcen'))

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/bcen/index.html'))
})

app.listen(process.env.PORT)