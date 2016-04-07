/*
 * Module dependencies
 */
var express = require('express')
    , stylus = require('stylus')
    , nib = require('nib')

//start up express
var app = express()
function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .use(nib())
}

//link to jade files in use
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

//'middleware' functions
app.use(express.logger('desv'))
app.use(stylus.middleware(
    { src: __dirname + '/public'
      , compile: compile
    }
))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.end('Hi there!')
})
app.listen(3000)