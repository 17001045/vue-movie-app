<template>
  <List />
</template>
<script>
import List from "./components/List.vue";
import { initialState } from "./common/initialState";
import { provide, ref, watchEffect } from "@vue/composition-api";
export default {
  components: { List },
  setup() {
    const state = ref(initialState);
    provide("state", state);
    /* watchEffect(() => {
      console.log(state.value.movies.length);
      console.log(state.value);
    });*/
    return {};
  },
};
</script>
