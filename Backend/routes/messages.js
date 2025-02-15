const express = require("express");
const Message = require("../models/Message.js");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newMessage = new Message({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        });
        await newMessage.save();
        res.status(201).json({message: "message sent successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to send message"});
    }
});

router.get("/", async (req, res) => {
    try {
        const messages =  await Message.find();
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch message" });
    }
});

router.get('/:id', async (req, res)=>{
    try {
        const messageByID = await Message.findById(req.params.id)
        if (!messageByID) {
            return res.status(404).json({error: 'Message not found'})
        }
        res.json(messageByID);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

router.delete('/:id', async (req, res)=>{
    try {
        const messages = await Message.find();
        if (messages.length === 0) {
            return res.status(404).json({error: 'NO messages to display'});
        } else {
            const message = await Message.findByIdAndDelete(req.params.id);
            if (!message) {
                return res.status(404).json({error: 'Message not found'});
            }
            res.json({message: 'Message deleted successfully'});
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});


module.exports = router;