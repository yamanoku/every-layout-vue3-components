<template>
  <div class="reel" ref="reelRoot">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ReelLayout',
  props: {
    itemWidth: {
      type: String,
      default: 'auto',
    },
    space: {
      type: String,
      default: '1rem',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
  setup() {
    const reelRoot = ref<HTMLDivElement>();
    onMounted(() => {
      if (reelRoot.value === undefined) return;
      const reel = document.querySelector(`.${reelRoot.value.className}`);
      if (reel === null) return;
      const toggleOverflowClass = (elem: Element) => {
        elem.classList.toggle(
          'overflowing',
          elem.scrollWidth > elem.clientWidth
        );
      };
      if ('ResizeObserver' in window) {
        new ResizeObserver((entries) => {
          toggleOverflowClass(entries[0].target);
        }).observe(reel);
      }
    });
    return { reelRoot };
  },
});
</script>

<style>
.reel {
  display: flex;
  block-size: v-bind(height);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: #fff #000;
}

.reel::-webkit-scrollbar {
  block-size: 1rem;
}

.reel::-webkit-scrollbar-track {
  background-color: #000;
}

.reel::-webkit-scrollbar-thumb {
  background-color: #000;
  background-image: linear-gradient(
    #000 0,
    #000 0.25rem,
    #fff 0.25rem,
    #fff 0.75rem,
    #000 0.75rem
  );
}

.reel > * {
  flex: 0 0 v-bind(itemWidth);
}

.reel > img {
  block-size: 100%;
  flex-basis: auto;
  width: auto;
}

.reel > * + * {
  margin-inline-start: v-bind(space);
}

.reel.overflowing {
  padding-block-end: v-bind(space);
}
</style>
