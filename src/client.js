async function updateList() {
  const response = await fetch("/list");
  const result = await response.text();
  const titles = JSON.parse(result);
  const { list, movies } = titles;
  let listItems = "";
  const olList = document.getElementById("ol-list");

  for (const title of list) {
    listItems += `<li>${title}</li>`;
  }

  olList.innerHTML = listItems;

  await updatePosters(movies);
}

async function updatePosters(posters) {
  const postersBoard = document.getElementById("posters-board");
  let poster = "";

  for (const movie of posters) {
    console.log("movie:", movie);
    poster += `
    <div class="frame">
        <img src="${movie.poster_link}">
        <div class="text">
            <h4>${movie.movie_name}</h4>
            <p>${movie.date_watched.substring(0, 10)}</p>
            <p>${movie.movie_rate} Star/s</p>
        </div>
    </div>
    `;
  }

  postersBoard.innerHTML = poster;
}

window.onload = updateList;
// document.getElementById("submit").addEventListener("click", updateList);
