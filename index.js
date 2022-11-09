import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' 
dotenv.config()
const app = express();
console.log(process.env.MONGO_URL)

const PORT = process.env.PORT;

//const MONGO_URL="mongodb://127.0.0.1"
const MONGO_URL=process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect()
console.log("connected")

app.use(express.json())

app.get("/movies", async function (request, response) {
  const {id}=request.params
  const movie= await client
  .db("data")
  .collection("movies")
  .find(request.query)
  .toArray()
  movie ? response.send(movie):"loading";
  console.log(request.query)
});


app.post("/movies", async function (request, response) {
  const data =request.body;
  console.log(data)
  const movie= await client
  .db("data")
  .collection("movies")
  .insertMany(data);
  response.send(movie);
});

app.get("/", function (request, response) {
  response.send("🙋‍♂️🌍");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));