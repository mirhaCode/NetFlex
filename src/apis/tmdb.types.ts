export interface Movie {
  id: string
  title: string
  release_date: string
  backdrop_path: string
  overview: string
}

export interface ResponseMovies {
  page: number
  results: Movie[]
}

export interface ResponseGenres {
  genres: Genre[]
}

export interface Genre {
  id: string
  name: string
}
