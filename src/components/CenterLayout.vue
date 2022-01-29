<template>
  <div class="center" :class="{ andText, intrinsic, gutters: gutters > 0 }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CenterLayout',
  props: {
    max: {
      type: String,
      default: '800px',
    },
    andText: {
      type: Boolean,
      default: false,
    },
    gutters: {
      type: Number,
      default: 0,
    },
    intrinsic: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
.center {
  box-sizing: content-box;
  margin-inline: auto;
  max-inline-size: v-bind(max);
}

.center.gutters {
  padding-inline-start: v-bind(gutters);
  padding-inline-end: v-bind(gutters);
}

.center.andText {
  text-align: center;
}

.center.intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
