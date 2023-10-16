import { API_KEY } from "../constants";
import { apiRequest } from "./axios";

export const BASE_URL = "https://api.themoviedb.org/3";

const trendingMovie = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const upcomingMovie = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const topRatedMovie = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const popularMovie = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

const movieDetail = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

const movieCredits = (id) =>
  `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;

const similarMovie = (id) =>
  `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;

export const fetchMovieDetail = (id) => {
  return apiRequest(movieDetail(id));
};

export const fetchMovieCredits = (id) => {
  return apiRequest(movieCredits(id));
};

export const fetchSimilarMovie = (id) => {
  return apiRequest(similarMovie(id));
};

export const fetchUpcomingMovie = () => {
  return apiRequest(upcomingMovie);
};

export const fetchPopularMovie = () => {
  return apiRequest(popularMovie);
};

export const fetchTrendingMovie = () => {
  return apiRequest(trendingMovie);
};

export const fetchTopRatedMovie = () => {
  return apiRequest(topRatedMovie);
};

export const image500 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : null;
};
export const image342 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : null;
};
export const image185 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : null;
};
