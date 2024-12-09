const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Terra Score' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

router.get('/contact', (req, res) => {
    res.render('./contact.ejs', { title: 'Contact' });
});

router.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' });
});

router.get('/donate', (req, res) => {
    res.render('donate', { title: 'Donate' });
});

router.get('/mission', (req, res) => {
    res.render('mission', { title: 'Our Mission' });
});


module.exports = router;
