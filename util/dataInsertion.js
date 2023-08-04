import dbConnect from "./dbConnection.js";
import data from "../data/jsondata.json" assert { type: "json" };

(async () => {
    let db;
    try {
        db = await dbConnect()
        const collection = db.collection("data");
        await collection.insertMany(data);
        console.log("Data Inserted")
        process.exit(0)
    } catch (error) {
        console.log(`Data Insertion Failed ${error.message}`)
        process.exit(-1)
    } 
})();
