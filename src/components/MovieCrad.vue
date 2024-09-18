<template>
  <div class="MovieCard" v-if="movie">
    <h3>
      {{ `${movie?.title} - ${movie.year} (${movie.runtime}min)` }}
    </h3>
    <main class="MovieContent">
      <input
        class="FavoriteMovie"
        type="checkbox"
        :id="movie.id"
        :name="movie.id"
        :value="movie.title"
        :checked="isChecked(movie.id)"
        @change="setMovieAsFavorite(movie.id, movie.title)"
      />
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

function setMovieAsFavorite(id: string, title: string) {
  const isFavorite = localStorage.getItem(id);
  if (isFavorite) {
    localStorage.removeItem(id);
    console.log("inside");
  } else {
    localStorage.setItem(id, title);
  }
}

function isChecked(id: string) {
  return !!localStorage.getItem(id);
}
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
    width: 90%;
    .StartContent {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .FavoriteMovie {
      width: 20px;
      height: 20px;
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
