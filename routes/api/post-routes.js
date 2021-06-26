const router = require('express').Router();
const { Post } = require('../../models');
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/assets/img/user-images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
});

const upload = multer({ storage: fileStorageEngine });

// Get ALL posts
router.get('/', (req, res) => {
    Post.findAll()
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get post by post ID
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No Post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create Post
router.post('/',upload.single('image'), (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description,
        file: req.file.filename,
        author_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update Post
router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(400).json({ message: 'No Post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete Post by ID
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).status.json({ message: 'No Post found with this id' });
                return;
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;