const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

// Set Handlebars as view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const viewRoutes = require('./routes/view-routes');
const routes = require('./routes');

// Call models folder for sequelize.sync
const db = require('./models');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// routes for views
app.use(viewRoutes)
// routes for uploads
app.use(uploadRoutes)

// Routes
app.use(routes);

// Renders the login 
app.get('/login', (req, res) => {
    res.render('login');
  });

// Renders the signup
app.get('/signup', (req, res) => {
    res.render('signup');
  });

// END 

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// change force to false once program is deployed
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});