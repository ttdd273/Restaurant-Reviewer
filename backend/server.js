// will be an express server
import express from "express";
import cors from "cors";
// file that we will create later
import restaurants from "./api/restaurants.route.js";

// making the server
const app = express();

app.use(cors());
// our server can receive json in the body of the request
app.use(express.json());

// specifying initial routes
// we need a slash in front of api
app.use("/api/v1/restaurants", restaurants);
// route that's not in our route file
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
