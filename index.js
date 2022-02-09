const express = require('express')
const app = express()
const port = 4000
const baseUrl ="http://localhost:4000/"
//const baseUrl = "https://investor-adventure.herokuapp.com/"

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("welcome")
})
app.get('/welcome', (req, res) => {
    res.render("welcome")
})
app.get('/game', (req, res) => {
    res.render("index")
})

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});