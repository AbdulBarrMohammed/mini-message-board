const express = require("express")
const app = express();
const messagesRouter = require("./routes/messagesRouter")
const path = require("path");

app.set('view engine', "ejs")
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", messagesRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
