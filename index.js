// including express
const express = require('express');

const app = new express();

//including edge template engine
// const expressEdge = require('express-edge');
// const { config, engine } = require('express-edge');

//including path
const path = require('path');

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

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


//setting up listening port
app.listen(8000, () => {
    console.log('Listeing on port 8000');
});