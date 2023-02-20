<script setup lang="ts">
defineProps(["result"]);
</script>

<template>
  <div class="left">
    <div class="header">Your Result</div>

    <div class="circle">
      <h1 class="result">{{ result }}</h1>
      <p class="max-result">of 100</p>
    </div>

    <div class="text">
      <h1 class="header">Great</h1>
      <p class="description">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </div>
  </div>
</template>

<style scoped>
.left {
  background: linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%);
  border-radius: 32px;

  width: 50%;
  height: 100%;
}

.left > .header {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #cac9ff;

  margin: 38px auto 0 auto;

  width: fit-content;
}

.text > .header {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #fff;

  max-width: calc(100% - 108px);
  width: fit-content;

  margin: 28px auto 0 auto;
}

.description {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #cac9ff;
  text-align: center;

  width: calc(100% - 108px);

  margin: 14px auto 0 auto;
}

.circle {
  width: 200px;
  height: 200px;

  margin: 35px auto 0 auto;

  background: linear-gradient(
    180deg,
    #4d21c9 0%,
    rgba(37, 33, 201, 0) 100%,
    rgba(37, 33, 201, 0) 100%
  );
  border-radius: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.result {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 72px;
  margin: 0;
  text-align: center;
  color: #fff;
}

.max-result {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #cac9ff85;

  margin: 0;
}

@media screen and (max-width: 375px) {
  .left {
    width: 100%;
    height: fit-content;

    border-radius: 0px 0px 32px 32px;

    padding-bottom: 40px;
  }

  .circle {
    width: 140px;
    height: 140px;

    margin: 24px auto 0 auto;
  }

  .result {
    font-size: 56px;
    line-height: 72px;
  }

  .max-result {
    font-size: 16px;
    line-height: 21px;
  }

  .left > .header {
    font-size: 18px;
    line-height: 23px;

    margin: 24px auto 0 auto;
  }

  .text > .header {
    margin: 24px auto 0 auto;

    font-size: 24px;
    line-height: 31px;
  }

  .description {
    margin: 8px auto 0 auto;

    width: 260px;

    font-size: 16px;
    line-height: 21px;
  }
}
</style>
