const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const UserModel = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/CreateUsers" , (req, res) => {
    UserModel.create(req.body)
       .then(user => res.json(user))
       .catch((err) => res.status(400).json(err));
   })


mongoose.connect("mongodb://127.0.0.1:27017/crud")
app.listen(3001,() => {
    console.log('Server is running on port 3001');
});