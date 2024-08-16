const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();


messagesRouter.get("/", messagesController.getAllMessages)
messagesRouter.post("/new", messagesController.createMessagePost)
messagesRouter.get("/new", messagesController.createMessageGet)
messagesRouter.get("/message/:id", messagesController.getPickedMessage)



module.exports = messagesRouter;
