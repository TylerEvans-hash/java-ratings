const router = require('express').Router();

router.get('/', (req, res) => {

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

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;