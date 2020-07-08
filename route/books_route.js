
const express = require("express");
const router = express.Router();
const books_control = require("../control/books_control");


router.get("/", books_control.get_all);
router.get("/:id", books_control.get_one_by_id);

router.post("/", books_control.post_one);

router.put("/:id", books_control.put_one_by_id);

router.delete("/:id", books_control.delete_one_by_id);


module.exports = router;