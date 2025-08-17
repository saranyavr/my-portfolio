import express from "express";
import experience from "../data/experience.js";

const router = express.Router();


router.get("/", (req, res) => {
    res.json(experience);
});

export const routerExp = router;
