import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./routes/contact.js";
import {routerProj} from "./routes/routeProj.js";
import {routerExp} from "./routes/routeExp.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/contact", Router);
app.use("/api/projects", routerProj);
app.use("/api/experience", routerExp);
app.get("/api/resume", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SaranyaRajmohan-FullStack-Developer-Resume.pdf'));
});

app.get("/api/download-resume", (req, res) => {
  const file = path.join(__dirname, 'public', 'SaranyaRajmohan-FullStack-Developer-Resume.pdf');
  res.download(file, 'SaranyaRajmohan-FullStack-Developer-Resume.pdf', (err) => {
    if (err) {
      console.error('Error while downloading resume:', err);
      res.status(500).send('Could not download file.');
    }
  });
});




app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});


