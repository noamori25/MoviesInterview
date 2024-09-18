<template>
  <div class="MovieDetailesPopup" v-if="movie" v-show="show">
    <button class="ExitButton" @click="$emit('close-popup')">{{ "X" }}</button>
    <h2>
      {{ `${movie?.title} - ${movie.year} (Rating: ${movie.rating})` }}
    </h2>
    <main class="MovieContent">
      <div class="StartContent">
        <span>{{ `Gener: ${movie.genre}` }}</span>
        <span>{{ `Language: ${movie.language}` }}</span>
        <span>{{ `Director: ${movie.director}` }}</span>
        <span>{{ `Actors: ${movie.actors}` }}</span>
        <span>{{ `Plot: ${movie.plot}` }}</span>
        <span>{{ `Awards: ${movie.awards}` }}</span>
        <span>{{ `Country: ${movie.country}` }}</span>
        <span>{{ `BoxOffice: ${movie.boxOffice}` }}</span>
        <span>{{ `Production: ${movie.production}` }}</span>
        <a :href="movie.website">{{ `Website` }}</a>
        <TrailerBtn :trailer-link="movie.trailer" />
      </div>
      <MoviePoster :movie-poster-link="movie.poster" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrailerBtn from "./TrailerBtn.vue";

export default defineComponent({
  name: "MovieDetailesPopup",
});
</script>

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";
import { type MovieType } from "@/types";
import MoviePoster from "@/components/MoviePoster.vue";

defineProps({
  movie: {
    type: Object as PropType<MovieType>,
  },
  show: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close-popup"]);
</script>
<style>
.MovieDetailesPopup {
  width: 65%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border: 2px solid;
  border-radius: 8px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ExitButton {
    margin-inline-end: auto;
    margin-inline-start: 2px;
    margin-block-start: 2px;
  }
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
}
</style>
