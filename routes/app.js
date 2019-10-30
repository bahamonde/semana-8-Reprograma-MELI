const express = require ("express")
const app = express()

//rotas
const index = require('./routes/index')

app.all('*', function(req, res, next){
    console.log("passamos pelo app");
    next()
})

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Haeders", 
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
    })


app.use('/', index)

module.exports = app