const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const routes = require('./routes');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use((req, res) => {
  res.status(404).end();
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(process.env.CLEARDB_DATABASE_URL || '');
    console.log(`Server running on port ${PORT}`);
  })
});