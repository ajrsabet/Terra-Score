const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const PORT = process.env.PORT || 8080;

// Content Security Policy (CSP) configuration
const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdnjs.cloudflare.com", "https://ajax.googleapis.com", "https://cdn.jsdelivr.net"],
        styleSrc: ["'self'", "https://cdn.jsdelivr.net", "https://fonts.googleapis.com", "'unsafe-inline'"], // Or use nonce
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'", 'https://v6.exchangerate-api.com'],
        objectSrc: ["'none'"]
    }
}));


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

// 404 Page
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
