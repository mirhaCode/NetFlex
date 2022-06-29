import type { Genre, Movie, ResponseGenres, ResponseMovies } from './tmdb.types'

const API_KEY = '85ad8981d26cc8cb9f908bdb39149743'
const BASE_URL = 'https://api.themoviedb.org/3'
const URL_TRENDING_MOVIE = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
const URL_GENRES_MOVIE = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/original'

export async function fetchTrendingMovies(): Promise<Movie[]> {
  return fetch(URL_TRENDING_MOVIE)
    .then((response: Response) => response.json())
    .then((data: ResponseMovies) => {
      return data?.results?.map(movie => ({
        ...movie,
        backdrop_path: `${BASE_URL_IMAGES}/${movie.backdrop_path}?api_key=${API_KEY}`
      }))
    })
}

export async function fetchMoviesByGenre(genre: string): Promise<Movie[]> {
  return fetch(`${BASE_URL}/genre/${genre}/movies?api_key=${API_KEY}`)
    .then((response: Response) => response.json())
    .then((data: ResponseMovies) => {
      return data?.results?.map(movie => ({
        ...movie,
        backdrop_path: `${BASE_URL_IMAGES}/${movie.backdrop_path}?api_key=${API_KEY}`
      }))
    })
}

export async function fetchGenres(): Promise<Genre[]> {
  return fetch(URL_GENRES_MOVIE)
    .then((response: Response) => response.json())
    .then((data: ResponseGenres) => {
      return data?.genres
    })
}