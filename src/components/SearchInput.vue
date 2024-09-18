<template>
  <div class="SearchInput">
    <input
      v-model="searchTextModel"
      @change="$emit('update:searchText', searchTextModel)"
    />
    <button @click="$emit('search', searchText)">
      {{ `Search` }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
});
</script>

<script lang="ts" setup>
import { defineProps, ref } from "vue";

defineProps({
  searchText: {
    type: String,
  },
});

defineEmits(["search", "update:searchText"]);

const searchTextModel = ref("");
</script>

<style>
.SearchInput {
  width: 500px;
  height: 40px;
  display: flex;
  gap: 3px;
  margin-inline: auto;
  input {
    width: 90%;
  }
}
</style>
