const express = require('express');

const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Call models folder for sequelize.sync
const db = require('./models');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers/'));

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set Handlebars as view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Routes go here

// get all coffee
app.get('/api/coffee', (req, res) => {
    return res.json({
        message: 'success'
    })
});

// NOTICE:
// this whole section of code should most likely be put in its own file
// something to do with routers

app.get('/', (req, res) => {

    res.render('home', {
        dev: [
            {
                name: 'Cade Ellsworth',
                username: 'EEzycade',
            },
            {
                name: 'Tyler Evans',
                username: 'TylerEvans-hash',
            },
            {
                name: 'Tim Gelety',
                username: 'Tim-Gelety',
            },
            {
                name: 'Natasha Harrison',
                username: 'natasharrison',
            }
        ]
    }
    )
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});
// END

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});