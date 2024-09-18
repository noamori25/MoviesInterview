<template>
  <img
    class="MoviePoster"
    :src="moviePosterLink"
    :style="{ width: imgWidth, height: imgHeight }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MoviePoster",
});
</script>

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";

defineProps({
  moviePosterLink: {
    type: String,
  },
  imgWidth: {
    type: String,
    default: "50%",
  },
  imgHeight: {
    type: String,
    default: "50%",
  },
});
</script>
