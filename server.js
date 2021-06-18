const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
// Call models folder for sequelize.sync
const db = require('./models');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers/'));

// Routes here

// get all coffee
app.get('/api/coffee', (req, res) => {
    return res.json({
        message: 'success'
    })
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});