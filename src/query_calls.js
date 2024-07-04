const { importQuery } = require("./helper_functions");
const { successMessage } = require("./helper_object");

async function createMoviesTable() {
  const filePath = "src/queries/create_table.sql";
  await importQuery({ queryFilePath: filePath });
  return successMessage.createTable;
}
/** */
// createMoviesTable().then((data) => console.log(data));
/** */

async function addNewMovie({ movieName, movieRate, dateWatched, posterLink }) {
  const filePath = "src/queries/add_movie.sql";
  await importQuery({
    queryFilePath: filePath,
    values: [movieName, movieRate, dateWatched, posterLink],
  });
  return successMessage.addNewMovie;
}
/** */
// addNewMovie({
//   movieName: "Bad boys",
//   movieRate: 5,
//   dateWatched: "2024-07-03",
//   posterLink: "www.poster.com",
// }).then((data) => console.log(data));
/** */

async function listAllMovies() {
  const filePath = "src/queries/list_all_movies.sql";
  const results = await importQuery({ queryFilePath: filePath });
  return results.rows;
}
/** */
// listAllMovies().then((data) => console.log(data));
/** */

module.exports = { addNewMovie, listAllMovies };
