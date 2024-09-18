<template>
  <div class="MovieCard" v-if="movie">
    <header>
      {{ `${movie?.title} - ${movie.year} (${movie.runtime}min)` }}
    </header>
    <main class="MovieContent">
      <div class="StartContent">
        <span>{{ `Gener: ${movie.genre}` }}</span>
        <span>{{ `Language: ${movie.language}` }}</span>
        <span>{{ `Director: ${movie.director}` }}</span>
        <TrailerBtn :trailer-link="movie.trailer" />
      </div>
      <MoviePoster
        img-height="30%"
        img-width="30%"
        :movie-poster-link="movie.poster"
      />
    </main>
    <footer>
      <button class="DetailsBtn" @click="$emit('open-popup')">
        {{ `For more details` }}
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrailerBtn from "./TrailerBtn.vue";

export default defineComponent({
  name: "MovieCard",
});
</script>

<script lang="ts" setup>
import { defineProps, type PropType, defineEmits } from "vue";
import { type MovieType } from "@/types";
import MoviePoster from "@/components/MoviePoster.vue";

defineProps({
  movie: {
    type: Object as PropType<MovieType>,
  },
});

defineEmits(["open-popup"]);
</script>
<style>
.MovieCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
  border-radius: 8px;
  width: 100%;
  .MovieContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .StartContent {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  .DetailsBtn {
    background-color: lightblue;
    border-radius: 5px;
    margin-block-end: 5px;
    border-width: 1px;
  }
  .DetailsBtn:active {
    transform: scale(0.95);
  }
}
</style>
