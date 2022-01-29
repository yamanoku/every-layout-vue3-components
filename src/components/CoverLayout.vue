<template>
  <div class="cover">
    <component :is="tagName" class="centered">Heading</component>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'CoverLayout',
  props: {
    space: {
      type: String,
      default: '1.5rem',
    },
    minHeight: {
      type: String,
      default: '100vh',
    },
    centered: {
      type: String,
      default: 'h1',
    },
    noPad: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const tagName = computed(() => {
      return props.centered;
    });
    const padding = computed(() => {
      return props.noPad ? 0 : props.space;
    });
    return { tagName, padding };
  },
});
</script>

<style>
.cover {
  display: flex;
  flex-direction: column;
  min-block-size: v-bind(minHeight);
  padding: v-bind(padding);
}

.cover > * {
  margin-block: v-bind(space);
}

.cover > :first-child:not(.centered) {
  margin-inline-start: 0;
}

.cover > :last-child:not(.centered) {
  margin-inline-end: 0;
}

.cover > .centered {
  margin-block: auto;
}
</style>
