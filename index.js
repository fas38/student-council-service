// including express
const express = require('express');

const app = new express();

//including edge template engine
// const expressEdge = require('express-edge');
// const { config, engine } = require('express-edge');

//including path
const path = require('path');

//including routes
var about = require('./routes/about');
var assesment = require('./routes/online_assesment');
var program = require('./routes/program');

//setting up routes to handle requests
app.use('/about', about);
app.use('/assesment', assesment);
app.use('/program', program);

//setting up view engine
app.set('view engine', 'ejs');

// setting up public directory
app.use(express.static('public'));


//setting up edge template engine
// app.use(expressEdge);

//setting up views directory
app.set('views', __dirname + '/views');



// //setting up get requests
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });

// app.get('/about', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });

// app.get('/post', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/post.html'));
// });

// app.get('/contact', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
// });



//setting up get request using views
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/fee-structure', (req, res) => {
    res.render('fee-structure');
});

app.get('/current-vacancies', (req, res) => {
    res.render('current-vacancies');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

//setting up listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Listeing on port ${PORT}...');
});