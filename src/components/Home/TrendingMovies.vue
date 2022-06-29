<script>
import { useMoviesStore } from '@/stores/movies'
import { mapActions } from 'pinia'
import ListMovies from '@/ui/ListMovies.vue'

export default {
  name: 'TrendindMovies',
  props: ['movies', 'selectedMovie'],
  methods: {
    ...mapActions(useMoviesStore, ['selectMovie'])
  },
  components: { ListMovies }
}
</script>

<template>
  <div id="trending-movies">
    <ListMovies
      :movies="movies"
      maxVisible="4"
      :onClick="selectMovie"
      :selectedMovie="selectedMovie"
    />
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
