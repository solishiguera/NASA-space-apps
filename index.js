const express = require("express");
const app = express();
const router = express.Router();
const path = require('path');
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'public')));
var publicPath = path.join(__dirname, 'public');

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});