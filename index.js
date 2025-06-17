const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

//multer storage config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({storage: storage });

app.post('/upload', upload.single('file'),(req, res) => {
    res.json({
        messsage: '✅ file upload successfully!',
        file: req.file 
    });
});

app.listen(3000, () => {
  console.log('🚀 server running on port 3000');
});