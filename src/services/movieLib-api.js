import axios from 'axios';
import { toast } from 'react-toastify';

const KEY = '3410f3fe83992398df60125046c9b268';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// async function fetchMovies(url = '') {
//   const response = await fetch(url);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

async function fetchMovies(url = '') {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    toast.error(error);
  }
}

export function fetchTrendingMovies(page) {
  return fetchMovies(`/trending/all/day?api_key=${KEY}&page=${page}`);
}

export function searchMovie(query, page) {
  return fetchMovies(
    `/search/movie?api_key=${KEY}&query=${query}&page=${page}`,
  );
}

export function getMovieDetails(movieId) {
  return fetchMovies(`/movie/${movieId}?api_key=${KEY}`);
}

export function getMovieCast(movieId) {
  return fetchMovies(`/movie/${movieId}/credits?api_key=${KEY}`);
}

export function getMovieReviews(movieId) {
  return fetchMovies(`/movie/${movieId}/reviews?api_key=${KEY}`);
}

export function getMovieTrailer(movieId) {
  return fetchMovies(`/movie/${movieId}/videos?api_key=${KEY}`);
}
