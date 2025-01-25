const express = require("express");
const db = require("../config/db");

const router = express.Router();

// get all users
router.get("/", (req, res) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;
