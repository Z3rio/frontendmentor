<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const selected: Ref<number> = ref(-1);

const emit = defineEmits(["submit"]);

function submit(): void {
  if (selected.value !== -1) {
    emit("submit", selected.value);
  }
}
</script>

<template>
  <div class="content">
    <div class="icon">
      <img src="../assets/icon-star.svg" alt="Star Icon" />
    </div>

    <h1 class="heading">How did we do?</h1>
    <p class="description">
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>

    <div class="rating-list">
      <div
        class="rating"
        v-for="index in 5"
        :class="{ active: selected == index }"
        @click="selected = index"
      >
        {{ index }}
      </div>
    </div>

    <button class="submit" @click="submit">Submit</button>
  </div>
</template>

<style scoped>
.icon {
  width: 48px;
  height: 48px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 32px 0 0 32px;

  border-radius: 100%;
  background: #262e38;
}

.icon img {
  width: 16px;
  height: 16px;
}

.heading {
  margin: 30px 0 0 32px;

  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #fff;
}

.description {
  margin: 7px 0 0 32px;

  width: calc(100% - 64px);

  font-family: "Overpass";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #969fad;
}

.rating-list {
  max-width: calc(100% - 64px);

  display: flex;
  flex-direction: row;
  column-gap: 21px;

  margin: 24px 0 0 32px;
}

.rating {
  width: clamp(0px, 20%, 51px);
  aspect-ratio: 1/1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #262e38;
  border-radius: 100%;

  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #7c8798;

  transition: 250ms;

  cursor: pointer;
}

.rating:hover {
  background: #fc7614;
  color: #fff;

  transition: 250ms;
}

.rating.active {
  background: #7c8798;
  color: #fff;

  transition: 250ms;
}

.submit {
  height: 45px;
  width: calc(100% - 32px - 39px);

  background: #fc7614;
  border-radius: 22.5px;

  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 2px;
  color: #fff;
  text-transform: uppercase;

  outline: none;
  border: none;

  margin: 32px auto 0 32px;

  cursor: pointer;

  transition: 250ms;
}

.submit:hover {
  background: #fff;
  color: #fc7614;

  transition: 250ms;
}
</style>
