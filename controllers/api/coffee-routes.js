const router = require('express').Router();
const { Coffee } = require('../../models');
// const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Coffee.findAll()
    .then(dbCoffeeData => res.json(dbCoffeeData))
    .catch(err => {
        console.log(err);
    });
});

router.post('/', (req, res) => {
    Coffee.create({
        name: req.body.name
    })
    .then(dbCoffeeData => res.json(dbCoffeeData))
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;
