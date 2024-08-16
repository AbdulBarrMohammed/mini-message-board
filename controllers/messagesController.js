const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages })
}
async function createMessagePost(req, res) {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    db.insertMessage(messageText, messageUser)
    res.redirect("/");
}

async function createMessageGet(req, res) {
    //const id = req.params.id;
    //const message = db.getMessages(id)
    //console.log('loading.....')

    res.render('form', { title: "Create Message"});

}



async function getPickedMessage(req, res) {
  const id = req.params.id;
  console.log("ID in getPickedMessage:", id);

  const message = await db.getMessage(id);
  //console.log("Message retrieved:", message);
  console.log("Name", message.name)
  res.render("message", { title: 'Message', message: message });

}



module.exports =  {
  getAllMessages,
  createMessageGet,
  createMessagePost,
  getPickedMessage
}
