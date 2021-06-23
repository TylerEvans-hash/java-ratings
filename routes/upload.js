// requirements
const express = require('express');
const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const saveFile = function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
// set Storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    // gives the files a unique name based on time uploaded
    filename: saveFile
});

// initialize the Upload
const upload = multer({
    storage: storage,
    // limit the file size to one million bytes
    limits: { fileSize: 1000000 },
    // filter files
    // fileFilter: function (req, file, cb) {
    //     checkFileType(file, cb)
    // }
}).single('image')

// check files for type
function checkFileType(file, cb) {
    // file types allowed
    const filetypes = /jpeg|jpg|png|gif/;
    // check the ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase);
    // check MIME type
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('error');
    }
}

router.use(express.static(__dirname + '/public'));


// Routes
router.get('/', (req, res) => res.render('createPost'))

// this goes in view-routes
router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            res.render('createPost', {
                msg: err
            })
        } else {
            if (req.file == undefined) {
                res.render('createPost', {
                    msg: 'Error1'
                });
            } else {
                res.render('createPost', {
                    msg: 'Uploaded',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    });
})
// end

module.exports = router;

