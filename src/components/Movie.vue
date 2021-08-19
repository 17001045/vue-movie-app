<template>
  <div class="b_movie">
    <input class="b_movie__check" type="checkbox" id="modal-check" />
    <div class="b_movie__content">
      <label @click="closeMovieInfo()" class="b_movie__close" for="modal-check">
        <i class="fa fa-close"></i>
      </label>
      <div v-if="movie" class="b_movie__info">
        <h2 class="b_movie__title">{{ movie.Title }}</h2>

        <h4 class="b_movie__actors">{{ movie.Actors }}</h4>
        <p class="b_movie__description">{{ movie.Plot }}</p>

        <ul class="b_movie__details">
          <li class="b_movie__detail">gender: {{ movie.Genre }}</li>
          <li class="b_movie__detail">Director: {{ movie.Director }}</li>
          <li class="b_movie__detail">Writer: {{ movie.Writer }}</li>
          <li class="b_movie__detail">Production: {{ movie.Production }}</li>
        </ul>
        <h4 class="b_movie__year">{{ movie.Year }}</h4>
      </div>
      <div v-else>
        <Loader />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, inject } from "@vue/composition-api";
import Loader from "./Loader.vue";
export default {
  components: { Loader },
  setup() {
    const state = inject("state");
    const movie = computed(() => state.value.movie);
    const closeMovieInfo = () => {
      state.value.movie = null;
    };
    return { movie, closeMovieInfo };
  },
};
</script>