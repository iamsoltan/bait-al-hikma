
const express = require("express");
//const mongoose = require("mongoose");
const app = express();
const books_route = require("./route/books_route");
const multer = require('multer');
const path = require('path');


//middlewares
app.use([express.urlencoded({ extended: true }), express.json()]);
app.use("/books", books_route);


app.use(express.static("public_img"))



// upload feature
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public_img')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
function fileFilter(req, file, cb) {

    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    }
    cb("Error: File upload only supports the following filetypes - " + filetypes);

}

let upload = multer({ storage: storage, fileFilter: fileFilter })

app.post("/*", upload.single("image"))
// end upload feature


app.listen(3000);
// module.exports = app;