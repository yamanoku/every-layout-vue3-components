<template>
  <div class="switcher">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'SwitcherLayout',
  props: {
    space: {
      type: String,
      default: '8px',
    },
    threshold: {
      type: String,
      default: '10px',
    }
  },
});
</script>

<style>
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(space);
}

.switcher > * {
  --basis: v-bind(threshold);
  flex-grow: 1;
  flex-basis: calc(( var(--basis) - 100%) * 999);
}
</style>