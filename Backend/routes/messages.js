const express = require("express");
const Message = required("../models/Message.js");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const messages =  await message.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch message" });
    }
});

router.post("/", async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(201).json({message: "message sent successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to send message"});
    }
});

module.exports = router;