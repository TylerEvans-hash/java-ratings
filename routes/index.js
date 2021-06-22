const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./view-routes');

router.use('/api', apiRoutes);
router.use('/', viewRoutes);

router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;