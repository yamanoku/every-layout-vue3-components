<template>
  <div class="box" :class="{invert}">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'BoxLayout',
  props: {
    padding: {
      type: String,
      default: '1.5rem',
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
.box {
  padding: v-bind(padding);
  border: v-bind(borderWidth) solid;
  --color-light: #fff;
  --color-dark: #000;
  color: var(--color-dark);
  background-color: var(--color-light);
}

.box * {
  color: inherit;
}

.box.invert {
  color: var(--color-light);
  background-color: var(--color-dark);
}
</style>