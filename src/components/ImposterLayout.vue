<template>
  <div style="position: relative">
    <div class="imposter">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: 'ImposterLayout',
  props: {
    margin: {
      type: String,
      default: '0',
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const positioning = computed(() => {
      return props.fixed ? 'fixed' : 'absolute';
    });
    return { positioning };
  }
});
</script>

<style>
.imposter {
  --positioning: v-bind(positioning);
  --margin: v-bind(margin);
  position: var(--positioning, absolute);
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  max-inline-size: calc(100% - (var(--margin) * 2));
  max-block-size: calc(100% - (var(--margin) * 2));
}
</style>