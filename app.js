import { Movie } from "./movie.js";
import { MovieManagement } from "./movieManagement.js";

const manager = new MovieManagement();

const movie1 = new Movie(
  "A MINECRAFT MOVIE",
  "Be there and be square.",
  "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
  ["Family", "Comedy", "Adventure", "Fantasy"],
  [
    "Warner Bros.Pictures",
    "Legendary Pictures",
    "Mojang Studios",
    "Vertigo Entertainment",
    "On the Roam",
    "Domain Entertainment",
  ],
  "2025-03-31",
  101,
  "$951,514,812",
  6.5,
  "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
  "https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
);

const movie2 = new Movie(
  "Oppenheimer",
  "The world forever changes.",
  "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
  ["Drama", "History"],
  [
    "Syncopy",
    "Universal Pictures",
    "Atlas Entertainment",
    "Breakheart Films",
    "Peters Creek Entertainment",
  ],
  "2023-07-19",
  181,
  "$952,000,000 ",
  8.059,
  "https://image.tmdb.org/t/p/original/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg",
  "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
);

const movie3 = new Movie(
  "INTERSTELLAR",
  "Mankind was born on Earth. It was never meant to die here.",
  "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
  ["Adventure", "Drama", "Science Fiction"],
  ["Legendary Pictures", "Syncopy", "Lynda Obst Productions"],
  "2014-11-05",
  169,
  "$746,606,706",
  8.5,
  "https://image.tmdb.org/t/p/original/l33oR0mnvf20avWyIMxW02EtQxn.jpg",
  "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
);

manager.addMovie(movie1);
manager.addMovie(movie2);
manager.addMovie(movie3);

const movieImage = document.getElementById("film-poster");
const movieTitle = document.getElementById("movie-title");
const movieIntro = document.getElementById("movie-introduction");
const movieOverview = document.getElementById("movie-overview");
const movieGenre = document.getElementById("movie-genre-list");
const movieProductions = document.getElementById("movie-production-list");
const releaseDate = document.getElementById("film-release-date");
const runtime = document.getElementById("film-duration");
const boxOffice = document.getElementById("film-profit");
const voteAverage = document.getElementById("film-points");
const searchInput = document.getElementById("searchbar-input");
const searchResults = document.getElementById("searchbar-output");
const backgroundImage = document.getElementsByTagName("body")[0];

let typingTimer;
const debounceDelay = 500;

searchInput.addEventListener("input", function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function () {
    let results = manager.findMoviesBySimilarTitle(searchInput.value.trim());
    searchResults.innerHTML = "";
    if (results.length > 0) {
      results.forEach((movie) => {
        const resultItem = document.createElement("div");
        resultItem.className = "search-result-item";
        resultItem.textContent = movie.title;
        resultItem.addEventListener("click", () => {
          movieImage.src = movie.posterImage;
          backgroundImage.style.backgroundImage = `url(${movie.backgroundImage})`;
          movieTitle.textContent = movie.title;
          movieIntro.textContent = movie.intro;
          movieOverview.textContent = movie.overview;
          movieGenre.textContent = movie.genre.join(", ");
          movieProductions.textContent = movie.productions.join(", ");
          releaseDate.textContent = movie.originRelease || "N/A";
          runtime.textContent = `${movie.runtime} minutes`;
          boxOffice.textContent = movie.boxOffice || "N/A";
          voteAverage.textContent = movie.voteAverage || "N/A";
          searchResults.innerHTML = "";
        });
        searchResults.appendChild(resultItem);
      });
    }
  }, debounceDelay);
});
