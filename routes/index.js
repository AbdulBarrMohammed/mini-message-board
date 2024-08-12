
const express = require('express')
const router = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Karten",
      added: new Date()
    }
  ];

//router.use(express.urlencoded({ extended: true }));
//router.use(express.urlencoded({ extended: true }));




router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;


  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
})

router.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id]
  console.log('loading.....')


  res.render('message', { message });
})





module.exports = router
