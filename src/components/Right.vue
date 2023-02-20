<script setup lang="ts">
defineProps(["stats"]);
</script>

<template>
  <div class="right">
    <div class="header">Summary</div>

    <div class="list">
      <div class="item" v-for="(stat, idx) in stats" :key="idx">
        <img
          :src="`/images/${stat.image}.svg`"
          :alt="`${stat.label} Icon`"
          class="icon"
        />
        <h1 class="label" :style="{ color: stat.color }">{{ stat.label }}</h1>

        <div class="stat">
          <span class="value">{{ stat.value }}</span>
          <span class="max">/ 100</span>
        </div>
      </div>
    </div>

    <button class="continue">Continue</button>
  </div>
</template>

<style scoped>
.right {
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.header {
  margin: 38px 0 0 40px;

  width: fit-content;

  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #303b59;
}

.list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  width: calc(100% - 80px);
  margin: 28px 0 0 40px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 56px;
}

.stat {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: auto;
  margin-right: 16px;
}

.icon {
  width: 20px;
  height: 20px;

  margin-left: 16px;
}

.label {
  margin: 0 0 0 12px;

  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}

.value {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #303b59;
}

.max {
  margin: 0 0 0 8px;

  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: right;
  color: #303b5980;
}

.continue {
  position: relative;
  display: block;

  width: calc(100% - 80px);
  height: 56px;

  margin: auto 0 46px 40px;

  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;

  outline: none;
  border: none;
  background: #303b59;
  border-radius: 128px;
}

.continue:hover {
  background: linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%);
  cursor: pointer;
}

@media screen and (max-width: 375px) {
  .right {
    width: 100%;
    flex: 1;
  }

  .header {
    margin: 24px 0 0 32px;

    font-size: 18px;
    line-height: 23px;
  }

  .list {
    margin: 24px 0 0 30px;
  }

  .label {
    font-size: 16px;
    line-height: 21px;
  }

  .value,
  .max {
    font-size: 16px;
    line-height: 21px;
  }

  .continue {
    margin: auto 0 30px 30px;

    width: calc(100% - 60px);
  }
}
</style>
