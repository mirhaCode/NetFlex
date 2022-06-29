import type { Movie, ResponseMovies } from './tmdb.types'

const API_KEY = '85ad8981d26cc8cb9f908bdb39149743'
const URL_TRENDING_MOVIE = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/original'

export async function fetchMovies(): Promise<Movie[]> {
  return fetch(URL_TRENDING_MOVIE)
    .then((response: Response) => response.json())
    .then((data: ResponseMovies) => {
      return data?.results?.map(movie => ({
        ...movie,
        backdrop_path: `${BASE_URL_IMAGES}/${movie.backdrop_path}?api_key=${API_KEY}`
      }))
    })
}