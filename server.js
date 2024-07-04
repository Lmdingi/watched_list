const { addNewMovie, listAllMovies } = require("./src/query_calls");
const fs = require("fs");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

let movieListItems = [];

app.use(express.static(path.join(__dirname, ".")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const newMovie = await req.body;

  await addNewMovie({
    movieName: newMovie["movie-name"],
    movieRate: Number(newMovie["movie-rate"]),
    dateWatched: newMovie["date-watched"],
    posterLink: newMovie["poster-link"],
  }).then((data) => console.log(data));

  res.redirect("/");
});

app.get("/list", async (req, res) => {
  const allMovies = await listAllMovies();

  for (const movie of allMovies) {
    movieListItems.push(movie.movie_name);
  }

  res.send({ list: movieListItems, movies: allMovies });

  movieListItems = [];
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app };
