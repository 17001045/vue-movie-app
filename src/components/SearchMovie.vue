<template>
  <form class="b_search" @submit.prevent="submitSearch">
    <input
      class="b_search__input"
      autofocus
      v-model.trim="inputSearch"
      type="search"
      placeholder="search..."
      required
    />
    <button class="b_search__submit" type="submit">
      <i class="fa fa-search"></i>
    </button>
  </form>
</template>

<script>
import { inject, ref } from "@vue/composition-api";
import { OMDbController } from "../OMDb/OMDbController";
export default {
  setup() {
    const state = inject("state");
    const inputSearch = ref("");
    const _OMDbController = new OMDbController();
    const submitSearch = async () => {
      const res = await _OMDbController.getSearch(inputSearch.value);
      state.value.movies = res;
      inputSearch.value = "";
    };
    return { inputSearch, submitSearch };
  },
};
</script>
