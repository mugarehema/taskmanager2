const express = require('express')
require('./db/mongoose')
// const Task = require('./models/task')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000
const  User = require("./models/user");
const { default: Users } = require('./models/user')
app.use(express.json())
app.use(cors())

app.post("/users", (req,res) => {
    const user = new User(req.body);
    user
    .save()
    .then(() => {
        res.status(400).send(user);
    });
});

app.get("/users", (req, res) =>{
    User.find({})
    .then((users) =>{
        res.json(users);
    })
    .catch((error) =>{
        res.status(500).send(error);
    });
});
app.listen(port, () => {
    console.log('Server is up on port ' + port)
});
