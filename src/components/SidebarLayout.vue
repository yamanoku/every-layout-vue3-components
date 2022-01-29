<template>
  <div :class="sideBarClass">
    <div class="sidebar">
      <slot name="sidebar" />
    </div>
    <div class="non-sidebar">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

export default defineComponent({
  name: 'SidebarLayout',
  props: {
    side: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
    },
    sideWidth: {
      type: String,
      default: '360px',
    },
    contentMin: {
      type: String,
      default: '50%',
    },
    space: {
      type: String,
      default: '1rem',
    },
    noStretch: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const sideBarClass = computed(() => {
      return `with-sidebar_${props.side}`;
    });
    return { sideBarClass };
  }
});
</script>

<style>
.with-sidebar_left {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(space);
}

.with-sidebar_left > :first-child {
  flex-basis: v-bind(sideWidth);
  flex-grow: 1;
}

.with-sidebar_left > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: v-bind(contentMin);
}

.with-sidebar_right {
  display: flex;
  flex-wrap: wrap;
  gap: v-bind(space);
}

.with-sidebar_right > :last-child {
  flex-basis: v-bind(sideWidth);
  flex-grow: 1;
}

.with-sidebar_right > :first-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: v-bind(contentMin);
}
</style>