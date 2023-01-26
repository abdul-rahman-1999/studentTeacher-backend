// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
import { MongoClient } from "mongodb";
import mentor from "./routes/mentor.route.js";
import student from "./routes/student.route.js";
import cors from 'cors';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express();

const PORT = process.env.PORT;
       
// const MONGO_URL = "mongodb://127.0.0.1";

const MONGO_URL = process.env.MONGO_URL
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("MongDB connected");

// Inbuilt middleware

app.use(express.json())
app.use(cors())
app.use("/allStudents", student)
app.use("/mentors", mentor)


app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client}

