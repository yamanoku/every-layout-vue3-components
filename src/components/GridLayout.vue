<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'StackLayout',
  props: {
    min: {
      type: String,
      default: '240px',
    },
    space: {
      type: String,
      default: '1rem',
    },
  },
});
</script>

<style>
.grid {
  display: grid;
  grid-gap: v-bind(space);
  --min: v-bind(min);
}

@supports (width: min(var(--min), 100%)) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
  }
}
</style>