<template>
  <article @click="getMovieInfo(movie)" class="b-card-movie">
    <label for="modal-check">
      <img class="b-card-movie__img" :src="movie.Poster" :alt="movie.Title" />
      <div class="b-card-movie__info">
        <h4 class="b-card-movie__title">{{ movie.Title }}</h4>
      </div>
    </label>
  </article>
</template>
<script>
import { inject } from "@vue/composition-api";
import { OMDbController } from "../OMDb/OMDbController";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const _OMDbController = new OMDbController();
    const state = inject("state");
    const getMovieInfo = async (movie) => {
      const res = await _OMDbController.getMovie(movie.Title);
      state.value.movie = res;
    };
    return {
      getMovieInfo,
    };
  },
};
</script>