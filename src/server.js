const express = require('express')
const path = require('path')
const pages = require('./pages.js')

const server = express()
server
    .use(express.urlencoded({ extended: true }))
    //using static files
    .use(express.static('public')) 

    //configuration template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //routes
    .get('/', pages.index)
    .get('/nursinghome', pages.nursinghome)
    .get('/nursinghomes', pages.nursinghomes)
    .get('/create-nursinghome', pages.createNursingHome)
    .post('/save-nursinghome', pages.saveNursingHome)

    //using status 404 page not found to wrong route 
    .use(pages.notFound)

server.listen(5500)