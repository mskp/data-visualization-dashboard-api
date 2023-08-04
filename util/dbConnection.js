import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = process.env.DB_NAME || "blackcoffer";

export default async function dbConnect() {
    try {
        const client = new MongoClient(DB_URI, { useUnifiedTopology: true });
        await client.connect();
        console.log("Connection Successful")
        return client.db(DB_NAME);
    } catch (error) {
        console.log(`Failed to connect: ${error}`)
    }
}