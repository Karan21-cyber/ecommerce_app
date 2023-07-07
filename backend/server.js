const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("we are from backend");
})

app.listen(PORT, () => console.log(`Server is running in port : ${PORT}\t\n`));