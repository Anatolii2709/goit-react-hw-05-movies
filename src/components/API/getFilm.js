const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjllMTRlNTAzMTk3ZjI2M2MzZDg5YzcyNTc3NDJhNiIsInN1YiI6IjY0ZTIyNGFhMDc2Y2U4NDNiNWI4OTAzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zt19VGyoQ_s_rR32uGZClwiW7eE1y_ZKjK3EHtkCExo',
  },
};

const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies(value = 'day') {
  const response = await fetch(
    `${BASE_URL}trending/movie/${value}?language=en-US`,
    options
  );
  return await response.json();
}

export async function getMovieById(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}?language=en-US`,
    options
  );
  return await response.json();
}

export async function getMovieReviews(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return await response.json();
}

export async function getActorsFilm(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?language=en-US`,
    options
  );
  return await response.json();
}

export async function getSearchFilm(query) {
  const response = await fetch(
    `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return await response.json();
}

export async function getMovieVideo(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/videos?language=en-US`,
    options
  );
  return await response.json();
}

export async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api/?results=50');
  return await response.json();
}
