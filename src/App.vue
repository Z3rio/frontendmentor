<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import InputScreen from "./components/InputScreen.vue";
import ThankScreen from "./components/ThankScreen.vue";

const done: Ref<boolean> = ref(false);
const selected: Ref<number> = ref(-1);

function submit(newSelected: number) {
  done.value = true;
  setTimeout(function () {
    selected.value = newSelected;
  }, 350);
}
</script>

<template>
  <main class="main">
    <InputScreen
      :style="{
        opacity: done ? 0 : 1,
        display: done && selected !== -1 ? 'none' : 'flex',
      }"
      @submit="submit"
    />
    <ThankScreen
      :style="{
        opacity: done && selected !== -1 ? 1 : 0,
        display: done && selected !== -1 ? 'flex' : 'none',
      }"
      :selected="selected"
    />
  </main>
</template>

<style scoped>
.main {
  max-width: 412px;
  width: calc(100% - 48px);
  min-height: 416px;

  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 30px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
