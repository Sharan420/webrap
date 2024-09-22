import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cors from "cors";
import { authenticateUser, registerUser } from "./auth";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const client = new MongoClient(process.env.DATABASE_URL as string);
let db: any;

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
    db = client.db("authDB");
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.post("/register", (req, res) => registerUser(req, res, db));
app.post("/login", (req, res) => authenticateUser(req, res, db));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
