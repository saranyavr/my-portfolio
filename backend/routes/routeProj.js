import express from "express";
import projects from "../data/projects.js";


const router = express.Router();

router.get("/", (req, res) => {
      

       res.json(projects);
   
});

export const routerProj = router;
