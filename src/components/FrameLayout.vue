<template>
  <div class="frame">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'FrameLayout',
  props: {
    numerator: {
      type: Number,
      default: 16,
    },
    denominator: {
      type: Number,
      default: 9,
    },
  },
});
</script>

<style>
.frame {
  aspect-ratio: v-bind(numerator) / v-bind(denominator);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame > img,
.frame > video {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}
</style>