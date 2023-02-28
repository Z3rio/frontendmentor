<script setup lang="ts">
import Order from "./components/Order.vue";
</script>

<template>
  <svg
    width="1440"
    height="428"
    viewBox="0 0 1440 428"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="spline"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 349.974C0 349.974 327.837 524.026 724.475 349.974C1121.11 175.921 1440 349.974 1440 349.974V0H0V349.974Z"
      fill="#D6E1FF"
    />
  </svg>

  <Order />
</template>

<style scoped>
.spline {
  display: block;

  width: 100vw;
  min-width: 639px;
  height: auto;

  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  z-index: -1;
}
</style>
