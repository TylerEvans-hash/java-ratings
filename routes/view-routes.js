const router = require('express').Router();
const { Post, User } = require('../models');

// cardData: [
//     {
//         id: 1,
//         description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, facilis adipisci sed hic totam obcaecati reiciendis illum alias  soluta, consequuntur fugiat aspernatur nemo vel quo eum mollitia odio explicabo. Repellendus?",
//         title: 'Post Title',
//         username: 'Username',
//         image: 'post',
//     },
//     {
//         id: 2,
//         description: "Lorem, ipsum dolor more words sit amet consectetur adipisicing elit. Aliquam, facilis adipisci sed hic totam obcaecati reiciendis illum alias  soluta, consequuntur fugiat aspernatur nemo vel quo eum mollitia odio explicabo. Repellendus?",
//         title: 'bob post',
//         username: 'Bob',
//         image: 'post',
//     },
//     {
//         id: 3,
//         description: "Lorem, ip other words sum dolor sit amet consectetur adipisicing elit. Aliquam, facilis adipisci sed hic totam obcaecati reiciendis illum alias  soluta, consequuntur fugiat aspernatur nemo vel quo eum mollitia odio explicabo. Repellendus?",
//         title: 'Betty post',
//         username: 'betty',
//         image: 'post',
//     }

router.get('/', (req, res) => {
    Post.findAll({
        include: User
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            console.log(posts);
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

                user: req.session.loggedIn,

                loggedOut:
                {
                    buttonA: 'login',
                    textA: '🗝 Login',
                    A: 'login',
                    buttonB: 'signup',
                    textB: 'Sign Up',
                    B: 'signup'
                },
                loggedIn:
                {
                    buttonA: 'logout',
                    textA: 'Log Out',
                    A: 'logout',
                    buttonB: 'createPost',
                    textB: 'Create Post',
                    B: 'createPost'
                }
            }
            res.render('home', {data, posts})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/")
        return;
    }
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/createPost', (req, res) => {
    res.render('createPost');
});

module.exports = router;
