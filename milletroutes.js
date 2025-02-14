const express = require('express');
const Millet = require('../models/Millet');  // Ensure the correct model import
const router = express.Router();

// GET all millets
router.get('/', async (req, res) => {
    try {
        const millets = await Millet.find();
        res.json(millets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST - Add a new millet
router.post('/', async (req, res) => {
    try {
        const newMillet = new Millet(req.body);
        await newMillet.save();
        res.status(201).json({ message: "Millet added successfully", millet: newMillet });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
