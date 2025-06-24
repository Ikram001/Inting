const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

searchInput.addEventListener("input", async () => {
  const query = searchInput.value.trim();
  if (query.length < 3) {
    movieList.innerHTML = "<p>Type at least 3 characters to search.</p>";
    return;
  }

  const apiKey = "20bc60e1";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      movieList.innerHTML = `<p>${data.Error}</p>`;
    }
  } catch (err) {
    movieList.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
  }
});

function displayMovies(movies) {
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.className = "movie";
    let posterUrl;
    if (movie.Poster !== "N/A") {
      posterUrl = movie.Poster;
    } else {
      posterUrl = "https://via.placeholder.com/100";
    }
    movieDiv.innerHTML = `
  <img src="${posterUrl}" alt="${movie.Title}">
  <div class="movie-info">
    ${movie.Title}
    <br>
    ${movie.Year}
  </div>
`;
    movieList.appendChild(movieDiv);
  });
}
