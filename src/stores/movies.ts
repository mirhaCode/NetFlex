import { defineStore } from 'pinia'

const API_KEY = '85ad8981d26cc8cb9f908bdb39149743'
const URL_TMDB_MOVIE = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/original'

interface Movie {
  id: string
  title: string
  release_date: string
  backdrop_path: string
  overview: string
}
interface ResponseMovies {
  page: number
  results: Movie[]
}

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [] as Movie[],
    selectedMovie: undefined as Movie | undefined,
  }),
  actions: {
    async fetchMovies() {
      fetch(URL_TMDB_MOVIE)
      .then((response: Response) => response.json())
      .then((data: ResponseMovies) => {
        const movies: Movie[] = data?.results?.map(movie => ({
          ...movie,
          backdrop_path: `${BASE_URL_IMAGES}/${movie.backdrop_path}?api_key=${API_KEY}`
        }))

        this.$patch({
          movies,
          selectedMovie: movies?.[0],
        })
      })
    },
    selectMovie(movie: Movie) {
      this.$patch({
        selectedMovie: movie
      })
    }
  }
})
