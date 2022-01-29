<template>
  <div :class="stackClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: 'StackLayout',
  props: {
    space: {
      type: String,
      default: '1.5rem',
    },
    recursive: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const stackClass = computed(() => {
      return props.recursive ? 'stack-recursive' : 'stack'
    });
    return { stackClass };
  }
});
</script>

<style>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > * {
  margin-block: 0;
}

.stack > * + * {
  margin-block-start: v-bind(space);
}

.stack-recursive {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack-recursive * {
  margin-block: 0;
}

.stack-recursive * + * {
  margin-block-start: v-bind(space);
}
</style>