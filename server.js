const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

// Call models folder for sequelize.sync
const db = require('./models');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Renders the page
app.get('/', (req, res) => res.render('home'))

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});