const router = require('express').Router();
const data = {

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
    ],

    loggedOut:
    {
        buttonA: 'login',
        buttonB: 'signup',
    },
    loggedIn:
    {
        buttonA: 'logout',
        buttonB: 'createPost',
    },

    user: true,
}

router.get('/', (req, res) => {

    res.render('home', data)
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;