<template>
  <div id="app" class="MoviesApp">
    <SearchInput @search="startSearching" v-model:search-text="searchText" />
    <div class="MoviesSort">
      <button @click="startSorting('name', 'asc')">
        {{ `Sort by name UP` }}
      </button>
      <button @click="startSorting('name', 'desc')">
        {{ `Sort by name DOWN` }}
      </button>
    </div>
    <div class="MoviesList">
      <MovieCrad
        v-for="movie in filteredMovies"
        :movie="movie"
        @open-popup="onOpenPopup(movie)"
      />
    </div>
    <MovieDetailesPopup
      :show="showPopup"
      :movie="movieToPopup"
      @close-popup="showPopup = false"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import MovieCrad from "./components/MovieCrad.vue";
import { getAllMovies, getMovieBySearching, getMoviesSort } from "@/utils/api";
import MovieDetailesPopup from "./components/MovieDetailesPopup.vue";
import SearchInput from "./components/SearchInput.vue";
import type { MovieType, OrderBy } from "./types";

const filteredMovies = ref<MovieType[]>();
const showPopup = ref(false);
const movieToPopup = ref<MovieType>();
const searchText = ref("");

onMounted(() => {
  getAllMovies().then((res) => (filteredMovies.value = res));
});

function onOpenPopup(movie: MovieType) {
  movieToPopup.value = movie;
  showPopup.value = true;
}

function startSearching(text: string) {
  getMovieBySearching(text).then((res) => (filteredMovies.value = res));
}

function startSorting(soryBy: string, orderBy: OrderBy) {
  getMoviesSort(soryBy, orderBy).then((res) => (filteredMovies.value = res));
}
</script>

<style scoped>
.MoviesApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  .MovieCard {
    margin-block-end: 8px;
    margin-inline: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .MoviesList {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
  .SearchInput {
    margin-block-end: 8px;
  }
  .MoviesSort {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-inline: auto;
    justify-content: center;
  }
}
</style>
