import express from "express";
import routes from "./routes.js";
import cors from "cors"; //  Import cors
import dotenv from "dotenv"; // Import dotenv to load .env file
// TODO: complete me (loading the necessary packages)

dotenv.config(); // Load environment variables
const app = express();


const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"; 
console.log(`Configuring CORS for origin: ${FRONTEND_URL}`);


const corsOptions = {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"], 
    credentials: true,
};

// TODO: complete me (CORS)
app.use(cors(corsOptions)); 
app.use(express.json());
app.use('', routes);

export default app;