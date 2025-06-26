import { Movie } from "./movie.js";
export class MovieManagement {
  constructor() {
    this.movies = [];
  }

  // add film
  addMovie(movie) {
    if (movie instanceof Movie) {
      this.movies.push(movie);
    } else {
      throw new Error("Only instances of Movie can be added.");
    }
  }

  // delete film
  removeMovieByTitle(title) {
    this.movies = this.movies.filter((movie) => movie.title !== title);
  }

  // film finder
  findMoviesBySimilarTitle(query) {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // film list
  listAllMovies() {
    return this.movies;
  }
}
