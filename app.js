const express = require('express')
const app = express()

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('home', {msg: 'Hello World!'});
})

app.listen(8080, () =>{
    console.log('App listening on port 8080')
})