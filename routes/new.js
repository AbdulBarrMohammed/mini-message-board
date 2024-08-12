const express = require('express')
const router = express.Router()



router.get("/", (req, res) => {
    console.log("Rendering the form page");
    res.render("form")
})


module.exports = router
