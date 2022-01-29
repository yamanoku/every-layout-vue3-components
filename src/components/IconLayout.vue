<template>
  <span class="with-icon">
    <svg class="icon">
      <use :href="svgHref"></use>
    </svg>
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconLayout',
  props: {
    space: {
      type: String,
      default: '1rem',
    },
    svgHref: {
      type: String,
      default: 'icon.svg#tick',
    },
  },
});
</script>

<style>
.icon {
  width: 0.75em;
  width: 1cap;
  height: 0.75em;
  height: 1cap;
}

.with-icon {
  display: inline-flex;
  align-items: baseline;
}

.with-icon .icon {
  margin-inline-end: v-bind(space);
}
</style>
