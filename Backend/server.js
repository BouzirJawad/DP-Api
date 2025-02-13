const express = required("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/portfolio').then(()=>{
    console.log('Connected to mongoDB');
}).catch((err)=>console.log(err));

const Message = require("./models/Message");
const messageRoutes = require("./routes/messages");
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));