const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const PORT = process.env.PORT || 8080;

// Set EJS as the templating engine
app.use(expressLayouts);
app.set('layout', './layouts/layout');
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/router'));

// app.get('/', (req, res) => {
//     res.render('index', { title: 'Home Page' });
// });

// 404 Page
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
