import type { OrderBy } from "@/types";
import type { MovieType } from "@/types";
import axios from "axios";

const MOVIES_API = "https://freetestapi.com/api/v1/movies";

export function getAllMovies(): Promise<MovieType[]> {
  return axios
    .get(`${MOVIES_API}`)
    .then((res) => res.data as MovieType[])
    .catch((e) => Promise.reject(new Error("fail to get movies")));
}

export function getMovieBySearching(text: string): Promise<MovieType[]> {
  return axios
    .get(`${MOVIES_API}?search=${text}`)
    .then((res) => res.data as MovieType[])
    .catch((e) => Promise.reject(new Error("fail to search")));
}

export function getMoviesSort(
  soryBy: string,
  orderBy: OrderBy
): Promise<MovieType[]> {
  return axios
    .get(`${MOVIES_API}?sort=${soryBy}&order=${orderBy}`)
    .then((res) => res.data as MovieType[])
    .catch((e) => Promise.reject(new Error("fail to sort")));
}
