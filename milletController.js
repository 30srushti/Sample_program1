const getAllMillets = (req, res) => {
    res.json({ message: "All millets data" });  // Dummy response for now
};

const uploadMillet = (req, res) => {
    res.json({ message: "Millet uploaded successfully" });
};

const buyMillet = (req, res) => {
    res.json({ message: "Millet purchase successful" });
};

module.exports = { getAllMillets, uploadMillet, buyMillet };
