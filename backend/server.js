const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const bookRoute = require('./Route/bookRoute');
const connectDB = require("./Config/database")
require('dotenv').config();

const app = express();

app.use(cors());


app.use(bodyParser.json());
connectDB()


app.get("/", (req, res) => {
    console.log("hello")
})

app.use('/api', bookRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
