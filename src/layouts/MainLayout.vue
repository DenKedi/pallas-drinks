<script setup>
const props = defineProps({
  bgImage: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="main-layout">
    <div
      v-if="props.bgImage"
      class="background-image"
      :style="{ backgroundImage: `url(${props.bgImage})` }"
    ></div>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  opacity: 0.6;
}

.main-content {
  position: relative;
  z-index: 2;
  width: 100%;
  background: transparent;
}
</style>
