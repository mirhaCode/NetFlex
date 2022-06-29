import { fetchGenres, fetchMoviesByGenre, fetchTrendingMovies } from '@/apis/tmdb.api'
import type { Genre, Movie } from '@/apis/tmdb.types'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    genres: [] as Genre[],
    movies: [] as Movie[],
    trendingMovies: [] as Movie[],
    selectedMovie: undefined as Movie | undefined,
  }),
  actions: {
    async fetchGenres() {
      const genres = await fetchGenres()
      this.$patch({ genres })
    },
    async fetchTrendingMovies() {
      const trendingMovies = await fetchTrendingMovies()

      this.$patch({
        trendingMovies,
        selectedMovie: trendingMovies?.[0],
      })
    },
    selectMovie(movie: Movie) {
      this.$patch({
        selectedMovie: movie
      })
    }
  }
})
