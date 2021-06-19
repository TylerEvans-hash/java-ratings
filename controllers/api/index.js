const router = require('express').Router();

const coffeeRoutes = require('./coffee-routes');

router.use('/coffees', coffeeRoutes);

module.exports = router;