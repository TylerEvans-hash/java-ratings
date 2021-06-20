const router = require('express').Router();
const { Post } = require('../../models');

// Get ALL posts
router.get('/', (req, res) => {
    Post.findAll()
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get post by ID
router.get('/:id', (req, res) => {});

// Create Post
router.post('/', (req, res) => {
    Post.create({
        name: req.body.name,
        description: req.body.description,
        // author: req.body.authorId
    });
});

module.exports = router;