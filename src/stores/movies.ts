import { fetchMovies } from '@/apis/tmdb.api'
import type { Movie } from '@/apis/tmdb.types'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [] as Movie[],
    selectedMovie: undefined as Movie | undefined,
  }),
  actions: {
    async fetchMovies() {
      const movies = await fetchMovies()

      this.$patch({
        movies,
        selectedMovie: movies?.[0],
      })
    },
    selectMovie(movie: Movie) {
      this.$patch({
        selectedMovie: movie
      })
    }
  }
})
