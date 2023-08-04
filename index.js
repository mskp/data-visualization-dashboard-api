import express from "express";
import dbConnect from "./util/dbConnection.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/api/data", async (req, res) => {
    try {
        const db = await dbConnect();
        const collection = db.collection("data");
        const data = await collection.find().toArray();
        return res.json(data);
    } catch (error) {
        console.log(error.message)
        return res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})