<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import Left from "./components/Left.vue";
import Right from "./components/Right.vue";

interface Stat {
  label: string;
  image: string;
  value: number;
  color: string;
}

const stats: Ref<Stat[]> = ref([
  {
    label: "Reaction",
    image: "icon-reaction",
    value: 80,
    color: "#FF5555",
  },
  {
    label: "Memory",
    image: "icon-memory",
    value: 92,
    color: "#FFB21E",
  },
  {
    label: "Verbal",
    image: "icon-verbal",
    value: 61,
    color: "#00BB8F",
  },
  {
    label: "Visual",
    image: "icon-visual",
    value: 73,
    color: "#1125D6",
  },
]);
</script>

<template>
  <div class="main">
    <Left :result="76" />
    <Right :stats="stats" />
  </div>
</template>

<style scoped>
.main {
  width: 736px;
  height: 512px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  background: #fff;
  box-shadow: 0px 30px 60px rgba(61, 108, 236, 0.15);
  border-radius: 32px;
}

@media screen and (max-width: 375px) {
  .main {
    width: 100%;
    height: 100%;
    border-radius: 0;

    flex-direction: column;
  }
}
</style>
