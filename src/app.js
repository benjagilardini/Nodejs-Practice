const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Initialize',
        desc: 'Levantando archivos estaticos',
        footer: 'Footer del inicio'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        desc: 'Levantando dinamicamente about.hbs',
        footer: 'Footer del about'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text.',
        footer: 'Footer del help'
    })
});

app.get('*', (req, res) => {
    res.render('error404', {
        titleError404: 'Error 404'
    });
});

app.get('/help/*', (req, res) => {
    res.render('error404', {
        titleError404: 'Help article not found'
    });
});
// sudo lsof -i :3000 o guardar cambio en otro lados
let port = 3019;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
