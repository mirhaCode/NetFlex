<script>
import { useMoviesStore } from '@/stores/movies'
import { mapActions } from 'pinia'

export default {
  name: 'TrendindMovies',
  props: ['movies', 'selectedMovie'],
  methods: {
    ...mapActions(useMoviesStore, ['selectMovie'])
  },
}
</script>

<template>
  <div id="trending-movies">
    <ul>
      <li
        v-for="(movie, index) in movies"
        :key="movie.id"
        v-bind:class="{ selected: selectedMovie?.id === movie.id }"
        v-on:click="() => selectMovie(movie)"
      >
        <img v-if="index < 4" :src="movie.backdrop_path" :alt="movie.title" />
      </li>
    </ul>
  </div>
</template>

<style>
#trending-movies img {
  width: 100%;
  flex: 2;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0;
}

ul li {
  display: block;
  cursor: pointer;
}

li:hover {
  opacity: 0.7;
}

li.selected {
  border: 1px solid white;
}
</style>
