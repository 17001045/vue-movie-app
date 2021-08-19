<template>
  <main class="b-list">
    <header class="b-list__header">
      <SearchMovie />
    </header>

    <div class="b-list__movies-container">
      <div class="b-list__movies" v-if="movies.length > 0">
        <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
      <div class="b-list__movies-loading" v-else>
        <Loader />
      </div>
    </div>
    <Movie />
  </main>
</template>
<script>
import { computed, inject, onMounted } from "@vue/composition-api";
import { getRandomSaga } from "../common/topSagas";
import { OMDbController } from "../OMDb/OMDbController";
import Card from "./Card.vue";
import SearchMovie from "./SearchMovie.vue";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";
export default {
  components: {
    Card,
    SearchMovie,
    Loader,
    Movie,
  },
  setup() {
    const _OMDbController = new OMDbController();
    const state = inject("state");
    const movies = computed(() => state.value.movies);
    onMounted(async () => {
      const movies = await _OMDbController.getSearch(getRandomSaga());
      state.value.movies = movies;
    });
    return {
      movies,
    };
  },
};
</script>