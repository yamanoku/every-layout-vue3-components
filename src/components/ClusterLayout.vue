<template>
  <div class="cluster">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClusterLayout',
  props: {
    space: {
      type: String,
      default: '1rem',
    },
    justify: {
      type: String,
      default: 'flex-start',
    },
    align: {
      type: String,
      default: 'flex-start',
    },
  },
});
</script>

<style>
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(space);
  justify-content: v-bind(justify);
  align-items: v-bind(align);
}
</style>
