import { API_KEY } from "../constants";
import { apiRequest } from "./axios";

export const BASE_URL = "https://api.themoviedb.org/3";

const trendingMovie = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const upcomingMovie = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const topRatedMovie = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;

export const fetchUpcomingMovie = () => {
  return apiRequest(upcomingMovie);
};
export const fetchTrendingMovie = () => {
  return apiRequest(trendingMovie);
};

export const fetchTopRatedMovie = () => {
  return apiRequest(topRatedMovie);
};
