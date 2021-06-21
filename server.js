const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const viewRoutes = require('./routes/view-routes');
const uploadRoutes = require('./routes/upload');
const path = require('path');

const routes = require('./routes');

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
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});