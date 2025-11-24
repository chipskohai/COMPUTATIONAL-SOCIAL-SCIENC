const PORT = 8080;
const path = require('path');
const express = require('express')
const app = express();

app.use(express.json())

app.get("/test", (req, res) => {
    res.status(200).send({
        test: "test",
        test2: "test2"
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(
    PORT,
    ()=> console.log('App at http://localhost:' + PORT)
);
