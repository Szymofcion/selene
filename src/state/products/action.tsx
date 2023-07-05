import { FETCHING, FETCHED, ERROR } from "./types";

export const fetchFakeAPiProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/carts/5");
  const movies = await response.json();
  return movies;
};
