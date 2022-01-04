const express = require('express');
const path = require('path')
const app = express();
const hbs = require('hbs');
const port = 3000;

const staticpath = path.join(__dirname,"../public");
const viewspath = path.join(__dirname, '../templates/views') 
const partialpath = path.join(__dirname, '../templates/partials') 

app.set('view engine', 'hbs');
app.set("views",viewspath);	
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);	

app.get('/', (req,res) => {
    res.render("index");
})

app.get('/about', (req,res) => {
    res.render("about");
})

app.get('/weather', (req,res) => {
    res.render("weather");
})

app.get('*', (req,res) => {
    res.render("error");
})

app.listen(port, (req,res)=>{ 
    console.log(`listening to port ${port}`);
});