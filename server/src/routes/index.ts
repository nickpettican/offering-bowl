import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.json({ message: "Welcome to Offering Bowl!" });
});

export default router;
