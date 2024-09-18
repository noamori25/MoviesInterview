<template>
  <a class="TrailerBtn" :href="trailerLink">{{ `Watch Trailer` }}</a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrailerBtn",
});
</script>

<script lang="ts" setup>
import { defineProps, type PropType } from "vue";

defineProps({
  trailerLink: {
    type: String,
  },
});
</script>
