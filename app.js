require("express-async-errors");

const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");

const mongoose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const movieRecommendation = require("./controllers/movieRecommendation");
const errorHandler = require("./handlers/errorHandler");

//connection to mongodb...

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connection to mongodb successfull!");
  })
  .catch(() => {
    console.log("Connection to mongodb failed!");
  });

const app = express();


app.use(express.json());

//models
require("./models/movies.model");

//Routes...

app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);

//Openai suggestions

app.get("/api/movies/openai/getRecommendations", movieRecommendation);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
