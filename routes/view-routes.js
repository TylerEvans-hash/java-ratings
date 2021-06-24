const router = require('express').Router();
const { Post } = require('../models');

    //user: true,

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
    Post.findAll()
        .then(dbPostData => {
            const data = {
                post: {
                    title:dbPostData.name, 
                    description: dbPostData.description,
                    file: dbPostData.file,
                    username: dbPostData.authorId                
                }, 
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
                    textA: '🗝 Login',
                    buttonB: 'signup',
                    textB: 'Sign Up',
                },
                loggedIn:
                {
                    buttonA: 'logout',
                    textA: 'Log Out',
                    buttonB: 'createPost',
                    textB: 'Create Post',
                }
            }

            res.render('home', data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/createPost', (req, res) => {
    res.render('createPost');
});

module.exports = router;
